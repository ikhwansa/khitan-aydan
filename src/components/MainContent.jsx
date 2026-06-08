import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Music, Send, Star, Copy, Check } from 'lucide-react';
import aydanPhoto from '../assets/aydan_photo.jpeg';
import { db, isFirebaseEnabled } from '../firebase';
import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';

export default function MainContent({ isOpened }) {
  // --- Countdown State ---
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Event Date: Saturday, June 27, 2026, 10:00:00 WIB (UTC+7)
    // 2026-06-27T10:00:00+07:00
    const targetDate = new Date('2026-06-27T10:00:00+07:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // --- Scroll Animation Trigger (Intersection Observer) ---
  useEffect(() => {
    if (!isOpened) return;
    
    const elements = document.querySelectorAll('.scroll-animate');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isOpened]);

  // --- RSVP & Guest Book State ---
  const [rsvpName, setRsvpName] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const toParam = params.get('to') || params.get('guest') || params.get('nama');
    return toParam ? decodeURIComponent(toParam.replace(/\+/g, ' ')) : '';
  });
  const [attendance, setAttendance] = useState('hadir'); // 'hadir' | 'tidak'
  const [guestsCount, setGuestsCount] = useState(1);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [wishText, setWishText] = useState('');
  const [wishes, setWishes] = useState([]);

  // Load initial wishes from Firestore if enabled, or local storage/mock data
  useEffect(() => {
    if (isFirebaseEnabled && db) {
      // Fetch wishes from Firestore in real-time
      const q = query(collection(db, 'wishes'), orderBy('timestamp', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const firebaseWishes = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          firebaseWishes.push({
            id: doc.id,
            name: data.name,
            text: data.text,
            attendance: data.attendance,
            time: data.time || (data.timestamp ? new Date(data.timestamp).toLocaleString('id-ID') : '')
          });
        });
        setWishes(firebaseWishes);
      }, (error) => {
        console.error("Error fetching wishes from firestore:", error);
      });
      return () => unsubscribe();
    } else {
      // Fallback to localStorage + mock data
      const savedWishes = localStorage.getItem('aydan_wishes');
      if (savedWishes) {
        setWishes(JSON.parse(savedWishes));
      } else {
        const defaultWishes = [
          {
            id: 1,
            name: 'Om Tio & Tante Desi',
            text: 'Selamat dikhitan Aydan Syahmi Siregar! Semoga menjadi anak yang sholeh, berbakti kepada kedua orang tua, berakhlak mulia, berguna bagi nusa, bangsa dan agama. Amin ya rabbal alamin.',
            attendance: 'hadir',
            time: '7 Juni 2026, 10:24'
          },
          {
            id: 2,
            name: 'Budi Santoso (Teman Kantor Papa)',
            text: 'Selamat atas khitanan Aydan. Semoga proses pemulihan cepat dan kelak Aydan tumbuh menjadi laki-laki sholeh yang mandiri serta tangguh. Selamat untuk keluarga besar Siregar.',
            attendance: 'hadir',
            time: '7 Juni 2026, 12:45'
          },
          {
            id: 3,
            name: 'Tante Sarah & Keluarga',
            text: 'Selamat ya Aydan ganteng! Sudah berani disunat, pinter sekali. Semoga lekas sembuh, tambah rajin belajar, dan jadi anak sholeh kebanggaan Ayah Ibu.',
            attendance: 'tidak',
            time: '7 Juni 2026, 13:10'
          }
        ];
        localStorage.setItem('aydan_wishes', JSON.stringify(defaultWishes));
        setWishes(defaultWishes);
      }
    }
  }, []);

  const saveToLocalStorage = (formattedDate, timestampStr) => {
    const newRsvp = {
      name: rsvpName,
      attendance: attendance,
      guests: attendance === 'hadir' ? guestsCount : 0,
      timestamp: timestampStr
    };

    // Save RSVP to LocalStorage
    const currentRsvps = JSON.parse(localStorage.getItem('aydan_rsvps') || '[]');
    currentRsvps.push(newRsvp);
    localStorage.setItem('aydan_rsvps', JSON.stringify(currentRsvps));

    // Save Wish/Ucapan to LocalStorage
    const newWish = {
      id: Date.now(),
      name: rsvpName,
      text: wishText,
      attendance: attendance,
      time: formattedDate
    };

    const updatedWishes = [newWish, ...wishes];
    setWishes(updatedWishes);
    localStorage.setItem('aydan_wishes', JSON.stringify(updatedWishes));
  };

  const handleSubmitRsvpAndWish = async (e) => {
    e.preventDefault();
    if (!rsvpName.trim() || !wishText.trim()) return;

    const now = new Date();
    const formattedDate = `${now.getDate()} Juni 2026, ${String(now.getHours()).padStart(2, '0')}.${String(now.getMinutes()).padStart(2, '0')}`;
    const timestampStr = now.toISOString();

    if (isFirebaseEnabled && db) {
      try {
        await addDoc(collection(db, 'wishes'), {
          name: rsvpName,
          text: wishText,
          attendance: attendance,
          guests: attendance === 'hadir' ? guestsCount : 0,
          time: formattedDate,
          timestamp: timestampStr
        });
      } catch (error) {
        console.error("Error adding document to Firestore: ", error);
        saveToLocalStorage(formattedDate, timestampStr);
      }
    } else {
      saveToLocalStorage(formattedDate, timestampStr);
    }

    setRsvpSubmitted(true);
  };

  // --- Copy Address State ---
  const [copied, setCopied] = useState(false);
  const copyAddress = () => {
    navigator.clipboard.writeText('Perum Green Garden Blok B9 No. 8 Jakarta Utara');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };



  return (
    <div className="content-wrapper">
      {/* 1. HERO SECTION */}
      <section className="section scroll-animate">
        {/* Playful SVGs */}
        <div className="decor-cloud decor-cloud-1 float-animation" style={{ opacity: 0.5 }}>
          <svg viewBox="0 0 100 100" width="50" height="50">
            {/* Gold cultural star */}
            <path d="M 50 0 L 63 37 L 100 50 L 63 63 L 50 100 L 37 63 L 0 50 L 37 37 Z" fill="var(--accent-gold)" stroke="var(--primary-dark)" strokeWidth="2.5" />
          </svg>
        </div>
        
        <div className="hero-greeting">Assalamu'alaikum Wr. Wb.</div>
        <p className="hero-intro">
          Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i 
          untuk menghadiri acara khitanan putra kami:
        </p>

        {/* Child Photo Frame with Cultural accents */}
        <div className="child-portrait-wrapper">
          {/* Gigi Balang Corner Accent behind the frame */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            zIndex: 1,
            opacity: 0.95
          }}>
            <svg viewBox="0 0 100 100" width="75" height="75">
              {/* Top Gigi Balang */}
              <rect x="0" y="0" width="80" height="15" fill="#2E7D32" stroke="#2d3436" strokeWidth="2.5" />
              <path d="M 0 15 L 12 30 L 24 15 L 36 30 L 48 15 L 60 30 L 72 15 L 80 25" fill="#E5A93B" stroke="#2d3436" strokeWidth="2.5" strokeLinejoin="round" />
              {/* Left Gigi Balang */}
              <rect x="0" y="0" width="15" height="80" fill="#2E7D32" stroke="#2d3436" strokeWidth="2.5" />
              <path d="M 15 0 L 30 12 L 15 24 L 30 36 L 15 48 L 30 60 L 15 72 L 25 80" fill="#E5A93B" stroke="#2d3436" strokeWidth="2.5" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="child-portrait-ring"></div>
          <div className="child-portrait-frame">
            <img src={aydanPhoto} alt="Aydan Syahmi Siregar" className="child-portrait-img" />
          </div>

          {/* Sepasang Ondel-Ondel Mask Sticker overlay on the corner of the frame */}
          <div style={{
            position: 'absolute',
            bottom: '-12px',
            right: '-16px',
            zIndex: 10,
            transform: 'rotate(5deg)',
            filter: 'drop-shadow(3px 3px 0px #2d3436)'
          }}>
            <svg viewBox="0 0 120 100" width="75" height="62">
              {/* Left: Male Ondel-Ondel */}
              <g transform="translate(5, 5) scale(0.9)">
                <path d="M 25 35 L 20 12 L 32 18 L 30 3 L 42 16 L 50 0 L 58 16 L 70 3 L 68 18 L 80 12 L 75 35 Z" fill="#E5A93B" stroke="#2d3436" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M 25 45 C 25 25 75 25 75 45 L 75 85 Z" fill="#1A1A1A" stroke="#2d3436" strokeWidth="3" />
                <path d="M 32 50 C 32 40 68 40 68 50 L 65 80 C 65 85 35 85 35 80 Z" fill="#D32F2F" stroke="#2d3436" strokeWidth="3" />
                <ellipse cx="42" cy="58" rx="3" ry="2" fill="#ffffff" stroke="#2d3436" strokeWidth="2" />
                <ellipse cx="58" cy="58" rx="3" ry="2" fill="#ffffff" stroke="#2d3436" strokeWidth="2" />
                <path d="M 40 68 Q 50 64 60 68" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
              </g>
              {/* Right: Female Ondel-Ondel */}
              <g transform="translate(45, 12) scale(0.8)">
                <path d="M 25 35 L 20 12 L 32 18 L 30 3 L 42 16 L 50 0 L 58 16 L 70 3 L 68 18 L 80 12 L 75 35 Z" fill="#E5A93B" stroke="#2d3436" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M 25 45 C 25 25 75 25 75 45 L 75 85 Z" fill="#1A1A1A" stroke="#2d3436" strokeWidth="3" />
                <path d="M 32 50 C 32 40 68 40 68 50 L 65 80 C 65 85 35 85 35 80 Z" fill="#FAFBF7" stroke="#2d3436" strokeWidth="3" />
                <ellipse cx="42" cy="58" rx="3" ry="2" fill="#ffffff" stroke="#2d3436" strokeWidth="2" />
                <ellipse cx="58" cy="58" rx="3" ry="2" fill="#ffffff" stroke="#2d3436" strokeWidth="2" />
                <circle cx="38" cy="66" r="3.5" fill="#ff7675" opacity="0.65" />
                <circle cx="62" cy="66" r="3.5" fill="#ff7675" opacity="0.65" />
                <path d="M 46 72 Q 50 77 54 72 Z" fill="#D32F2F" stroke="#2d3436" strokeWidth="1.5" />
              </g>
            </svg>
          </div>

          <Star className="child-portrait-decorator decor-star-1 star-spin-animation" size={32} />
          <Star className="child-portrait-decorator decor-star-2 float-delay-1" size={24} />
        </div>

        {/* Child Name Section */}
        <div className="name-banner">
          <div className="name-label">Putra Kami</div>
          <h2 className="name-primary">AYDAN SYAHMI SIREGAR</h2>
          <div className="name-accent">
            <Star size={16} fill="var(--accent-gold)" />
            <span>Keluarga Freddy R. A. Siregar</span>
            <Star size={16} fill="var(--accent-gold)" />
          </div>
        </div>
      </section>

      {/* 2. COUNTDOWN SECTION */}
      <section className="section scroll-animate">
        <div className="countdown-box">
          <h3 className="countdown-title">Menuju Walimatul Khitan</h3>
          <div className="countdown-grid">
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.days}</span>
              <span className="countdown-label">Hari</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.hours}</span>
              <span className="countdown-label">Jam</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.minutes}</span>
              <span className="countdown-label">Menit</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.seconds}</span>
              <span className="countdown-label">Detik</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WAKTU & LOKASI (GRID/CARD SECTION) */}
      <section className="section scroll-animate">
        <h2 className="section-title">Waktu & Lokasi Acara</h2>
        
        <div className="event-cards-container">
          {/* Card 1: Waktu & Tanggal */}
          <div className="glass-card event-card">
            <div className="card-icon-circle">
              <Calendar size={28} />
            </div>
            <h3>Waktu & Tanggal</h3>
            <p className="highlight-text">Sabtu, 27 Juni 2026</p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
              <Clock size={16} style={{ color: 'var(--primary-brand)' }} />
              <span>Jam 10.00 - 15.00 WIB</span>
            </p>
          </div>

          {/* Card 2: Lokasi */}
          <div className="glass-card event-card">
            <div className="card-icon-circle">
              <MapPin size={28} />
            </div>
            <h3>Lokasi Acara</h3>
            <p className="highlight-text">Kediaman Keluarga</p>
            <p className="address-text">
              Perum Green Garden Blok B9 No. 8, Cilincing, Jakarta Utara
            </p>
            
            {/* Copy address button */}
            <button 
              onClick={copyAddress}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                marginTop: '10px',
                background: 'transparent',
                border: '1px solid var(--primary-medium)',
                color: 'var(--primary-dark)',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-normal)'
              }}
            >
              {copied ? <Check size={14} style={{ color: '#2ec471' }} /> : <Copy size={14} />}
              {copied ? 'Tersalin!' : 'Salin Alamat'}
            </button>

            {/* Contrast Location Button */}
            <a 
              href="https://maps.google.com/?q=Perum+Green+Garden+Jakarta+Utara" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-contrast"
            >
              <MapPin size={18} />
              Petunjuk Lokasi (Google Maps)
            </a>
          </div>

          {/* Card 3: Hiburan */}
          <div className="glass-card event-card">
            <div className="card-icon-circle">
              <Music size={28} />
            </div>
            <h3>Hiburan</h3>
            <p className="highlight-text">Organ Tunggal</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '4px' }}>
              Senandung ceria memeriahkan hari istimewa
            </p>
          </div>
        </div>
      </section>

      {/* 4. KEHADIRAN & UCAPAN */}
      <section className="section scroll-animate">
        <h2 className="section-title">Kehadiran & Ucapan</h2>
        <div className="glass-card">
          {!rsvpSubmitted ? (
            <form onSubmit={handleSubmitRsvpAndWish} className="rsvp-form">
              <p style={{ fontSize: '0.9rem', opacity: 0.8, textAlign: 'center', marginBottom: '10px' }}>
                Mohon konfirmasikan kehadiran Anda dan berikan doa restu untuk Aydan:
              </p>
              
              <div className="form-group">
                <label htmlFor="rsvp-name">Nama Lengkap</label>
                <input 
                  type="text" 
                  id="rsvp-name"
                  className="form-control" 
                  placeholder="Masukkan nama Anda..."
                  value={rsvpName}
                  onChange={(e) => setRsvpName(e.target.value)}
                  required 
                />
              </div>

              <div className="form-group">
                <label>Konfirmasi Kehadiran</label>
                <div className="attendance-options">
                  <div 
                    className={`btn-option ${attendance === 'hadir' ? 'selected' : ''}`}
                    onClick={() => setAttendance('hadir')}
                  >
                    Saya Akan Hadir
                  </div>
                  <div 
                    className={`btn-option ${attendance === 'tidak' ? 'selected' : ''}`}
                    onClick={() => setAttendance('tidak')}
                  >
                    Maaf, Berhalangan
                  </div>
                </div>
              </div>

              {attendance === 'hadir' && (
                <div className="form-group">
                  <label htmlFor="rsvp-guests">Jumlah Tamu</label>
                  <select 
                    id="rsvp-guests" 
                    className="form-control"
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(parseInt(e.target.value))}
                  >
                    <option value={1}>1 Orang</option>
                    <option value={2}>2 Orang</option>
                    <option value={3}>3 Orang</option>
                    <option value={4}>4 Orang</option>
                  </select>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="wish-text">Ucapan & Doa</label>
                <textarea 
                  id="wish-text"
                  rows="4" 
                  className="form-control" 
                  placeholder="Tulis ucapan selamat atau doa restu di sini..."
                  value={wishText}
                  onChange={(e) => setWishText(e.target.value)}
                  style={{ resize: 'none' }}
                  required
                />
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '10px', width: '100%' }}>
                <Send size={16} />
                Kirim Kehadiran & Ucapan
              </button>
            </form>
          ) : (
            <div className="success-message">
              <h4>Terima Kasih!</h4>
              <p style={{ marginTop: '6px', fontSize: '0.9rem', color: '#27ae60' }}>
                {attendance === 'hadir' 
                  ? 'Konfirmasi kehadiran dan ucapan Anda telah kami catat. Sampai jumpa di lokasi acara!' 
                  : 'Terima kasih atas konfirmasi dan ucapan Anda. Doa restu Anda sangat berarti bagi kami.'}
              </p>
            </div>
          )}
        </div>

        {/* Guest Book / Wishes Feed Card */}
        <div className="glass-card" style={{ marginTop: '16px' }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-brand)', marginBottom: '16px', fontWeight: 800 }}>
            Doa & Ucapan Restu
          </h3>
          <div className="guestbook-feed" style={{ marginTop: 0 }}>
            {wishes.map((w) => (
              <div key={w.id} className="guestbook-item">
                <div className="guest-header">
                  <span className="guest-name">{w.name}</span>
                  <span className={`guest-badge ${w.attendance === 'hadir' ? 'badge-attending' : 'badge-absent'}`}>
                    {w.attendance === 'hadir' ? 'Hadir' : 'Berhalangan'}
                  </span>
                </div>
                <p className="guest-msg">{w.text}</p>
                <div className="guest-time">{w.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 6. CLOSING & FOOTER */}
      <footer className="section scroll-animate" style={{ paddingBottom: '60px' }}>
        <div className="hero-greeting" style={{ marginBottom: '16px' }}>Wassalamu'alaikum Wr. Wb.</div>
        <p className="footer-text">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan 
          hadir untuk memberikan doa restu kepada putra kami.
        </p>

        <div className="parents-container">
          <div className="parents-label">Kami Yang Mengundang</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', alignItems: 'center', marginBottom: '12px', marginTop: '6px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FFFFFF', background: 'var(--primary-brand)', padding: '2px 10px', borderRadius: '4px', border: '1.5px solid var(--primary-dark)', letterSpacing: '0.5px' }}>KELUARGA BESAR</span>
          </div>
          <h3 className="parent-name">Freddy Rury Arrieandy Siregar</h3>
          <div className="ampersand">&</div>
          <h3 className="parent-name">Nurhasanah Hasrin</h3>
        </div>

        <p className="footer-signature">
          Made with ❤️ by bedil dev.
        </p>
      </footer>
    </div>
  );
}

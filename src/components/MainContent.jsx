import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Music, Send, Star, Copy, Check } from 'lucide-react';
import aydanPhoto from '../assets/aydan_photo.png';

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

  // --- RSVP State ---
  const [rsvpName, setRsvpName] = useState('');
  const [attendance, setAttendance] = useState('hadir'); // 'hadir' | 'tidak'
  const [guestsCount, setGuestsCount] = useState(1);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    if (!rsvpName.trim()) return;

    const newRsvp = {
      name: rsvpName,
      attendance: attendance,
      guests: attendance === 'hadir' ? guestsCount : 0,
      timestamp: new Date().toISOString()
    };

    // Save RSVP to LocalStorage
    const currentRsvps = JSON.parse(localStorage.getItem('aydan_rsvps') || '[]');
    currentRsvps.push(newRsvp);
    localStorage.setItem('aydan_rsvps', JSON.stringify(currentRsvps));

    setRsvpSubmitted(true);
  };

  // --- Guest Book State ---
  const [guestName, setGuestName] = useState('');
  const [wishText, setWishText] = useState('');
  const [wishes, setWishes] = useState([]);

  // Load initial wishes from localStorage, or seed with mock ones
  useEffect(() => {
    const savedWishes = localStorage.getItem('aydan_wishes');
    if (savedWishes) {
      setWishes(JSON.parse(savedWishes));
    } else {
      // Seed data
      const defaultWishes = [
        {
          id: 1,
          name: 'Om Tio & Tante Desi',
          text: 'Selamat dikhitan Aydan Syahmi! Semoga menjadi anak yang sholeh, berbakti kepada kedua orang tua, berakhlak mulia, berguna bagi nusa, bangsa dan agama. Amin ya rabbal alamin.',
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
  }, []);

  const handleWishSubmit = (e) => {
    e.preventDefault();
    if (!guestName.trim() || !wishText.trim()) return;

    const now = new Date();
    const formattedDate = `${now.getDate()} Juni 2026, ${String(now.getHours()).padStart(2, '0')}.${String(now.getMinutes()).padStart(2, '0')}`;

    const newWish = {
      id: Date.now(),
      name: guestName,
      text: wishText,
      attendance: attendance, // link to attendance choice if they want
      time: formattedDate
    };

    const updatedWishes = [newWish, ...wishes];
    setWishes(updatedWishes);
    localStorage.setItem('aydan_wishes', JSON.stringify(updatedWishes));

    // Clear form
    setGuestName('');
    setWishText('');
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
        <div className="decor-cloud decor-cloud-1 float-animation">
          <svg viewBox="0 0 100 60" fill="var(--primary-medium)" opacity="0.3">
            <path d="M 20 40 A 15 15 0 0 1 50 40 A 20 20 0 0 1 90 40 A 10 10 0 0 1 90 45 L 10 45 Z" />
          </svg>
        </div>
        
        <div className="hero-greeting">Assalamu'alaikum Wr. Wb.</div>
        <p className="hero-intro">
          Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i 
          untuk menghadiri acara khitanan putra kami:
        </p>

        {/* Child Photo Frame with Spiderman accents */}
        <div className="child-portrait-wrapper">
          {/* Spiderman Web behind the frame */}
          <div style={{
            position: 'absolute',
            top: '-24px',
            left: '-24px',
            zIndex: 1,
            transform: 'rotate(-90deg)',
            opacity: 0.85
          }}>
            <svg viewBox="0 0 100 100" width="75" height="75">
              <path d="M 0 0 L 100 0" stroke="#2d3436" strokeWidth="4" />
              <path d="M 0 0 L 0 100" stroke="#2d3436" strokeWidth="4" />
              <path d="M 0 0 L 90 90" stroke="#2d3436" strokeWidth="3" />
              <path d="M 0 0 L 40 90" stroke="#2d3436" strokeWidth="2" />
              <path d="M 0 0 L 90 40" stroke="#2d3436" strokeWidth="2" />
              <path d="M 30 0 Q 30 30 0 30" fill="none" stroke="#2d3436" strokeWidth="2" />
              <path d="M 60 0 Q 60 60 0 60" fill="none" stroke="#2d3436" strokeWidth="2" />
              <path d="M 90 0 Q 90 90 0 90" fill="none" stroke="#2d3436" strokeWidth="2" />
            </svg>
          </div>

          <div className="child-portrait-ring"></div>
          <div className="child-portrait-frame">
            <img src={aydanPhoto} alt="Aydan Syahmi Siregar" className="child-portrait-img" />
          </div>

          {/* Spiderman Mask Sticker overlay on the corner of the frame */}
          <div style={{
            position: 'absolute',
            bottom: '-12px',
            right: '-12px',
            zIndex: 10,
            transform: 'rotate(15deg)',
            filter: 'drop-shadow(3px 3px 0px #2d3436)'
          }}>
            <svg viewBox="0 0 100 120" width="55" height="66">
              <path d="M 50 10 C 20 10 10 50 10 75 C 10 100 35 115 50 115 C 65 115 90 100 90 75 C 90 50 80 10 50 10 Z" fill="#ff7675" stroke="#2d3436" strokeWidth="5.5" strokeLinejoin="round" />
              <path d="M 50 10 L 50 115" stroke="#2d3436" strokeWidth="2" />
              <path d="M 10 75 L 90 75" stroke="#2d3436" strokeWidth="2" />
              <path d="M 20 30 L 80 100" stroke="#2d3436" strokeWidth="2" />
              <path d="M 80 30 L 20 100" stroke="#2d3436" strokeWidth="2" />
              <path d="M 35 45 Q 50 55 65 45" fill="none" stroke="#2d3436" strokeWidth="2" />
              <path d="M 25 60 Q 50 75 75 60" fill="none" stroke="#2d3436" strokeWidth="2" />
              <path d="M 20 75 Q 50 95 80 75" fill="none" stroke="#2d3436" strokeWidth="2" />
              <path d="M 18 55 C 25 50 38 50 45 68 C 35 75 25 72 18 55 Z" fill="#ffffff" stroke="#2d3436" strokeWidth="5.5" strokeLinejoin="round" />
              <path d="M 82 55 C 75 50 62 50 55 68 C 65 75 75 72 82 55 Z" fill="#ffffff" stroke="#2d3436" strokeWidth="5.5" strokeLinejoin="round" />
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
          <h3 className="countdown-title">Hari Bahagia Aydan</h3>
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

      {/* 4. RSVP / KONFIRMASI KEHADIRAN */}
      <section className="section scroll-animate">
        <h2 className="section-title">Konfirmasi Kehadiran</h2>
        <div className="glass-card">
          {!rsvpSubmitted ? (
            <form onSubmit={handleRsvpSubmit} className="rsvp-form">
              <p style={{ fontSize: '0.9rem', opacity: 0.8, textAlign: 'center', marginBottom: '10px' }}>
                Demi kenyamanan acara, mohon konfirmasikan kehadiran Bapak/Ibu/Saudara/i pada form di bawah ini:
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

              <button type="submit" className="btn-primary" style={{ marginTop: '10px', width: '100%' }}>
                <Send size={16} />
                Kirim Konfirmasi
              </button>
            </form>
          ) : (
            <div className="success-message">
              <h4>Terima Kasih!</h4>
              <p style={{ marginTop: '6px', fontSize: '0.9rem', color: '#27ae60' }}>
                {attendance === 'hadir' 
                  ? 'Konfirmasi kehadiran Anda telah kami catat. Sampai jumpa di lokasi acara!' 
                  : 'Terima kasih atas konfirmasi Anda. Doa restu Anda sangat berarti bagi kami.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 5. BUKU TAMU / DIGITAL GUEST BOOK */}
      <section className="section scroll-animate">
        <h2 className="section-title">Buku Tamu & Ucapan</h2>
        <div className="glass-card">
          <form onSubmit={handleWishSubmit} className="rsvp-form">
            <p style={{ fontSize: '0.9rem', opacity: 0.8, textAlign: 'center', marginBottom: '10px' }}>
              Berikan doa restu dan ucapan hangat untuk Aydan yang sedang dikhitan:
            </p>
            
            <div className="form-group">
              <label htmlFor="wish-name">Nama Anda</label>
              <input 
                type="text" 
                id="wish-name"
                className="form-control" 
                placeholder="Masukkan nama Anda..."
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                required 
              />
            </div>

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

            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              <Send size={16} />
              Kirim Ucapan
            </button>
          </form>

          {/* Guest book Feed */}
          <div className="guestbook-feed">
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
          <h3 className="parent-name">Freddy Rury Arrieandy Siregar</h3>
          <div className="ampersand">&</div>
          <h3 className="parent-name">Nurhasanah Hasrin</h3>
        </div>

        <p className="footer-signature">
          Aydan Syahmi Siregar Digital Invitation © 2026. Made with ❤️.
        </p>
      </footer>
    </div>
  );
}

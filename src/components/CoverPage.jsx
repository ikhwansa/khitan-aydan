import React, { useEffect, useState } from 'react';
import { MailOpen, Star } from 'lucide-react';


export default function CoverPage({ isOpened, onOpen }) {
  const [guestName, setGuestName] = useState('Bapak/Ibu/Saudara/i');

  useEffect(() => {
    // Parse URL parameter "?to="
    const params = new URLSearchParams(window.location.search);
    const toParam = params.get('to') || params.get('guest') || params.get('nama');
    if (toParam) {
      setGuestName(decodeURIComponent(toParam.replace(/\+/g, ' ')));
    }
  }, []);

  return (
    <div className={`cover-overlay ${isOpened ? 'slide-up' : ''}`}>
      {/* Cultural Background Elements on Cover Page */}
      <div className="cover-bg-illustration" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
        {/* Top Left Betawi Gigi Balang Corner Frame */}
        <div style={{ position: 'absolute', top: 0, left: 0, opacity: 0.95 }}>
          <svg viewBox="0 0 120 120" width="130" height="130">
            {/* Top Gigi Balang */}
            <rect x="0" y="0" width="120" height="15" fill="#2E7D32" stroke="#2d3436" strokeWidth="3" />
            <path d="M 0 15 L 15 35 L 30 15 L 45 35 L 60 15 L 75 35 L 90 15 L 105 35 L 120 15" fill="#E5A93B" stroke="#2d3436" strokeWidth="3" strokeLinejoin="round" />
            {/* Left Gigi Balang */}
            <rect x="0" y="0" width="15" height="120" fill="#2E7D32" stroke="#2d3436" strokeWidth="3" />
            <path d="M 15 0 L 35 15 L 15 30 L 35 45 L 15 60 L 35 75 L 15 90 L 35 105 L 15 120" fill="#E5A93B" stroke="#2d3436" strokeWidth="3" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Top Right Betawi Gigi Balang */}
        <div style={{ position: 'absolute', top: '2%', right: '2%' }}>
          <svg viewBox="0 0 140 70" width="120" height="60">
            <path d="M 0 0 L 140 0 L 140 30 Q 70 50 0 30 Z" fill="#2E7D32" stroke="#2d3436" strokeWidth="3" />
            <path d="M 10 30 L 25 55 L 40 30 L 55 55 L 70 30 L 85 55 L 100 30 L 115 55 L 130 30" fill="none" stroke="#2d3436" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 10 30 L 25 55 L 40 30 L 55 55 L 70 30 L 85 55 L 100 30 L 115 55 L 130 30" fill="#E5A93B" stroke="none" />
            <circle cx="25" cy="40" r="3" fill="#FFFFFF" stroke="#2d3436" strokeWidth="1" />
            <circle cx="55" cy="40" r="3" fill="#FFFFFF" stroke="#2d3436" strokeWidth="1" />
            <circle cx="85" cy="40" r="3" fill="#FFFFFF" stroke="#2d3436" strokeWidth="1" />
            <circle cx="115" cy="40" r="3" fill="#FFFFFF" stroke="#2d3436" strokeWidth="1" />
          </svg>
        </div>

        {/* Hanging Kembang Kelapa on Left */}
        <div style={{ position: 'absolute', top: 0, left: '15%', opacity: 0.9 }} className="float-animation">
          <svg viewBox="0 0 80 150" width="40" height="75">
            <line x1="40" y1="0" x2="40" y2="90" stroke="#2d3436" strokeWidth="3" />
            <path d="M 40 90 L 10 70 L 40 100 L 70 70 Z" fill="#E5A93B" stroke="#2d3436" strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="40" cy="115" r="14" fill="#2E7D32" stroke="#2d3436" strokeWidth="2.5" />
            <circle cx="40" cy="115" r="7" fill="#D32F2F" stroke="#2d3436" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Background stars */}
        <Star size={24} style={{ position: 'absolute', top: '35%', left: '8%', color: '#FAF2E3', fill: '#E5A93B', stroke: '#2d3436', strokeWidth: '2px' }} />
        <Star size={20} style={{ position: 'absolute', bottom: '25%', right: '10%', color: '#FAF2E3', fill: '#E5A93B', stroke: '#2d3436', strokeWidth: '2px' }} />
      </div>

      <div className="cover-content float-animation">
        {/* Sepasang Ondel-Ondel Betawi Emblem Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <div style={{ position: 'relative', width: '90px', height: '90px' }}>
            <svg viewBox="0 0 100 100" width="90" height="90" style={{ filter: 'drop-shadow(3px 3px 0px #2d3436)' }}>
              {/* Gold Circular border */}
              <circle cx="50" cy="50" r="45" fill="#FAF2E3" stroke="#2d3436" strokeWidth="3.5" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#2d3436" strokeWidth="1.5" strokeDasharray="3,3" />

              {/* Left: Male Ondel-Ondel */}
              <g transform="translate(-10, 5) scale(0.9)">
                <path d="M 25 35 L 20 12 L 32 18 L 30 3 L 42 16 L 50 0 L 58 16 L 70 3 L 68 18 L 80 12 L 75 35 Z" fill="#E5A93B" stroke="#2d3436" strokeWidth="2" strokeLinejoin="round" />
                <path d="M 25 45 C 25 25 75 25 75 45 L 75 85 Z" fill="#1A1A1A" stroke="#2d3436" strokeWidth="2.5" />
                <path d="M 32 50 C 32 40 68 40 68 50 L 65 80 C 65 85 35 85 35 80 Z" fill="#D32F2F" stroke="#2d3436" strokeWidth="2.5" />
                <ellipse cx="42" cy="58" rx="3" ry="2" fill="#ffffff" stroke="#2d3436" strokeWidth="1.5" />
                <circle cx="42" cy="58" r="1" fill="#1A1A1A" />
                <ellipse cx="58" cy="58" rx="3" ry="2" fill="#ffffff" stroke="#2d3436" strokeWidth="1.5" />
                <circle cx="58" cy="58" r="1" fill="#1A1A1A" />
                <path d="M 40 68 Q 50 64 60 68" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
              </g>

              {/* Right: Female Ondel-Ondel */}
              <g transform="translate(18, 12) scale(0.8)">
                <path d="M 25 35 L 20 12 L 32 18 L 30 3 L 42 16 L 50 0 L 58 16 L 70 3 L 68 18 L 80 12 L 75 35 Z" fill="#E5A93B" stroke="#2d3436" strokeWidth="2" strokeLinejoin="round" />
                <path d="M 25 45 C 25 25 75 25 75 45 L 75 85 Z" fill="#1A1A1A" stroke="#2d3436" strokeWidth="2.5" />
                <path d="M 32 50 C 32 40 68 40 68 50 L 65 80 C 65 85 35 85 35 80 Z" fill="#FAFBF7" stroke="#2d3436" strokeWidth="2.5" />
                <ellipse cx="42" cy="58" rx="3" ry="2" fill="#ffffff" stroke="#2d3436" strokeWidth="1.5" />
                <circle cx="42" cy="58" r="1" fill="#1A1A1A" />
                <ellipse cx="58" cy="58" rx="3" ry="2" fill="#ffffff" stroke="#2d3436" strokeWidth="1.5" />
                <circle cx="58" cy="58" r="1" fill="#1A1A1A" />
                <circle cx="38" cy="66" r="3.5" fill="#ff7675" opacity="0.65" />
                <circle cx="62" cy="66" r="3.5" fill="#ff7675" opacity="0.65" />
                <path d="M 46 72 Q 50 77 54 72 Z" fill="#D32F2F" stroke="#2d3436" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent-gold)', background: 'var(--primary-dark)', padding: '2px 10px', borderRadius: '4px', letterSpacing: '1px' }}>NYOK KONDANGAN!</span>
        </div>
        <div className="cover-welcome" style={{ marginTop: '8px' }}>Walimatul Khitan</div>
        <h1 className="cover-title">
          Aydan Syahmi
          <span>Undangan Digital Khitanan</span>
        </h1>

        <div className="cover-recipient-wrapper">
          <div className="cover-recipient-card">
            <div className="cover-recipient-label">Kepada Yth. Bapak/Ibu/Saudara/i:</div>
            <div className="cover-recipient-name">{guestName}</div>
          </div>
        </div>

        <button className="btn-primary btn-open" onClick={onOpen}>
          <MailOpen size={18} />
          Buka Undangan
        </button>
      </div>
    </div>
  );
}

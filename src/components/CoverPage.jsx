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
      {/* Cartoon Background Elements on Cover Page */}
      <div className="cover-bg-illustration" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
        {/* Top Left Spider Web */}
        <div style={{ position: 'absolute', top: 0, left: 0, opacity: 0.9 }}>
          <svg viewBox="0 0 100 100" width="130" height="130">
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

        {/* Top Right Cloud */}
        <div style={{ position: 'absolute', top: '10%', right: '5%' }}>
          <svg viewBox="0 0 100 60" width="120" height="72">
            <path d="M 20 40 A 12 12 0 0 1 36 28 A 16 16 0 0 1 68 28 A 12 12 0 0 1 84 40 L 84 42 A 8 8 0 0 1 76 50 L 24 50 A 8 8 0 0 1 16 42 Z" fill="#ffffff" stroke="#2d3436" strokeWidth="4" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Hanging Spider on Left */}
        <div style={{ position: 'absolute', top: 0, left: '15%', opacity: 0.9 }} className="float-animation">
          <svg viewBox="0 0 100 150" width="50" height="75">
            <line x1="50" y1="0" x2="50" y2="85" stroke="#2d3436" strokeWidth="3.5" />
            <circle cx="50" cy="95" r="14" fill="#2d3436" />
            <circle cx="50" cy="113" r="8" fill="#2d3436" />
            <circle cx="47" cy="113" r="1.5" fill="#ffffff" />
            <circle cx="53" cy="113" r="1.5" fill="#ffffff" />
            <path d="M 36 90 Q 26 80 24 90 M 36 95 Q 22 90 20 100 M 36 100 Q 24 105 26 115 M 64 90 Q 74 80 76 90 M 64 95 Q 78 90 80 100 M 64 100 Q 76 105 74 115" fill="none" stroke="#2d3436" strokeWidth="3" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Background stars */}
        <Star size={24} style={{ position: 'absolute', top: '35%', left: '8%', color: '#ffeaa7', fill: '#ffeaa7', stroke: '#2d3436', strokeWidth: '2px' }} />
        <Star size={20} style={{ position: 'absolute', bottom: '25%', right: '10%', color: '#ffd32a', fill: '#ffd32a', stroke: '#2d3436', strokeWidth: '2px' }} />
      </div>

      <div className="cover-content float-animation">
        {/* Spiderman emblem badge at top of card */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <div style={{ position: 'relative', width: '80px', height: '80px' }}>
            {/* Spiderweb behind mask */}
            <svg viewBox="0 0 100 100" width="80" height="80">
              <circle cx="50" cy="50" r="45" fill="#eef2f7" stroke="#2d3436" strokeWidth="4" />
              <line x1="50" y1="5" x2="50" y2="95" stroke="#2d3436" strokeWidth="3" />
              <line x1="5" y1="50" x2="95" y2="50" stroke="#2d3436" strokeWidth="3" />
              <line x1="18" y1="18" x2="82" y2="82" stroke="#2d3436" strokeWidth="3" />
              <line x1="82" y1="18" x2="18" y2="82" stroke="#2d3436" strokeWidth="3" />
              <path d="M 50 20 Q 50 50 20 50 M 50 20 Q 50 50 80 50 M 50 80 Q 50 50 20 50 M 50 80 Q 50 50 80 50" fill="none" stroke="#2d3436" strokeWidth="2.5" />
              <path d="M 50 35 Q 50 50 35 50 M 50 35 Q 50 50 65 50 M 50 65 Q 50 50 35 50 M 50 65 Q 50 50 65 50" fill="none" stroke="#2d3436" strokeWidth="2.5" />
            </svg>
            {/* Spiderman Mask */}
            <div style={{
              position: 'absolute',
              top: '12px',
              left: '15px',
              transform: 'rotate(-5deg)',
              filter: 'drop-shadow(3px 3px 0px #2d3436)'
            }}>
              <svg viewBox="0 0 100 120" width="50" height="60">
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
          </div>
        </div>

        <div className="cover-welcome">Walimatul Khitan</div>
        <h1 className="cover-title">
          Aydan Syahmi
          <span>Undangan Digital Khitanan</span>
        </h1>

        <div className="cover-recipient-card">
          <div className="cover-recipient-label">Kepada Yth. Bapak/Ibu/Saudara/i:</div>
          <div className="cover-recipient-name">{guestName}</div>
        </div>

        <button className="btn-primary btn-open" onClick={onOpen}>
          <MailOpen size={18} />
          Buka Undangan
        </button>
      </div>
    </div>
  );
}

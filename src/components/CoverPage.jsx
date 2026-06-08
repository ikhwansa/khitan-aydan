import React, { useEffect, useState } from 'react';
import { MailOpen, Star, Sparkles } from 'lucide-react';

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
      {/* Decorative Vector Clouds and Stars Background */}
      <div className="cover-bg-illustration">
        {/* Floating clouds SVG */}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%', opacity: 0.15, position: 'absolute' }}>
          <path d="M 0 40 Q 25 35 50 40 T 100 40 L 100 100 L 0 100 Z" fill="white" />
          <path d="M 0 55 Q 30 50 60 55 T 100 55 L 100 100 L 0 100 Z" fill="hsl(205, 90%, 93%)" />
        </svg>

        {/* Floating animated decorative star SVGs */}
        <Star size={30} className="child-portrait-decorator decor-star-1" style={{ top: '15%', left: '15%', opacity: 0.4 }} />
        <Star size={24} className="child-portrait-decorator decor-star-2" style={{ top: '25%', right: '20%', opacity: 0.3 }} />
        <Sparkles size={20} className="child-portrait-decorator float-delay-1" style={{ bottom: '25%', left: '20%', color: 'var(--primary-brand)', opacity: 0.3 }} />
        <Star size={18} className="child-portrait-decorator float-delay-2" style={{ bottom: '15%', right: '15%', opacity: 0.4 }} />
      </div>

      <div className="cover-content float-animation">
        <div className="cover-welcome">Walimatul Khitan</div>
        <h1 className="cover-title">
          Aydan Syahmi
          <span>Undangan Digital Khitanan</span>
        </h1>

        <div className="cover-recipient-card">
          <div className="cover-recipient-label">Kepad Yth. Bapak/Ibu/Saudara/i:</div>
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

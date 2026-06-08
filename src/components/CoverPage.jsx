import React, { useEffect, useState } from 'react';
import { MailOpen, Star } from 'lucide-react';
import aydanPhoto from '../assets/aydan_photo.jpeg';


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
      {/* Spider-Man Background Elements on Cover Page */}
      <div className="cover-bg-illustration" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
        {/* Top Left Spiderweb */}
        <div style={{ position: 'absolute', top: 0, left: 0, opacity: 0.85 }}>
          <svg viewBox="0 0 100 100" width="130" height="130">
            <path d="M 0 0 L 100 0 M 0 0 L 0 100 M 0 0 L 70 70" stroke="var(--primary-dark)" strokeWidth="2.5" />
            <path d="M 30 0 Q 30 30 0 30" fill="none" stroke="var(--primary-dark)" strokeWidth="1.5" />
            <path d="M 50 0 Q 50 50 0 50" fill="none" stroke="var(--primary-dark)" strokeWidth="1.5" />
            <path d="M 70 0 Q 70 70 0 70" fill="none" stroke="var(--primary-dark)" strokeWidth="1.5" />
            <path d="M 90 0 Q 90 90 0 90" fill="none" stroke="var(--primary-dark)" strokeWidth="1.5" />
            {/* Red Accent Web Lines */}
            <path d="M 40 0 Q 40 40 0 40" fill="none" stroke="var(--primary-brand)" strokeWidth="1.2" opacity="0.7" />
            <path d="M 60 0 Q 60 60 0 60" fill="none" stroke="var(--primary-brand)" strokeWidth="1.2" opacity="0.7" />
            <path d="M 80 0 Q 80 80 0 80" fill="none" stroke="var(--primary-brand)" strokeWidth="1.2" opacity="0.7" />
          </svg>
        </div>

        {/* Top Right Spiderweb */}
        <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.85 }}>
          <svg viewBox="0 0 100 100" width="130" height="130" style={{ transform: 'scaleX(-1)' }}>
            <path d="M 0 0 L 100 0 M 0 0 L 0 100 M 0 0 L 70 70" stroke="var(--primary-dark)" strokeWidth="2.5" />
            <path d="M 30 0 Q 30 30 0 30" fill="none" stroke="var(--primary-dark)" strokeWidth="1.5" />
            <path d="M 50 0 Q 50 50 0 50" fill="none" stroke="var(--primary-dark)" strokeWidth="1.5" />
            <path d="M 70 0 Q 70 70 0 70" fill="none" stroke="var(--primary-dark)" strokeWidth="1.5" />
            <path d="M 90 0 Q 90 90 0 90" fill="none" stroke="var(--primary-dark)" strokeWidth="1.5" />
            <path d="M 40 0 Q 40 40 0 40" fill="none" stroke="var(--primary-brand)" strokeWidth="1.2" opacity="0.7" />
            <path d="M 60 0 Q 60 60 0 60" fill="none" stroke="var(--primary-brand)" strokeWidth="1.2" opacity="0.7" />
            <path d="M 80 0 Q 80 80 0 80" fill="none" stroke="var(--primary-brand)" strokeWidth="1.2" opacity="0.7" />
          </svg>
        </div>

        {/* Hanging Spider on Left */}
        <div style={{ position: 'absolute', top: 0, left: '12%', opacity: 0.95 }} className="spider-swing-animation">
          <svg viewBox="0 0 80 200" width="40" height="100">
            {/* Web line */}
            <line x1="40" y1="0" x2="40" y2="120" stroke="var(--primary-dark)" strokeWidth="2" strokeDasharray="3,3" />
            {/* Spider Body */}
            <ellipse cx="40" cy="140" rx="12" ry="16" fill="var(--primary-dark)" stroke="var(--primary-brand)" strokeWidth="1.5" />
            <circle cx="40" cy="123" r="8" fill="var(--primary-dark)" />
            {/* Eyes */}
            <circle cx="37" cy="121" r="1.5" fill="white" />
            <circle cx="43" cy="121" r="1.5" fill="white" />
            {/* Legs */}
            {/* Left Legs */}
            <path d="M 32 132 Q 20 120 12 135" fill="none" stroke="var(--primary-dark)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 30 140 Q 15 135 8 148" fill="none" stroke="var(--primary-dark)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 30 146 Q 16 148 10 160" fill="none" stroke="var(--primary-dark)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 32 152 Q 22 165 18 174" fill="none" stroke="var(--primary-dark)" strokeWidth="2.5" strokeLinecap="round" />
            {/* Right Legs */}
            <path d="M 48 132 Q 60 120 68 135" fill="none" stroke="var(--primary-dark)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 50 140 Q 65 135 72 148" fill="none" stroke="var(--primary-dark)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 50 146 Q 64 148 70 160" fill="none" stroke="var(--primary-dark)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 48 152 Q 58 165 62 174" fill="none" stroke="var(--primary-dark)" strokeWidth="2.5" strokeLinecap="round" />
            {/* Red Spider Emblem on back */}
            <path d="M 40 132 L 36 142 L 44 142 Z" fill="var(--primary-brand)" />
            <path d="M 40 152 L 36 142 L 44 142 Z" fill="var(--primary-brand)" />
          </svg>
        </div>

        {/* Background stars */}
        <Star size={24} style={{ position: 'absolute', top: '35%', left: '8%', color: '#FAF2E3', fill: 'var(--accent-gold)', stroke: 'var(--primary-dark)', strokeWidth: '2px' }} />
        <Star size={20} style={{ position: 'absolute', bottom: '25%', right: '10%', color: '#FAF2E3', fill: 'var(--accent-gold)', stroke: 'var(--primary-dark)', strokeWidth: '2px' }} />
      </div>

      <div className="cover-content float-animation">
        {/* Spider-Man Mask Emblem Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <div style={{ position: 'relative', width: '95px', height: '95px' }}>
            <svg viewBox="0 0 100 100" width="95" height="95" style={{ filter: 'drop-shadow(3px 3px 0px var(--primary-dark))' }}>
              {/* Outer Circular frame */}
              <circle cx="50" cy="50" r="45" fill="var(--accent-blue)" stroke="var(--primary-dark)" strokeWidth="3.5" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="3,3" />

              {/* Spider-Man Head */}
              <g transform="translate(15, 12)">
                {/* Red Head shape */}
                <path d="M 12 35 C 12 12 58 12 58 35 C 58 52 46 68 35 68 C 24 68 12 52 12 35 Z" fill="var(--primary-brand)" stroke="var(--primary-dark)" strokeWidth="3" />
                
                {/* Web lines on face */}
                {/* Vertical lines */}
                <path d="M 35 17 L 35 68" stroke="var(--primary-dark)" strokeWidth="1.5" />
                <path d="M 35 17 Q 20 30 13 46" fill="none" stroke="var(--primary-dark)" strokeWidth="1.2" />
                <path d="M 35 17 Q 50 30 57 46" fill="none" stroke="var(--primary-dark)" strokeWidth="1.2" />
                <path d="M 35 68 Q 20 50 13 35" fill="none" stroke="var(--primary-dark)" strokeWidth="1.2" />
                <path d="M 35 68 Q 50 50 57 35" fill="none" stroke="var(--primary-dark)" strokeWidth="1.2" />
                
                {/* Concentric webs */}
                <path d="M 23 28 Q 35 34 47 28" fill="none" stroke="var(--primary-dark)" strokeWidth="1.2" />
                <path d="M 18 38 Q 35 46 52 38" fill="none" stroke="var(--primary-dark)" strokeWidth="1.2" />
                <path d="M 15 48 Q 35 58 55 48" fill="none" stroke="var(--primary-dark)" strokeWidth="1.2" />

                {/* Left Eye */}
                <path d="M 17 32 C 17 26 27 26 31 36 C 25 40 19 38 17 32 Z" fill="white" stroke="var(--primary-dark)" strokeWidth="3" strokeLinejoin="round" />
                
                {/* Right Eye */}
                <path d="M 53 32 C 53 26 43 26 39 36 C 45 40 51 38 53 32 Z" fill="white" stroke="var(--primary-dark)" strokeWidth="3" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent-gold)', background: 'var(--primary-dark)', padding: '2px 12px', borderRadius: '4px', letterSpacing: '1.5px', border: '2px dashed var(--primary-brand)' }}>WALIMATUL KHITAN</span>
        </div>
        <h1 className="cover-title">
          Aydan Syahmi Siregar
        </h1>

        {/* Aydan's Photo Portrait on Cover */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '16px 0 24px 0' }}>
          <div style={{
            position: 'relative',
            width: '130px',
            height: '130px',
            borderRadius: '50%',
            border: '4px solid var(--primary-dark)',
            boxShadow: '4px 4px 0px var(--primary-dark)',
            overflow: 'hidden',
            background: 'var(--accent-gold)'
          }}>
            <img src={aydanPhoto} alt="Aydan Syahmi Siregar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

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

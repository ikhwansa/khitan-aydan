import React from 'react';

export default function StaticBackground() {
  return (
    <div className="static-bg-container">
      {/* 1. Repeating Web Border Banner across the top screen */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '35px', zIndex: 5, overflow: 'hidden', pointerEvents: 'none' }}>
        <svg viewBox="0 0 1000 35" width="100%" height="35" preserveAspectRatio="none">
          <rect x="0" y="0" width="1000" height="10" fill="var(--primary-brand)" />
          {/* Web patterns across the top */}
          <path d="M 0 10 Q 50 40 100 10 Q 150 40 200 10 Q 250 40 300 10 Q 350 40 400 10 Q 450 40 500 10 Q 550 40 600 10 Q 650 40 700 10 Q 750 40 800 10 Q 850 40 900 10 Q 950 40 1000 10" fill="none" stroke="var(--primary-dark)" strokeWidth="2.5" />
          <path d="M 0 10 Q 50 25 100 10 Q 150 25 200 10 Q 250 25 300 10 Q 350 25 400 10 Q 450 25 500 10 Q 550 25 600 10 Q 650 25 700 10 Q 750 25 800 10 Q 850 25 900 10 Q 950 25 1000 10" fill="none" stroke="var(--primary-dark)" strokeWidth="1.5" opacity="0.6" />
          {/* Web lines radiating from the top */}
          <line x1="50" y1="10" x2="50" y2="25" stroke="var(--primary-dark)" strokeWidth="1.5" />
          <line x1="150" y1="10" x2="150" y2="25" stroke="var(--primary-dark)" strokeWidth="1.5" />
          <line x1="250" y1="10" x2="250" y2="25" stroke="var(--primary-dark)" strokeWidth="1.5" />
          <line x1="350" y1="10" x2="350" y2="25" stroke="var(--primary-dark)" strokeWidth="1.5" />
          <line x1="450" y1="10" x2="450" y2="25" stroke="var(--primary-dark)" strokeWidth="1.5" />
          <line x1="550" y1="10" x2="550" y2="25" stroke="var(--primary-dark)" strokeWidth="1.5" />
          <line x1="650" y1="10" x2="650" y2="25" stroke="var(--primary-dark)" strokeWidth="1.5" />
          <line x1="750" y1="10" x2="750" y2="25" stroke="var(--primary-dark)" strokeWidth="1.5" />
          <line x1="850" y1="10" x2="850" y2="25" stroke="var(--primary-dark)" strokeWidth="1.5" />
          <line x1="950" y1="10" x2="950" y2="25" stroke="var(--primary-dark)" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 2. Floating Spider Web on Left */}
      <div className="bg-decorator dec-monas-left">
        <svg viewBox="0 0 100 100" width="70" height="70">
          <circle cx="50" cy="50" r="45" fill="var(--primary-pastel)" stroke="var(--primary-dark)" strokeWidth="3" />
          {/* Spider web drawing */}
          <path d="M 50 50 L 15 15 M 50 50 L 85 15 M 50 50 L 85 85 M 50 50 L 15 85 M 50 50 L 50 10 M 50 50 L 50 90 M 50 50 L 10 50 M 50 50 L 90 50" stroke="var(--primary-dark)" strokeWidth="2" />
          <path d="M 35 35 L 65 35 L 65 65 L 35 65 Z" fill="none" stroke="var(--primary-dark)" strokeWidth="1.5" />
          <path d="M 25 25 L 75 25 L 75 75 L 25 75 Z" fill="none" stroke="var(--primary-dark)" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 3. Floating Spider Emblem on Right */}
      <div className="bg-decorator dec-kebaya-right">
        <svg viewBox="0 0 100 100" width="70" height="70">
          <circle cx="50" cy="50" r="45" fill="var(--primary-pastel)" stroke="var(--primary-dark)" strokeWidth="3" />
          {/* Spider */}
          <ellipse cx="50" cy="53" rx="8" ry="12" fill="var(--primary-brand)" stroke="var(--primary-dark)" strokeWidth="2" />
          <circle cx="50" cy="38" r="6" fill="var(--primary-brand)" stroke="var(--primary-dark)" strokeWidth="2" />
          {/* Legs */}
          <path d="M 44 46 Q 32 37 25 47" fill="none" stroke="var(--primary-dark)" strokeWidth="2" strokeLinecap="round" />
          <path d="M 42 52 Q 28 48 22 58" fill="none" stroke="var(--primary-dark)" strokeWidth="2" strokeLinecap="round" />
          <path d="M 42 58 Q 28 60 23 70" fill="none" stroke="var(--primary-dark)" strokeWidth="2" strokeLinecap="round" />
          <path d="M 44 63 Q 34 73 31 81" fill="none" stroke="var(--primary-dark)" strokeWidth="2" strokeLinecap="round" />
          
          <path d="M 56 46 Q 68 37 75 47" fill="none" stroke="var(--primary-dark)" strokeWidth="2" strokeLinecap="round" />
          <path d="M 58 52 Q 72 48 78 58" fill="none" stroke="var(--primary-dark)" strokeWidth="2" strokeLinecap="round" />
          <path d="M 58 58 Q 72 60 77 70" fill="none" stroke="var(--primary-dark)" strokeWidth="2" strokeLinecap="round" />
          <path d="M 56 63 Q 66 73 69 81" fill="none" stroke="var(--primary-dark)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* 4. Floating Spider-Man Mask on Right */}
      <div className="bg-decorator dec-ondel-male-right">
        <svg viewBox="0 0 100 100" width="75" height="75">
          <circle cx="50" cy="50" r="45" fill="var(--primary-pastel)" stroke="var(--primary-dark)" strokeWidth="3" />
          
          {/* Spider-Man Head */}
          <g transform="translate(15, 12)">
            {/* Red Head shape */}
            <path d="M 12 35 C 12 12 58 12 58 35 C 58 52 46 68 35 68 C 24 68 12 52 12 35 Z" fill="var(--primary-brand)" stroke="var(--primary-dark)" strokeWidth="3" />
            
            {/* Web lines on face */}
            <path d="M 35 17 L 35 68" stroke="var(--primary-dark)" strokeWidth="1.5" />
            <path d="M 35 17 Q 20 30 13 46" fill="none" stroke="var(--primary-dark)" strokeWidth="1.2" />
            <path d="M 35 17 Q 50 30 57 46" fill="none" stroke="var(--primary-dark)" strokeWidth="1.2" />
            <path d="M 23 28 Q 35 34 47 28" fill="none" stroke="var(--primary-dark)" strokeWidth="1.2" />
            <path d="M 18 38 Q 35 46 52 38" fill="none" stroke="var(--primary-dark)" strokeWidth="1.2" />

            {/* Left Eye */}
            <path d="M 17 32 C 17 26 27 26 31 36 C 25 40 19 38 17 32 Z" fill="white" stroke="var(--primary-dark)" strokeWidth="2.5" strokeLinejoin="round" />
            
            {/* Right Eye */}
            <path d="M 53 32 C 53 26 43 26 39 36 C 45 40 51 38 53 32 Z" fill="white" stroke="var(--primary-dark)" strokeWidth="2.5" strokeLinejoin="round" />
          </g>
        </svg>
      </div>

      {/* 5. Floating Spidey Badge on Left */}
      <div className="bg-decorator dec-ondel-female-left">
        <svg viewBox="0 0 100 100" width="75" height="75">
          <circle cx="50" cy="50" r="45" fill="var(--primary-pastel)" stroke="var(--primary-dark)" strokeWidth="3" />
          
          {/* Spidey Emblem Shield */}
          <path d="M 30 25 L 70 25 L 80 50 L 50 82 L 20 50 Z" fill="var(--accent-blue)" stroke="var(--primary-dark)" strokeWidth="3" strokeLinejoin="round" />
          {/* Spider silhouette inside */}
          <ellipse cx="50" cy="48" rx="5" ry="9" fill="white" />
          <circle cx="50" cy="36" r="4" fill="white" />
          <path d="M 46 42 L 38 35 M 45 48 L 34 47 M 45 54 L 35 62" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 54 42 L 62 35 M 55 48 L 66 47 M 55 54 L 65 62" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* 6. Floating Spiderweb Icon 1 on Right */}
      <div className="bg-decorator dec-kembang-kelapa-1">
        <svg viewBox="0 0 80 80" width="50" height="50">
          <polygon points="40,5 75,68 5,68" fill="var(--accent-gold)" stroke="var(--primary-dark)" strokeWidth="3.5" strokeLinejoin="round" />
          {/* Spider mark warning inside */}
          <circle cx="40" cy="36" r="5" fill="var(--primary-dark)" />
          <line x1="40" y1="41" x2="40" y2="56" stroke="var(--primary-dark)" strokeWidth="4.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* 7. Floating Spider Icon on Left */}
      <div className="bg-decorator dec-kembang-kelapa-2">
        <svg viewBox="0 0 80 80" width="50" height="50">
          <circle cx="40" cy="40" r="35" fill="var(--primary-pastel)" stroke="var(--primary-dark)" strokeWidth="3" />
          <path d="M 40 5 L 40 40" stroke="var(--primary-dark)" strokeWidth="1.5" strokeDasharray="2,2" />
          {/* Small Spider */}
          <ellipse cx="40" cy="45" rx="6" ry="8" fill="var(--primary-dark)" />
          <circle cx="40" cy="34" r="4" fill="var(--primary-dark)" />
          <path d="M 34 42 Q 26 38 20 46" fill="none" stroke="var(--primary-dark)" strokeWidth="1.5" />
          <path d="M 34 47 Q 24 45 18 55" fill="none" stroke="var(--primary-dark)" strokeWidth="1.5" />
          <path d="M 46 42 Q 54 38 60 46" fill="none" stroke="var(--primary-dark)" strokeWidth="1.5" />
          <path d="M 46 47 Q 56 45 62 55" fill="none" stroke="var(--primary-dark)" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}

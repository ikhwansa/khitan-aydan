import React from 'react';

export default function StaticBackground() {
  return (
    <div className="static-bg-container">
      {/* 1. Repeating Gigi Balang Border Banner across the top screen */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '35px', zIndex: 5, overflow: 'hidden', pointerEvents: 'none' }}>
        <svg viewBox="0 0 1000 35" width="100%" height="35" preserveAspectRatio="none">
          <rect x="0" y="0" width="1000" height="12" fill="#2E7D32" />
          <path d="M 0 12 L 10 32 L 20 12 L 30 32 L 40 12 L 50 32 L 60 12 L 70 32 L 80 12 L 90 32 L 100 12 L 110 32 L 120 12 L 130 32 L 140 12 L 150 32 L 160 12 L 170 32 L 180 12 L 190 32 L 200 12 L 210 32 L 220 12 L 230 32 L 240 12 L 250 32 L 260 12 L 270 32 L 280 12 L 290 32 L 300 12 L 310 32 L 320 12 L 330 32 L 340 12 L 350 32 L 360 12 L 370 32 L 380 12 L 390 32 L 400 12 L 410 32 L 420 12 L 430 32 L 440 12 L 450 32 L 460 12 L 470 32 L 480 12 L 490 32 L 500 12 L 510 32 L 520 12 L 530 32 L 540 12 L 550 32 L 560 12 L 570 32 L 580 12 L 590 32 L 600 12 L 610 32 L 620 12 L 630 32 L 640 12 L 650 32 L 660 12 L 670 32 L 680 12 L 690 32 L 700 12 L 710 32 L 720 12 L 730 32 L 740 12 L 750 32 L 760 12 L 770 32 L 780 12 L 790 32 L 800 12 L 810 32 L 820 12 L 830 32 L 840 12 L 850 32 L 860 12 L 870 32 L 880 12 L 890 32 L 900 12 L 910 32 L 920 12 L 930 32 L 940 12 L 950 32 L 960 12 L 970 32 L 980 12 L 990 32 L 1000 12" fill="#E5A93B" stroke="#2d3436" strokeWidth="2.5" />
        </svg>
      </div>

      {/* 2. Floating Monas (National Monument) on Left */}
      <div className="bg-decorator dec-monas-left">
        <svg viewBox="0 0 80 120" width="60" height="90">
          <circle cx="40" cy="60" r="38" fill="#F5EFE4" stroke="#2d3436" strokeWidth="2.5" />
          {/* Base */}
          <rect x="25" y="85" width="30" height="8" fill="#ffffff" stroke="#2d3436" strokeWidth="2.5" />
          <rect x="20" y="93" width="40" height="8" fill="#ffffff" stroke="#2d3436" strokeWidth="2.5" />
          {/* Shaft */}
          <path d="M 36 85 L 37 40 L 43 40 L 44 85 Z" fill="#ffffff" stroke="#2d3436" strokeWidth="2.5" />
          {/* Cup */}
          <polygon points="33,40 47,40 44,34 36,34" fill="#ffffff" stroke="#2d3436" strokeWidth="2" />
          {/* Gold Flame */}
          <path d="M 37 34 Q 40 18 43 34 Q 41 28 40 34" fill="#F57C00" stroke="#2d3436" strokeWidth="1.5" />
          <path d="M 39 34 Q 40 21 42 34" fill="#E5A93B" />
        </svg>
      </div>

      {/* 3. Floating Rumah Kebaya on Right */}
      <div className="bg-decorator dec-kebaya-right">
        <svg viewBox="0 0 100 100" width="75" height="75">
          <circle cx="50" cy="50" r="45" fill="#F5EFE4" stroke="#2d3436" strokeWidth="3" />
          {/* Roof */}
          <path d="M 10 50 L 50 16 L 90 50 Z" fill="#D32F2F" stroke="#2d3436" strokeWidth="3" strokeLinejoin="round" />
          {/* Gigi Balang Pattern Detail under roof */}
          <path d="M 22 40 L 26 44 L 30 40 L 34 44 L 38 40 L 42 44 L 46 40 L 50 44 L 54 40 L 58 44 L 62 40 L 66 44 L 70 40 L 74 44 L 78 40" fill="none" stroke="#E5A93B" strokeWidth="2" />
          {/* Wall */}
          <rect x="24" y="50" width="52" height="32" fill="#2E7D32" stroke="#2d3436" strokeWidth="3" />
          {/* Door */}
          <rect x="44" y="62" width="12" height="20" fill="#E5A93B" stroke="#2d3436" strokeWidth="2" />
          {/* Windows */}
          <rect x="28" y="58" width="10" height="10" fill="#ffffff" stroke="#2d3436" strokeWidth="2" />
          <rect x="62" y="58" width="10" height="10" fill="#ffffff" stroke="#2d3436" strokeWidth="2" />
          {/* Ground */}
          <line x1="15" y1="82" x2="85" y2="82" stroke="#2d3436" strokeWidth="3.5" />
        </svg>
      </div>

      {/* 4. Floating Male Ondel-Ondel (Face Red) on Right */}
      <div className="bg-decorator dec-ondel-male-right">
        <svg viewBox="0 0 100 120" width="80" height="96">
          <circle cx="50" cy="55" r="42" fill="#F5EFE4" stroke="#2d3436" strokeWidth="3" />
          {/* Crown/Kembang Kelapa spikes */}
          <path d="M 25 35 L 20 12 L 32 18 L 30 3 L 42 16 L 50 0 L 58 16 L 70 3 L 68 18 L 80 12 L 75 35 Z" fill="#E5A93B" stroke="#2d3436" strokeWidth="2.5" strokeLinejoin="round" />
          {/* Hair */}
          <path d="M 25 45 C 25 25 75 25 75 45 L 75 85 C 75 85 50 90 25 85 Z" fill="#1A1A1A" stroke="#2d3436" strokeWidth="3" />
          {/* Face (Male: Red) */}
          <path d="M 32 50 C 32 40 68 40 68 50 L 65 80 C 65 85 35 85 35 80 Z" fill="#D32F2F" stroke="#2d3436" strokeWidth="3" />
          {/* Crown flowers */}
          <circle cx="35" cy="38" r="4" fill="#2E7D32" stroke="#2d3436" strokeWidth="1.5" />
          <circle cx="50" cy="36" r="4" fill="#F57C00" stroke="#2d3436" strokeWidth="1.5" />
          <circle cx="65" cy="38" r="4" fill="#E5A93B" stroke="#2d3436" strokeWidth="1.5" />
          {/* Eyes */}
          <ellipse cx="42" cy="58" rx="4" ry="2.5" fill="#ffffff" stroke="#2d3436" strokeWidth="2" />
          <circle cx="42" cy="58" r="1.5" fill="#1A1A1A" />
          <ellipse cx="58" cy="58" rx="4" ry="2.5" fill="#ffffff" stroke="#2d3436" strokeWidth="2" />
          <circle cx="58" cy="58" r="1.5" fill="#1A1A1A" />
          {/* Mustache */}
          <path d="M 38 68 Q 50 63 62 68 Q 50 72 38 68" fill="#1A1A1A" stroke="#2d3436" strokeWidth="1.5" />
          {/* Lips */}
          <path d="M 45 74 Q 50 80 55 74 Z" fill="#ffffff" stroke="#2d3436" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 5. Floating Female Ondel-Ondel (Face White) on Left */}
      <div className="bg-decorator dec-ondel-female-left">
        <svg viewBox="0 0 100 120" width="80" height="96">
          <circle cx="50" cy="55" r="42" fill="#F5EFE4" stroke="#2d3436" strokeWidth="3" />
          {/* Crown */}
          <path d="M 25 35 L 20 12 L 32 18 L 30 3 L 42 16 L 50 0 L 58 16 L 70 3 L 68 18 L 80 12 L 75 35 Z" fill="#E5A93B" stroke="#2d3436" strokeWidth="2.5" strokeLinejoin="round" />
          {/* Hair */}
          <path d="M 25 45 C 25 25 75 25 75 45 L 75 85 C 75 85 50 90 25 85 Z" fill="#1A1A1A" stroke="#2d3436" strokeWidth="3" />
          {/* Face (Female: White) */}
          <path d="M 32 50 C 32 40 68 40 68 50 L 65 80 C 65 85 35 85 35 80 Z" fill="#FAFBF7" stroke="#2d3436" strokeWidth="3" />
          {/* Crown flowers */}
          <circle cx="35" cy="38" r="4" fill="#2E7D32" stroke="#2d3436" strokeWidth="1.5" />
          <circle cx="50" cy="36" r="4" fill="#D32F2F" stroke="#2d3436" strokeWidth="1.5" />
          <circle cx="65" cy="38" r="4" fill="#E5A93B" stroke="#2d3436" strokeWidth="1.5" />
          {/* Eyes */}
          <ellipse cx="42" cy="58" rx="4" ry="2.5" fill="#ffffff" stroke="#2d3436" strokeWidth="2" />
          <circle cx="42" cy="58" r="1.5" fill="#1A1A1A" />
          <ellipse cx="58" cy="58" rx="4" ry="2.5" fill="#ffffff" stroke="#2d3436" strokeWidth="2" />
          <circle cx="58" cy="58" r="1.5" fill="#1A1A1A" />
          {/* Cheeks */}
          <circle cx="38" cy="68" r="3.5" fill="#ff7675" opacity="0.65" />
          <circle cx="62" cy="68" r="3.5" fill="#ff7675" opacity="0.65" />
          {/* Lips */}
          <path d="M 45 72 Q 50 78 55 72 Z" fill="#D32F2F" stroke="#2d3436" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 6. Floating Kembang Kelapa 1 on Right */}
      <div className="bg-decorator dec-kembang-kelapa-1">
        <svg viewBox="0 0 60 100" width="40" height="66">
          <line x1="30" y1="100" x2="30" y2="30" stroke="#2d3436" strokeWidth="3" />
          {/* Spikes */}
          <path d="M 30 30 L 10 10 M 30 30 L 50 10 M 30 30 L 5 25 M 30 30 L 55 25 M 30 30 L 8 45 M 30 30 L 52 45" stroke="#2d3436" strokeWidth="2.5" strokeLinecap="round" />
          {/* Colorful dots */}
          <circle cx="10" cy="10" r="4" fill="#D32F2F" stroke="#2d3436" strokeWidth="1" />
          <circle cx="50" cy="10" r="4" fill="#F57C00" stroke="#2d3436" strokeWidth="1" />
          <circle cx="5" cy="25" r="4" fill="#2E7D32" stroke="#2d3436" strokeWidth="1" />
          <circle cx="55" cy="25" r="4" fill="#E5A93B" stroke="#2d3436" strokeWidth="1" />
          {/* Center */}
          <circle cx="30" cy="30" r="8" fill="#E5A93B" stroke="#2d3436" strokeWidth="2" />
        </svg>
      </div>

      {/* 7. Floating Kembang Kelapa 2 on Left */}
      <div className="bg-decorator dec-kembang-kelapa-2">
        <svg viewBox="0 0 60 100" width="40" height="66">
          <line x1="30" y1="100" x2="30" y2="30" stroke="#2d3436" strokeWidth="3" />
          {/* Spikes */}
          <path d="M 30 30 L 10 10 M 30 30 L 50 10 M 30 30 L 5 25 M 30 30 L 55 25 M 30 30 L 8 45 M 30 30 L 52 45" stroke="#2d3436" strokeWidth="2.5" strokeLinecap="round" />
          {/* Colorful dots */}
          <circle cx="10" cy="10" r="4" fill="#E5A93B" stroke="#2d3436" strokeWidth="1" />
          <circle cx="50" cy="10" r="4" fill="#2E7D32" stroke="#2d3436" strokeWidth="1" />
          <circle cx="5" cy="25" r="4" fill="#F57C00" stroke="#2d3436" strokeWidth="1" />
          <circle cx="55" cy="25" r="4" fill="#D32F2F" stroke="#2d3436" strokeWidth="1" />
          {/* Center */}
          <circle cx="30" cy="30" r="8" fill="#2E7D32" stroke="#2d3436" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

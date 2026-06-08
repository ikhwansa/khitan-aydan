import React from 'react';

export default function StaticBackground() {
  return (
    <div className="static-bg-container">
      {/* Top Left Spider Web */}
      <div className="bg-decorator dec-web-top-left">
        <svg viewBox="0 0 100 100" width="120" height="120">
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
      <div className="bg-decorator dec-cloud-top-right">
        <svg viewBox="0 0 100 60" width="130" height="78">
          <path d="M 20 40 A 12 12 0 0 1 36 28 A 16 16 0 0 1 68 28 A 12 12 0 0 1 84 40 L 84 42 A 8 8 0 0 1 76 50 L 24 50 A 8 8 0 0 1 16 42 Z" fill="#ffffff" stroke="#2d3436" strokeWidth="4" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Cute Left Hanging Spider */}
      <div className="bg-decorator dec-spider-left">
        <svg viewBox="0 0 100 150" width="50" height="75">
          <line x1="50" y1="0" x2="50" y2="90" stroke="#2d3436" strokeWidth="3.5" />
          <circle cx="50" cy="100" r="14" fill="#2d3436" />
          <circle cx="50" cy="118" r="8" fill="#2d3436" />
          <circle cx="47" cy="118" r="1.5" fill="#ffffff" />
          <circle cx="53" cy="118" r="1.5" fill="#ffffff" />
          <path d="M 36 95 Q 26 85 24 95 M 36 100 Q 22 95 20 105 M 36 105 Q 24 110 26 120 M 64 95 Q 74 85 76 95 M 64 100 Q 78 95 80 105 M 64 105 Q 76 110 74 120" fill="none" stroke="#2d3436" strokeWidth="3" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Spiderman Mask Sticker on the Right */}
      <div className="bg-decorator dec-spidey-right">
        <svg viewBox="0 0 100 120" width="75" height="90">
          <path d="M 50 10 C 20 10 10 50 10 75 C 10 100 35 115 50 115 C 65 115 90 100 90 75 C 90 50 80 10 50 10 Z" fill="#ff7675" stroke="#2d3436" strokeWidth="5" strokeLinejoin="round" />
          <path d="M 50 10 L 50 115" stroke="#2d3436" strokeWidth="2.5" />
          <path d="M 10 75 L 90 75" stroke="#2d3436" strokeWidth="2.5" />
          <path d="M 20 30 L 80 100" stroke="#2d3436" strokeWidth="2" />
          <path d="M 80 30 L 20 100" stroke="#2d3436" strokeWidth="2" />
          <path d="M 35 45 Q 50 55 65 45" fill="none" stroke="#2d3436" strokeWidth="2" />
          <path d="M 25 60 Q 50 75 75 60" fill="none" stroke="#2d3436" strokeWidth="2" />
          <path d="M 20 75 Q 50 95 80 75" fill="none" stroke="#2d3436" strokeWidth="2" />
          <path d="M 18 55 C 25 50 38 50 45 68 C 35 75 25 72 18 55 Z" fill="#ffffff" stroke="#2d3436" strokeWidth="5" strokeLinejoin="round" />
          <path d="M 82 55 C 75 50 62 50 55 68 C 65 75 75 72 82 55 Z" fill="#ffffff" stroke="#2d3436" strokeWidth="5" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

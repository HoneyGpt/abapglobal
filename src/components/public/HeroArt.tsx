import React from 'react';

const HeroArt = () => {
  return (
    <svg 
      className="hero-art"
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 4px 15px rgba(212, 175, 55, 0.4))', animation: 'fadeInUp 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) both' }}
    >
      <g stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Outer Mandala Circles */}
        <circle cx="100" cy="100" r="90" strokeDasharray="4 4" opacity="0.6"/>
        <circle cx="100" cy="100" r="82" opacity="0.8"/>
        <circle cx="100" cy="100" r="74" strokeDasharray="2 6"/>
        
        {/* Arch/Prabhavali */}
        <path d="M 40 100 C 40 30, 160 30, 160 100" fill="none" />
        <path d="M 50 100 C 50 45, 150 45, 150 100" fill="none" opacity="0.7"/>
        
        {/* Central Figure Abstraction (Deity) */}
        <path d="M 100 45 L 100 65" strokeWidth="2"/> {/* Crown top */}
        <path d="M 90 65 Q 100 55 110 65 L 115 85 Q 100 95 85 85 Z" fill="rgba(212, 175, 55, 0.1)"/> {/* Face/Crown */}
        
        {/* Torso & Ornamentation */}
        <path d="M 85 85 Q 100 100 115 85" opacity="0.8"/> {/* Necklace */}
        <path d="M 80 95 Q 100 115 120 95" opacity="0.6"/> {/* Garland */}
        <path d="M 75 105 Q 100 135 125 105" opacity="0.4"/> {/* Long Garland */}
        
        {/* Body Outline */}
        <path d="M 85 85 L 75 130 C 75 140, 125 140, 125 130 L 115 85" fill="rgba(212, 175, 55, 0.05)"/>
        
        {/* Posture (Yoga Patta representation) */}
        <path d="M 60 120 C 70 130, 85 130, 90 145" /> 
        <path d="M 140 120 C 130 130, 115 130, 110 145" />
        <path d="M 65 135 C 100 145, 135 135, 135 135" /> {/* Belt/Band */}

        {/* Base / Lotus Peetham */}
        <path d="M 80 145 L 120 145 L 130 160 L 70 160 Z" fill="rgba(212, 175, 55, 0.1)"/>
        <path d="M 70 160 C 80 170, 90 160, 100 170 C 110 160, 120 170, 130 160" />
        <path d="M 85 160 C 95 175, 105 175, 115 160" />

        {/* Mudra Hand (Right hand raised) */}
        <path d="M 75 105 Q 65 95 70 85 Q 75 80 80 95" fill="none"/>
        
        {/* Radiance / Sunburst */}
        <path d="M 100 20 L 100 10 M 100 180 L 100 190 M 20 100 L 10 100 M 180 100 L 190 100" opacity="0.5"/>
        <path d="M 43 43 L 36 36 M 157 157 L 164 164 M 43 157 L 36 164 M 157 43 L 164 36" opacity="0.5"/>
      </g>
    </svg>
  );
};

export default HeroArt;

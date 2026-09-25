import React, { useId } from 'react';

/**
 * Premium 3D Emerald & Gold Gemstone Icons for the "WE HAVE" / "У НАС Є" Card
 * Features:
 * - Glossy vibrant emerald convex disc (#00c574 / #00a862) with 3D lighting
 * - Luxury gold metallic bevel rim
 * - Crisp dimensional iconography with specular glass highlights
 * - Guaranteed rendering with unique SVG gradient IDs & solid fallbacks
 */

export const TastyHeartIcon: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => {
  const rawId = useId();
  const safeId = rawId.replace(/[^a-zA-Z0-9_-]/g, '_');
  const discGradId = `disc-green-1-${safeId}`;
  const goldRimId = `gold-rim-1-${safeId}`;
  const glossArcId = `gloss-arc-1-${safeId}`;
  const heartGlowId = `heart-glow-1-${safeId}`;

  return (
    <div className={`relative flex items-center justify-center transition-transform duration-300 hover:scale-110 select-none ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_8px_16px_rgba(0,197,116,0.35)]">
        <defs>
          <radialGradient id={discGradId} cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#15e28e" />
            <stop offset="50%" stopColor="#00c574" />
            <stop offset="85%" stopColor="#008a4d" />
            <stop offset="100%" stopColor="#005e34" />
          </radialGradient>
          <linearGradient id={goldRimId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff2b2" />
            <stop offset="40%" stopColor="#d4af37" />
            <stop offset="70%" stopColor="#c5a059" />
            <stop offset="100%" stopColor="#7a5214" />
          </linearGradient>
          <linearGradient id={glossArcId} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <radialGradient id={heartGlowId} cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#e8fdf2" />
            <stop offset="100%" stopColor="#b4f4d2" />
          </radialGradient>
        </defs>

        {/* Outer Gold Ring Bevel with solid fallback */}
        <circle cx="50" cy="50" r="47" fill="#c5a059" />
        <circle cx="50" cy="50" r="47" fill={`url(#${goldRimId})`} />

        {/* Emerald Gemstone Disc with solid fallback */}
        <circle cx="50" cy="50" r="44" fill="#009653" />
        <circle cx="50" cy="50" r="44" fill={`url(#${discGradId})`} />

        {/* Glass Dome Specular Reflection on Upper Arc */}
        <ellipse cx="50" cy="28" rx="28" ry="16" fill={`url(#${glossArcId})`} pointerEvents="none" />

        {/* 3D Heart Symbol with Warm Coffee Aroma Accents */}
        <g filter="drop-shadow(0 3px 6px rgba(0, 50, 20, 0.45))">
          <path
            d="M50,74 C30,59 18,44 18,30 C18,20 26,13 36,13 C42,13 47,16 50,21 C53,16 58,13 64,13 C74,13 82,20 82,30 C82,44 70,59 50,74 Z"
            fill="#ffffff"
          />
          <path
            d="M50,74 C30,59 18,44 18,30 C18,20 26,13 36,13 C42,13 47,16 50,21 C53,16 58,13 64,13 C74,13 82,20 82,30 C82,44 70,59 50,74 Z"
            fill={`url(#${heartGlowId})`}
            stroke="#ffffff"
            strokeWidth="1.2"
          />
          {/* Subtle Heart Internal Shine */}
          <path
            d="M32,20 C28,24 26,30 27,36"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
          {/* Miniature Coffee Bean in Heart Center */}
          <ellipse cx="50" cy="38" rx="6.5" ry="9" fill="#00704a" />
          <path d="M47,30 Q53,38 47,46" stroke="#ffffff" strokeWidth="1.2" fill="none" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
};

export const FastRocketIcon: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => {
  const rawId = useId();
  const safeId = rawId.replace(/[^a-zA-Z0-9_-]/g, '_');
  const discGradId = `disc-green-2-${safeId}`;
  const goldRimId = `gold-rim-2-${safeId}`;
  const glossArcId = `gloss-arc-2-${safeId}`;

  return (
    <div className={`relative flex items-center justify-center transition-transform duration-300 hover:scale-110 select-none ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_8px_16px_rgba(0,197,116,0.35)]">
        <defs>
          <radialGradient id={discGradId} cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#15e28e" />
            <stop offset="50%" stopColor="#00c574" />
            <stop offset="85%" stopColor="#008a4d" />
            <stop offset="100%" stopColor="#005e34" />
          </radialGradient>
          <linearGradient id={goldRimId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff2b2" />
            <stop offset="40%" stopColor="#d4af37" />
            <stop offset="70%" stopColor="#c5a059" />
            <stop offset="100%" stopColor="#7a5214" />
          </linearGradient>
          <linearGradient id={glossArcId} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer Gold Ring Bevel with solid fallback */}
        <circle cx="50" cy="50" r="47" fill="#c5a059" />
        <circle cx="50" cy="50" r="47" fill={`url(#${goldRimId})`} />

        {/* Emerald Gemstone Disc with solid fallback */}
        <circle cx="50" cy="50" r="44" fill="#009653" />
        <circle cx="50" cy="50" r="44" fill={`url(#${discGradId})`} />

        {/* Glass Dome Specular Reflection on Upper Arc */}
        <ellipse cx="50" cy="28" rx="28" ry="16" fill={`url(#${glossArcId})`} pointerEvents="none" />

        {/* 3D Fast Rocket / Lightning Speed Symbol */}
        <g filter="drop-shadow(0 3px 6px rgba(0, 50, 20, 0.45))" transform="translate(4, -2)">
          {/* Speed Stream Lines */}
          <path d="M22,66 L12,74" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
          <path d="M30,72 L22,80" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
          <path d="M40,76 L34,84" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />

          {/* Rocket Body */}
          <path
            d="M68,16 C68,16 64,34 50,48 C42,56 36,60 30,62 L26,56 C28,50 32,44 40,36 C54,22 68,16 68,16 Z"
            fill="#ffffff"
          />
          {/* Wings */}
          <path d="M26,56 L18,60 L24,48 Z" fill="#fff3bf" />
          <path d="M40,36 L52,42 L48,54 Z" fill="#d4af37" />
          {/* Porthole */}
          <circle cx="48" cy="34" r="5" fill="#00704a" />
          <circle cx="47" cy="33" r="2" fill="#ffffff" />
          {/* Rocket Exhaust Flame */}
          <polygon points="26,62 16,66 22,58" fill="#ffd166" />
          <polygon points="23,61 14,64 20,59" fill="#ff7043" />
        </g>
      </svg>
    </div>
  );
};

export const AvailableCashIcon: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => {
  const rawId = useId();
  const safeId = rawId.replace(/[^a-zA-Z0-9_-]/g, '_');
  const discGradId = `disc-green-3-${safeId}`;
  const goldRimId = `gold-rim-3-${safeId}`;
  const glossArcId = `gloss-arc-3-${safeId}`;
  const goldCoinId = `gold-coin-${safeId}`;

  return (
    <div className={`relative flex items-center justify-center transition-transform duration-300 hover:scale-110 select-none ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_8px_16px_rgba(0,197,116,0.35)]">
        <defs>
          <radialGradient id={discGradId} cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#15e28e" />
            <stop offset="50%" stopColor="#00c574" />
            <stop offset="85%" stopColor="#008a4d" />
            <stop offset="100%" stopColor="#005e34" />
          </radialGradient>
          <linearGradient id={goldRimId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff2b2" />
            <stop offset="40%" stopColor="#d4af37" />
            <stop offset="70%" stopColor="#c5a059" />
            <stop offset="100%" stopColor="#7a5214" />
          </linearGradient>
          <linearGradient id={glossArcId} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={goldCoinId} x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#fff2b2" />
            <stop offset="75%" stopColor="#ffd166" />
            <stop offset="100%" stopColor="#d4af37" />
          </linearGradient>
        </defs>

        {/* Outer Gold Ring Bevel with solid fallback */}
        <circle cx="50" cy="50" r="47" fill="#c5a059" />
        <circle cx="50" cy="50" r="47" fill={`url(#${goldRimId})`} />

        {/* Emerald Gemstone Disc with solid fallback */}
        <circle cx="50" cy="50" r="44" fill="#009653" />
        <circle cx="50" cy="50" r="44" fill={`url(#${discGradId})`} />

        {/* Glass Dome Specular Reflection on Upper Arc */}
        <ellipse cx="50" cy="28" rx="28" ry="16" fill={`url(#${glossArcId})`} pointerEvents="none" />

        {/* 3D Gold Coin with Coffee % / Star Sparkle */}
        <g filter="drop-shadow(0 3px 6px rgba(0, 50, 20, 0.45))">
          {/* Back stacked coin */}
          <circle cx="56" cy="46" r="20" fill="#c5a059" opacity="0.8" />
          {/* Front Gold Coin */}
          <circle cx="46" cy="52" r="22" fill="#ffd166" />
          <circle cx="46" cy="52" r="22" fill={`url(#${goldCoinId})`} stroke="#ffffff" strokeWidth="1.2" />
          <circle cx="46" cy="52" r="18" fill="none" stroke="#b48828" strokeWidth="1" strokeDasharray="2 2" />

          {/* Coffee percent symbol or Starbucks Star in center */}
          <text
            x="46"
            y="59"
            fontSize="20"
            fontWeight="900"
            fill="#005e34"
            textAnchor="middle"
            fontFamily="sans-serif"
          >
            %
          </text>

          {/* Sparkle Star in corner */}
          <path
            d="M68,26 L70,32 L76,34 L70,36 L68,42 L66,36 L60,34 L66,32 Z"
            fill="#ffffff"
            filter="drop-shadow(0 0 4px #ffffff)"
          />
        </g>
      </svg>
    </div>
  );
};

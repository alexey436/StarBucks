import React, { useId } from 'react';

interface ScallopedBadgeProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Mathematically precise 16-point scalloped seal rosette
 * 16 circular arc lobes centered at (50, 50) within a 100x100 viewBox.
 */
const SCALLOPED_ROSETTE_PATH =
  'M 41.81 8.81 A 9.6 9.6 0 0 1 58.19 8.81 A 9.6 9.6 0 0 1 73.33 15.08 A 9.6 9.6 0 0 1 84.92 26.67 A 9.6 9.6 0 0 1 91.19 41.81 A 9.6 9.6 0 0 1 91.19 58.19 A 9.6 9.6 0 0 1 84.92 73.33 A 9.6 9.6 0 0 1 73.33 84.92 A 9.6 9.6 0 0 1 58.19 91.19 A 9.6 9.6 0 0 1 41.81 91.19 A 9.6 9.6 0 0 1 26.67 84.92 A 9.6 9.6 0 0 1 15.08 73.33 A 9.6 9.6 0 0 1 8.81 58.19 A 9.6 9.6 0 0 1 8.81 41.81 A 9.6 9.6 0 0 1 15.08 26.67 A 9.6 9.6 0 0 1 26.67 15.08 A 9.6 9.6 0 0 1 41.81 8.81 Z';

/**
 * 16-point scalloped star rosette badge matching the exact badge in the Starbucks mockup
 * ("45%", "WE HAVE" / "У НАС Є", "+")
 * Featuring vibrant emerald gradient, embossed gold inner accent, and 3D specular sheen.
 * Guaranteed visible on all platforms & screen sizes with unique SVG defs & solid fallback.
 */
export const ScallopedBadge: React.FC<ScallopedBadgeProps> = ({
  children,
  className = '',
  size = 'md',
}) => {
  const rawId = useId();
  const safeId = rawId.replace(/[^a-zA-Z0-9_-]/g, '_');
  const scallopGradId = `scallop-grad-${safeId}`;
  const goldRimGradId = `gold-rim-${safeId}`;
  const glossSheenId = `gloss-sheen-${safeId}`;

  const sizeClasses = {
    sm: 'w-12 h-12 text-[10px]',
    md: 'w-16 h-16 sm:w-18 sm:h-18 text-xs',
    lg: 'w-20 h-20 sm:w-22 sm:h-22 text-sm',
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center font-black uppercase tracking-tight select-none transition-transform duration-300 hover:scale-110 cursor-pointer ${sizeClasses[size]} ${className}`}
      style={{
        filter: 'drop-shadow(0 10px 20px rgba(0, 197, 116, 0.45)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.55))',
      }}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full overflow-visible"
      >
        <defs>
          {/* Vibrant Emerald Rosette Gradient matching mockup */}
          <linearGradient id={scallopGradId} x1="15%" y1="0%" x2="85%" y2="100%">
            <stop offset="0%" stopColor="#15e28e" />
            <stop offset="35%" stopColor="#00c574" />
            <stop offset="75%" stopColor="#009653" />
            <stop offset="100%" stopColor="#00623b" />
          </linearGradient>

          {/* Delicate luxury gold inner ring */}
          <linearGradient id={goldRimGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff3bf" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#d4af37" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#854d0e" stopOpacity="0.9" />
          </linearGradient>

          {/* Top gloss specular highlight */}
          <linearGradient id={glossSheenId} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 1. Base solid color fill so it can NEVER be transparent or invisible */}
        <path
          d={SCALLOPED_ROSETTE_PATH}
          fill="#009653"
        />

        {/* 2. 16-point scalloped starburst rosette with vibrant emerald gradient */}
        <path
          d={SCALLOPED_ROSETTE_PATH}
          fill={`url(#${scallopGradId})`}
        />

        {/* 3. Embossed Luxury Inner Bezel Circle */}
        <circle
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke="#d4af37"
          strokeWidth="1.3"
          strokeDasharray="2 1.5"
          opacity="0.85"
        />
        <circle
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke={`url(#${goldRimGradId})`}
          strokeWidth="1.3"
          strokeDasharray="2 1.5"
          opacity="0.95"
        />

        {/* 4. Semi-circular specular glossy reflection on upper half */}
        <path
          d="M 23 45 C 23 30, 35 20, 50 20 C 65 20, 77 30, 77 45 C 65 38, 35 38, 23 45 Z"
          fill={`url(#${glossSheenId})`}
          pointerEvents="none"
        />
      </svg>

      {/* Crisp White Typography with subtle depth */}
      <div className="relative z-10 text-white text-center leading-tight font-black px-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};

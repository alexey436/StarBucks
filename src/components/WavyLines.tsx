import React, { useId } from 'react';

interface WavyLinesProps {
  className?: string;
  variant?: 'hero' | 'middle' | 'contacts';
}

/**
 * Elegant contour ribbons & aroma waves matching the Starbucks mockup.
 * Rendered with layered emerald (#00c574), champagne gold (#c5a059), and platinum lines
 * with glowing gradients and ambient depth.
 */
export const WavyLines: React.FC<WavyLinesProps> = ({
  className = '',
  variant = 'hero',
}) => {
  const rawId = useId();
  const safeId = rawId.replace(/[^a-zA-Z0-9_-]/g, '_');
  const heroEmeraldId = `hero-emerald-${safeId}`;
  const heroGoldId = `hero-gold-${safeId}`;
  const waveGlowId = `wave-glow-${safeId}`;
  const midWaveId = `mid-wave-${safeId}`;

  if (variant === 'hero') {
    return (
      <svg
        className={`pointer-events-none absolute overflow-visible ${className}`}
        width="750"
        height="480"
        viewBox="0 0 750 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={heroEmeraldId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00c574" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#10e088" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#00623b" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id={heroGoldId} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c5a059" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#fcebb6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#aa7c11" stopOpacity="0.15" />
          </linearGradient>

          <filter id={waveGlowId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Soft glowing background glow wave */}
        <path
          d="M -30 280 C 120 180, 240 380, 440 260 C 560 190, 640 320, 780 220"
          stroke={`url(#${heroEmeraldId})`}
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.3"
          filter={`url(#${waveGlowId})`}
        />

        {/* Primary Emerald Contour Wave */}
        <path
          d="M -50 250 C 110 160, 220 350, 420 240 C 540 170, 620 290, 760 190"
          stroke="#00c574"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M -50 250 C 110 160, 220 350, 420 240 C 540 170, 620 290, 760 190"
          stroke={`url(#${heroEmeraldId})`}
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Secondary Delicate Gold Ribbon */}
        <path
          d="M -40 280 C 120 190, 230 380, 430 270 C 550 200, 630 320, 770 220"
          stroke="#c5a059"
          strokeWidth="1.8"
          strokeDasharray="6 4"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M -40 280 C 120 190, 230 380, 430 270 C 550 200, 630 320, 770 220"
          stroke={`url(#${heroGoldId})`}
          strokeWidth="1.8"
          strokeDasharray="6 4"
          strokeLinecap="round"
        />

        {/* Tertiary Platinum Wave */}
        <path
          d="M -30 310 C 130 220, 240 410, 440 300 C 560 230, 640 350, 780 250"
          stroke="rgba(255, 255, 255, 0.25)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        {/* Fourth Lower Echo Wave */}
        <path
          d="M -20 340 C 140 250, 250 440, 450 330 C 570 260, 650 380, 790 280"
          stroke="#00c574"
          strokeWidth="1"
          opacity="0.5"
          strokeLinecap="round"
        />

        {/* Sparkle star nodes along wave */}
        <g fill="#ffffff" filter="drop-shadow(0 0 6px #00c574)">
          <circle cx="220" cy="350" r="2.5" />
          <circle cx="420" cy="240" r="3" />
          <circle cx="620" cy="290" r="2" />
        </g>
      </svg>
    );
  }

  if (variant === 'middle') {
    return (
      <svg
        className={`pointer-events-none absolute overflow-visible ${className}`}
        width="800"
        height="320"
        viewBox="0 0 800 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={midWaveId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00c574" stopOpacity="0.1" />
            <stop offset="40%" stopColor="#10e088" stopOpacity="0.55" />
            <stop offset="70%" stopColor="#c5a059" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00c574" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <path
          d="M 0 160 C 200 90, 360 240, 560 130 C 680 70, 740 190, 850 140"
          stroke="#00c574"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M 0 160 C 200 90, 360 240, 560 130 C 680 70, 740 190, 850 140"
          stroke={`url(#${midWaveId})`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 20 190 C 220 120, 380 270, 580 160 C 700 100, 760 220, 870 170"
          stroke={`url(#${midWaveId})`}
          strokeWidth="1.6"
          strokeDasharray="8 6"
          strokeLinecap="round"
        />
        <path
          d="M 40 220 C 240 150, 400 300, 600 190 C 720 130, 780 250, 890 200"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // variant === 'contacts'
  return (
    <svg
      className={`pointer-events-none absolute overflow-visible ${className}`}
      width="600"
      height="300"
      viewBox="0 0 600 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-50 140 C 120 70, 260 220, 440 120 C 540 60, 590 170, 670 130"
        stroke="rgba(0, 197, 116, 0.4)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M-40 170 C 130 100, 270 250, 450 150 C 550 90, 600 200, 680 160"
        stroke="rgba(197, 160, 89, 0.35)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        strokeLinecap="round"
      />
    </svg>
  );
};

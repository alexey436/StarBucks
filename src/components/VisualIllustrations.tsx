import React, { useState } from 'react';
import { OLD_MONEY_IMAGES } from '../assets/images';

/**
 * Modern Cafe Interior matching the mockup (Section 2: "We make delicious")
 * Old Money Luxury style: British racing green leather booths, dark walnut paneling,
 * marble bistro tables, large bright French windows looking onto trees.
 */
export const CafeInteriorGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [imgSrc, setImgSrc] = useState(OLD_MONEY_IMAGES.cafeInterior);

  return (
    <div className={`relative overflow-hidden rounded-2xl select-none group ${className}`}>
      {/* High-Resolution Old Money Cafe Interior Photo */}
      <img
        src={imgSrc}
        alt="Інтер'єр кав'ярні Starbucks в стилі Old Money"
        onError={() => setImgSrc(OLD_MONEY_IMAGES.cafeInteriorAlt)}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      {/* Atmospheric Vignette & Emerald Tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[#004d2e]/15 mix-blend-color pointer-events-none" />

      {/* Starbucks Circular Siren Hanging Decal on Window */}
      <div className="absolute top-6 right-6 z-10 pointer-events-none drop-shadow-2xl">
        <div className="w-14 h-14 rounded-full bg-[#00623B] border-2 border-white flex items-center justify-center shadow-lg">
          <svg viewBox="0 0 100 100" className="w-10 h-10 text-white">
            <circle cx="50" cy="50" r="46" fill="#00623B" stroke="white" strokeWidth="2" />
            <polygon points="50,14 44,28 32,20 38,34 50,34 62,34 68,20 56,28" fill="white" />
            <ellipse cx="50" cy="46" rx="9" ry="12" fill="white" />
            <path d="M 24,38 C 12,48 16,74 30,82 C 22,68 26,50 34,42 Z" fill="white" />
            <path d="M 76,38 C 88,48 84,74 70,82 C 78,68 74,50 66,42 Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
};

/**
 * Cooking Process / Barista Action Card Visual
 * Old Money style: Dark espresso bar, brass fixtures, barista pouring velvety latte art.
 */
export const CookingProcessGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-xl select-none group ${className}`}>
      <img
        src={OLD_MONEY_IMAGES.cookingProcess}
        alt="Процес приготування кави бариста"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      {/* Dark warm coffee overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      
      {/* Subtle gold luxury rim */}
      <div className="absolute inset-0 border border-[#c5a059]/30 rounded-xl pointer-events-none" />
    </div>
  );
};

/**
 * Classical Building Facade with Starbucks Projecting Sign (Section 5: "Our Contacts")
 * Old Money style: Neoclassical limestone architecture, wrought iron brackets,
 * projecting circular illuminated Starbucks green emblem.
 */
export const StarbucksSignGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [imgSrc, setImgSrc] = useState(OLD_MONEY_IMAGES.contactsFacade);

  return (
    <div className={`relative overflow-hidden rounded-2xl select-none group ${className}`}>
      <img
        src={imgSrc}
        alt="Фасад кав'ярні Starbucks в класичній будівлі"
        onError={() => setImgSrc(OLD_MONEY_IMAGES.contactsFacadeAlt)}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      {/* Neoclassical Warm Light Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10 pointer-events-none" />
      <div className="absolute inset-0 bg-[#004d2e]/10 mix-blend-multiply pointer-events-none" />

      {/* Projected Wrought Iron Starbucks Sign overlay matching mockup location */}
      <div className="absolute top-1/3 left-8 sm:left-12 z-10 flex items-center drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]">
        {/* Wrought Iron Mounting Arm */}
        <div className="w-8 h-2 bg-[#18181b] border-t border-b border-[#3f3f46]" />
        
        {/* Glowing Circular Starbucks Sign */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#00623B] border-4 border-white/90 shadow-[0_0_25px_rgba(0,168,98,0.7)] flex items-center justify-center animate-pulse">
          <svg viewBox="0 0 100 100" className="w-14 h-14 sm:w-16 sm:h-16 text-white">
            <circle cx="50" cy="50" r="46" fill="#00623B" stroke="white" strokeWidth="2.5" />
            <polygon points="50,14 44,28 32,20 38,34 50,34 62,34 68,20 56,28" fill="white" />
            <ellipse cx="50" cy="46" rx="9" ry="12" fill="white" />
            <path d="M 24,38 C 12,48 16,74 30,82 C 22,68 26,50 34,42 Z" fill="white" />
            <path d="M 76,38 C 88,48 84,74 70,82 C 78,68 74,50 66,42 Z" fill="white" />
          </svg>
          <div className="absolute inset-0 rounded-full border border-[#c5a059]/40 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

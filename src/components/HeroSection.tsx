import React from 'react';
import { ScallopedBadge } from './ScallopedBadge';
import { WavyLines } from './WavyLines';
import { TastyHeartIcon, FastRocketIcon, AvailableCashIcon } from './FeatureIcons';
import { REAL_COFFEE_IMAGES } from '../assets/images';

interface HeroSectionProps {
  onSelectCoffee: () => void;
  onMoreDetails: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectCoffee,
  onMoreDetails,
}) => {
  return (
    <section id="home" className="relative pt-6 pb-20 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background Ambient Lighting Halos */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00c574]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#c5a059]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Wavy Contour Lines flowing behind cup */}
      <div className="absolute right-0 top-1/6 pointer-events-none hidden md:block">
        <WavyLines variant="hero" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Grid: Left is Content, Right is Cup (On mobile Cup is on top, matching mockup) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* MOBILE ONLY: Real Starbucks Cup tilted with glowing halo */}
          <div className="flex md:hidden flex-col items-center justify-center relative py-6">
            <div className="relative group">
              {/* Radial Emerald Glow Halo */}
              <div className="absolute -inset-6 bg-[#00c574]/40 blur-3xl rounded-full scale-110 pointer-events-none animate-pulse-halo" />
              <div className="absolute -inset-2 bg-[#c5a059]/25 blur-xl rounded-full pointer-events-none" />

              {/* Real Cup Image Card tilted to match mockup */}
              <div
                onClick={onSelectCoffee}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onSelectCoffee()}
                title="Перейти до меню кави"
                className="relative w-64 h-88 rounded-[36px] overflow-hidden shadow-2xl border-2 border-white/25 transform -rotate-6 transition-all duration-500 hover:rotate-0 cursor-pointer"
              >
                <img
                  src={REAL_COFFEE_IMAGES.heroCup}
                  alt="Справжній стаканчик Starbucks з фірмовою кавою"
                  className="w-full h-full object-cover"
                />
                
                {/* Diagonal Glass Specular Highlight Streak */}
                <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/20 to-transparent rotate-45 pointer-events-none" />
                
                {/* Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
                
                {/* Cup Label at bottom matching mockup */}
                <div className="absolute bottom-5 left-4 right-4 text-center">
                  <span className="text-[10px] uppercase tracking-widest text-[#00c574] font-black block mb-0.5">
                    Starbucks Signature
                  </span>
                  <span className="text-base font-black text-white">
                    Pumpkin Spice Crème
                  </span>
                </div>
              </div>

              {/* Mobile Scalloped Rosette Badge with '-45%' Discount */}
              <div className="absolute -top-4 -right-3 z-20">
                <ScallopedBadge size="md">
                  <span className="text-xs font-black tracking-tight">-45%</span>
                </ScallopedBadge>
              </div>
            </div>

            {/* Wavy lines for mobile */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
              <WavyLines variant="hero" className="scale-75 opacity-50" />
            </div>
          </div>

          {/* Text and Actions Column (md:col-span-7) */}
          <div className="md:col-span-7 flex flex-col justify-center z-10">
            {/* Old Money Tagline with Gold Hairline Rule */}
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-8 h-[1px] bg-gradient-to-r from-[#c5a059] to-transparent" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#c5a059] flex items-center gap-1.5">
                <span className="text-[10px] text-[#00c574]">✦</span>
                <span>Преміальна кава свіжого обсмаження</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] text-white">
              Нова кав'ярня <br />
              від <span className="text-[#00c574] drop-shadow-[0_0_25px_rgba(0,197,116,0.35)]">Starbucks</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-sm sm:text-base lg:text-lg text-gray-300 max-w-xl leading-relaxed font-normal">
              Встигніть скуштувати найгармонійніші напої в новій кав'ярні Starbucks та не забудьте про вигідну знижку!
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectCoffee();
                }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00c574] to-[#00a862] hover:from-[#15e28e] hover:to-[#00c574] text-white font-extrabold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-[#00c574]/35 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2 border border-white/20 select-none"
              >
                <span>Обрати каву</span>
                <span className="text-xs bg-white/25 px-2 py-0.5 rounded-full font-bold">Меню</span>
              </a>
              <a
                href="#events"
                onClick={(e) => {
                  e.preventDefault();
                  onMoreDetails();
                }}
                className="px-8 py-4 rounded-full bg-[#161c18]/90 hover:bg-[#202722] text-gray-200 hover:text-white font-bold text-sm sm:text-base border border-white/15 hover:border-[#c5a059]/50 transition-all duration-300 cursor-pointer shadow-lg backdrop-blur-sm select-none"
              >
                Детальніше
              </a>
            </div>

            {/* Metrics Statistics Row */}
            <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-8 sm:gap-14">
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white flex items-baseline">
                  9k<span className="text-[#00c574] text-2xl sm:text-3xl ml-0.5 font-bold">+</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-medium mt-1">
                  Преміум гостей
                </div>
              </div>
              <div className="border-l border-white/10 pl-6 sm:pl-10">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white flex items-baseline">
                  2k<span className="text-[#00c574] text-2xl sm:text-3xl ml-0.5 font-bold">+</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-medium mt-1">
                  Щасливих клієнтів
                </div>
              </div>
              <div className="border-l border-white/10 pl-6 sm:pl-10">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white flex items-baseline">
                  28<span className="text-[#00c574] text-2xl sm:text-3xl ml-0.5 font-bold">+</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-medium mt-1">
                  Отриманих нагород
                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP ONLY: Large Real Hero Cup with Premium Visual Effects (md:col-span-5) */}
          <div className="hidden md:flex md:col-span-5 relative items-center justify-center">
            <div className="relative group">
              
              {/* 1. Multi-layered Radiant Emerald & Gold Ambient Glow Halo */}
              <div className="absolute -inset-10 bg-[#00c574]/40 blur-[80px] rounded-full scale-110 pointer-events-none animate-pulse-halo" />
              <div className="absolute -inset-4 bg-[#c5a059]/20 blur-[50px] rounded-full pointer-events-none" />

              {/* 2. Floating Steam / Aroma Swirls above the cup lid */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-32 h-20 pointer-events-none z-20 flex justify-center gap-3">
                <div className="w-1.5 h-16 bg-gradient-to-t from-white/40 via-white/20 to-transparent rounded-full filter blur-[2px] animate-steam-1" />
                <div className="w-2 h-20 bg-gradient-to-t from-white/50 via-white/25 to-transparent rounded-full filter blur-[2px] animate-steam-2" />
                <div className="w-1.5 h-14 bg-gradient-to-t from-white/40 via-white/15 to-transparent rounded-full filter blur-[2px] animate-steam-3" />
              </div>

              {/* 3. Floating 3D Coffee Beans & Sparkle Accents with Depth Blur */}
              <div className="absolute -top-6 -left-8 z-30 pointer-events-none animate-sparkle-drift">
                <div className="text-lg text-[#ffd166] drop-shadow-[0_0_8px_#ffd166]">✦</div>
              </div>
              <div className="absolute bottom-16 -right-8 z-30 pointer-events-none animate-sparkle-drift" style={{ animationDelay: '1.5s' }}>
                <div className="text-sm text-[#00c574] drop-shadow-[0_0_8px_#00c574]">✦</div>
              </div>
              
              {/* Floating Coffee Bean Accent (Left) */}
              <div className="absolute top-28 -left-12 z-20 pointer-events-none filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)] transform -rotate-45">
                <svg width="36" height="48" viewBox="0 0 36 48" fill="none">
                  <ellipse cx="18" cy="24" rx="14" ry="20" fill="#3d2314" stroke="#5a3825" strokeWidth="1.5" />
                  <path d="M18 6 C20 18, 14 30, 18 42" stroke="#1f1109" strokeWidth="2.5" strokeLinecap="round" />
                  <ellipse cx="12" cy="16" rx="4" ry="7" fill="#6d442c" opacity="0.5" />
                </svg>
              </div>

              {/* Floating Coffee Bean Accent (Right bottom) */}
              <div className="absolute -bottom-4 right-10 z-20 pointer-events-none filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)] transform rotate-25">
                <svg width="28" height="38" viewBox="0 0 28 38" fill="none">
                  <ellipse cx="14" cy="19" rx="11" ry="16" fill="#321b0e" stroke="#4d2c18" strokeWidth="1.2" />
                  <path d="M14 5 C16 14, 12 24, 14 33" stroke="#190d07" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              {/* 4. Real Starbucks Cup in Tilted Showcase Card with 3D Float Animation */}
              <div
                onClick={onSelectCoffee}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onSelectCoffee()}
                title="Перейти до меню кави"
                className="relative w-84 h-[480px] rounded-[44px] overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8)] border-2 border-white/25 transform -rotate-6 transition-all duration-700 hover:rotate-0 hover:scale-105 group cursor-pointer animate-float-hero"
              >
                
                {/* Real High-Resolution Photo of Starbucks Cup */}
                <img
                  src={REAL_COFFEE_IMAGES.heroCup}
                  alt="Справжній стаканчик Starbucks Pumpkin Spice Crème"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Diagonal Specular Sheen Reflex Overlay */}
                <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/15 to-transparent rotate-45 pointer-events-none" />

                {/* Vignette Gradient for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                {/* Cup Label at bottom matching mockup */}
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#00c574]/20 border border-[#00c574]/40 backdrop-blur-sm mb-2">
                    <span className="text-[11px] uppercase tracking-widest text-[#00c574] font-black">
                      Starbucks Signature
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white tracking-tight">
                    Pumpkin Spice Crème
                  </h3>
                  <p className="text-xs text-gray-300 mt-1">
                    Справжній стаканчик осіннього меню
                  </p>
                </div>
              </div>
              
              {/* 5. Scalloped Rosette Badge with "-45%" positioned at top right */}
              <div className="absolute -top-7 -right-5 z-30">
                <ScallopedBadge size="lg">
                  <span className="text-lg font-black tracking-tight">-45%</span>
                </ScallopedBadge>
              </div>

            </div>
          </div>
        </div>

        {/* Feature White Card: "WE HAVE" / "У НАС Є" */}
        <div className="mt-16 sm:mt-24 relative w-full max-w-4xl">
          {/* Ambient Emerald & Gold Halo behind the card */}
          <div className="absolute -inset-3 bg-gradient-to-r from-[#00c574]/20 via-[#c5a059]/15 to-[#00c574]/20 rounded-[44px] blur-2xl pointer-events-none opacity-80" />

          {/* Scalloped "У НАС Є" Badge on top-left of the card */}
          <div className="absolute -top-7 sm:-top-9 left-6 sm:left-10 z-30">
            <ScallopedBadge size="md">
              <span className="text-[11px] sm:text-xs font-black leading-tight tracking-tight uppercase block">
                У НАС<br />Є
              </span>
            </ScallopedBadge>
          </div>

          {/* White Card Surface with Luxury Drop Shadow & Crisp Borders */}
          <div className="bg-white text-gray-900 rounded-[36px] p-6 sm:p-9 pt-11 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)] border border-white/60 relative z-10 transition-all">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 items-center text-center">
              
              {/* Feature 1: Смачно */}
              <div className="flex flex-col items-center group">
                <TastyHeartIcon className="w-18 h-18 mb-3" />
                <h4 className="text-lg font-black text-gray-900 tracking-tight group-hover:text-[#00a862] transition-colors">
                  Смачно
                </h4>
                <p className="text-xs text-gray-500 mt-1.5 max-w-[210px] leading-relaxed font-medium">
                  У нас найсмачніша та найсвіжіша авторська кава від найкращих бариста
                </p>
              </div>

              {/* Feature 2: Швидко */}
              <div className="flex flex-col items-center border-t sm:border-t-0 sm:border-l sm:border-r border-gray-100 pt-5 sm:pt-0 group">
                <FastRocketIcon className="w-18 h-18 mb-3" />
                <h4 className="text-lg font-black text-gray-900 tracking-tight group-hover:text-[#00a862] transition-colors">
                  Швидко
                </h4>
                <p className="text-xs text-gray-500 mt-1.5 max-w-[210px] leading-relaxed font-medium">
                  Наше кафе обслужить вас швидко та без черг у будь-який час доби
                </p>
              </div>

              {/* Feature 3: Доступно */}
              <div className="flex flex-col items-center border-t sm:border-t-0 border-gray-100 pt-5 sm:pt-0 group">
                <AvailableCashIcon className="w-18 h-18 mb-3" />
                <h4 className="text-lg font-black text-gray-900 tracking-tight group-hover:text-[#00a862] transition-colors">
                  Доступно
                </h4>
                <p className="text-xs text-gray-500 mt-1.5 max-w-[210px] leading-relaxed font-medium">
                  Кав'ярня запропонує найприємніші ціни, регулярні бонуси та кешбек
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { CafeInteriorGraphic, CookingProcessGraphic } from './VisualIllustrations';
import { ScallopedBadge } from './ScallopedBadge';
import { WavyLines } from './WavyLines';

interface WeMakeSectionProps {
  onOpenCookingProcess: () => void;
}

export const WeMakeSection: React.FC<WeMakeSectionProps> = ({ onOpenCookingProcess }) => {
  return (
    <section id="we-make" className="relative py-20 sm:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#00c574]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-[#c5a059]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Wavy Lines flowing across */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
        <WavyLines variant="middle" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Cafe Interior Photo with Offset Frame & Badges (lg:col-span-6) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md sm:max-w-lg">
              
              {/* Radial Emerald Glow behind the frame */}
              <div className="absolute -inset-8 bg-[#00c574]/30 blur-3xl rounded-full scale-105 pointer-events-none" />

              {/* Offset Dark Green Frame Layer */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-[#00623b] to-[#003820] rounded-[36px] -rotate-2 -z-10 opacity-95 transition-transform duration-700 hover:rotate-0 shadow-2xl border border-white/10" />

              {/* Main Photo Card */}
              <div className="relative rounded-[32px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border-2 border-white/15 aspect-[4/5] sm:aspect-[4/4.8]">
                <CafeInteriorGraphic className="w-full h-full" />
              </div>

              {/* Scalloped "У НАС Є" Badge on top-right of the photo */}
              <div className="absolute -top-6 -right-3 sm:-top-7 sm:-right-4 z-20">
                <ScallopedBadge size="md">
                  <span className="text-[11px] sm:text-xs font-black leading-tight tracking-tight uppercase block">
                    У НАС<br />Є
                  </span>
                </ScallopedBadge>
              </div>

              {/* Floating "Cooking Process" Card at bottom-right */}
              <div
                onClick={onOpenCookingProcess}
                className="absolute -bottom-6 right-2 sm:-bottom-8 sm:-right-6 z-20 w-56 sm:w-68 bg-[#141a16]/95 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] cursor-pointer group transition-all duration-300 hover:scale-105 hover:border-[#00c574]"
              >
                <div className="relative h-26 sm:h-30 rounded-xl overflow-hidden mb-2.5">
                  <CookingProcessGraphic className="w-full h-full" />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00c574] to-[#00a862] text-white flex items-center justify-center shadow-lg shadow-[#00c574]/40 group-hover:scale-110 transition-transform">
                      <span className="text-sm font-black ml-0.5">▷</span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#00c574] to-[#009653] group-hover:from-[#15e28e] group-hover:to-[#00c574] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md shadow-[#00c574]/30 cursor-pointer"
                >
                  <span>▷</span>
                  <span>Процес приготування</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Heading & Description (lg:col-span-6) */}
          <div className="lg:col-span-6 z-10 mt-8 lg:mt-0">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#c5a059]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#c5a059]">
                ✦ Майстерність Starbucks
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Ми готуємо <br />
              <span className="text-[#00c574] drop-shadow-[0_0_25px_rgba(0,197,116,0.35)]">смачно</span>
            </h2>

            <p className="mt-6 text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl font-normal">
              Лише за минулий рік ми приготували понад 100 000 замовлень для вас та ваших близьких, і зараз ми готові підкорювати нові ринки та дарувати справжню насолоду від кожної чашки.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3.5 bg-white/5 border border-white/10 rounded-2xl p-3 pr-5">
                <div className="w-12 h-12 rounded-xl bg-[#00c574]/20 border border-[#00c574]/40 flex items-center justify-center text-xl text-[#00c574] font-black">
                  100%
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Арабіка преміум-класу</div>
                  <div className="text-xs text-gray-400">Прямі поставки з Ефіопії та Колумбії</div>
                </div>
              </div>
            </div>

            {/* Mobile quick action trigger */}
            <div className="mt-8 lg:hidden">
              <button
                onClick={onOpenCookingProcess}
                className="w-full py-4 px-6 rounded-2xl bg-white/5 border border-white/15 text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                <span>▷ Дивитися відео приготування</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowUp, Instagram, ExternalLink } from 'lucide-react';

interface FooterProps {
  onSelectCoffee: () => void;
  onMoreDetails: () => void;
  onOpenCookingProcess: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCoffee,
  onMoreDetails,
  onOpenCookingProcess,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0d100f] border-t border-white/10 pt-16 pb-12 px-6 sm:px-10 lg:px-16 text-gray-400">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Logo & Tagline */}
          <div className="max-w-xs">
            <a href="#home" className="inline-flex items-center gap-1 text-2xl sm:text-3xl font-black text-white">
              <span>Star</span>
              <span className="text-[#00a862]">Bucks</span>
            </a>
            <p className="mt-4 text-xs sm:text-sm text-gray-400 leading-relaxed">
              Офіційна сторінка нової кав'ярні Starbucks в Україні. Найкращі сорти арабіки, майстерність бариста та незмінна гармонія смаку.
            </p>
          </div>

          {/* Navigation Links Columns matching screenshot */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 text-xs sm:text-sm">
            {/* Main / Головна */}
            <div>
              <h5 className="font-extrabold text-white uppercase tracking-wider mb-4">
                Головна
              </h5>
              <ul className="space-y-2.5">
                <li>
                  <button onClick={onSelectCoffee} className="hover:text-white transition-colors text-left">
                    Купити
                  </button>
                </li>
                <li>
                  <button onClick={onMoreDetails} className="hover:text-white transition-colors text-left">
                    Детальніше
                  </button>
                </li>
              </ul>
            </div>

            {/* We make / Ми робимо */}
            <div>
              <h5 className="font-extrabold text-white uppercase tracking-wider mb-4">
                Ми готуємо
              </h5>
              <ul className="space-y-2.5">
                <li>
                  <button onClick={onOpenCookingProcess} className="hover:text-white transition-colors text-left">
                    Процес
                  </button>
                </li>
                <li>
                  <a href="#we-make" className="hover:text-white transition-colors">
                    Стандарти
                  </a>
                </li>
              </ul>
            </div>

            {/* Products / Продукти */}
            <div>
              <h5 className="font-extrabold text-white uppercase tracking-wider mb-4">
                Продукти
              </h5>
              <ul className="space-y-2.5">
                <li>
                  <a href="#products" className="hover:text-white transition-colors">
                    Капучино
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition-colors">
                    Pumpkin Spice
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition-colors">
                    Швидкі напої
                  </a>
                </li>
              </ul>
            </div>

            {/* Events / Події */}
            <div>
              <h5 className="font-extrabold text-white uppercase tracking-wider mb-4">
                Події
              </h5>
              <ul className="space-y-2.5">
                <li>
                  <a href="#events" className="hover:text-white transition-colors">
                    Напої 1+1
                  </a>
                </li>
                <li>
                  <a href="#events" className="hover:text-white transition-colors">
                    Десерти
                  </a>
                </li>
                <li>
                  <a href="#events" className="hover:text-white transition-colors">
                    Екскурсії
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacts / Контакти */}
            <div>
              <h5 className="font-extrabold text-white uppercase tracking-wider mb-4">
                Контакти
              </h5>
              <ul className="space-y-2.5">
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="tel:+380999999999" className="hover:text-white transition-colors">
                    Телефон
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Scroll to Top Circle Button with green arrow ↑ */}
          <div className="flex justify-end lg:justify-start">
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full border border-white/20 hover:border-[#00a862] flex items-center justify-center text-white hover:text-[#00a862] transition-colors group"
              aria-label="Вгору"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Strip matching screenshot */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <a
            href="tel:+380999999999"
            className="text-[#00a862] hover:text-[#00c574] font-bold tracking-wider transition-colors"
          >
            +380 (99) 999-99-99
          </a>

          <div className="text-gray-400">
            © 2026 Starbucks Coffee Company. Всі права захищені.
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#00a862]/20 border border-white/10 hover:border-[#00a862] flex items-center justify-center text-gray-300 hover:text-[#00a862] transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>

        {/* Developer Attribution: monvorgestudio.com */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-center">
          <span className="text-gray-400 font-medium">
            Розроблено
          </span>
          <a
            href="https://monvorgestudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#00a862] text-white font-bold text-xs border border-white/15 hover:border-[#00a862] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#00a862]/30 group cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c574] group-hover:bg-white animate-pulse" />
            <span className="tracking-wide">monvorgestudio.com</span>
            <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
          </a>
        </div>

      </div>
    </footer>
  );
};

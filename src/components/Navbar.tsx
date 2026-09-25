import React, { useState } from 'react';
import { ShoppingBag, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onSelectCoffee: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onSelectCoffee }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Головна', href: '#home' },
    { label: 'Вибір', href: '#products' },
    { label: 'Меню', href: '#products' },
    { label: 'Події', href: '#events' },
    { label: 'Контакти', href: '#contacts' },
  ];

  return (
    <header className="relative z-40 w-full pt-6 pb-4 px-6 sm:px-10 lg:px-16 flex items-center justify-between">
      {/* Brand Logo - Zone 1: Starbucks wordmark with subtle gold star accent */}
      <a href="#home" className="inline-flex items-center gap-2 tracking-tight text-2xl sm:text-3xl font-black select-none group">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00c574] to-[#00704a] flex items-center justify-center shadow-lg shadow-[#00c574]/30 border border-white/20 group-hover:scale-105 transition-transform">
          <span className="text-white text-xs font-black">★</span>
        </div>
        <div>
          <span className="text-white">Star</span>
          <span className="text-[#00c574] drop-shadow-[0_0_12px_rgba(0,197,116,0.4)]">Bucks</span>
        </div>
      </a>

      {/* Desktop Navigation Links - Zone 2 */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-semibold text-gray-300">
        <a href="#home" className="hover:text-white transition-colors relative py-1 hover:text-[#00c574]">
          Головна
        </a>
        <a href="#products" className="hover:text-white transition-colors relative py-1 hover:text-[#00c574]">
          Вибір
        </a>
        <a href="#products" className="hover:text-white transition-colors relative py-1 hover:text-[#00c574]">
          Меню
        </a>
        <a href="#events" className="hover:text-white transition-colors relative py-1 hover:text-[#00c574]">
          Події
        </a>
        <a href="#contacts" className="hover:text-white transition-colors relative py-1 hover:text-[#00c574]">
          Контакти
        </a>
      </nav>

      {/* Zone 3: Actions (Cart & Mobile Hamburger) */}
      <div className="flex items-center gap-3">
        {/* Cart Button with glowing counter */}
        <button
          onClick={onOpenCart}
          className="relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 hover:border-[#00c574]/50 cursor-pointer shadow-md"
          aria-label="Кошик замовлень"
        >
          <ShoppingBag className="w-5 h-5 text-gray-200" />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gradient-to-r from-[#00c574] to-[#009653] text-[11px] font-black text-white flex items-center justify-center shadow-lg shadow-[#00c574]/50 border border-white/30">
              {cartCount}
            </span>
          )}
        </button>

        {/* Mobile Hamburger Icon (3 green bars matching the screenshot) */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden flex flex-col justify-center items-end gap-1.5 w-10 h-10 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
          aria-label="Відкрити меню"
        >
          <span className="w-6 h-0.5 bg-[#00a862] rounded-full transition-all" />
          <span className="w-4 h-0.5 bg-[#00a862] rounded-full transition-all" />
          <span className="w-5 h-0.5 bg-[#00a862] rounded-full transition-all" />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-fade-in md:hidden">
          <div className="w-4/5 max-w-xs h-full bg-[#121614] border-l border-white/10 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="text-2xl font-black">
                  <span className="text-white">Star</span>
                  <span className="text-[#00a862]">Bucks</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-4 text-base font-bold">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-[#00a862] transition-colors py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSelectCoffee();
                }}
                className="w-full py-3 rounded-full bg-[#00a862] text-white text-xs font-bold shadow-lg shadow-[#00a862]/30"
              >
                Обрати каву
              </button>
              <div className="text-xs text-gray-400 text-center">
                м. Київ · Щодня з 08:00 до 22:00
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

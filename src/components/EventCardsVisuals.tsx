import React from 'react';
import { OLD_MONEY_IMAGES } from '../assets/images';

export const TwoCoffeeGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden w-full h-full select-none ${className}`}>
      <img
        src={OLD_MONEY_IMAGES.events.twoCoffee}
        alt="Дві кави за ціною однієї"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
      <div className="absolute top-4 right-4 z-10">
        <span className="px-2.5 py-1 rounded-full bg-[#00a862]/80 text-[11px] font-black text-white shadow-md">
          1 + 1
        </span>
      </div>
    </div>
  );
};

export const KitchenTourGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden w-full h-full select-none ${className}`}>
      <img
        src={OLD_MONEY_IMAGES.events.kitchenTour}
        alt="Екскурсія на кухню та майстер-клас"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
      <div className="absolute top-4 right-4 z-10">
        <span className="px-2.5 py-1 rounded-full bg-[#c5a059]/90 text-[11px] font-black text-black shadow-md uppercase tracking-wider">
          VIP ТУР
        </span>
      </div>
    </div>
  );
};

export const FreeCoffeeGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden w-full h-full select-none ${className}`}>
      <img
        src={OLD_MONEY_IMAGES.events.freeCoffee}
        alt="Безкоштовна кава за 3 покупки"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
      <div className="absolute top-4 right-4 z-10">
        <span className="px-2.5 py-1 rounded-full bg-[#00a862] text-[10px] font-black text-white shadow-md">
          3 = 1 FREE
        </span>
      </div>
    </div>
  );
};

export const InstagramGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden w-full h-full select-none ${className}`}>
      <img
        src={OLD_MONEY_IMAGES.events.instagram}
        alt="Instagram Starbucks community"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
      <div className="absolute top-4 right-4 z-10">
        <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold text-white border border-white/20">
          @supercoffee
        </span>
      </div>
    </div>
  );
};

export const WhereChooseGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden w-full h-full select-none ${className}`}>
      <img
        src={OLD_MONEY_IMAGES.events.whyChoose}
        alt="Чому обирають нас - якість кави"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
      <div className="absolute top-4 right-4 z-10">
        <span className="px-2.5 py-1 rounded-full bg-[#00a862]/80 text-[10px] font-bold text-white">
          ★ 5.0 РЕЙТИНГ
        </span>
      </div>
    </div>
  );
};

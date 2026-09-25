import React from 'react';
import {
  TwoCoffeeGraphic,
  KitchenTourGraphic,
  FreeCoffeeGraphic,
  InstagramGraphic,
  WhereChooseGraphic,
} from './EventCardsVisuals';

export interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  promoCode?: string;
  component: React.ReactNode;
}

interface EventsSectionProps {
  onSelectEvent: (event: { id: string; title: string; description: string; promoCode?: string }) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onSelectEvent }) => {
  const events: EventItem[] = [
    {
      id: 'two-coffee',
      title: 'ДВІ КАВИ ЗА ЦІНОЮ ОДНІЄЇ',
      subtitle: 'Акція 1+1 щовівторка та щочетверга',
      description: 'Замовляйте будь-який напій з нашого меню великого розміру та отримуйте другий класичний напій (еспресо, американо або капучино) у подарунок! Насолоджуйтесь улюбленою кавою разом з друзями.',
      promoCode: 'STARBUCKS1PLUS1',
      component: <TwoCoffeeGraphic className="w-full h-full" />,
    },
    {
      id: 'kitchen-tour',
      title: 'ЕКСКУРСІЯ НА КУХНЮ',
      subtitle: 'Майстер-клас від шеф-бариста',
      description: 'Зазирніть за лаштунки Starbucks! Дізнайтеся секрети обсмажування кавових зерен, спробуйте самостійно збити ідеальну мікропінку та створити свій перший авторський лате-арт.',
      promoCode: 'BARISTA-TOUR',
      component: <KitchenTourGraphic className="w-full h-full" />,
    },
    {
      id: 'free-coffee',
      title: 'БЕЗКОШТОВНА КАВА ЗА 3 КАВИ',
      subtitle: 'Програма лояльності Starbucks Rewards',
      description: 'Купуйте 3 улюблені напої впродовж тижня, накопичуйте цифрові штампи в додатку або за номером телефону та обирайте будь-який напій сезонного меню абсолютно безкоштовно.',
      promoCode: 'REWARDS-FREE',
      component: <FreeCoffeeGraphic className="w-full h-full" />,
    },
    {
      id: 'instagram',
      title: 'НАШ INSTAGRAM',
      subtitle: 'Приєднуйтесь до нашої спільноти',
      description: 'Позначайте @supercoffee у своїх історіях та рілс з фірмовими чашками Starbucks, беріть участь у щотижневих розіграшах термокухлів та отримуйте 15% знижки на наступне замовлення.',
      promoCode: 'INSTA-STORY15',
      component: <InstagramGraphic className="w-full h-full" />,
    },
    {
      id: 'why-choose',
      title: 'ЧОМУ ОБИРАЮТЬ НАС?',
      subtitle: 'Стандарти якості світового бренду',
      description: 'Ми використовуємо лише свіжообсмажені зерна найвищого ґатунку, безкомпромісну чистоту води, екологічні стаканчики, що підлягають переробці, та даруємо посмішку кожному гостю.',
      promoCode: 'STAR-QUALITY',
      component: <WhereChooseGraphic className="w-full h-full" />,
    },
  ];

  return (
    <section id="events" className="relative py-20 sm:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00c574]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#c5a059]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header: Description on left (desktop), Title on right */}
        <div className="flex flex-col-reverse md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
              Лише за минулий рік ми приготували понад 100 000 замовлень для вас та ваших близьких, і зараз ми готові дивувати новими подіями, клубними дегустаціями та акціями.
            </p>
          </div>
          <div className="text-left md:text-right">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c5a059]">
                ✦ Клубні привілеї та акції
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Наші нові <br />
              <span className="text-[#00c574] drop-shadow-[0_0_20px_rgba(0,197,116,0.3)]">події</span>
            </h2>
          </div>
        </div>

        {/* Event Cards Grid */}
        {/* Row 1: 2 large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {events.slice(0, 2).map((ev) => (
            <div
              key={ev.id}
              className="group relative h-68 sm:h-76 rounded-[36px] overflow-hidden border border-white/15 hover:border-[#00c574]/60 transition-all duration-500 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_50px_-10px_rgba(0,197,116,0.25)] hover:-translate-y-1"
            >
              {/* Background Visual */}
              <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                {ev.component}
              </div>

              {/* Dark Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20" />

              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase leading-tight max-w-sm group-hover:text-[#00c574] transition-colors">
                    {ev.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2 line-clamp-1 font-medium">{ev.subtitle}</p>
                </div>

                <div>
                  <button
                    onClick={() =>
                      onSelectEvent({
                        id: ev.id,
                        title: ev.title,
                        description: ev.description,
                        promoCode: ev.promoCode,
                      })
                    }
                    className="py-2.5 px-6 rounded-full bg-gradient-to-r from-[#00c574] to-[#009653] hover:from-[#15e28e] hover:to-[#00c574] text-white text-xs font-bold transition-all shadow-md shadow-[#00c574]/30 active:scale-95 cursor-pointer border border-white/20"
                  >
                    Детальніше про подію
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {events.slice(2, 5).map((ev) => (
            <div
              key={ev.id}
              className="group relative h-64 sm:h-70 rounded-[36px] overflow-hidden border border-white/15 hover:border-[#00c574]/60 transition-all duration-500 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_50px_-10px_rgba(0,197,116,0.25)] hover:-translate-y-1"
            >
              <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                {ev.component}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight uppercase leading-tight group-hover:text-[#00c574] transition-colors">
                    {ev.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1.5 line-clamp-1 font-medium">{ev.subtitle}</p>
                </div>

                <div>
                  <button
                    onClick={() =>
                      onSelectEvent({
                        id: ev.id,
                        title: ev.title,
                        description: ev.description,
                        promoCode: ev.promoCode,
                      })
                    }
                    className="py-2.5 px-6 rounded-full bg-gradient-to-r from-[#00c574] to-[#009653] hover:from-[#15e28e] hover:to-[#00c574] text-white text-xs font-bold transition-all shadow-md shadow-[#00c574]/30 active:scale-95 cursor-pointer border border-white/20"
                  >
                    Детальніше
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

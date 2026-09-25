import React, { useState } from 'react';
import { ProductItem } from './Modals';
import { ChevronLeft, ChevronRight, Sparkles, Flame, Snowflake, Coffee } from 'lucide-react';
import { REAL_COFFEE_IMAGES } from '../assets/images';

interface ProductsSectionProps {
  onSelectProduct: (product: ProductItem) => void;
}

export interface ExtendedProductItem extends ProductItem {
  image: string;
  cupForm: string;
  temperature: 'hot' | 'cold';
  ingredientsTag: string;
  origin: string;
  roastLevel: string;
  glowColor: string;
}

export const PRODUCTS_DATA: ExtendedProductItem[] = [
  {
    id: 'pumpkin-spice',
    name: 'Pumpkin Spice Crème',
    description: 'Наш легендарний сезонний напій: натуральний гарбузовий соус, свіжозварений еспресо, кориця, мускатний горіх і шапка ніжних збитих вершків',
    priceUah: 195,
    priceUsd: 7.45,
    volume: '330 мл',
    badge: 'Сезонний хіт',
    category: 'Сезонні напої',
    cupForm: 'Теплий фірмовий стаканчик',
    temperature: 'hot',
    ingredientsTag: 'Гарбузовий соус · Кориця · Збиті вершки',
    origin: 'Ефіопська арабіка 100%',
    roastLevel: 'Medium Roast',
    glowColor: 'rgba(234, 138, 46, 0.35)',
    image: REAL_COFFEE_IMAGES.products.pumpkinSpice,
  },
  {
    id: 'cappuccino',
    name: 'Капучино',
    description: 'Класичний еспресо темного обсмаження з ніжним гарячим молоком та густою оксамитовою мікропінкою з лате-артом від бариста',
    priceUah: 165,
    priceUsd: 6.85,
    volume: '330 мл',
    badge: 'Класика',
    category: 'Гаряча кава',
    cupForm: 'Класичний стаканчик з кришкою',
    temperature: 'hot',
    ingredientsTag: 'Подвійний еспресо · Густа мікропінка',
    origin: 'Колумбія & Гватемала',
    roastLevel: 'Dark Roast',
    glowColor: 'rgba(212, 175, 55, 0.3)',
    image: REAL_COFFEE_IMAGES.products.cappuccino,
  },
  {
    id: 'caramel-macchiato',
    name: 'Карамель Макіато',
    description: 'Свіжозварений темний еспресо, пролитий крізь шар ванільного парового молока з фірмовим авторським візерунком із тягучої карамелі',
    priceUah: 185,
    priceUsd: 7.45,
    volume: '350 мл',
    badge: 'Топ вибір',
    category: 'Авторські напої',
    cupForm: 'Шаруватий стаканчик macchiato',
    temperature: 'hot',
    ingredientsTag: 'Ваніль · Еспресо · Золота карамель',
    origin: 'Латинська Америка Reserve',
    roastLevel: 'Espresso Roast',
    glowColor: 'rgba(217, 119, 6, 0.35)',
    image: REAL_COFFEE_IMAGES.products.caramelMacchiato,
  },
  {
    id: 'iced-matcha',
    name: 'Айс Матча Лате',
    description: 'Автентичний церемоніальний японський зелений чай матча з Кіото, збитий з охолодженим молоком та кришталевими кубиками льоду',
    priceUah: 190,
    priceUsd: 7.60,
    volume: '450 мл',
    badge: 'Освіжаюче',
    category: 'Холодні напої',
    cupForm: 'Холодний прозорий стаканчик з льодом',
    temperature: 'cold',
    ingredientsTag: 'Японська матча Uji · Лід · Свіже молоко',
    origin: 'Кіото, Японія',
    roastLevel: 'Церемоніальний сорт',
    glowColor: 'rgba(0, 197, 116, 0.35)',
    image: REAL_COFFEE_IMAGES.products.icedMatcha,
  },
  {
    id: 'espresso-roast',
    name: 'Еспресо Роаст',
    description: 'Інтенсивний і насичений шот фірмової кави темного обсмаження з нотами карамелі та шоколаду, увінчаний щільною золотавою пінкою crème',
    priceUah: 110,
    priceUsd: 4.50,
    volume: '60 мл',
    badge: 'Reserve',
    category: 'Еспресо',
    cupForm: 'Порцелянова чашка demitasse',
    temperature: 'hot',
    ingredientsTag: '100% Арабіка · Густа золотиста крема',
    origin: 'Starbucks Signature Espresso',
    roastLevel: 'Dark Roast',
    glowColor: 'rgba(180, 83, 9, 0.35)',
    image: REAL_COFFEE_IMAGES.products.espressoRoast,
  },
  {
    id: 'flat-white',
    name: 'Флет Вайт',
    description: 'Сміливий і насичений напій на основі подвійного шоту рістретто з тонким шаром шовковистого молока для справжніх поціновувачів міцної кави',
    priceUah: 175,
    priceUsd: 7.10,
    volume: '280 мл',
    badge: 'Для гурманів',
    category: 'Гаряча кава',
    cupForm: 'Стаканчик для рістретто',
    temperature: 'hot',
    ingredientsTag: 'Подвійний рістретто · Шовковисте молоко',
    origin: 'Ефіопія & Суматра',
    roastLevel: 'Medium-Dark Roast',
    glowColor: 'rgba(197, 160, 89, 0.3)',
    image: REAL_COFFEE_IMAGES.products.flatWhite,
  },
  {
    id: 'cold-brew',
    name: 'Ванільний Колд Брю',
    description: 'Кава повільного 20-годинного холодного настоювання, подана з кубиками льоду та ніжною шапкою ванільних вершків',
    priceUah: 180,
    priceUsd: 7.20,
    volume: '470 мл',
    badge: '20 год крафту',
    category: 'Холодні напої',
    cupForm: 'Великий холодний стаканчик Venti',
    temperature: 'cold',
    ingredientsTag: '20h Cold Steeped · Ванільні вершки · Лід',
    origin: 'Колумбія Nariño',
    roastLevel: 'Cold Brew Blend',
    glowColor: 'rgba(56, 189, 248, 0.25)',
    image: REAL_COFFEE_IMAGES.products.coldBrew,
  },
  {
    id: 'mocha',
    name: 'Шоколадний Мокка',
    description: 'Глибокий еспресо з фірмовим шоколадним соусом мокка, гарячим паровим молоком та шапкою свіжих збитих вершків',
    priceUah: 190,
    priceUsd: 7.50,
    volume: '350 мл',
    badge: 'Десертний',
    category: 'Авторські напої',
    cupForm: 'Стаканчик з шоколадним декором',
    temperature: 'hot',
    ingredientsTag: 'Шоколадний соус · Еспресо · Вершки',
    origin: 'Гватемала & Коста-Ріка',
    roastLevel: 'Dark Roast',
    glowColor: 'rgba(146, 64, 14, 0.35)',
    image: REAL_COFFEE_IMAGES.products.mocha,
  },
];

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectProduct }) => {
  const [scrollIndex, setScrollIndex] = useState(0);

  // Show 3 items per screen on desktop, step by 1
  const maxIndex = Math.max(0, PRODUCTS_DATA.length - 3);

  const handlePrev = () => {
    setScrollIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setScrollIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section id="products" className="relative py-20 sm:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00c574]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#c5a059]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2 text-[#00c574] text-xs sm:text-sm font-bold tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-[#ffd166]" />
              <span>✦ Справжня кава від Starbucks · Осіннє Меню</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Наші нові{' '}
              <span className="text-[#00c574] drop-shadow-[0_0_20px_rgba(0,197,116,0.3)]">продукти</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
              Кожен стаканчик унікальний за рецептурою та подачею: від легендарного Pumpkin Spice до освіжаючої японської матчі та шовковистого капучино.
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Products Cards Grid: Real Photorealistic Coffee Cups with Visual Effects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PRODUCTS_DATA.slice(scrollIndex, scrollIndex + 3).map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#111714] border border-white/10 hover:border-[#00c574]/60 rounded-[36px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_-10px_rgba(0,197,116,0.25)] hover:-translate-y-1.5 overflow-hidden backdrop-blur-md"
              >
                {/* Real Drink Photography Showcase */}
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 bg-[#080d0b] flex items-center justify-center">
                  
                  {/* Tailored Ambient Glow Halo */}
                  <div
                    className="absolute w-48 h-48 rounded-full blur-2xl group-hover:scale-130 transition-transform duration-700 pointer-events-none"
                    style={{ backgroundColor: item.glowColor }}
                  />

                  {/* Real Photo of Coffee */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Contrast Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                  {/* Temperature & Volume Tag (Top Left) */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-bold text-gray-200 flex items-center gap-1.5 shadow-md">
                      {item.temperature === 'hot' ? (
                        <Flame className="w-3 h-3 text-orange-400" />
                      ) : (
                        <Snowflake className="w-3 h-3 text-cyan-400" />
                      )}
                      <span>{item.volume}</span>
                    </span>
                  </div>

                  {/* Scalloped Badge / Tag (Top Right) */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#00c574] to-[#009653] text-[10px] font-black uppercase tracking-wider text-white shadow-lg border border-white/20">
                      {item.badge}
                    </span>
                  </div>

                  {/* Cup Form Description (Bottom Left) */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-[11px] text-gray-300 font-medium">
                    <span className="truncate max-w-[190px] bg-black/70 px-2.5 py-0.5 rounded-full border border-white/10 backdrop-blur-sm">
                      {item.cupForm}
                    </span>
                    <span className="text-[#00c574] font-black text-xs bg-black/70 px-2 py-0.5 rounded-full border border-white/10">
                      {item.roastLevel}
                    </span>
                  </div>
                </div>

                {/* Card Info & Details */}
                <div className="text-center">
                  <div className="text-[11px] text-[#c5a059] font-bold tracking-widest uppercase mb-1">
                    {item.origin}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-[#00c574] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2 line-clamp-2 min-h-[38px] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Ingredients Note */}
                  <div className="mt-3 text-[11px] text-gray-400 font-medium bg-white/5 py-1.5 px-3 rounded-full border border-white/10 truncate">
                    {item.ingredientsTag}
                  </div>

                  {/* Price & Volume Row */}
                  <div className="mt-5 flex items-center justify-center gap-4 text-sm">
                    <span className="text-2xl sm:text-3xl font-black text-white">
                      {item.priceUah} ₴
                    </span>
                    <span className="text-xs font-semibold text-gray-400">
                      ≈ ${item.priceUsd.toFixed(2)}
                    </span>
                  </div>

                  {/* Buy Button */}
                  <div className="mt-6">
                    <button
                      onClick={() => onSelectProduct(item)}
                      className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#00c574] to-[#009653] hover:from-[#15e28e] hover:to-[#00c574] text-white font-extrabold text-sm transition-all duration-300 shadow-lg shadow-[#00c574]/30 active:scale-95 flex items-center justify-center gap-2 cursor-pointer border border-white/20"
                    >
                      <Coffee className="w-4 h-4" />
                      <span>Замовити напій</span>
                      <span>·</span>
                      <span>{item.priceUah} ₴</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows matching mockup */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              disabled={scrollIndex === 0}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                scrollIndex === 0
                  ? 'border-white/10 text-gray-600 cursor-not-allowed'
                  : 'border-[#00c574] text-[#00c574] hover:bg-[#00c574] hover:text-white shadow-lg shadow-[#00c574]/20 cursor-pointer'
              }`}
              aria-label="Попередній напій"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="text-xs font-bold text-gray-400 tracking-wider">
              {scrollIndex + 1} з {PRODUCTS_DATA.length - 2}
            </div>
            <button
              onClick={handleNext}
              disabled={scrollIndex >= maxIndex}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                scrollIndex >= maxIndex
                  ? 'border-white/10 text-gray-600 cursor-not-allowed'
                  : 'border-[#00c574] text-[#00c574] hover:bg-[#00c574] hover:text-white shadow-lg shadow-[#00c574]/20 cursor-pointer'
              }`}
              aria-label="Наступний напій"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

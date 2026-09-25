import React, { useState } from 'react';
import { X, Check, Coffee, Sparkles, Clock, Heart, Volume2, ShieldCheck, AlertCircle } from 'lucide-react';
import { REAL_COFFEE_IMAGES } from '../assets/images';
import { filterNameInput, validateName, formatUkrainianPhone, validateUkrainianPhone } from '../utils/validation';

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  priceUah: number;
  priceUsd: number;
  volume: string;
  badge?: string;
  category: string;
  image?: string;
}

export interface CartItem extends ProductItem {
  quantity: number;
  selectedMilk: string;
  selectedSyrup: string;
}

interface CookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookingProcessModal: React.FC<CookingModalProps> = ({ isOpen, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);

  if (!isOpen) return null;

  const steps = [
    {
      title: '1. Добір та свіжий помел',
      desc: '100% високогірна арабіка повільного обсмаження мелеться індивідуально для кожної чашки за секунди до екстракції.',
      image: REAL_COFFEE_IMAGES.events.kitchenTour,
      duration: '15 сек',
    },
    {
      title: '2. Екстракція під тиском 18 бар',
      desc: 'Вода ідеальної мінералізації температурою 92°C розкриває багаті шоколадно-горіхові ноти з густими золотистими крема.',
      image: REAL_COFFEE_IMAGES.espressoStream,
      duration: '25 сек',
    },
    {
      title: '3. Оксамитова мікропінка',
      desc: 'Свіже фермерське молоко збивається парою до ніжної шовковистої текстури без бульбашок при оптимальній температурі 65°C.',
      image: REAL_COFFEE_IMAGES.cafeInterior,
      duration: '20 сек',
    },
    {
      title: '4. Авторська подача та декор',
      desc: 'Поєднання шарів кави та оксамитової пінки, прикрашене фірмовим візерунком та прянощами Pumpkin Spice.',
      image: REAL_COFFEE_IMAGES.cookingProcess,
      duration: '10 сек',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#161a18] border border-white/10 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#00a862]/20 text-[#00a862] flex items-center justify-center font-bold">
            ▷
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Процес приготування Starbucks</h3>
            <p className="text-xs sm:text-sm text-gray-400">Мистецтво створення кожної чашки від наших сертифікованих бариста</p>
          </div>
        </div>

        {/* Real photo showcase of the cooking process */}
        <div className="relative h-56 sm:h-64 rounded-2xl border border-[#00a862]/30 overflow-hidden mb-6 group">
          <img
            src={steps[activeStep].image}
            alt={steps[activeStep].title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
          
          <div className="absolute bottom-4 left-4 right-4">
            <h4 className="text-lg font-bold text-white mb-1">{steps[activeStep].title}</h4>
            <p className="text-xs sm:text-sm text-gray-200 line-clamp-2">{steps[activeStep].desc}</p>
            <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs text-[#00a862] font-semibold border border-[#00a862]/40">
              <Clock className="w-3.5 h-3.5" /> Час етапу: {steps[activeStep].duration}
            </div>
          </div>
        </div>

        {/* Step Tabs */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-2.5 rounded-xl text-left border transition-all text-xs font-medium ${
                activeStep === idx
                  ? 'bg-[#00a862]/20 border-[#00a862] text-white shadow-sm'
                  : 'bg-white/5 border-transparent text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <div className="font-bold truncate">Крок {idx + 1}</div>
              <div className="text-[11px] opacity-75 truncate">{s.title.split('. ')[1]}</div>
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <button
            onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
            className="px-4 py-2 text-xs font-semibold rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            ← Попередній крок
          </button>
          <button
            onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
            className="px-5 py-2 text-xs font-semibold rounded-full bg-[#00a862] text-white hover:bg-[#00c574] transition-colors"
          >
            {activeStep === steps.length - 1 ? 'Завершити перегляд' : 'Наступний крок →'}
          </button>
        </div>
      </div>
    </div>
  );
};

interface OrderModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: ProductItem, milk: string, syrup: string, size: string) => void;
}

export const OrderCoffeeModal: React.FC<OrderModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [selectedSize, setSelectedSize] = useState('330 ml');
  const [selectedMilk, setSelectedMilk] = useState('Класичне молоко');
  const [selectedSyrup, setSelectedSyrup] = useState('Без сиропу');
  const [orderedSuccess, setOrderedSuccess] = useState(false);

  if (!isOpen || !product) return null;

  const milkOptions = ['Класичне молоко', 'Вівсяне (+20 ₴)', 'Мигдальне (+25 ₴)', 'Без лактози (+15 ₴)'];
  const syrupOptions = ['Без сиропу', 'Ванільний (+15 ₴)', 'Карамельний (+15 ₴)', 'Лісовий горіх (+15 ₴)'];

  const handleOrder = () => {
    onAddToCart(product, selectedMilk, selectedSyrup, selectedSize);
    setOrderedSuccess(true);
    setTimeout(() => {
      setOrderedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#141816] border border-white/10 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-gray-400 hover:text-white transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {orderedSuccess ? (
          <div className="py-12 flex flex-col items-center text-center animate-scale-up">
            <div className="w-16 h-16 rounded-full bg-[#00a862] text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg shadow-[#00a862]/40">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Напій додано до замовлення!</h3>
            <p className="text-gray-400 text-sm">{product.name} ({selectedSize})</p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-24 h-28 rounded-2xl overflow-hidden border border-white/15 relative flex-shrink-0 bg-[#0a0d0c] shadow-lg flex items-center justify-center">
                <img
                  src={product.image || REAL_COFFEE_IMAGES.products.pumpkinSpice}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#00a862] bg-[#00a862]/10 px-2 py-0.5 rounded">
                  {product.category}
                </span>
                <h3 className="text-2xl font-extrabold mt-1">{product.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{product.description}</p>
                <div className="text-lg font-black text-[#00a862] mt-1">
                  {product.priceUah} ₴ <span className="text-xs text-gray-400 font-normal">({product.priceUsd.toFixed(2)}$)</span>
                </div>
              </div>
            </div>

            {/* Customization Options */}
            <div className="space-y-4 mb-6 text-sm">
              {/* Volume / Size */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Розмір порції
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['330 ml', '450 ml (+35 ₴)'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                        selectedSize === size
                          ? 'bg-[#00a862]/20 border-[#00a862] text-white'
                          : 'bg-white/5 border-transparent text-gray-400 hover:text-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Milk Option */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Вибір молока
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {milkOptions.map((milk) => (
                    <button
                      key={milk}
                      onClick={() => setSelectedMilk(milk)}
                      className={`py-2 px-3 rounded-xl border text-xs font-medium text-left truncate transition-all ${
                        selectedMilk === milk
                          ? 'bg-[#00a862]/20 border-[#00a862] text-white'
                          : 'bg-white/5 border-transparent text-gray-400 hover:text-white'
                      }`}
                    >
                      {milk}
                    </button>
                  ))}
                </div>
              </div>

              {/* Syrup Option */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Фірмовий сироп
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {syrupOptions.map((syrup) => (
                    <button
                      key={syrup}
                      onClick={() => setSelectedSyrup(syrup)}
                      className={`py-2 px-3 rounded-xl border text-xs font-medium text-left truncate transition-all ${
                        selectedSyrup === syrup
                          ? 'bg-[#00a862]/20 border-[#00a862] text-white'
                          : 'bg-white/5 border-transparent text-gray-400 hover:text-white'
                      }`}
                    >
                      {syrup}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleOrder}
              className="w-full py-3.5 px-6 rounded-full bg-[#00a862] hover:bg-[#00c574] text-white font-extrabold text-sm shadow-lg shadow-[#00a862]/30 transition-all flex items-center justify-center gap-2"
            >
              <span>Замовити напій</span>
              <span>·</span>
              <span>{product.priceUah} ₴</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

interface EventModalProps {
  event: {
    id: string;
    title: string;
    description: string;
    promoCode?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EventDetailsModal: React.FC<EventModalProps> = ({ event, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !event) return null;

  const handleCopy = () => {
    navigator.clipboard?.writeText(event.promoCode || 'STARBUCKS2026');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md bg-[#161a18] border border-white/10 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-[#00a862]/20 text-[#00a862] flex items-center justify-center text-2xl font-bold mb-4">
          ★
        </div>

        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-2">
          {event.title}
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          {event.description}
        </p>

        {event.promoCode && (
          <div className="p-4 rounded-2xl bg-black/40 border border-[#00a862]/30 mb-6 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Промокод для бариста:</div>
              <div className="text-lg font-mono font-bold text-[#00a862] tracking-wider">{event.promoCode}</div>
            </div>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#00a862] text-white hover:bg-[#00c574] transition-colors"
            >
              {copied ? 'Скопійовано ✓' : 'Копіювати'}
            </button>
          </div>
        )}

        <button
          onClick={onClose}
          className="w-full py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors"
        >
          Зрозуміло
        </button>
      </div>
    </div>
  );
};

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (index: number) => void;
  onClear: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemove,
  onClear,
}) => {
  const [checkoutStep, setCheckoutStep] = useState(false);
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [completed, setCompleted] = useState(false);

  if (!isOpen) return null;

  const totalUah = items.reduce((sum, item) => sum + item.priceUah * item.quantity, 0);
  const totalUsd = items.reduce((sum, item) => sum + item.priceUsd * item.quantity, 0);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitized = filterNameInput(e.target.value);
    setCustomerName(sanitized);
    if (errors.name) {
      const check = validateName(sanitized);
      if (check.isValid) setErrors((prev) => ({ ...prev, name: undefined }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!val || val.trim() === '' || val === '+') {
      setCustomerPhone('');
      return;
    }
    const formatted = formatUkrainianPhone(val);
    setCustomerPhone(formatted);
    if (errors.phone) {
      const check = validateUkrainianPhone(formatted);
      if (check.isValid) setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const handlePhoneFocus = () => {
    if (!customerPhone) {
      setCustomerPhone('+380 ');
    }
  };

  const handlePhoneBlur = () => {
    if (customerPhone === '+380 ' || customerPhone === '+380') {
      setCustomerPhone('');
      setErrors((prev) => ({ ...prev, phone: undefined }));
    } else if (customerPhone) {
      const check = validateUkrainianPhone(customerPhone);
      if (!check.isValid) {
        setErrors((prev) => ({ ...prev, phone: check.error }));
      }
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const nameCheck = validateName(customerName);
    const phoneCheck = validateUkrainianPhone(customerPhone);

    if (!nameCheck.isValid || !phoneCheck.isValid) {
      setErrors({
        name: nameCheck.error,
        phone: phoneCheck.error,
      });
      return;
    }

    setErrors({});
    setCompleted(true);
    setTimeout(() => {
      onClear();
      setCompleted(false);
      setCheckoutStep(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md h-full bg-[#121514] border-l border-white/10 p-6 flex flex-col text-white shadow-2xl overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Coffee className="w-5 h-5 text-[#00a862]" />
            <h3 className="text-xl font-bold">Ваше замовлення ({items.length})</h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {completed ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
            <div className="w-16 h-16 rounded-full bg-[#00a862] text-white flex items-center justify-center mb-4">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold mb-2">Дякуємо за замовлення!</h4>
            <p className="text-sm text-gray-400">
              Бариста вже розпочав приготування ваших напоїв. Очікуйте повідомлення на номер {customerPhone}.
            </p>
          </div>
        ) : items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-gray-400">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-3">
              <Coffee className="w-8 h-8 opacity-40" />
            </div>
            <p className="font-semibold text-white">Кошик порожній</p>
            <p className="text-xs mt-1">Оберіть найсмачнішу каву з нашого меню</p>
          </div>
        ) : !checkoutStep ? (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-xl object-cover border border-white/10 flex-shrink-0"
                      />
                    )}
                    <div>
                      <h5 className="font-bold text-sm text-white">{item.name}</h5>
                      <div className="text-[11px] text-gray-400 mt-0.5">
                        {item.volume} · {item.selectedMilk}
                      </div>
                      <div className="text-xs font-semibold text-[#00a862] mt-1">
                        {item.priceUah} ₴
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemove(idx)}
                    className="p-1.5 text-gray-500 hover:text-red-400 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Загальна сума:</span>
                <span className="text-xl font-black text-white">
                  {totalUah} ₴ <span className="text-xs text-[#00a862]">({totalUsd.toFixed(2)}$)</span>
                </span>
              </div>
              <button
                onClick={() => setCheckoutStep(true)}
                className="w-full py-3.5 rounded-full bg-[#00a862] hover:bg-[#00c574] text-white font-extrabold text-sm transition-all shadow-lg shadow-[#00a862]/30"
              >
                Перейти до оформлення
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmitOrder} className="flex-1 flex flex-col justify-between py-4" noValidate>
            <div className="space-y-4">
              <h4 className="font-bold text-base">Контактні дані для видачі</h4>
              
              <div>
                <label className="block text-xs text-gray-400 mb-1">Ваше ім'я</label>
                <input
                  type="text"
                  placeholder="Олексій"
                  value={customerName}
                  onChange={handleNameChange}
                  className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-white text-sm outline-none transition-colors ${
                    errors.name
                      ? 'border-rose-500/80 focus:border-rose-400 bg-rose-500/5'
                      : 'border-white/10 focus:border-[#00a862]'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 flex items-center gap-1 text-[11px] text-rose-400 font-medium">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1">Номер телефону</label>
                <input
                  type="tel"
                  placeholder="+380 (__) ___-__-__"
                  value={customerPhone}
                  onChange={handlePhoneChange}
                  onFocus={handlePhoneFocus}
                  onBlur={handlePhoneBlur}
                  className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-white text-sm outline-none transition-colors ${
                    errors.phone
                      ? 'border-rose-500/80 focus:border-rose-400 bg-rose-500/5'
                      : 'border-white/10 focus:border-[#00a862]'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 flex items-center gap-1 text-[11px] text-rose-400 font-medium">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              <div className="p-3 rounded-xl bg-[#00a862]/10 border border-[#00a862]/20 text-xs text-gray-300">
                Час приготування: приблизно 4-7 хвилин. Напій можна забрати біля стійки видачі за вашим ім'ям.
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/10">
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#00a862] hover:bg-[#00c574] text-white font-extrabold text-sm transition-all shadow-lg shadow-[#00a862]/30 cursor-pointer active:scale-95"
              >
                Підтвердити замовлення ({totalUah} ₴)
              </button>
              <button
                type="button"
                onClick={() => setCheckoutStep(false)}
                className="w-full py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-semibold cursor-pointer"
              >
                ← Повернутися до кошика
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

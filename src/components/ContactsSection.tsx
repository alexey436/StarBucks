import React, { useState } from 'react';
import { StarbucksSignGraphic } from './VisualIllustrations';
import { ScallopedBadge } from './ScallopedBadge';
import { WavyLines } from './WavyLines';
import { Instagram, Phone, MapPin, Clock, Send, Check, AlertCircle } from 'lucide-react';
import { filterNameInput, validateName, formatUkrainianPhone, validateUkrainianPhone } from '../utils/validation';

export const ContactsSection: React.FC = () => {
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitized = filterNameInput(e.target.value);
    setUserName(sanitized);
    if (errors.name) {
      const validation = validateName(sanitized);
      if (validation.isValid) {
        setErrors((prev) => ({ ...prev, name: undefined }));
      }
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // If the input was cleared by user
    if (!val || val.trim() === '' || val === '+') {
      setUserPhone('');
      return;
    }
    const formatted = formatUkrainianPhone(val);
    setUserPhone(formatted);
    if (errors.phone) {
      const validation = validateUkrainianPhone(formatted);
      if (validation.isValid) {
        setErrors((prev) => ({ ...prev, phone: undefined }));
      }
    }
  };

  const handlePhoneFocus = () => {
    if (!userPhone) {
      setUserPhone('+380 ');
    }
  };

  const handlePhoneBlur = () => {
    if (userPhone === '+380 ' || userPhone === '+380') {
      setUserPhone('');
      setErrors((prev) => ({ ...prev, phone: undefined }));
    } else if (userPhone) {
      const check = validateUkrainianPhone(userPhone);
      if (!check.isValid) {
        setErrors((prev) => ({ ...prev, phone: check.error }));
      }
    }
  };

  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();

    const nameCheck = validateName(userName);
    const phoneCheck = validateUkrainianPhone(userPhone);

    if (!nameCheck.isValid || !phoneCheck.isValid) {
      setErrors({
        name: nameCheck.error,
        phone: phoneCheck.error,
      });
      return;
    }

    setErrors({});
    setFeedbackSent(true);
    setTimeout(() => {
      setFeedbackSent(false);
      setFeedbackText('');
      setUserName('');
      setUserPhone('');
    }, 4000);
  };

  return (
    <section id="contacts" className="relative py-16 sm:py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Curved Wavy Lines in Contacts Background */}
      <div className="absolute right-1/4 bottom-1/4 pointer-events-none hidden lg:block">
        <WavyLines variant="contacts" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Details & Quick Contact (lg:col-span-6) */}
          <div className="lg:col-span-6 z-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Наші <br />
              <span className="text-[#00a862]">контакти</span>
            </h2>

            <p className="mt-6 text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl">
              Встигніть скуштувати найгармонійніші напої в новій кав'ярні Starbucks та не забудьте про знижку! Ми завжди раді вітати вас у затишному просторі.
            </p>

            {/* Direct Contact Links */}
            <div className="mt-8 space-y-4">
              {/* Instagram link matching mockup */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3.5 text-base sm:text-lg font-bold text-white hover:text-[#00a862] transition-colors group"
              >
                <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 group-hover:border-[#00a862] group-hover:bg-[#00a862]/10 flex items-center justify-center text-[#00a862] transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <span>@supercoffee</span>
              </a>

              {/* Phone link matching mockup */}
              <div>
                <a
                  href="tel:+380999999999"
                  className="inline-flex items-center gap-3.5 text-base sm:text-lg font-bold text-white hover:text-[#00a862] transition-colors group"
                >
                  <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 group-hover:border-[#00a862] group-hover:bg-[#00a862]/10 flex items-center justify-center text-[#00a862] transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+380 (99) 999-99-99</span>
                </a>
              </div>

              {/* Address */}
              <div className="flex items-center gap-3.5 text-sm sm:text-base text-gray-300">
                <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>м. Київ, вул. Хрещатик, 22</span>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-3.5 text-sm sm:text-base text-gray-300">
                <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400">
                  <Clock className="w-5 h-5" />
                </div>
                <span>Щодня з 08:00 до 22:00</span>
              </div>
            </div>

            {/* Table Reservation Form */}
            <div className="mt-10 p-6 rounded-3xl bg-[#141816] border border-white/10 max-w-lg">
              <h4 className="text-base font-bold text-white mb-2">Замовити столик</h4>
              {feedbackSent ? (
                <div className="py-4 flex items-center gap-3 text-emerald-400 text-sm font-semibold">
                  <Check className="w-5 h-5" /> Дякуємо! Ваш столик успішно заброньовано. Чекаємо на вас!
                </div>
              ) : (
                <form onSubmit={handleSendFeedback} className="space-y-3" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Name input - letters only */}
                    <div>
                      <input
                        type="text"
                        placeholder="Ваше ім'я"
                        value={userName}
                        onChange={handleNameChange}
                        className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-white text-xs outline-none transition-colors ${
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

                    {/* Phone input - +380 only */}
                    <div>
                      <input
                        type="tel"
                        placeholder="+380 (__) ___-__-__"
                        value={userPhone}
                        onChange={handlePhoneChange}
                        onFocus={handlePhoneFocus}
                        onBlur={handlePhoneBlur}
                        className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-white text-xs outline-none transition-colors ${
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
                  </div>
                  <input
                    type="text"
                    placeholder="Дата, час, кількість гостей або побажання"
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-[#00a862] outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#00a862] hover:bg-[#00c574] text-white text-xs font-bold transition-all shadow-md shadow-[#00a862]/30 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Замовити столик</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Building Facade with Starbucks Sign, Offset Frame & Badge (lg:col-span-6) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg">
              
              {/* Offset Dark Green Frame Layer */}
              <div className="absolute -inset-3 sm:-inset-4 bg-[#004d2e] rounded-3xl -rotate-2 -z-10 opacity-90 transition-transform duration-500 hover:rotate-0" />

              {/* Main Photo Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] sm:aspect-[4/4.8]">
                <StarbucksSignGraphic className="w-full h-full" />
              </div>

              {/* Scalloped "У НАС Є" Badge on top-left of the photo matching screenshot */}
              <div className="absolute -top-5 -left-3 sm:-top-6 sm:-left-4 z-20">
                <ScallopedBadge size="md">
                  <span className="text-[11px] sm:text-xs font-black leading-tight tracking-tight uppercase block">
                    У НАС<br />Є
                  </span>
                </ScallopedBadge>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Monitor, Smartphone, Columns } from 'lucide-react';

export type ViewMode = 'responsive' | 'split' | 'mobile';

interface ViewModeSwitchProps {
  mode: ViewMode;
  onChange: (mode: ViewMode) => void;
}

export const ViewModeSwitch: React.FC<ViewModeSwitchProps> = ({ mode, onChange }) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#121614]/90 backdrop-blur-lg border border-white/15 p-1.5 rounded-full shadow-2xl flex items-center gap-1">
      <button
        onClick={() => onChange('responsive')}
        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
          mode === 'responsive'
            ? 'bg-[#00a862] text-white shadow-md shadow-[#00a862]/30'
            : 'text-gray-400 hover:text-white'
        }`}
        title="Адаптивний сайт під ваш екран"
      >
        <Monitor className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Адаптивний</span>
      </button>

      <button
        onClick={() => onChange('split')}
        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
          mode === 'split'
            ? 'bg-[#00a862] text-white shadow-md shadow-[#00a862]/30'
            : 'text-gray-400 hover:text-white'
        }`}
        title="Порівняти 2 макети поруч як на скріншоті (Веб + Мобільна)"
      >
        <Columns className="w-3.5 h-3.5" />
        <span>Порівняння макетів (Веб + Мобільна)</span>
      </button>

      <button
        onClick={() => onChange('mobile')}
        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
          mode === 'mobile'
            ? 'bg-[#00a862] text-white shadow-md shadow-[#00a862]/30'
            : 'text-gray-400 hover:text-white'
        }`}
        title="Мобільний макет"
      >
        <Smartphone className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Мобільний</span>
      </button>
    </div>
  );
};

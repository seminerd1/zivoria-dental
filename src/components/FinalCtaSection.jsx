import React from 'react';
import { Calendar, Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const FinalCtaSection = ({ onOpenBooking }) => {
  const { lang, t } = useLanguage();

  const scrollToLocation = () => {
    const el = document.getElementById('location');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#0a184e] via-[#0b1b54] to-[#1e4cd2] text-white border-b border-blue-900 relative overflow-hidden shadow-2xl">
      {/* Background glow circle */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,178,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center space-y-8 max-w-4xl">
        <span className="inline-block text-xs font-extrabold uppercase tracking-[0.25em] text-[#00f2b2] bg-[#00f2b2]/10 px-5 py-2 rounded-full border border-[#00f2b2]/30 backdrop-blur-sm">
          Zivora Speciality Dental Clinic
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          {t('ctaTitle')}
        </h2>

        <div className="space-y-4 text-base sm:text-lg text-blue-100 font-normal leading-relaxed max-w-2xl mx-auto">
          <p>{t('ctaBody1')}</p>
          <p className="text-white font-semibold">{t('ctaBody2')}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBooking}
            className="group flex items-center gap-3 px-8 py-4 bg-[#00f2b2] hover:bg-white text-[#0a184e] text-xs font-extrabold uppercase tracking-[0.15em] rounded-full transition-all duration-300 cursor-pointer shadow-lg shadow-[#00f2b2]/20 hover:scale-105"
          >
            <Calendar className="w-4.5 h-4.5 text-[#0a184e]" />
            <span>{t('btnScheduleAppt')}</span>
            <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={scrollToLocation}
            className="flex items-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 rounded-full text-xs font-extrabold uppercase tracking-[0.15em] transition-all cursor-pointer backdrop-blur-md"
          >
            <Phone className="w-4 h-4 text-[#00f2b2]" />
            <span>{t('btnContactTeam')}</span>
          </button>
        </div>
      </div>
    </section>
  );
};


import React from 'react';
import { UserCheck, Award, Cpu, Heart, Stethoscope, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const WhyChooseUsSection = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: UserCheck,
      titleKey: 'why1Title',
      descKey: 'why1Desc',
      theme: {
        cardBg: 'bg-gradient-to-b from-teal-50/60 via-white to-white',
        border: 'border-teal-200/80 hover:border-teal-400',
        iconBg: 'bg-teal-600 text-white shadow-teal-200',
        badgeColor: 'text-teal-700 bg-teal-100/80',
      }
    },
    {
      icon: Award,
      titleKey: 'why2Title',
      descKey: 'why2Desc',
      theme: {
        cardBg: 'bg-gradient-to-b from-blue-50/60 via-white to-white',
        border: 'border-blue-200/80 hover:border-blue-400',
        iconBg: 'bg-[#0b1b54] text-[#00f2b2] shadow-blue-200',
        badgeColor: 'text-blue-700 bg-blue-100/80',
      }
    },
    {
      icon: Cpu,
      titleKey: 'why3Title',
      descKey: 'why3Desc',
      theme: {
        cardBg: 'bg-gradient-to-b from-cyan-50/60 via-white to-white',
        border: 'border-cyan-200/80 hover:border-cyan-400',
        iconBg: 'bg-cyan-600 text-white shadow-cyan-200',
        badgeColor: 'text-cyan-800 bg-cyan-100/80',
      }
    },
    {
      icon: Heart,
      titleKey: 'why4Title',
      descKey: 'why4Desc',
      theme: {
        cardBg: 'bg-gradient-to-b from-rose-50/60 via-white to-white',
        border: 'border-rose-200/80 hover:border-rose-400',
        iconBg: 'bg-rose-600 text-white shadow-rose-200',
        badgeColor: 'text-rose-700 bg-rose-100/80',
      }
    },
    {
      icon: Stethoscope,
      titleKey: 'why5Title',
      descKey: 'why5Desc',
      theme: {
        cardBg: 'bg-gradient-to-b from-indigo-50/60 via-white to-white',
        border: 'border-indigo-200/80 hover:border-indigo-400',
        iconBg: 'bg-indigo-600 text-white shadow-indigo-200',
        badgeColor: 'text-indigo-700 bg-indigo-100/80',
      }
    },
    {
      icon: ShieldCheck,
      titleKey: 'why6Title',
      descKey: 'why6Desc',
      theme: {
        cardBg: 'bg-gradient-to-b from-emerald-50/60 via-white to-white',
        border: 'border-emerald-200/80 hover:border-emerald-400',
        iconBg: 'bg-emerald-600 text-white shadow-emerald-200',
        badgeColor: 'text-emerald-700 bg-emerald-100/80',
      }
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-sky-100/70 via-blue-50/50 to-indigo-50/70 border-b border-blue-200/60 relative overflow-hidden">
      {/* Colorful glow shapes */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block text-xs font-extrabold uppercase tracking-[0.25em] text-[#0b1b54] bg-blue-100/90 px-4 py-1.5 rounded-full border border-blue-300/80 shadow-sm">
            {t('whyTag')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0a184e] tracking-tight">
            {t('whyTitle')}
          </h2>
          <p className="text-slate-700 text-base leading-relaxed font-medium">
            {t('whySub')}
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`${item.theme.cardBg} p-8 rounded-2xl border ${item.theme.border} space-y-4 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className={`w-13 h-13 rounded-2xl ${item.theme.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0a184e] group-hover:text-[#1e4cd2] transition-colors">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {t(item.descKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};



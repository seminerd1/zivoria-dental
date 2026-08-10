import React from 'react';
import { Heart, CheckCircle2, BookOpen, Sparkles, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const PatientExperienceAndProcessSection = () => {
  const { lang, t } = useLanguage();

  const steps = [
    { num: '01', titleKey: 'step1Title', descKey: 'step1Desc' },
    { num: '02', titleKey: 'step2Title', descKey: 'step2Desc' },
    { num: '03', titleKey: 'step3Title', descKey: 'step3Desc' },
    { num: '04', titleKey: 'step4Title', descKey: 'step4Desc' },
    { num: '05', titleKey: 'step5Title', descKey: 'step5Desc' },
  ];

  const eduItems = ['edu1', 'edu2', 'edu3', 'edu4', 'edu5', 'edu6'];

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-slate-100 via-sky-50/60 to-blue-50/40 border-b border-blue-200/60 relative overflow-hidden">
      {/* Background ambient glow accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-20 relative z-10">
        
        {/* OUR PATIENT EXPERIENCE */}
        <div className="bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30 p-8 sm:p-12 rounded-3xl border border-blue-200/80 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-block text-xs font-extrabold uppercase tracking-[0.25em] text-[#0b1b54] bg-blue-100/90 px-4 py-1.5 rounded-full border border-blue-300/80 shadow-sm">
              {t('expTag')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a184e] tracking-tight">
              {t('expTitle')}
            </h2>
            <p className="text-slate-700 text-base leading-relaxed font-medium">
              {t('expBody1')}
            </p>
            <p className="text-slate-600 text-base leading-relaxed font-normal">
              {t('expBody2')}
            </p>
          </div>

          <div className="lg:col-span-4 bg-gradient-to-br from-[#0b1b54] via-[#0e246e] to-[#08133d] text-white p-8 rounded-2xl border border-blue-800 space-y-4 text-center shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-blue-900/90 border border-blue-400/40 text-[#00f2b2] flex items-center justify-center mx-auto shadow-lg">
              <Heart className="w-7 h-7 fill-[#00f2b2]/20 text-[#00f2b2]" />
            </div>
            <h3 className="text-xl font-extrabold text-white">
              {lang === 'am' ? 'ለታካሚ ምቾት ቅድሚያ መስጠት' : 'Patient-Centered Comfort'}
            </h3>
            <p className="text-xs text-cyan-100 font-medium leading-relaxed">
              {lang === 'am'
                ? 'ከጭንቀት ነፃ በሆነ መንፈስ፣ ህመም በሌለው መንገድ እና ሙሉ በሆነ ግልጽነት የሚሰጥ የጥርስ ህክምና አገልግሎት።'
                : 'Stress-free environment designed around gentle care, advanced pain-free techniques, and full transparency.'}
            </p>
          </div>
        </div>

        {/* OUR TREATMENT PROCESS */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block text-xs font-extrabold uppercase tracking-[0.25em] text-[#0b1b54] bg-blue-100/90 px-4 py-1.5 rounded-full border border-blue-300/80 shadow-sm">
              {t('procTag')}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0a184e] tracking-tight">
              {t('procTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-blue-200/80 space-y-3 flex flex-col justify-between shadow-md hover:border-cyan-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <span className="text-3xl font-extrabold text-[#1e4cd2] block group-hover:scale-110 transition-transform origin-left">
                    {step.num}
                  </span>
                  <h3 className="text-lg font-bold text-[#0a184e]">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OUR COMMITMENT & PATIENT EDUCATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-blue-200/60">
          
          {/* OUR COMMITMENT */}
          <div className="bg-gradient-to-br from-[#0b1b54] via-[#0e246e] to-[#08133d] text-white p-8 sm:p-10 rounded-2xl border border-blue-800 shadow-xl space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#00f2b2]">
                {t('commitTag')}
              </span>
              <h3 className="text-3xl font-extrabold text-white">
                {t('commitTitle')}
              </h3>
              <p className="text-sm text-cyan-100 font-normal leading-relaxed">
                {t('commitBody1')}
              </p>
            </div>
            <p className="text-sm text-white font-semibold pt-4 border-t border-blue-800">
              {t('commitBody2')}
            </p>
          </div>

          {/* PATIENT EDUCATION */}
          <div className="bg-gradient-to-br from-blue-50/80 via-white to-sky-50/50 p-8 sm:p-10 rounded-2xl border border-blue-200/90 space-y-4 shadow-md hover:shadow-xl transition-all">
            <div className="flex items-center gap-3">
              <div className="p-3.5 rounded-2xl bg-[#0b1b54] text-[#00f2b2] shadow-md">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1e4cd2]">
                  {t('eduTag')}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a184e]">
                  {t('eduTitle')}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 font-normal leading-relaxed">
              {t('eduBody')}
            </p>

            <div className="pt-4 border-t border-blue-200/80 space-y-3">
              <span className="text-xs font-extrabold uppercase text-[#0b1b54] block">
                {t('eduGuideLabel')}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium text-slate-700">
                {eduItems.map((itemKey, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00c2ff] shrink-0" />
                    <span>{t(itemKey)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

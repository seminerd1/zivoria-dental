import React, { useState } from 'react';
import { Star, Quote, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const TestimonialsAndStats = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState(0);

  const reviews = [
    {
      nameKey: 'test1Name',
      treatmentKey: 'test1Treatment',
      textKey: 'test1',
    },
    {
      nameKey: 'test2Name',
      treatmentKey: 'test2Treatment',
      textKey: 'test2',
    },
    {
      nameKey: 'test3Name',
      treatmentKey: 'test3Treatment',
      textKey: 'test3',
    },
  ];

  const faqs = [
    { qKey: 'faq1Q', aKey: 'faq1A' },
    { qKey: 'faq2Q', aKey: 'faq2A' },
    { qKey: 'faq3Q', aKey: 'faq3A' },
    { qKey: 'faq4Q', aKey: 'faq4A' },
  ];

  return (
    <section id="faq" className="py-20 bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-20">
        
        {/* TESTIMONIALS */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#0b1b54] bg-blue-100/80 px-4 py-1.5 rounded-full border border-blue-200">
              {t('testTag')}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0a184e] tracking-tight">
              {t('testTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 p-8 rounded-2xl border border-blue-100 space-y-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-sm text-slate-700 font-normal leading-relaxed italic">
                    "{t(rev.textKey)}"
                  </p>
                </div>

                <div className="pt-4 border-t border-blue-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-[#0a184e] text-base">{t(rev.nameKey)}</h4>
                    <span className="text-xs uppercase tracking-wider text-[#1e4cd2] font-semibold">
                      {t(rev.treatmentKey)}
                    </span>
                  </div>
                  <Quote className="w-7 h-7 text-cyan-200" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className="space-y-12 pt-12 border-t border-blue-100">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#0b1b54] bg-blue-100/80 px-4 py-1.5 rounded-full border border-blue-200">
              {t('faqTag')}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0a184e] tracking-tight">
              {t('faqTitle')}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/70 rounded-2xl border border-blue-100 transition-all overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-blue-50/60 transition-colors"
                  >
                    <span className="font-bold text-lg text-[#0a184e]">
                      {t(faq.qKey)}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#1e4cd2] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-sm text-slate-600 font-normal leading-relaxed border-t border-blue-100/80">
                      {t(faq.aKey)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};


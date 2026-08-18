import React from 'react';
import { HeartPulse } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Footer = ({
  onOpenBooking,
}) => {
  const { t } = useLanguage();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Fallback to 'ZIVORA' if brandName key is not yet defined
  const brandTitle = t('brandName') || 'ZIVORA';

  return (
    <footer className="bg-[#0a184e] text-blue-200 text-xs py-16 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-blue-900/80">
          
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex flex-col w-fit">
              <div className="w-full flex justify-between text-2xl font-black text-white leading-none tracking-widest">
                {Array.from(brandTitle).map((char, index) => (
                  <span key={index}>{char}</span>
                ))}
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#00f2b2] block mt-1 whitespace-nowrap">
                {t('brandSub')}
              </span>
            </div>
            <p className="text-blue-100 text-xs font-normal leading-relaxed">
              {t('footerDesc')}
            </p>
            <div className="flex items-center gap-2 text-[#00f2b2] font-bold text-xs uppercase tracking-wider">
              <HeartPulse className="w-4 h-4 text-[#00f2b2]" />
              {t('footerCare')}
            </div>
          </div>

          {/* Patient Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-300">{t('patientAccess')}</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><button onClick={() => scrollToSection('faq')} className="text-blue-100 hover:text-white transition-colors cursor-pointer">{t('navFaq')}</button></li>
              <li><button onClick={onOpenBooking} className="text-blue-100 hover:text-[#00f2b2] transition-colors cursor-pointer">{t('navBook')}</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-300">{t('contactTitle')}</h4>
            <p className="text-blue-100 font-medium">{t('addisAbaba')}</p>
            <p className="text-blue-100 font-medium">{t('phoneLabel')} +251 953 4378 78</p>
            <p className="text-blue-100 font-medium">{t('emailLabel')} care@zivoradental.com</p>
          </div>

        </div>

        <div className="text-blue-300 text-xs font-medium uppercase tracking-widest text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>{t('copyright')}</p>
          <span className="text-[#00f2b2] text-[10px] font-bold uppercase tracking-widest bg-blue-900/40 px-3 py-1 rounded-full border border-blue-700">
            {t('radiographyText')}
          </span>
        </div>

      </div>
    </footer>
  );
};
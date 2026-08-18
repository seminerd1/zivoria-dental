import React from 'react';
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const ClinicInfoSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="location" className="py-20 bg-emerald-50/60 border-b border-emerald-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block text-xs font-extrabold uppercase tracking-[0.25em] text-[#0b1b54] bg-emerald-100/90 px-4 py-1.5 rounded-full border border-emerald-300/80 shadow-sm">
            {t('locHeaderTag')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0a184e] tracking-tight">
            {t('locHeaderTitle')}
          </h2>
          <p className="text-slate-700 text-base leading-relaxed font-medium">
            {t('locHeaderDesc')}
          </p>
        </div>

        {/* Info Details Cards - Clean, Uniform Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Location & Address */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between h-full group">
            <div>
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-200 group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 block">
                    {lang === 'am' ? 'ቦታችን' : 'Location'}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0a184e]">
                    {t('addressTitle')}
                  </h3>
                </div>
              </div>

              {/* Uniform Middle Content Box */}
              <div className="bg-emerald-50/50 rounded-xl p-4 sm:p-5 border border-emerald-100 my-6 space-y-3">
                <div className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold text-base shrink-0">📍</span>
                  <p className="text-sm sm:text-base font-extrabold text-[#0a184e] leading-snug">
                    {lang === 'am' ? 'ቦሌ አስረስ ህንፃ 4ኛ ፎቅ' : 'Bole Asres Building 4th Floor'}
                  </p>
                </div>
                <div className="flex items-start gap-2.5 text-slate-600 text-xs sm:text-sm font-medium border-t border-emerald-200/60 pt-2.5">
                  <span className="text-slate-400 shrink-0">🏢</span>
                  <p>{lang === 'am' ? 'ከሸገር ህንፃ ፊት ለፊት፣ አዲስ አበባ' : 'In front of Sheger Building, Addis Ababa'}</p>
                </div>
                <div className="flex items-start gap-2.5 text-slate-600 text-xs sm:text-sm font-medium border-t border-emerald-200/60 pt-2.5">
                  <span className="text-slate-400 shrink-0">🛗</span>
                  <p>{lang === 'am' ? 'ዘመናዊ ሊፍትና ለአካል ጉዳተኞች ምቹ መግቢያ' : 'Elevator & Accessible Entrance Available'}</p>
                </div>
              </div>
            </div>

            {/* Footer Status Bar */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-emerald-900">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                {lang === 'am' ? 'ነፃ የቫሌት ፓርኪንግ ይገኛል' : 'Free Valet Parking Available'}
              </span>
            </div>
          </div>

          {/* Card 2: Operating Hours */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between h-full group">
            <div>
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-200 group-hover:scale-105 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 block">
                    {lang === 'am' ? 'ጊዜያት' : 'Schedule'}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0a184e]">
                    {t('hoursTitle')}
                  </h3>
                </div>
              </div>

              {/* Uniform Middle Content Box */}
              <div className="bg-emerald-50/50 rounded-xl p-4 sm:p-5 border border-emerald-100 my-6 space-y-3">
                <div className="flex items-center justify-between text-xs sm:text-sm font-medium pb-2 border-b border-emerald-200/60">
                  <span className="text-slate-600">{lang === 'am' ? 'ሰኞ - አርብ:' : 'Mon - Fri:'}</span>
                  <strong className="text-[#0a184e] font-extrabold">
                    {lang === 'am' ? '2:00 - 1:00 ምሽት' : '8:00 AM - 7:00 PM'}
                  </strong>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-medium pb-2 border-b border-emerald-200/60">
                  <span className="text-slate-600">{lang === 'am' ? 'ቅዳሜ:' : 'Saturday:'}</span>
                  <strong className="text-[#0a184e] font-extrabold">
                    {lang === 'am' ? '3:00 - 11:00 ምሽት' : '9:00 AM - 5:00 PM'}
                  </strong>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-medium pt-0.5">
                  <span className="text-slate-600">{lang === 'am' ? 'እሁድ:' : 'Sunday:'}</span>
                  <strong className="text-amber-700 font-extrabold">
                    {lang === 'am' ? 'ለአስቸኳይ ጊዜ ብቻ' : 'Emergency Triage'}
                  </strong>
                </div>
              </div>
            </div>

            {/* Footer Status Bar */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-emerald-900">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                {lang === 'am' ? 'በየቀኑ የአደጋ ጊዜ ህክምና ቦታ አለ' : 'Same-Day Emergency Triage'}
              </span>
            </div>
          </div>

          {/* Card 3: Contact & Direct Lines */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between h-full group">
            <div>
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-200 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 block">
                    {lang === 'am' ? 'መገናኛ' : 'Connect'}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0a184e]">
                    {t('phoneTitle')}
                  </h3>
                </div>
              </div>

              {/* Uniform Middle Content Box */}
              <div className="bg-emerald-50/50 rounded-xl p-4 sm:p-5 border border-emerald-100 my-6 space-y-3">
                <div className="flex items-center justify-between text-xs sm:text-sm font-medium pb-2 border-b border-emerald-200/60">
                  <span className="text-slate-600">{lang === 'am' ? 'ስልክ:' : 'Phone:'}</span>
                  <a href="tel:+251953437878" className="text-[#0a184e] font-extrabold hover:text-emerald-600 transition-colors">
                    +251 953 4378 78
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-medium pb-2 border-b border-emerald-200/60">
                  <span className="text-slate-600">{lang === 'am' ? 'ኢሜይል:' : 'Email:'}</span>
                  <a href="mailto:care@zivoradental.com" className="text-[#0a184e] font-bold hover:text-emerald-600 transition-colors">
                    care@zivoradental.com
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-medium pt-0.5">
                  <span className="text-slate-600">{lang === 'am' ? 'ማህበራዊ ገፆች:' : 'Socials:'}</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.instagram.com/zivora_speciality/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="p-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-700 text-emerald-900 hover:text-white transition-all border border-emerald-200"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@zivora_speciality"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok"
                      className="p-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-700 text-emerald-900 hover:text-white transition-all border border-emerald-200"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 2.38 6.337 6.337 0 0 0 1.074 8.791 6.332 6.332 0 0 0 8.084-.337 6.331 6.331 0 0 0 1.673-4.321V8.411a8.217 8.217 0 0 0 4.793 1.536V6.502a4.78 4.78 0 0 1-1.002-.184z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Status Bar */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-emerald-900">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse inline-block" />
                {lang === 'am' ? 'የ24/7 አደጋ ጊዜ መስመር: +251 953 4378 78' : '24/7 Emergency: +251 953 4378 78'}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
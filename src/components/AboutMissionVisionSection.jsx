import React from 'react';
import { Target, Eye, Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import clinicAboutImg from '../assets/images/about.jpg';

export const AboutMissionVisionSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-50 via-sky-50/70 to-blue-50/40 border-b border-blue-200/60 relative overflow-hidden">
      {/* Background ambient glow accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-200/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#1e4cd2_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16 relative z-10">
        
        {/* ABOUT US Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#0b1b54] bg-blue-100/80 px-4 py-1.5 rounded-full border border-blue-200 shadow-sm">
                {t('aboutTag')}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a184e] tracking-tight">
                {t('aboutTitle')}
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>{t('aboutBody1')}</p>
              <p>{t('aboutBody2')}</p>
              <p>{t('aboutBody3')}</p>
              
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-blue-50/80 via-sky-50/40 to-white border border-blue-200/80 p-8 rounded-2xl space-y-6 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-[#0b1b54] text-[#00f2b2] flex items-center justify-center shadow-lg">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#0a184e]">
              {lang === 'am' ? 'የተሟላ የልዩ ሕክምና አገልግሎት' : 'Comprehensive Specialty Care'}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {lang === 'am'
                ? 'ከህጻናት እስከ አዋቂ፣ ዚቮራ ልዩ የጥርስ ሕክምና ክሊኒክ ለምቾት እና ለዘላቂ ጤንነት የተዘጋጀ ልዩ አገልግሎት ይሰጣል።'
                : 'From young children to seniors, Zivora Speciality Dental Clinic provides specialized dentistry designed for comfort, precision, and lasting vitality.'}
            </p>
            <div className="space-y-3 pt-4 border-t border-blue-200/60 text-xs font-semibold text-[#0a184e]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00c2ff]" />
                <span>
                  {lang === 'am' ? 'በማስረጃ ላይ የተመሰረቱ ክሊኒካዊ ህክምናዎች' : 'Evidence-based clinical treatments'}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00c2ff]" />
                <span>
                  {lang === 'am' ? 'ለታካሚ ቅድሚያ የሚሰጥ ቅን አገልግሎት' : 'Compassionate, patient-centered focus'}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00c2ff]" />
                <span>
                  {lang === 'am' ? 'ዘመናዊ የምርመራ እና የሕክምና ቴክኖሎጂ' : 'Modern diagnostic & treatment technology'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* MISSION & VISION Cards Layout in Rich Blue Section */}
        <div className="pt-6">
          <div className="bg-gradient-to-br from-[#0b1b54] via-[#0e246e] to-[#08133d] p-6 sm:p-10 rounded-3xl border border-blue-800/80 shadow-2xl text-white space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* LEFT BOX: Full Image Area */}
              <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-blue-400/30 shadow-xl relative min-h-[360px] sm:min-h-[420px] lg:min-h-full group">
                <img
                  src={clinicAboutImg}
                  alt="Zivora Dental Clinic Environment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 block"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* RIGHT COLUMN: Mission & Vision Boxes */}
              <div className="lg:col-span-6 flex flex-col gap-6 justify-between">
                
                {/* OUR MISSION */}
                <div className="bg-blue-950/70 backdrop-blur-md text-white p-7 sm:p-8 rounded-2xl border border-blue-500/30 space-y-4 shadow-lg hover:border-cyan-400/50 transition-all flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-blue-900/90 text-[#00f2b2] border border-blue-400/40 shadow-md">
                        <Target className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00f2b2]">
                          {t('missionTag')}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                          {t('missionTitle')}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-cyan-100 leading-relaxed font-normal">
                      {t('missionBody1')}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-blue-800/80">
                    <p className="text-xs sm:text-sm font-semibold text-white leading-relaxed">
                      {t('missionBody2')}
                    </p>
                  </div>
                </div>

                {/* OUR VISION */}
                <div className="bg-blue-950/70 backdrop-blur-md text-white p-7 sm:p-8 rounded-2xl border border-cyan-500/30 space-y-4 shadow-lg hover:border-cyan-400/60 transition-all flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-cyan-900/90 text-cyan-300 border border-cyan-400/40 shadow-md">
                        <Eye className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                          {t('visionTag')}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                          {t('visionTitle')}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-cyan-100 leading-relaxed font-normal">
                      {t('visionBody')}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};


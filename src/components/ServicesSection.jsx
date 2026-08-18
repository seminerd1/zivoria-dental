import React from 'react';
import { ShieldCheck, Check, ArrowRight, Building2, Sparkles, Stethoscope, Microscope, Users } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import serviceGeneralImg from '../assets/images/service_general.jpg';
import serviceOrthoImg from '../assets/images/service_ortho.jpg';
import serviceCosmeticImg from '../assets/images/service_cosmetic.jpg';
import servicePediatricImg from '../assets/images/service_pediatric.jpg';
import facility1Img from '../assets/images/facility21.jpg';
import facility2Img from '../assets/images/facility2.jpg';
import facility3Img from '../assets/images/facility3.jpg';
import facility4Img from '../assets/images/facility4.jpg';

export const ServicesSection = ({ onSelectServiceForBooking }) => {
  const { lang, t } = useLanguage();

  const getItemLabel = (label) => {
    if (!label) return null;
    if (lang === 'am') {
      if (label === 'Services include:') return 'የሚከተሉትን አገልግሎቶች ያካትታል:';
      if (label === 'Benefits include:') return 'የሚከተሉትን ጥቅሞች ያካትታል:';
      if (label === 'Available treatments include:') return 'የሚከተሉትን ህክምናዎች ያካትታል:';
      if (label === 'Advantages include:') return 'የሚከተሉትን ጥቅሞች ያካትታል:';
      return label;
    }
    return label;
  };

  const services = [
    {
      id: 'general',
      titleKey: 's1Title',
      descKey: 's1Desc',
      itemsKeyLabel: 'Services include:',
      items: ['s1Item1', 's1Item2', 's1Item3', 's1Item4', 's1Item5', 's1Item6'],
      cardBg: 'bg-white border-blue-200/80 hover:border-blue-400',
      iconBg: 'bg-blue-600 text-white',
      accentColor: 'text-blue-600',
      checkBg: 'bg-blue-100 text-blue-600',
    },
    {
      id: 'cleaning',
      titleKey: 's2Title',
      descKey: 's2Desc',
      itemsKeyLabel: 'Benefits include:',
      items: ['s2Item1', 's2Item2', 's2Item3', 's2Item4', 's2Item5'],
      cardBg: 'bg-white border-cyan-200/80 hover:border-cyan-400',
      iconBg: 'bg-cyan-600 text-white',
      accentColor: 'text-cyan-600',
      checkBg: 'bg-cyan-100 text-cyan-600',
    },
    {
      id: 'cosmetic',
      titleKey: 's3Title',
      descKey: 's3Desc',
      itemsKeyLabel: 'Available treatments include:',
      items: ['s3Item1', 's3Item2', 's3Item3', 's3Item4', 's3Item5', 's3Item6'],
      cardBg: 'bg-white border-violet-200/80 hover:border-violet-400',
      iconBg: 'bg-violet-600 text-white',
      accentColor: 'text-violet-600',
      checkBg: 'bg-violet-100 text-violet-600',
    },
    {
      id: 'ortho',
      titleKey: 's4Title',
      descKey: 's4Desc',
      itemsKeyLabel: 'Benefits include:',
      items: ['s4Item1', 's4Item2', 's4Item3', 's4Item4', 's4Item5'],
      cardBg: 'bg-white border-emerald-200/80 hover:border-emerald-400',
      iconBg: 'bg-emerald-600 text-white',
      accentColor: 'text-emerald-600',
      checkBg: 'bg-emerald-100 text-emerald-600',
    },
    {
      id: 'implants',
      titleKey: 's5Title',
      descKey: 's5Desc',
      itemsKeyLabel: 'Advantages include:',
      items: ['s5Item1', 's5Item2', 's5Item3', 's5Item4', 's5Item5'],
      cardBg: 'bg-white border-teal-200/80 hover:border-teal-400',
      iconBg: 'bg-[#0b1b54] text-[#00f2b2]',
      accentColor: 'text-teal-700',
      checkBg: 'bg-teal-100 text-teal-700',
    },
    {
      id: 'rootcanal',
      titleKey: 's6Title',
      descKey: 's6Desc',
      itemsKeyLabel: null,
      items: [],
      cardBg: 'bg-white border-amber-200/80 hover:border-amber-400',
      iconBg: 'bg-amber-600 text-white',
      accentColor: 'text-amber-700',
      checkBg: 'bg-amber-100 text-amber-700',
    },
    {
      id: 'pediatric',
      titleKey: 's7Title',
      descKey: 's7Desc',
      itemsKeyLabel: null,
      items: [],
      cardBg: 'bg-white border-rose-200/80 hover:border-rose-400',
      iconBg: 'bg-rose-500 text-white',
      accentColor: 'text-rose-600',
      checkBg: 'bg-rose-100 text-rose-600',
    },
    {
      id: 'surgery',
      titleKey: 's8Title',
      descKey: 's8Desc',
      itemsKeyLabel: 'Services include:',
      items: ['s8Item1', 's8Item2', 's8Item3', 's8Item4'],
      cardBg: 'bg-white border-indigo-200/80 hover:border-indigo-400',
      iconBg: 'bg-indigo-600 text-white',
      accentColor: 'text-indigo-600',
      checkBg: 'bg-indigo-100 text-indigo-600',
    },
  ];

  const galleryImages = [
    {
      id: 1,
      title: lang === 'am' ? 'የክሊኒኩ መስተንግዶ እና ማረፊያ' : 'Reception & Patient Lounge',
      subtitle: lang === 'am' ? 'ምቹ፣ ዘመናዊና እንግዳ ተቀባይ ስፍራ' : 'Welcoming, relaxing & modern interior',
      url: facility1Img,
      icon: Building2,
    },
    {
      id: 2,
      title: lang === 'am' ? 'የላቀ የጥርስ ህክምና ክፍል' : 'Advanced Dental Operating Suite',
      subtitle: lang === 'am' ? 'በዘመናዊ ወንበሮችና መሳሪያዎች የተደራጀ' : 'Sterile state-of-the-art treatment room',
      url: facility2Img,
      icon: Stethoscope,
    },
    {
      id: 3,
      title: lang === 'am' ? 'የዲጂታል ኤክስሬይ እና ምርመራ ቴክኖሎጂ' : 'Digital Diagnostics & Imaging Lab',
      subtitle: lang === 'am' ? 'ትክክለኛና ፈጣን የጥርስ ምርመራ' : '3D CBCT scanning & digital radiography',
      url: facility3Img,
      icon: Microscope,
    },
    {
      id: 4,
      title: lang === 'am' ? 'የልዩ ባለሙያ አማካሪ ቢሮ' : 'Specialist Consultation Lounge',
      subtitle: lang === 'am' ? 'የግልና የተረጋጋ የህክምና ውይይት' : 'Private & comfortable consultation space',
      url: facility4Img,
      icon: Users,
    },
  ];

  return (
    <section id="services" className="py-20 bg-emerald-50/60 border-b border-emerald-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block text-xs font-extrabold uppercase tracking-[0.25em] text-[#0b1b54] bg-emerald-100/90 px-4 py-1.5 rounded-full border border-emerald-300/80 shadow-sm">
            {t('servTag')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0a184e] tracking-tight">
            {t('servTitle')}
          </h2>
          <p className="text-slate-700 text-base leading-relaxed font-medium">
            {lang === 'am' ? 'የተሟላ የጥርስ ሕክምና አገልግሎቶች በጥራትና በዘመናዊ መንገድ ይቀርባሉ::' : 'Comprehensive dental care delivered with clinical accuracy, modern technology, and compassionate care.'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((serv) => (
            <div
              key={serv.id}
              className={`${serv.cardBg} p-8 rounded-2xl border space-y-6 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300 group`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-[#0a184e] group-hover:text-[#1e4cd2] transition-colors">
                    {t(serv.titleKey)}
                  </h3>
                  <div className={`w-10 h-10 rounded-full ${serv.iconBg} flex items-center justify-center shadow-md`}>
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-sm text-slate-600 font-normal leading-relaxed">
                  {t(serv.descKey)}
                </p>

                {serv.items && serv.items.length > 0 && (
                  <div className="pt-4 border-t border-slate-200/80 space-y-2">
                    <span className={`text-xs uppercase font-extrabold tracking-wider ${serv.accentColor} block`}>
                      {getItemLabel(serv.itemsKeyLabel)}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 font-medium">
                      {serv.items.map((itemKey, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded-full ${serv.checkBg} flex items-center justify-center shrink-0`}>
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{t(itemKey)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <button
                  onClick={() => onSelectServiceForBooking({ name: t(serv.titleKey) })}
                  className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0b1b54] hover:text-[#1e4cd2] transition-colors cursor-pointer group/btn"
                >
                  <span>{lang === 'am' ? 'የህክምና ቀጠሮ ይያዙ' : 'Schedule Consultation'}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-[#00c2ff]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 4-IMAGE CLINIC OFFICE & FACILITIES GALLERY GRID (Rich Blue Section) */}
        <div className="pt-6">
          <div className="bg-gradient-to-br from-[#0b1b54] via-[#0e246e] to-[#08133d] p-6 sm:p-10 rounded-3xl border border-blue-800/80 shadow-2xl text-white space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-900/80 text-[#00f2b2] border border-cyan-400/40 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#00f2b2]" />
                {lang === 'am' ? 'የክሊኒካችን አካባቢ' : 'Our Clinic Environment'}
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {lang === 'am' ? 'ዘመናዊና ንጹህ የጥርስ ሕክምና ማዕከላችን' : 'State-of-the-Art Office & Facilities'}
              </h3>
              <p className="text-sm text-cyan-100 font-medium">
                {lang === 'am' ? 'በዚቮራ ልዩ የጥርስ ክሊኒክ ውስጥ ለምቾትዎ እና ለአስተማማኝ ህክምና የተዘጋጁ ክፍሎች' : 'Designed to ensure your maximum comfort, complete sterilization, and a calming dental visit.'}
              </p>
            </div>

            {/* 4 Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((img) => {
                const IconComp = img.icon;
                return (
                  <div
                    key={img.id}
                    className="group relative bg-blue-950/80 rounded-2xl overflow-hidden border border-blue-500/30 shadow-lg hover:border-cyan-400 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Image Container */}
                    <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                      <img
                        src={img.url}
                        alt={img.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a184e]/95 via-[#0a184e]/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                      
                      {/* Top Icon Badge */}
                      <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-blue-900/90 backdrop-blur-md text-[#00f2b2] flex items-center justify-center border border-blue-400/40 shadow-md">
                        <IconComp className="w-5 h-5 text-[#00f2b2]" />
                      </div>

                      {/* Bottom Caption Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                        <h4 className="font-bold text-base text-white leading-snug drop-shadow-md">
                          {img.title}
                        </h4>
                        <p className="text-xs text-cyan-200 font-medium">
                          {img.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
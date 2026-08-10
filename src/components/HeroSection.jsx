import React from 'react';
import { motion } from 'motion/react';
import { Star, Sparkles, ArrowRight, CheckCircle2, Plus } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import heroWomanImg from '../assets/images/heroimage.jpg';
import avatar1 from '../assets/images/profil1.jpg';
import avatar2 from '../assets/images/profil2.jpg';
import avatar3 from '../assets/images/profil3.jpg';
import avatar4 from '../assets/images/profile4.jpg';

export const HeroSection = ({ onOpenBooking, isIntroCompleted = true }) => {
  const { lang } = useLanguage();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative zivora-hero-section overflow-hidden pb-0 bg-slate-950/40">
      
      {/* ================= BACKGROUND PATTERNS & EFFECTS ================= */}
      
      {/* 1. Dot Matrix Overlay */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:28px_28px] opacity-15 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      {/* 2. Linear Grid Lines Accent with Shimmering Sweep Effect */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      {/* Animated Light Sweep Beam across Background */}
      <motion.div
        animate={{
          x: ['-100%', '200%'],
          opacity: [0, 0.25, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -skew-x-12 pointer-events-none w-1/2"
      />

      {/* 3. Dynamic Background Ambient Glows */}
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-1/4 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-blue-500/20 rounded-full blur-[130px] pointer-events-none" 
      />
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-20 -left-20 w-80 sm:w-[450px] h-80 sm:h-[450px] bg-cyan-400/20 rounded-full blur-[120px] pointer-events-none" 
      />

      {/* 4. Floating Decorative Accents (Plus / Sparkles) */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 left-[10%] text-cyan-400/30 pointer-events-none hidden sm:block"
      >
        <Plus className="w-6 h-6" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -30, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-32 left-[45%] text-[#00f2b2]/25 pointer-events-none hidden md:block"
      >
        <Plus className="w-8 h-8" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-28 right-[42%] text-blue-300/20 pointer-events-none hidden lg:block"
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>

      {/* ================================================================= */}

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10 lg:gap-12 min-h-[500px] sm:min-h-[560px] pt-4 sm:pt-6">
          
          {/* Left Column - Text & CTAs */}
          <div className="w-full lg:w-7/12 flex-1 space-y-6 text-left relative z-10 self-start lg:self-center pt-2 sm:pt-4 lg:pt-2 pb-8 lg:pb-16">
            
            {/* Top Badge / Highlight Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isIntroCompleted ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 text-xs sm:text-sm font-semibold tracking-wide shadow-xl hover:bg-white/15 transition-all group cursor-default"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#00f2b2] animate-pulse" />
              <Sparkles className="w-4 h-4 text-[#00f2b2] transition-transform group-hover:rotate-12" />
              <span>
                {lang === 'am' ? 'ዚቮራ ዘመናዊ የጥርስ ሕክምና ማዕከል' : 'Zivora Specialty Dental Clinic'}
              </span>
            </motion.div>

            {/* Title with Gradient Accent */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={isIntroCompleted ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
              transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]"
            >
              {lang === 'am' ? (
                <span>
                  <span className="bg-gradient-to-r from-white via-cyan-100 to-[#00f2b2] bg-clip-text text-transparent">
                    የተሻለ ፈገግታ
                  </span>{' '}
                  ለተሻለ ህይወት
                </span>
              ) : (
                <span>
                  A{' '}
                  <span className="bg-gradient-to-r from-[#00f2b2] via-cyan-200 to-white bg-clip-text text-transparent">
                    Better Smile
                  </span>{' '}
                  for a Better Life
                </span>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isIntroCompleted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.55, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-xl text-blue-100/90 font-light leading-relaxed max-w-2xl"
            >
              {lang === 'am' ? (
                <span>ዘመናዊ የጥርስ ሕክምና ከእውነተኛ ትኩረትና እንክብካቤ ጋር የሚገናኝበት።</span>
              ) : (
                <span>Where modern dental care meets genuine attention & compassion.</span>
              )}
            </motion.p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.button
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                animate={isIntroCompleted ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 18, scale: 0.96 }}
                transition={{ duration: 0.5, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                onClick={onOpenBooking}
                className="group relative px-8 py-4 bg-[#00f2b2] hover:bg-[#34f6c4] text-[#032018] font-extrabold text-base sm:text-lg rounded-xl shadow-xl shadow-[#00f2b2]/25 hover:shadow-[#00f2b2]/40 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2.5 overflow-hidden"
              >
                <span>{lang === 'am' ? 'ቀጠሮ ይያዙ' : 'Book Appointment'}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                animate={isIntroCompleted ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 18, scale: 0.96 }}
                transition={{ duration: 0.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => scrollToSection('services')}
                className="px-7 py-4 bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/15 hover:border-white/40 text-white font-bold text-base sm:text-lg rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{lang === 'am' ? 'አገልግሎቶቻችንን ይመልከቱ' : 'Explore Services'}</span>
              </motion.button>
            </div>

            {/* Rating & Social Proof Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-5 border-t border-white/10 mt-6">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={isIntroCompleted ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                transition={{ duration: 0.5, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center -space-x-3"
              >
                {[
                  { url: avatar1, name: 'Patient 1' },
                  { url: avatar2, name: 'Patient 2' },
                  { url: avatar3, name: 'Patient 3' },
                  { url: avatar4, name: 'Patient 4' },
                ].map((profile, idx) => (
                  <img
                    key={idx}
                    src={profile.url}
                    alt={profile.name}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#091838] object-cover ring-2 ring-white/20 shadow-lg hover:scale-110 hover:z-20 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </motion.div>

              <div className="space-y-0.5">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={isIntroCompleted ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  transition={{ duration: 0.5, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-2"
                >
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-extrabold text-base sm:text-lg text-white">4.9/5</span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={isIntroCompleted ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xs sm:text-sm text-blue-200/80 font-normal flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00f2b2]" />
                  <span>{lang === 'am' ? 'ከ1000+ በላይ ደስተኛ ደንበኞች' : '1,000+ Happy Patients'}</span>
                </motion.p>
              </div>
            </div>

          </div>

          {/* Right Column - Hero Image */}
          <div className="w-full lg:w-5/12 flex items-end justify-center lg:justify-end shrink-0 self-end mt-auto transition-all duration-300 relative group">
            
            {/* Pulsing Radar Waves Radiating Outward */}
            <div className="absolute bottom-10 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-4 w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] pointer-events-none flex items-center justify-center">
              {[0, 1.8, 3.6].map((delay, idx) => (
                <motion.div
                  key={idx}
                  animate={{ scale: [0.75, 1.3], opacity: [0.4, 0] }}
                  transition={{ duration: 5.4, repeat: Infinity, ease: 'easeOut', delay }}
                  className="absolute inset-0 rounded-full border border-cyan-400/30"
                />
              ))}
            </div>

            {/* Outer Clockwise Orbit Ring with Satellite Glowing Nodes */}
            <div className="absolute bottom-10 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-4 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-full border border-white/10 pointer-events-none flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                className="relative w-full h-full rounded-full border border-dashed border-cyan-400/25 flex items-center justify-center"
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#00f2b2] rounded-full shadow-[0_0_14px_#00f2b2]" />
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]" />
              </motion.div>
            </div>

            {/* Inner Counter-Clockwise Orbit Ring */}
            <div className="absolute bottom-10 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-4 w-[260px] sm:w-[360px] h-[260px] sm:h-[360px] rounded-full pointer-events-none flex items-center justify-center">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="relative w-full h-full rounded-full border border-dashed border-[#00f2b2]/20"
              >
                <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-cyan-300 rounded-full shadow-[0_0_10px_#67e8f9]" />
              </motion.div>
            </div>

            {/* Dynamic Morphing Organic Ambient Glow Aura */}
            <motion.div
              animate={{
                borderRadius: [
                  '60% 40% 30% 70%/60% 30% 70% 40%',
                  '30% 60% 70% 40%/50% 60% 30% 60%',
                  '60% 40% 30% 70%/60% 30% 70% 40%',
                ],
                scale: [1, 1.08, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-x-0 bottom-4 m-auto w-[85%] h-[82%] bg-gradient-to-tr from-[#00f2b2]/30 via-cyan-400/20 to-blue-600/30 blur-2xl pointer-events-none"
            />

            {/* Main Hero Image Container with Arch Frame */}
            <div className="relative z-10 w-full max-w-[280px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[520px] aspect-[2/3] overflow-hidden rounded-t-[40px] sm:rounded-t-[60px] border-t-2 border-x-2 border-white/15 bg-gradient-to-b from-white/10 to-transparent shadow-2xl">
              <img
                src={heroWomanImg}
                alt="Zivora Dental Clinic Patient Smile"
                className="w-full h-full object-cover object-[center_top] mix-blend-multiply group-hover:scale-105 transition-all duration-700 pointer-events-none block"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
import React, { useState } from 'react';
import { Calendar, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import logoImg from '../assets/images/zivora_logo_1786097434682.jpg';

export const Navbar = ({
  onOpenBooking,
  activeSection,
  setActiveSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const navItems = [
    { id: 'about', label: t('navAbout') },
    { id: 'location', label: t('navContact') },
    { id: 'faq', label: t('navFaq') },
    { id: 'services', label: t('navServices') },
    { id: 'book', label: t('navBook'), isAction: true },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    if (id === 'book') {
      onOpenBooking();
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="zivora-header">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#00f2b2]/80 shadow-md group-hover:scale-105 transition-all shrink-0 bg-[#0b1b54]">
            <img
              src={logoImg}
              alt="Zivora Speciality Dental Clinic Logo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col w-fit">
            <span className="editorial-serif text-2xl font-bold tracking-tight text-white leading-none">
              {lang === 'am' ? 'ዚቮራ' : 'ZIVORA'}
            </span>
            <span className="text-[9px] font-medium uppercase tracking-[0.08em] text-cyan-200/80 block mt-0.5 whitespace-nowrap">
              {t('brandSub')}
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-white/90">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`hover:text-cyan-300 transition-colors cursor-pointer ${
                activeSection === item.id ? 'text-white font-bold border-b-2 border-[#00f2b2] pb-0.5' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Header Action Buttons & Language Switcher */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Language Switcher Pill */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-4 py-1.5 border-2 border-white/90 hover:bg-white hover:text-[#0a184e] text-white font-bold text-xs uppercase tracking-wider transition-all rounded-full cursor-pointer shadow-sm"
            title="Switch Language / ቋንቋ ይቀይሩ"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'አማርኛ' : 'ENG'}</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-3 py-1 border border-white/80 rounded-full text-white font-bold text-xs uppercase"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-300" />
            <span>{lang === 'en' ? 'AM' : 'ENG'}</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c1e5d] border-b border-white/10 px-6 py-5 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left py-2.5 text-sm uppercase tracking-wider font-semibold text-white/90 hover:text-cyan-300"
            >
              {item.label}
            </button>
          ))}

          <div className="pt-4 border-t border-white/10 space-y-3">
            <button
              onClick={toggleLang}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-white/80 rounded-lg text-white font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#0a184e] transition-all"
            >
              <Globe className="w-4 h-4 text-cyan-300" />
              <span>{lang === 'en' ? 'ቋንቋ ወደ አማርኛ ይቀይሩ' : 'Switch to English'}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#00f2b2] text-[#032018] font-bold text-xs uppercase tracking-wider rounded-lg shadow-md"
            >
              <Calendar className="w-4 h-4" />
              {t('navBook')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


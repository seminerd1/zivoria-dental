import React, { useState, useEffect } from 'react';
import { Star, Calendar, CheckCircle2, Clock } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import doctorFallbackImg from '../assets/images/docter.jpg';
import { INITIAL_DOCTORS } from '../data/clinicData';

export const DoctorTeamSection = ({
  onSelectDoctorForBooking,
  doctorImageUrl = doctorFallbackImg,
}) => {
  const { lang, t } = useLanguage();
  const [doctors, setDoctors] = useState(INITIAL_DOCTORS);
  const [loading, setLoading] = useState(false);

  return (
    <section id="doctors" className="py-20 bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pb-12 border-b border-blue-100">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#0b1b54] bg-blue-100/80 px-4 py-1.5 rounded-full border border-blue-200">
            {lang === 'am' ? 'የልዩ ባለሙያ የጥርስ ሀኪሞች' : 'SPECIALIST DENTAL TEAM'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0a184e] tracking-tight">
            {lang === 'am' ? 'ተሞክሮ ያላቸው የጥርስ ሀኪሞቻችን' : 'Experienced Dental Professionals'}
          </h2>
          <p className="text-slate-600 text-base font-normal leading-relaxed">
            {lang === 'am' ? 'የተመሰከረላቸው የጥርስ ህክምና ስፔሻሊስቶች በላቀ እንክብካቤ ያገለግሉዎታል::' : 'Our team of dedicated specialists is committed to delivering gentle, precise, and world-class dental care.'}
          </p>
        </div>

        {/* Doctor Grid */}
        {loading ? (
          <div className="py-12 text-center">
            <div className="inline-block w-8 h-8 border-3 border-[#1e4cd2] border-t-transparent rounded-full animate-spin" />
            <p className="text-xs uppercase tracking-widest text-slate-500 mt-3 font-semibold">Loading specialist profiles...</p>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, idx) => (
              <div
                key={doctor.id}
                className="bg-slate-50/50 rounded-2xl border border-blue-100 hover:border-cyan-400 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {/* Doctor Avatar / Image Container */}
                  <div className="relative h-72 overflow-hidden bg-blue-100/40 border-b border-blue-100">
                    <img
                      src={idx === 0 ? doctorImageUrl : doctor.avatarUrl || doctorFallbackImg}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0b1b54]/90 backdrop-blur-md text-white text-[11px] font-bold flex items-center gap-1 shadow-md">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      {doctor.rating} ({doctor.reviewCount})
                    </div>
                    <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full border border-blue-200 text-[#0b1b54] text-[10px] uppercase tracking-wider font-extrabold shadow-sm">
                      {doctor.experienceYears}+ Yrs Exp.
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#0a184e] group-hover:text-[#1e4cd2] transition-colors">
                        {doctor.name}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.15em] font-extrabold text-[#1e4cd2] mt-1">{doctor.title}</p>
                    </div>

                    <p className="text-xs text-slate-600 font-normal line-clamp-3 leading-relaxed">
                      {doctor.bio}
                    </p>

                    <div className="pt-3 border-t border-slate-200/80 space-y-2 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00c2ff] shrink-0" />
                        <span className="truncate font-semibold text-[#0a184e]">{doctor.qualification}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="text-xs">Available: {doctor.availableDays.slice(0, 3).join(', ')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectDoctorForBooking(doctor)}
                    className="w-full py-3.5 bg-[#0b1b54] hover:bg-[#1e4cd2] text-white rounded-xl text-xs uppercase tracking-[0.15em] font-extrabold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#00f2b2]" />
                    Book with {doctor.name.split(',')[0].replace('Dr. ', '')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};


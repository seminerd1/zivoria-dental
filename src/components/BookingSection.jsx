import React, { useState } from 'react';
import { Calendar, User, Phone, Mail, FileText, CheckCircle2, Clock, Sparkles, Send } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const BookingSection = () => {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    reason: '',
    phone: '',
    email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Default minimum date to today
  const todayStr = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.date || !formData.reason || !formData.phone) {
      alert(lang === 'am' ? 'እባክዎን ሁሉንም አስፈላጊ መስኮች ይሙሉ::' : 'Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const code = `ZIV-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedData({
        ...formData,
        code,
        timestamp: new Date().toLocaleDateString()
      });
      setIsSubmitting(false);
    }, 800);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      date: '',
      reason: '',
      phone: '',
      email: ''
    });
  };

  return (
    <section id="booking" className="py-20 bg-emerald-50/60 border-b border-emerald-100 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-extrabold uppercase tracking-[0.25em] text-[#0b1b54] bg-emerald-100/90 px-4 py-1.5 rounded-full border border-emerald-300/80 shadow-sm">
            {lang === 'am' ? 'ቀጠሮ ይያዙ' : 'Book Your Appointment'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0a184e] tracking-tight">
            {lang === 'am' ? 'የጥርስ ህክምና ቀጠሮዎን አሁኑኑ ያስይዙ' : 'Schedule Your Dental Visit'}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            {lang === 'am'
              ? 'እባክዎን ከዚህ በታች ያሉትን መረጃዎች ይሙሉ:: የክሊኒካችን አስተናጋጆች በጥቂት ደቂቃዎች ውስጥ ቀጠሮዎን ያረጋግጣሉ::'
              : 'Fill in your details below and our clinic reception will confirm your slot promptly.'}
          </p>
        </div>

        {/* Main Form Container / Card */}
        <div className="bg-white rounded-3xl border border-emerald-100 shadow-xl p-6 sm:p-10 md:p-12 transition-all">
          
          {submittedData ? (
            /* SUCCESS CONFIRMATION DISPLAY */
            <div className="text-center space-y-8 py-4 animate-fadeIn">
              <div className="w-20 h-20 rounded-full bg-emerald-100 border-2 border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-3">
                <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-300">
                  {lang === 'am' ? 'ቀጠሮዎ በተሳካ ሁኔታ ተመዝግቧል!' : 'Appointment Requested Successfully!'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a184e]">
                  {lang === 'am' ? 'እናመሰግናለን፣ ' + submittedData.name : 'Thank You, ' + submittedData.name}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto font-medium">
                  {lang === 'am'
                    ? 'የቀጠሮ ማረጋገጫ ዝርዝሮች ወደ ስልክ ቁጥርዎ በኤስኤምኤስ ይላካሉ::'
                    : 'Our dental coordination team will review your request and call you shortly to confirm your exact time slot.'}
                </p>
              </div>

              {/* Appointment Ticket Summary Box */}
              <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-2xl p-6 max-w-lg mx-auto text-left space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-emerald-200/80 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {lang === 'am' ? 'የቀጠሮ መለያ ቁጥር' : 'Booking Confirmation ID'}
                  </span>
                  <span className="font-mono font-bold text-emerald-800 text-sm bg-emerald-100 px-3 py-1 rounded-md border border-emerald-200">
                    {submittedData.code}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-500 block text-xs">{lang === 'am' ? 'ስም:' : 'Patient Name:'}</span>
                    <strong className="text-[#0a184e] font-semibold">{submittedData.name}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs">{lang === 'am' ? 'የቀጠሮ ቀን:' : 'Requested Date:'}</span>
                    <strong className="text-[#0a184e] font-semibold">{submittedData.date}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs">{lang === 'am' ? 'ስልክ ቁጥር:' : 'Phone Number:'}</span>
                    <strong className="text-[#0a184e] font-semibold">{submittedData.phone}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs">{lang === 'am' ? 'ኢሜይል:' : 'Email Address:'}</span>
                    <strong className="text-[#0a184e] font-semibold">{submittedData.email || (lang === 'am' ? 'አልተጠቀሰም' : 'Not Provided')}</strong>
                  </div>
                </div>

                <div className="pt-2 border-t border-emerald-200/80">
                  <span className="text-slate-500 block text-xs">{lang === 'am' ? 'የህክምና ምክንያት:' : 'Reason for Visit:'}</span>
                  <p className="text-[#0a184e] font-medium text-xs sm:text-sm mt-0.5">{submittedData.reason}</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold uppercase tracking-wider rounded-full transition-all duration-300 shadow-md shadow-emerald-200 cursor-pointer"
                >
                  {lang === 'am' ? 'ሌላ ቀጠሮ ያስይዙ' : 'Book Another Appointment'}
                </button>
              </div>
            </div>
          ) : (
            /* FORM STATE */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. Full Name */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0a184e] flex items-center gap-2">
                    <User className="w-4 h-4 text-emerald-600" />
                    <span>{lang === 'am' ? 'ሙሉ ስም *' : 'Full Name *'}</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={lang === 'am' ? 'ለምሳሌ፡ አበበ በቀለ' : 'e.g. John Doe'}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all font-medium"
                  />
                </div>

                {/* 2. Phone Number */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0a184e] flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span>{lang === 'am' ? 'ስልክ ቁጥር *' : 'Phone Number *'}</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={lang === 'am' ? '+251 911 000 000' : '+1 (555) 000-0000'}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all font-medium"
                  />
                </div>

                {/* 3. Appointment Date */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0a184e] flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    <span>{lang === 'am' ? 'የቀጠሮ ቀን *' : 'Appointment Date *'}</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    min={todayStr}
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all font-medium"
                  />
                </div>

                {/* 4. Email (Optional) */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0a184e] flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-emerald-600" />
                      <span>{lang === 'am' ? 'ኢሜይል' : 'Email Address'}</span>
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 lowercase">
                      ({lang === 'am' ? 'አማራጭ' : 'optional'})
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={lang === 'am' ? 'ለምሳሌ፡ patient@example.com' : 'e.g. name@example.com'}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all font-medium"
                  />
                </div>

              </div>

              {/* 5. Reason for Appointment */}
              <div className="space-y-2 pt-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0a184e] flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'am' ? 'የቀጠሮው ምክንያት *' : 'Reason for Appointment *'}</span>
                </label>
                <textarea
                  name="reason"
                  required
                  rows={3}
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder={lang === 'am' ? 'ለምሳሌ፡ መደበኛ የጥርስ ምርመራ፣ የጥርስ ማፅዳት፣ የጥርስ ሕመም...' : 'e.g. Routine Checkup, Teeth Cleaning, Toothache, Cosmetic Whitening, Orthodontics consultation...'}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all font-medium resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-4 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-extrabold uppercase tracking-[0.15em] rounded-full transition-all duration-300 shadow-md shadow-emerald-200 cursor-pointer flex items-center justify-center gap-3 mx-auto disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>{lang === 'am' ? 'በመመዝገብ ላይ...' : 'Submitting Request...'}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>{lang === 'am' ? 'ቀጠሮ ያስይዙ' : 'Confirm & Book Appointment'}</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
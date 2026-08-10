import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, Sparkles, AlertCircle, ArrowRight, UserCheck } from 'lucide-react';
import doctorFallbackImg from '../assets/images/docter.jpg';
import { INITIAL_DOCTORS, INITIAL_SERVICES } from '../data/clinicData';

export const AppointmentModal = ({
  isOpen,
  onClose,
  preselectedDoctor,
  preselectedService,
  onOpenPortalWithMrn,
}) => {
  const [step, setStep] = useState(1);
  const [doctors] = useState(INITIAL_DOCTORS);
  const [services] = useState(INITIAL_SERVICES);

  // Form State
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [selectedDoctorId, setSelectedDoctorId] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [patientName, setPatientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('Unspecified');
  const [existingMrn, setExistingMrn] = useState('');
  const [reasonForVisit, setReasonForVisit] = useState('');
  const [notes, setNotes] = useState('');

  // Status State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [bookingSuccessData, setBookingSuccessData] = useState(null);

  // Default date setup (tomorrow)
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setAppointmentDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  // Set preselected values when opened
  useEffect(() => {
    if (isOpen) {
      if (preselectedDoctor) {
        const found = doctors.find((d) => d.id === preselectedDoctor.id || d.name.includes(preselectedDoctor.name));
        if (found) setSelectedDoctorId(found.id);
        else if (doctors.length > 0) setSelectedDoctorId(doctors[0].id);
      } else if (doctors.length > 0 && !selectedDoctorId) {
        setSelectedDoctorId(doctors[0].id);
      }

      if (preselectedService) {
        const found = services.find((s) => s.id === preselectedService.id || s.title === preselectedService.name || s.title === preselectedService.title);
        if (found) setSelectedServiceId(found.id);
        else if (services.length > 0) setSelectedServiceId(services[0].id);
      } else if (services.length > 0 && !selectedServiceId) {
        setSelectedServiceId(services[0].id);
      }
    }
  }, [isOpen, preselectedDoctor, preselectedService, doctors, services]);

  if (!isOpen) return null;

  const currentDoctor = doctors.find((d) => d.id === selectedDoctorId);
  const currentService = services.find((s) => s.id === selectedServiceId);

  const defaultSlots = ['09:00 AM', '10:30 AM', '12:00 PM', '02:00 PM', '03:30 PM', '05:00 PM'];
  const availableSlots = currentDoctor?.timeSlots && currentDoctor.timeSlots.length > 0
    ? currentDoctor.timeSlots
    : defaultSlots;

  const handleBookSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (!patientName || !email || !selectedServiceId || !selectedDoctorId || !appointmentDate || !selectedTimeSlot) {
      setErrorMessage('Please complete all required fields (*)');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedRef = 'APP-' + Math.floor(1000 + Math.random() * 9000);
      const generatedMrn = existingMrn || 'ZIV-' + Math.floor(1000 + Math.random() * 9000);

      setBookingSuccessData({
        success: true,
        mrn: generatedMrn,
        data: {
          appointmentRef: generatedRef,
          patientName,
          email,
          appointmentDate,
          timeSlot: selectedTimeSlot,
        },
      });
      setIsSubmitting(false);
      setStep(5); // Confirmation step
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1a1a1a]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#fdfcfb] border border-[#e8e4e1] max-w-2xl w-full p-8 shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#888] hover:text-[#1a1a1a] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header & Stepper */}
        {step < 5 && (
          <div className="space-y-4 mb-6 pb-4 border-b border-[#e8e4e1]">
            <div className="flex items-center gap-3">
              <span className="p-2 bg-[#1a1a1a] text-white">
                <Calendar className="w-5 h-5" />
              </span>
              <div>
                <h3 className="editorial-serif text-2xl text-[#1a1a1a]">Schedule Speciality Appointment</h3>
                <p className="text-xs text-[#888] font-light">Zivora Clinical Center • Direct Specialist Reservation</p>
              </div>
            </div>

            {/* Stepper Progress Bar */}
            <div className="flex items-center justify-between text-[10px] uppercase tracking-wider font-bold text-[#888] pt-2">
              <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-[#1a1a1a]' : ''}`}>
                <span className={`w-5 h-5 flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-[#1a1a1a] text-white' : 'bg-[#e8e4e1] text-[#666]'}`}>1</span>
                <span>Service</span>
              </div>
              <div className="h-[1px] flex-1 mx-2 bg-[#e8e4e1]">
                <div className={`h-[1px] bg-[#1a1a1a] transition-all ${step >= 2 ? 'w-full' : 'w-0'}`} />
              </div>
              <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-[#1a1a1a]' : ''}`}>
                <span className={`w-5 h-5 flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-[#1a1a1a] text-white' : 'bg-[#e8e4e1] text-[#666]'}`}>2</span>
                <span>Doctor</span>
              </div>
              <div className="h-[1px] flex-1 mx-2 bg-[#e8e4e1]">
                <div className={`h-[1px] bg-[#1a1a1a] transition-all ${step >= 3 ? 'w-full' : 'w-0'}`} />
              </div>
              <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-[#1a1a1a]' : ''}`}>
                <span className={`w-5 h-5 flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-[#1a1a1a] text-white' : 'bg-[#e8e4e1] text-[#666]'}`}>3</span>
                <span>Date & Slot</span>
              </div>
              <div className="h-[1px] flex-1 mx-2 bg-[#e8e4e1]">
                <div className={`h-[1px] bg-[#1a1a1a] transition-all ${step >= 4 ? 'w-full' : 'w-0'}`} />
              </div>
              <div className={`flex items-center gap-1.5 ${step >= 4 ? 'text-[#1a1a1a]' : ''}`}>
                <span className={`w-5 h-5 flex items-center justify-center text-[10px] ${step >= 4 ? 'bg-[#1a1a1a] text-white' : 'bg-[#e8e4e1] text-[#666]'}`}>4</span>
                <span>Patient Info</span>
              </div>
            </div>
          </div>
        )}

        {/* STEP 1: Select Service */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8e7d6b]">Select Speciality Treatment</h4>
            <div className="grid grid-cols-1 gap-2.5 max-h-72 overflow-y-auto pr-1">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`p-4 border transition-all cursor-pointer flex items-center justify-between ${
                    selectedServiceId === service.id
                      ? 'bg-white border-[#1a1a1a] shadow-sm'
                      : 'border-[#e8e4e1] hover:border-[#aaa] bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="editorial-serif text-lg text-[#1a1a1a]">{service.title}</span>
                      <span className="text-[9px] uppercase tracking-wider font-bold bg-[#f0ece8] text-[#8e7d6b] px-2 py-0.5">
                        {service.category}
                      </span>
                    </div>
                    <p className="text-xs text-[#555] font-light mt-1">{service.shortDescription}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-bold text-[#8e7d6b]">{service.priceEstimate}</span>
                    <span className="block text-[10px] text-[#888]">{service.durationMinutes} mins</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                disabled={!selectedServiceId}
                onClick={() => setStep(2)}
                className="px-6 py-3 bg-[#1a1a1a] hover:bg-[#8e7d6b] disabled:opacity-50 text-white text-[10px] uppercase tracking-[0.2em] font-bold transition-colors cursor-pointer flex items-center gap-2"
              >
                Next: Choose Specialist
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Select Doctor */}
        {step === 2 && (
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8fa39b]">Select Board-Certified Doctor</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-72 overflow-y-auto pr-1">
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  onClick={() => setSelectedDoctorId(doctor.id)}
                  className={`p-3.5 border transition-all cursor-pointer flex items-start gap-3 ${
                    selectedDoctorId === doctor.id
                      ? 'bg-white border-[#1f2623] shadow-sm'
                      : 'border-[#e3e7e5] hover:border-[#8fa39b] bg-white'
                  }`}
                >
                  <img
                    src={doctor.avatarUrl || doctorFallbackImg}
                    alt={doctor.name}
                    className="w-12 h-12 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="space-y-0.5">
                    <h5 className="editorial-serif text-base text-[#1f2623]">{doctor.name}</h5>
                    <p className="text-[11px] text-[#8fa39b] font-medium line-clamp-1">{doctor.title}</p>
                    <p className="text-[10px] text-[#55635c]">{doctor.experienceYears} Years Exp. • Rating {doctor.rating}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 text-xs font-semibold text-[#55635c] hover:text-[#1f2623] cursor-pointer"
              >
                Back
              </button>
              <button
                disabled={!selectedDoctorId}
                onClick={() => setStep(3)}
                className="px-6 py-3 bg-[#1f2623] hover:bg-[#8fa39b] disabled:opacity-50 text-white font-bold text-[10px] uppercase tracking-[0.2em] transition-all cursor-pointer flex items-center gap-1.5"
              >
                Next: Choose Time Slot
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Date & Slot */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8fa39b] mb-1">
                Preferred Appointment Date
              </label>
              <input
                type="date"
                value={appointmentDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setAppointmentDate(e.target.value)}
                className="w-full px-4 py-2.5 border border-[#e3e7e5] bg-white text-[#1f2623] text-xs font-light focus:border-[#adbdb6] outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8fa39b] mb-1">
                Available Time Slots for {currentDoctor?.name.split(',')[0]}
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 mt-2">
                {availableSlots.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setSelectedTimeSlot(slot)}
                    className={`py-2.5 px-3 text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      selectedTimeSlot === slot
                        ? 'bg-[#1f2623] text-white border-[#1f2623]'
                        : 'bg-white text-[#2e3732] border-[#e3e7e5] hover:border-[#adbdb6]'
                    }`}
                  >
                    <Clock className="w-3 h-3" />
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2 text-xs font-semibold text-[#55635c] hover:text-[#1f2623] cursor-pointer"
              >
                Back
              </button>
              <button
                disabled={!appointmentDate || !selectedTimeSlot}
                onClick={() => setStep(4)}
                className="px-6 py-3 bg-[#1f2623] hover:bg-[#8fa39b] disabled:opacity-50 text-white font-bold text-[10px] uppercase tracking-[0.2em] transition-all cursor-pointer flex items-center gap-1.5"
              >
                Next: Patient Details
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Patient Info Form */}
        {step === 4 && (
          <form onSubmit={handleBookSubmit} className="space-y-4">
            {errorMessage && (
              <div className="p-3 bg-rose-950/60 border border-rose-800 text-rose-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8fa39b] mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Eleanor Vance"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-[#e3e7e5] bg-white text-[#1f2623] text-xs font-light focus:border-[#adbdb6] outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8fa39b] mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="eleanor@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-[#e3e7e5] bg-white text-[#1f2623] text-xs font-light focus:border-[#adbdb6] outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8fa39b] mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-[#e3e7e5] bg-white text-[#1f2623] text-xs font-light focus:border-[#adbdb6] outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8fa39b] mb-1">Date of Birth</label>
                <input
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-[#e3e7e5] bg-white text-[#1f2623] text-xs font-light focus:border-[#adbdb6] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8fa39b] mb-1">Existing Patient MRN (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. ZIV-1001"
                  value={existingMrn}
                  onChange={(e) => setExistingMrn(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-[#e3e7e5] bg-white text-[#1f2623] text-xs font-light focus:border-[#adbdb6] outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8fa39b] mb-1">Reason for Visit</label>
                <input
                  type="text"
                  placeholder="e.g. Consultation / Toothache / Aligners"
                  value={reasonForVisit}
                  onChange={(e) => setReasonForVisit(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-[#e3e7e5] bg-white text-[#1f2623] text-xs font-light focus:border-[#adbdb6] outline-none"
                />
              </div>
            </div>

            {/* Selected Summary Card */}
            <div className="p-3 bg-[#f8f9f8] border border-[#e3e7e5] text-xs space-y-1">
              <span className="font-bold text-[#1f2623] uppercase text-[10px] tracking-wider block">Booking Overview:</span>
              <div className="flex flex-wrap justify-between text-[#414d47] text-[11px]">
                <span>Procedure: <strong className="text-[#1f2623]">{currentService?.title}</strong></span>
                <span>Doctor: <strong className="text-[#1f2623]">{currentDoctor?.name.split(',')[0]}</strong></span>
                <span>Slot: <strong className="text-[#8fa39b]">{appointmentDate} @ {selectedTimeSlot}</strong></span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-4 py-2 text-xs font-semibold text-[#55635c] hover:text-[#1f2623] cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-[#1f2623] hover:bg-[#8fa39b] disabled:opacity-50 text-white font-bold text-[10px] uppercase tracking-[0.2em] transition-all cursor-pointer flex items-center gap-2"
              >
                {isSubmitting ? 'Scheduling...' : 'Confirm Reservation'}
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 5: Success Confirmation Screen */}
        {step === 5 && bookingSuccessData && (
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 bg-[#1f2623] text-[#adbdb6] flex items-center justify-center mx-auto border border-[#adbdb6]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1f2623] bg-[#adbdb6]/30 px-4 py-1.5 border border-[#adbdb6]">
                Reservation Confirmed
              </span>
              <h3 className="editorial-serif text-3xl text-[#1f2623] mt-3">
                Your Appointment is Scheduled!
              </h3>
              <p className="text-[#414d47] text-xs sm:text-sm mt-1 max-w-md mx-auto font-light leading-relaxed">
                We have registered your appointment in the Zivora clinical database. A confirmation email has been dispatched.
              </p>
            </div>

            {/* Reference Details Box */}
            <div className="p-6 bg-[#1f2623] text-white text-left max-w-md mx-auto space-y-2 text-xs border border-[#2e3732]">
              <div className="flex justify-between pb-2 border-b border-[#2e3732]">
                <span className="text-[#a8b3ae]">Appointment Code:</span>
                <span className="font-mono font-bold text-[#adbdb6]">{bookingSuccessData.data.appointmentRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#a8b3ae]">Patient MRN:</span>
                <span className="font-mono font-bold text-white">{bookingSuccessData.mrn}</span>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-center">
              <button
                onClick={onClose}
                className="px-8 py-3.5 bg-[#1f2623] hover:bg-[#8fa39b] text-white font-bold text-[10px] uppercase tracking-[0.2em] transition-all cursor-pointer"
              >
                Done / Return to Clinic Page
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

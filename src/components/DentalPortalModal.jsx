import React, { useState, useEffect } from 'react';
import { X, UserCheck, ShieldCheck, FileText, Activity, Calendar, DollarSign, LogOut, Search, Download, ZoomIn, AlertTriangle, Check, Lock, Sparkles, ChevronRight } from 'lucide-react';
import xraySampleImg from '../assets/images/xray.jpg';
import { INITIAL_PATIENTS } from '../data/clinicData';

export const DentalPortalModal = ({
  isOpen,
  onClose,
  initialMrn = '',
}) => {
  const [mrnInput, setMrnInput] = useState(initialMrn || 'ZIV-1001');
  const [passcode, setPasscode] = useState('1234');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [patientData, setPatientData] = useState(null);
  const [records, setRecords] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [activeTab, setActiveTab] = useState('chart');
  const [selectedTooth, setSelectedTooth] = useState(null);

  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    if (initialMrn) {
      setMrnInput(initialMrn);
      handlePortalLogin(initialMrn, '1234');
    }
  }, [initialMrn]);

  if (!isOpen) return null;

  const handlePortalLogin = (mrnToUse, passToUse) => {
    setLoginError('');
    setLoading(true);

    const targetMrn = (mrnToUse || mrnInput || '').trim().toUpperCase();
    const targetPass = passToUse || passcode;

    setTimeout(() => {
      const foundPatient = INITIAL_PATIENTS[targetMrn];
      if (foundPatient && (targetPass === '1234' || targetPass === foundPatient.passcode)) {
        setPatientData(foundPatient);
        setRecords(foundPatient.records || []);
        setAppointments(foundPatient.appointments || []);
        setIsLoggedIn(true);
      } else {
        setLoginError('Invalid MRN or passcode. Try MRN ZIV-1001 or ZIV-1002 with passcode 1234.');
      }
      setLoading(false);
    }, 400);
  };

  const handleCancelAppointment = (apptId) => {
    if (!confirm('Are you sure you want to cancel this appointment?')) return;
    setAppointments((prev) =>
      prev.map((a) => (a.id === apptId ? { ...a, status: 'CANCELLED' } : a))
    );
  };

  // 32 teeth array for diagram
  const upperTeeth = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28];
  const lowerTeeth = [48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38];

  // Combine tooth statuses from records
  const getToothInfo = (toothNum) => {
    for (const rec of records) {
      if (rec.teethChart && rec.teethChart[toothNum]) {
        return rec.teethChart[toothNum];
      }
    }
    return {
      toothNumber: toothNum,
      toothName: `Tooth #${toothNum}`,
      condition: 'Healthy',
      notes: 'No active pathology recorded',
    };
  };

  const getConditionBadgeStyle = (condition) => {
    switch (condition) {
      case 'Crown':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'Implant':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Restoration':
        return 'bg-sky-100 text-sky-800 border-sky-300';
      case 'RootCanal':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'Watch':
        return 'bg-rose-100 text-rose-800 border-rose-300';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1a1a1a]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#fdfcfb] max-w-5xl w-full min-h-[600px] shadow-2xl relative border border-[#e8e4e1] flex flex-col overflow-hidden">
        
        {/* Header Bar */}
        <div className="bg-[#1f2623] text-white p-6 flex items-center justify-between border-b border-[#2e3732]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#adbdb6] flex items-center justify-center text-[#1f2623] font-bold">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="editorial-serif text-2xl tracking-[0.1em] text-white">ZIVORA PATIENT PORTAL</h2>
                <span className="px-2 py-0.5 text-[9px] uppercase tracking-widest font-bold bg-[#adbdb6]/20 text-[#adbdb6] border border-[#adbdb6]/30">
                  HIPAA Verified
                </span>
              </div>
              <p className="text-xs text-[#cfd7d3] font-light">Patient Portal & Clinical Care</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isLoggedIn && (
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  setPatientData(null);
                }}
                className="px-3 py-1.5 bg-[#28322d] hover:bg-[#38433e] text-[#cfd7d3] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-[#38433e]"
              >
                <LogOut className="w-3.5 h-3.5 text-[#adbdb6]" />
                Sign Out
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-[#a8b3ae] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* LOGIN SCREEN */}
        {!isLoggedIn ? (
          <div className="flex-1 p-6 sm:p-12 flex flex-col items-center justify-center bg-[#f8f9f8]">
            <div className="max-w-md w-full bg-white p-8 border border-[#e3e7e5] space-y-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-[#1f2623] text-[#adbdb6] flex items-center justify-center mx-auto border border-[#adbdb6]">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="editorial-serif text-2xl text-[#1f2623]">Patient Portal Sign-In</h3>
                <p className="text-xs text-[#55635c] font-light leading-relaxed">
                  Enter your Medical Record Number (MRN) to access appointment schedules and treatment details.
                </p>
              </div>

              {loginError && (
                <div className="p-3 bg-rose-950/60 border border-rose-800 text-rose-200 text-xs flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{loginError}</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8fa39b] mb-1">
                    Medical Record Number (MRN)
                  </label>
                  <input
                    type="text"
                    value={mrnInput}
                    onChange={(e) => setMrnInput(e.target.value)}
                    placeholder="e.g. ZIV-1001"
                    className="w-full px-4 py-2.5 border border-[#e3e7e5] bg-white text-[#1f2623] text-xs font-mono font-bold focus:border-[#adbdb6] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8fa39b] mb-1">
                    Passcode / PIN
                  </label>
                  <input
                    type="password"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    placeholder="••••"
                    className="w-full px-4 py-2.5 border border-[#e3e7e5] bg-white text-[#1f2623] text-xs font-mono font-bold focus:border-[#adbdb6] outline-none"
                  />
                </div>

                <button
                  onClick={() => handlePortalLogin()}
                  disabled={loading}
                  className="w-full py-3 bg-[#1f2623] hover:bg-[#8fa39b] disabled:opacity-50 text-white font-bold text-[10px] uppercase tracking-[0.2em] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? 'Authenticating with Database...' : 'Access Portal Records'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Quick Demo Credentials */}
              <div className="pt-4 border-t border-[#e3e7e5] space-y-2 text-center">
                <span className="text-[10px] font-bold text-[#8fa39b] uppercase tracking-[0.2em] block">
                  Quick Demo Accounts (1-Click Login)
                </span>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setMrnInput('ZIV-1001');
                      setPasscode('1234');
                      handlePortalLogin('ZIV-1001', '1234');
                    }}
                    className="px-3 py-2 bg-[#f8f9f8] hover:bg-[#e3e7e5] text-[#1f2623] text-xs font-medium border border-[#e3e7e5] transition-colors text-left flex items-center justify-between cursor-pointer"
                  >
                    <span>Eleanor Vance (Veneers & Implants)</span>
                    <span className="font-mono text-xs font-bold text-[#8fa39b]">MRN: ZIV-1001</span>
                  </button>

                  <button
                    onClick={() => {
                      setMrnInput('ZIV-1002');
                      setPasscode('1234');
                      handlePortalLogin('ZIV-1002', '1234');
                    }}
                    className="px-3 py-2 bg-[#f8f9f8] hover:bg-[#e3e7e5] text-[#1f2623] text-xs font-medium border border-[#e3e7e5] transition-colors text-left flex items-center justify-between cursor-pointer"
                  >
                    <span>Marcus Sterling (Invisalign Treatment)</span>
                    <span className="font-mono text-xs font-bold text-[#8fa39b]">MRN: ZIV-1002</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        ) : (
          /* LOGGED IN DASHBOARD */
          <div className="flex-1 flex flex-col bg-[#f8f9f8]">
            {/* Patient Header Banner */}
            <div className="bg-white border-b border-[#e3e7e5] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1f2623] text-[#adbdb6] font-bold text-lg flex items-center justify-center border border-[#adbdb6]">
                  {patientData?.fullName?.split(' ').map((n) => n[0]).join('') || 'PT'}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="editorial-serif text-xl text-[#1f2623]">{patientData?.fullName}</h3>
                    <span className="px-2 py-0.5 bg-[#1f2623] text-[#adbdb6] font-mono text-[11px] font-bold">
                      {patientData?.mrn}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#55635c] font-light mt-0.5">
                    <span>DOB: {patientData?.dateOfBirth}</span>
                    <span>•</span>
                    <span>Blood Group: <strong className="text-[#1f2623]">{patientData?.bloodGroup || 'A+'}</strong></span>
                    {patientData?.allergies && (
                      <span className="text-rose-700 font-semibold bg-rose-50 px-2 py-0.5 border border-rose-200">
                        Allergies: {patientData.allergies}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-xs text-right">
                <span className="text-[#8fa39b] block uppercase text-[10px] tracking-wider">Emergency Contact:</span>
                <span className="font-semibold text-[#1f2623]">{patientData?.emergencyContact || 'On File'}</span>
              </div>
            </div>

            {/* Portal Navigation Tabs */}
            <div className="bg-[#e3e7e5] px-6 border-b border-[#e3e7e5] flex gap-2 overflow-x-auto">
              {[
                { id: 'chart', label: '32-Tooth Digital Chart', icon: Activity },
                { id: 'history', label: 'Visit History & X-Rays', icon: FileText },
                { id: 'prescriptions', label: 'Prescriptions & Care', icon: ShieldCheck },
                { id: 'appointments', label: 'Scheduled Visits', icon: Calendar },
                { id: 'billing', label: 'Billing & Insurance', icon: DollarSign },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-3 px-4 text-[10px] font-bold uppercase tracking-[0.15em] flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-[#1f2623] text-white'
                        : 'text-[#2e3732] hover:text-[#1f2623]'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-[#adbdb6]" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* TAB CONTENT PANELS */}
            <div className="p-6 flex-1 overflow-y-auto">
              
              {/* TAB 1: 32-TOOTH DENTAL CHART */}
              {activeTab === 'chart' && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Interactive Odontogram (32 Tooth Chart)</h4>
                      <p className="text-xs text-slate-500">
                        Click on any tooth to view specific restoral material, root canal status, or doctor clinical notes.
                      </p>
                    </div>

                    {/* Status Legend */}
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold">
                      <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">Implant</span>
                      <span className="px-2 py-1 rounded bg-amber-100 text-amber-800 border border-amber-300">Crown</span>
                      <span className="px-2 py-1 rounded bg-sky-100 text-sky-800 border border-sky-300">Restoration</span>
                      <span className="px-2 py-1 rounded bg-purple-100 text-purple-800 border border-purple-300">Root Canal</span>
                      <span className="px-2 py-1 rounded bg-rose-100 text-rose-800 border border-rose-300">Watch</span>
                    </div>
                  </div>

                  {/* Teeth Diagram Container */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-8">
                    
                    {/* Upper Arch */}
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3 text-center">
                        Maxillary Arch (Upper Teeth)
                      </span>
                      <div className="flex justify-center gap-1.5 sm:gap-2 flex-wrap">
                        {upperTeeth.map((tNum) => {
                          const info = getToothInfo(tNum);
                          const isSelected = selectedTooth?.toothNumber === tNum;
                          return (
                            <button
                              key={tNum}
                              onClick={() => setSelectedTooth(info)}
                              className={`w-10 h-12 rounded-lg border flex flex-col items-center justify-between p-1 transition-all cursor-pointer ${getConditionBadgeStyle(
                                info.condition
                              )} ${isSelected ? 'ring-2 ring-sky-600 scale-110 shadow-md' : 'hover:scale-105'}`}
                            >
                              <span className="text-[10px] font-extrabold">{tNum}</span>
                              <div className="w-3 h-4 bg-white/70 rounded-sm border border-slate-300" />
                              <span className="text-[8px] font-semibold truncate max-w-full">
                                {info.condition === 'Healthy' ? 'OK' : info.condition}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Lower Arch */}
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3 text-center">
                        Mandibular Arch (Lower Teeth)
                      </span>
                      <div className="flex justify-center gap-1.5 sm:gap-2 flex-wrap">
                        {lowerTeeth.map((tNum) => {
                          const info = getToothInfo(tNum);
                          const isSelected = selectedTooth?.toothNumber === tNum;
                          return (
                            <button
                              key={tNum}
                              onClick={() => setSelectedTooth(info)}
                              className={`w-10 h-12 rounded-lg border flex flex-col items-center justify-between p-1 transition-all cursor-pointer ${getConditionBadgeStyle(
                                info.condition
                              )} ${isSelected ? 'ring-2 ring-sky-600 scale-110 shadow-md' : 'hover:scale-105'}`}
                            >
                              <span className="text-[10px] font-extrabold">{tNum}</span>
                              <div className="w-3 h-4 bg-white/70 rounded-sm border border-slate-300" />
                              <span className="text-[8px] font-semibold truncate max-w-full">
                                {info.condition === 'Healthy' ? 'OK' : info.condition}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                  </div>

                  {/* Selected Tooth Detail Panel */}
                  {selectedTooth && (
                    <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 text-xs space-y-2 animate-in fade-in">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sky-900 text-sm">
                          Tooth #{selectedTooth.toothNumber} Details
                        </span>
                        <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold border ${getConditionBadgeStyle(selectedTooth.condition)}`}>
                          Status: {selectedTooth.condition}
                        </span>
                      </div>
                      <p className="text-slate-700">{selectedTooth.toothName}</p>
                      <p className="text-slate-600 bg-white p-2.5 rounded-lg border border-sky-100 font-mono text-[11px]">
                        <strong>Clinical Notes:</strong> {selectedTooth.notes || 'No active pathology'}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: VISIT HISTORY & X-RAYS */}
              {activeTab === 'history' && (
                <div className="space-y-6">
                  {records.length === 0 ? (
                    <div className="text-center py-12 text-slate-500 text-xs">
                      No clinical visit records currently logged for this account.
                    </div>
                  ) : (
                    records.map((rec) => (
                      <div key={rec.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                          <div>
                            <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded">
                              Visit Date: {rec.visitDate}
                            </span>
                            <h4 className="text-sm font-bold text-slate-900 mt-1">Attending: {rec.doctorName}</h4>
                          </div>
                          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded border border-emerald-200">
                            Billing Status: {rec.paymentStatus} (${rec.billAmount})
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                          <div className="space-y-2">
                            <div>
                              <strong className="text-slate-900 block">Diagnosis:</strong>
                              <p className="text-slate-600 bg-slate-50 p-2 rounded border border-slate-100 leading-relaxed">
                                {rec.diagnosis}
                              </p>
                            </div>
                            <div>
                              <strong className="text-slate-900 block">Treatment Summary:</strong>
                              <p className="text-slate-600 bg-slate-50 p-2 rounded border border-slate-100 leading-relaxed">
                                {rec.treatmentSummary}
                              </p>
                            </div>
                            {rec.doctorNotes && (
                              <div>
                                <strong className="text-slate-900 block">Specialist Clinical Notes:</strong>
                                <p className="text-slate-600 italic">{rec.doctorNotes}</p>
                              </div>
                            )}
                          </div>

                          {/* Digital Radiograph / X-Ray Box */}
                          <div className="bg-slate-900 text-white p-4 rounded-xl flex flex-col justify-between space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-bold text-sky-400 flex items-center gap-1">
                                <ZoomIn className="w-3.5 h-3.5" /> 3D CBCT Radiograph / X-Ray
                              </span>
                              <span className="text-[10px] text-slate-400">Low-dose HD Digital</span>
                            </div>

                            <div className="relative h-36 rounded-lg overflow-hidden bg-slate-800 border border-slate-700">
                              <img
                                src={rec.xrayImageUrl || xraySampleImg}
                                alt="Dental X-Ray"
                                className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] text-slate-300 font-mono">
                                3D Volumetric CBCT
                              </div>
                            </div>

                            <button
                              onClick={() => alert('Downloading full HD DICOM / Radiograph summary...')}
                              className="w-full py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <Download className="w-3.5 h-3.5" /> Download Digital Radiograph
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* TAB 3: PRESCRIPTIONS & CARE */}
              {activeTab === 'prescriptions' && (
                <div className="space-y-6">
                  {records.map((rec) => (
                    <div key={rec.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <span className="text-xs font-bold text-slate-800">
                          Prescription issued on {rec.visitDate} by {rec.doctorName}
                        </span>
                        <button
                          onClick={() => alert(`Printing official digital prescription slip for ${patientData?.fullName}...`)}
                          className="px-3 py-1.5 rounded-lg bg-sky-50 text-sky-700 hover:bg-sky-100 text-xs font-semibold flex items-center gap-1 border border-sky-200 cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" /> Print Rx Slip
                        </button>
                      </div>

                      <div className="grid grid-cols-1 gap-2">
                        {rec.prescriptions && rec.prescriptions.length > 0 ? (
                          rec.prescriptions.map((rx, idx) => (
                            <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                              <div>
                                <span className="font-bold text-slate-900 text-sm block">{rx.medicineName}</span>
                                <span className="text-slate-600 font-medium">Dosage: {rx.dosage}</span>
                                <span className="text-slate-500 block text-[11px] mt-0.5">Instructions: {rx.instructions}</span>
                              </div>
                              <span className="px-2.5 py-1 rounded bg-teal-100 text-teal-800 text-[11px] font-bold shrink-0">
                                Duration: {rx.duration}
                              </span>
                            </div>
                          ))
                        ) : (
                          <p className="text-xs text-slate-500">No active medications required for this visit.</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 4: SCHEDULED VISITS */}
              {activeTab === 'appointments' && (
                <div className="space-y-4">
                  {appointments.length === 0 ? (
                    <div className="text-center py-12 text-slate-500 text-xs">
                      No upcoming appointments found. Use the scheduling button on the clinic home page to book a visit.
                    </div>
                  ) : (
                    appointments.map((appt) => (
                      <div key={appt.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-slate-900">{appt.service?.title || 'Dental Consultation'}</span>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              appt.status === 'CONFIRMED' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                            }`}>
                              {appt.status}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600">Attending Specialist: {appt.doctor?.name || 'Assigned Specialist'}</p>
                          <div className="flex items-center gap-3 text-xs text-sky-700 font-semibold pt-1">
                            <span>Date: {appt.appointmentDate}</span>
                            <span>Slot: {appt.timeSlot}</span>
                            <span className="font-mono text-slate-500">Ref: {appt.appointmentRef}</span>
                          </div>
                        </div>

                        {appt.status === 'CONFIRMED' && (
                          <button
                            onClick={() => handleCancelAppointment(appt.id)}
                            className="px-3.5 py-2 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold border border-rose-200 transition-colors cursor-pointer"
                          >
                            Cancel Visit
                          </button>
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* TAB 5: BILLING & INSURANCE */}
              {activeTab === 'billing' && (
                <div className="space-y-4">
                  {records.map((rec) => (
                    <div key={rec.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 text-xs">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <span className="font-bold text-slate-800 text-sm">Statement Date: {rec.visitDate}</span>
                        <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                          {rec.paymentStatus}
                        </span>
                      </div>

                      <div className="space-y-1.5 text-slate-600">
                        <div className="flex justify-between">
                          <span>Total Dental Procedure Fee:</span>
                          <span className="font-bold text-slate-900">${rec.billAmount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-emerald-700">
                          <span>Insurance Benefits Covered:</span>
                          <span className="font-bold">-${rec.insuranceClaimed.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-slate-900 font-bold pt-2 border-t border-slate-100 text-sm">
                          <span>Patient Out-of-Pocket Balance:</span>
                          <span className="text-sky-700">${(rec.billAmount - rec.insuranceClaimed).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

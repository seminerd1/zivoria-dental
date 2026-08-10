export interface Patient {
  id: string;
  mrn: string;
  passcode: string;
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  bloodGroup?: string;
  allergies?: string;
  address?: string;
  emergencyContact?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialization: string;
  qualification: string;
  experienceYears: number;
  bio: string;
  avatarUrl?: string;
  rating: number;
  reviewCount: number;
  availableDays: string[];
  timeSlots: string[];
}

export interface Service {
  id: string;
  category: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  durationMinutes: number;
  priceEstimate: string;
  iconName: string;
  benefits: string[];
  procedureSteps: string[];
}

export interface Appointment {
  id: string;
  appointmentRef: string;
  patientId: string;
  doctorId: string;
  serviceId: string;
  appointmentDate: string;
  timeSlot: string;
  status: 'CONFIRMED' | 'COMPLETED' | 'CANCELLED' | 'RESCHEDULED';
  reasonForVisit: string;
  notes?: string;
  createdAt: string;
  patient?: Patient;
  doctor?: Doctor;
  service?: Service;
}

export interface Prescription {
  medicineName: string;
  dosage: string;
  duration: string;
  instructions: string;
}

export interface ToothStatus {
  toothNumber: number; // 1 to 32
  toothName: string;
  condition: 'Healthy' | 'Crown' | 'Implant' | 'Restoration' | 'RootCanal' | 'Watch';
  notes?: string;
}

export interface DentalRecord {
  id: string;
  patientId: string;
  doctorName: string;
  visitDate: string;
  diagnosis: string;
  treatmentSummary: string;
  prescriptions: Prescription[];
  teethChart: Record<number, ToothStatus>;
  xrayImageUrl?: string;
  followUpDate?: string;
  doctorNotes?: string;
  billAmount: number;
  insuranceClaimed: number;
  paymentStatus: 'PAID' | 'PENDING' | 'INSURANCE_CLAIMED';
  createdAt: string;
}

export interface AIAdviceResponse {
  assessment: string;
  potentialCauses: string[];
  recommendedSpecialty: string;
  urgencyLevel: 'Low' | 'Moderate' | 'High (Emergency Care Recommended)';
  homeCareTips: string[];
}

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  qualification?: string;
  slug: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  iconName: string;
  slug: string;
}

export interface Partner {
  id: number;
  name: string;
  category?: string;
}

export interface LocationItem {
  id: number;
  name: string;
  address?: string;
  workingHours?: string;
  isMainBranch?: boolean;
}

export interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  doctor: string;
  preferredDate: string;
  notes: string;
}

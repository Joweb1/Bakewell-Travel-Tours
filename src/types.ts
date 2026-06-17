export type PageId = 'home' | 'services' | 'about' | 'testimonials' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  imageUrl: string;
  features: string[];
}

export interface Destination {
  id: string;
  name: string;
  province: string;
  description: string;
  imageUrl: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  imageUrl: string;
  serviceUsed: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ConsultationRequest {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  destination: string;
  travelDate: string;
  message: string;
  submittedAt: string;
}

export interface NavItem {
  title: string;
  path: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  imageFallback?: string;
  applications: string[];
  specifications: string[];
  slug: string;
}

export interface Service {
  id: string;
  title: string;
  image: string;
  imageFallback?: string;
  description: string;
  benefits: string[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  imageFallback?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  industry: string;
  quote: string;
  type: "customer" | "company";
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  fullName: string;
  companyName?: string;
  email: string;
  mobile: string;
  city: string;
  state: string;
  vehicleModel?: string;
  radiatorType?: string;
  issueDescription: string;
  contactMethod: "phone" | "email" | "whatsapp";
  consent: boolean;
}

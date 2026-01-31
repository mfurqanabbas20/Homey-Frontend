import AC from "@/assets/icons/AC.png";
import Cleaning from "@/assets/icons/cleaning.png";
import Electrical from "@/assets/icons/Electrical.png";
import Maintenance from "@/assets/icons/Maintenance.png";
import Plumbing from "@/assets/icons/Plumbing.png";
import Truck from "@/assets/icons/Truck.png";

// Service images
import ProfessionalProfile from "@/assets/images/professional-profile.png";
import ServiceAC from "@/assets/images/service-ac.png";
import ServiceCleaning from "@/assets/images/service-cleaning.png";
import ServiceMaintenance from "@/assets/images/service-maintenance.png";
import ServicePlumbing from "@/assets/images/service-plumbing.png";
import SpecialOfferWoman from "@/assets/images/special-offer-woman.png";
import { BadgeDollarSign, CalendarDays, CreditCard, HardHat, PhoneCall, ShieldCheck } from "lucide-react-native";

export const services = [
  { id: 1, name: 'Cleaning', icon: Cleaning, bgColor: '#FFF5E6' },
  { id: 2, name: 'Maintenance', icon: Maintenance, bgColor: '#E6F3FF' },
  { id: 3, name: 'Plumbing', icon: Plumbing, bgColor: '#FFE6E6' },
  { id: 4, name: 'Electrical', icon: Electrical, bgColor: '#F3E6FF' },
  { id: 5, name: 'AC', icon: AC, bgColor: '#FFE6F0' },
  { id: 6, name: 'Parking', icon: AC, bgColor: '#E6FFF0' },
  { id: 7, name: 'Moving', icon: Truck, bgColor: '#E6F9FF' },
  { id: 8, name: 'More', icon: '•••', bgColor: '#E6ECFF' },
];

export const popularServices = [
  { id: 1, name: 'Full House Cleaning', price: 'SAR 300', rating: '4.9', reviews: '234', image: ServiceCleaning },
  { id: 2, name: 'Maintenance', price: 'SAR 300', rating: '4.9', reviews: '234', image: ServiceMaintenance },
  { id: 3, name: 'Plumbing', price: 'SAR 300', rating: '4.9', reviews: '234', image: ServicePlumbing },
  { id: 4, name: 'AC Service', price: 'SAR 300', rating: '4.9', reviews: '234', image: ServiceAC },
];

export const allServices = [
  { id: 1, name: 'Cleaning', price: 'SAR 300/hr', rating: '4.9', image: ServiceCleaning },
  { id: 2, name: 'Maintenance', price: 'SAR 300/hr', rating: '4.9', image: ServiceMaintenance },
  { id: 3, name: 'Plumbing', price: 'SAR 300/hr', rating: '4.9', image: ServicePlumbing },
  { id: 4, name: 'Electrical', price: 'SAR 300/hr', rating: '4.9', image: ServiceMaintenance },
  { id: 5, name: 'AC', price: 'SAR 300/hr', rating: '4.9', image: ServiceAC },
  { id: 6, name: 'Painting', price: 'SAR 300/hr', rating: '4.9', image: ServiceCleaning },
  { id: 7, name: 'Moving', price: 'SAR 300/hr', rating: '4.9', image: ServicePlumbing },
];

export { ProfessionalProfile, SpecialOfferWoman };

export const whyHomeyFeatures = [
  { icon: <HardHat size={20} color="#C59315" />, title: 'Professional\nTechnicians' },
  { icon: <CalendarDays size={20} color="#C59315" />, title: 'Quick\nBooking' },
  { icon: <BadgeDollarSign size={20} color="#C59315" />, title: 'Price\nGuarantee' },
  { icon: <PhoneCall size={20} color="#C59315" />, title: 'Customer\nService 24/7' },
  { icon: <CreditCard size={20} color="#C59315" />, title: 'Secure\nPayments' },
  { icon: <ShieldCheck size={20} color="#C59315" />, title: 'Golden\nGuarantee' },
];

export const workerProfile = {
  id: 1,
  name: 'Zubair Bin Talha',
  role: 'Senior House Cleaner',
  location: 'Riyadh',
  availability: 'Available Today',
  verified: true,
  backgroundChecked: true,
  experience: '8 Yrs',
  experienceLabel: 'Experience',
  jobsDone: '1.2k+',
  jobsLabel: 'Jobs Done',
  rating: '4.9',
  ratingLabel: 'Rating',
  about: 'Specializing in residential wiring and smart home installation. I prioritize safety and cleanliness in every home I visit. Fully certified and trained for modern electrical systems.',
  price: 150,
  profileImage: ProfessionalProfile,
  recentWork: [ServiceCleaning, ServiceMaintenance, ServicePlumbing],
  reviews: {
    overall: 4.4,
    count: 128,
    breakdown: {
      punctuality: { label: 'Punctuality', value: 5.0 },
      service: { label: 'Service', value: 4.8 },
      price: { label: 'Price', value: 4.9 },
    },
    list: [
      {
        id: 1,
        name: 'Abdullah',
        avatar: ProfessionalProfile,
        rating: 5,
        date: '04 Apr 2023',
        comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      },
      {
        id: 2,
        name: 'Aleem',
        avatar: ProfessionalProfile,
        rating: 4,
        date: '04 Apr 2023',
        comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      },
    ],
  },
};

import { MessageSquare, User, CheckCircle, Calendar } from "lucide-react";
import { ReactNode } from "react";

export interface Service {
  title: string;
  description: string;
  icon: ReactNode;
}

export const services: Service[] = [
  { 
    title: "Free Consultation", 
    description: "Get expert advice on furniture selection and space planning", 
    icon: <MessageSquare className="h-6 w-6 text-gold" /> 
  },
  { 
    title: "Custom Design", 
    description: "Personalized furniture solutions tailored to your needs", 
    icon: <User className="h-6 w-6 text-gold" /> 
  },
  { 
    title: "Installation Service", 
    description: "Professional installation at no additional cost", 
    icon: <CheckCircle className="h-6 w-6 text-gold" /> 
  },
  { 
    title: "Flexible Scheduling", 
    description: "Convenient appointment times that work for you", 
    icon: <Calendar className="h-6 w-6 text-gold" /> 
  }
];
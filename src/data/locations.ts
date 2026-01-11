import { MapPin, Phone, Mail, Clock } from "lucide-react";

export interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  coordinates: { lat: number; lng: number };
  isHeadOffice: boolean;
}

export const locations: Location[] = [
  {
    id: "erode",
    name: "Erode Office",
    address: "3-3, Kanjikovil Main Road, Thiththampalayam Pirivu, Perundurai, Erode - 638 052",
    phone: "+91 9876543210",
    email: "erode@royalfurniture.com",
    hours: "Monday - Saturday: 9:00 AM - 7:00 PM",
    coordinates: { lat: 11.316449040470129, lng: 77.58292618196351 },
    isHeadOffice: true
  },
  {
    id: "coimbatore",
    name: "Coimbatore Office",
    address: "456 Design Avenue, RS Puram, Coimbatore, Tamil Nadu 641002",
    phone: "+91 9876543211",
    email: "coimbatore@royalfurniture.com",
    hours: "Monday - Saturday: 9:00 AM - 7:00 PM",
    coordinates: { lat: 11.0168, lng: 76.9558 },
    isHeadOffice: false
  }
];
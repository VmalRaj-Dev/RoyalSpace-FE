import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  Shield,
  Wrench,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  YoutubeIcon
} from "lucide-react";
import { useState } from "react";
import ConsultationForm from "@/components/common/ConsultationForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Products", href: "/products" },
    { name: "Blogs", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  categories: [
    { name: "INTERIO - Home Interiors", href: "/products?category=interio" },
    {
      name: "EDUFURN - Institution Furniture",
      href: "/products?category=edufurn",
    },
    {
      name: "MEDIFURN - Hospital Furniture",
      href: "/products?category=medifurn",
    },
    { name: "MODULAR - Work Stations", href: "/products?category=modular" },
    { name: "SHOPFIT - Retail Solutions", href: "/products?category=shopfit" },
  ],
  social: [
    { name: "Facebook", href: "https://www.facebook.com/share/p/1D5MKBPCp1/", icon: Facebook },
    { name: "Instagram", href: "https://www.instagram.com/p/DQA6yffE5p1/", icon: Instagram },
    { name: "LinkedIn", href: "https://www.linkedin.com/posts/rspace-in_light-up-your-diwali-with-interiors-that-activity-7385864858140872704-OLHI", icon: Linkedin },
    { name: "Twitter", href: "https://x.com/Rspace_in/status/1980099148784218558", icon: Twitter },
    { name: "Youtube", href: "http://youtube.com/post/UgkxejOd8jwfkd32O2NnAc2wNHCVXcH5ar6E", icon: YoutubeIcon },
  ],
  contacts: [
    {
      location: "Coimbatore Office",
      address: "No.188, DB Road, R.S. Puram, Coimbatore-641 002, Tamilnadu, India",
      phone: "+91 9313163131",
      mail: "info@royalfur.in",
      hours: "Mon-Sat: 10AM-8PM",
    },
    {
      location: "Erode Office",
      address: "3-3, Kanjikovil Main Road, Thiththampalayam Pirivu, Perundurai, Erode - 638 052",
      phone: "+91 9313163131",
      mail: "info@royalfur.in",
      hours: "Mon-Sat: 10AM-8PM",
    }
  ],
};

export const Footer = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <footer className="relative bg-[#e8f0f7] text-gray-800 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          {/* Brand & Social */}
          <div className="lg:col-span-1 flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative bg-white p-3 rounded-lg shadow-sm">
                <img
                  className="h-12 w-auto"
                  src="/logo.png"
                  alt="R Space - Royal Touch in Interiors"
                  style={{ display: "block" }}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* Fallback logo text */}
                <div className="hidden">
                  <div className="h-10 flex items-center px-3 bg-primary rounded-lg">
                    <span className="text-white font-bold text-lg">R SPACE</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed font-light">
              Crafting premium furniture solutions for over 28 years. From home
              interiors to commercial spaces, we deliver excellence with
              unmatched quality and service.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-700 font-light">28+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-700 font-light">ISO 9001:14001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wrench className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-700 font-light">Free Installation</span>
              </div>
            </div>
            <div className="flex space-x-3 mt-2">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="text-gray-700 hover:text-primary transition-colors hover:opacity-100"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-normal mb-6 tracking-widest uppercase text-gray-600">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-700 hover:text-primary transition-colors font-light"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Product Categories */}
          <div>
            <h3 className="text-sm font-normal mb-6 tracking-widest uppercase text-gray-600">
              Our Categories
            </h3>
            <ul className="space-y-2">
              {navigation.categories.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-700 hover:text-primary transition-colors font-light"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Us */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-normal mb-6 tracking-widest uppercase text-gray-600">
              Contact
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {navigation.contacts.map((contact) => (
                <div
                  key={contact.location}
                  className="rounded-lg p-4 flex flex-col gap-2 bg-white/40 border border-gray-300/30 hover:bg-white/60 transition-colors"
                >
                  <h4 className="font-normal text-gray-900 mb-1 tracking-wide">{contact.location}</h4>
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                    <span className="text-sm text-gray-700 font-light">{contact.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <a
                      href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
                      className="text-sm text-gray-700 hover:text-primary transition-colors font-light"
                    >
                      {contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <a
                      href={`mailto:${contact.mail}`}
                      className="text-sm text-gray-700 hover:text-primary transition-colors font-light"
                    >
                      {contact.mail}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm text-gray-700 font-light">{contact.hours}</span>
                  </div>
                </div>
              ))}
            </div>
            <Button
              className="w-full mt-6 bg-primary hover:bg-primary/90 text-white transition-colors font-light"
              onClick={() => setQuoteOpen(true)}
            >
              Get Free Quote
            </Button>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-400/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <p className="text-sm text-gray-600 font-light">
                © 2024 Royal Space. All rights reserved. Crafted with excellence
                since 1996.
              </p>
              <a
                href="https://cre8iveloop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-xs text-gray-500 hover:text-primary transition-all duration-300"
              >
                <span className="font-light">Crafted with</span>
                <span className="inline-block transform group-hover:scale-110 transition-transform">💜</span>
                <span className="font-light">by</span>
                <span className="font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-primary transition-all">
                  Cre8iveLoop
                </span>
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              <Link
                to="/privacy-policy"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-light"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-light"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                to="/contact"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-light"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={quoteOpen} onOpenChange={setQuoteOpen}>
        <DialogContent className="sm:max-w-[480px]">
          <DialogHeader>
            <DialogTitle>Get Free Quote</DialogTitle>
            <DialogDescription>
              Fill out the form below and our team will get back to you with a personalized quote.
            </DialogDescription>
          </DialogHeader>
          <ConsultationForm compact />
        </DialogContent>
      </Dialog>
    </footer>
  );
};

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import SEO from "@/components/common/SEO";
import { 
  ArrowRight, 
  Phone, 
  Award,
  Users,
  Building2,
  Trophy,
  Calendar,
  ChevronRight
} from "lucide-react";
import HeroSection from "@/components/hero/index";

// Stats data
const stats = [
  { number: "10,000+", value: 10000, suffix: "+", label: "Happy Clients", icon: Users },
  { number: "28+", value: 28, suffix: "+", label: "Years Experience", icon: Trophy },
  { number: "1,200+", value: 1200, suffix: "+", label: "Projects Delivered", icon: Building2 },
  { number: "98%", value: 98, suffix: "%", label: "Client Satisfaction", icon: Award }
];

// Animated Counter Component
function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;
    const endValue = value;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

// Services data
const services = [
  {
    id: "interio",
    title: "INTERIO",
    subtitle: "Home Interiors",
    description: "Transform your living spaces with premium home interior solutions",
    image: "/interio/liv.webp"
  },
  {
    id: "edufurn",
    title: "EDUFURN",
    subtitle: "Educational Furniture",
    description: "Creating inspiring learning environments for institutions",
    image: "/edufurn/fullschoolinterior.webp"
  },
  {
    id: "medifurn",
    title: "MEDIFURN",
    subtitle: "Healthcare Solutions",
    description: "Functional and welcoming hospital furniture",
    image: "/fullhospital.webp"
  },
  {
    id: "modular",
    title: "MODULAR",
    subtitle: "Office Workstations",
    description: "Efficient and appealing office interior solutions",
    image: "/modular/off.webp"
  }
];

// Why Choose Us
const features = [
  {
    title: "ISO Certified",
    description: "ISO 9001:14001 certified quality standards",
    icon: Award
  },
  {
    title: "28+ Years",
    description: "Nearly three decades of furniture excellence",
    icon: Trophy
  },
  {
    title: "Expert Team",
    description: "100+ skilled craftsmen and designers",
    icon: Users
  },
  {
    title: "Free Installation",
    description: "Professional setup at no additional cost",
    icon: Building2
  }
];

export default function NewHome() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <>
      <SEO 
        title="Royal Furniture - Premium Furniture Solutions | 28+ Years of Excellence"
        description="ISO certified furniture manufacturer in Tamil Nadu. Specializing in home interiors, educational furniture, healthcare solutions, office workstations, and retail solutions. Free installation & warranty."
        keywords="furniture manufacturer, royal furniture, interior design, office furniture, hospital furniture, educational furniture, modular furniture, Tamil Nadu furniture"
      />
      <main className="min-h-screen bg-white">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* <img
            src="/ws.webp"
            alt="Royal Furniture - Premium Interior Solutions"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" /> */}
          <HeroSection />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs tracking-widest uppercase font-light">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-12 bg-white/30"
          />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-[#e8f0f7]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <Icon className="h-8 w-8 mx-auto mb-4 text-primary/40 group-hover:text-primary transition-colors" />
                  <div className="text-4xl md:text-5xl font-light text-foreground mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2.5} />
                  </div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wider font-light">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-block mb-4">
              <p className="text-primary text-sm tracking-[0.3em] uppercase font-light bg-[#e8f0f7] px-4 py-2 rounded-full">Our Services</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-neutral-600 font-light max-w-2xl">
              Specialized furniture solutions for every space and need
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={`/products?category=${service.id}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Service Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <p className="text-xs tracking-widest uppercase mb-2 opacity-80 font-light">
                        {service.subtitle}
                      </p>
                      <h3 className="text-3xl font-light mb-2">{service.title}</h3>
                      <p className="text-sm opacity-80 font-light mb-4">{service.description}</p>
                      <div className="flex items-center text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More <ChevronRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-white px-8 py-6 font-light"
              asChild
            >
              <Link to="/products">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <p className="text-primary text-sm tracking-[0.3em] uppercase font-light bg-[#e8f0f7] px-4 py-2 rounded-full">Why Choose Us</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              Excellence in Every Detail
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 hover:bg-neutral-50 transition-colors"
                >
                  <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-normal text-foreground mb-2">{feature.title}</h3>
                  <p className="text-neutral-600 font-light text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-[#e8f0f7] text-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[0.3em] uppercase mb-6 text-gray-600 font-light">Ready to Start?</p>
            <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
              Let's Create Something
              <span className="block font-normal mt-2">Exceptional Together</span>
            </h2>
            <p className="text-lg text-gray-700 font-light mb-12 max-w-2xl mx-auto">
              Get in touch with our team to discuss your project and discover how we can transform your space
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 px-8 py-6 font-light shadow-lg"
                onClick={() => setShowEnquiry(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary bg-white text-primary hover:bg-primary hover:text-white px-8 py-6 font-light"
                asChild
              >
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Enquiry Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white shadow-2xl rounded-full px-6 py-6 group"
          onClick={() => setShowEnquiry(true)}
        >
          <Phone className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
          <span className="hidden md:inline font-light">Enquire Now</span>
        </Button>
      </motion.div>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {showEnquiry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setShowEnquiry(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-light text-foreground">Get Free Quote</h3>
                <button
                  onClick={() => setShowEnquiry(false)}
                  className="text-neutral-400 hover:text-foreground transition-colors text-2xl"
                >
                  ×
                </button>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary font-light"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary font-light"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary font-light"
                />
                <textarea
                  placeholder="Tell us about your project"
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary font-light resize-none"
                />
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 font-light">
                  Submit Enquiry
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
    </>
  );
}

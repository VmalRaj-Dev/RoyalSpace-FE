import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/common/SEO";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ConsultationForm from "@/components/common/ConsultationForm";
import auditorium from "/edufurn/fullschoolinterior.webp";
import interio from "/interio/liv.webp";
import medifurn from "/medifurn/fullhospital.webp";
import modular from "/modular/fullofficeinterio.webp";
import shopfit from "/shopfit/5.webp";

// Import Category Components
import EdufurnCategory from "@/components/categories/EdufurnCategory";
import InterioCategory from "@/components/categories/InterioCategory";
import MedifurnCategory from "@/components/categories/MedifurnCategory";
import ModularCategory from "@/components/categories/ModularCategory";
import ShopfitCategory from "@/components/categories/ShopfitCategory";

const categories = [
  {
    id: "interio",
    name: "INTERIO",
    subtitle: "Home Interiors",
    description: "Transform your living spaces with premium home interior solutions",
    detailedDescription: "We specialize in creating harmonious environments that blend functionality with aesthetic appeal, ensuring every corner of your home reflects your personality and lifestyle.",
    image: interio,
    features: ["Custom Design", "Premium Materials", "Space Optimization", "Modern Aesthetics"],
    stats: { projects: "500+", satisfaction: "98%", experience: "10+ Years" }
  },
  {
    id: "edufurn",
    name: "EDUFURN",
    subtitle: "Educational Furniture",
    description: "Creating inspiring learning environments for schools and colleges",
    detailedDescription: "We understand the unique needs of educational institutions and design spaces that foster creativity, collaboration, and academic excellence.",
    image: auditorium,
    features: ["Ergonomic Design", "Durable Materials", "Safety First", "Learning Focused"],
    stats: { projects: "200+", satisfaction: "95%", experience: "8+ Years" }
  },
  {
    id: "medifurn",
    name: "MEDIFURN",
    subtitle: "Healthcare Solutions",
    description: "Functional and welcoming hospital furniture solutions",
    detailedDescription: "We create spaces that prioritize patient comfort, staff efficiency, and hygiene standards while maintaining a welcoming atmosphere for healthcare facilities.",
    image: medifurn,
    features: ["Hygiene Standards", "Patient Comfort", "Staff Efficiency", "Medical Grade"],
    stats: { projects: "150+", satisfaction: "99%", experience: "12+ Years" }
  },
  {
    id: "modular",
    name: "MODULAR",
    subtitle: "Office Workstations",
    description: "Efficient and appealing office interior solutions",
    detailedDescription: "We create dynamic workspaces that adapt to modern business needs, promoting collaboration, efficiency, and employee well-being.",
    image: modular,
    features: ["Flexible Design", "Productivity Focus", "Modern Workspace", "Collaborative Spaces"],
    stats: { projects: "300+", satisfaction: "97%", experience: "9+ Years" }
  },
  {
    id: "shopfit",
    name: "SHOPFIT",
    subtitle: "Retail Solutions",
    description: "Designing and constructing appealing retail shop interiors",
    detailedDescription: "We create captivating retail environments that enhance customer experience, optimize product display, and drive sales through strategic design.",
    image: shopfit,
    features: ["Customer Experience", "Product Display", "Brand Identity", "Sales Optimization"],
    stats: { projects: "400+", satisfaction: "96%", experience: "11+ Years" }
  }
];

export default function NewProducts() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState("");

  const handleGetQuote = (category: typeof categories[0]) => {
    let serviceName = "";
    switch (category.id) {
      case "interio": serviceName = "INTERIO - Home Interiors"; break;
      case "edufurn": serviceName = "EDUFURN - Educational Furniture"; break;
      case "medifurn": serviceName = "MEDIFURN - Healthcare Furniture"; break;
      case "modular": serviceName = "MODULAR - Office Workstations"; break;
      case "shopfit": serviceName = "SHOPFIT - Retail Solutions"; break;
      default: serviceName = `${category.name} - ${category.subtitle}`;
    }
    setQuoteService(serviceName);
    setQuoteOpen(true);
    setSelectedCategory(null);
  };

  const renderCategoryContent = () => {
    switch (selectedCategory) {
      case "interio": return <InterioCategory />;
      case "edufurn": return <EdufurnCategory />;
      case "medifurn": return <MedifurnCategory />;
      case "modular": return <ModularCategory />;
      case "shopfit": return <ShopfitCategory />;
      default: return null;
    }
  };

  return (
    <>
      <SEO
        title="Products & Services - Royal Furniture | INTERIO, EDUFURN, MEDIFURN, MODULAR, SHOPFIT"
        description="Explore Royal Furniture's comprehensive range of furniture solutions: Home Interiors (INTERIO), Educational Furniture (EDUFURN), Healthcare Solutions (MEDIFURN), Office Workstations (MODULAR), and Retail Solutions (SHOPFIT)."
        keywords="furniture products, home interiors, educational furniture, hospital furniture, office furniture, retail furniture, modular furniture, custom furniture solutions"
      />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/ws.webp"
              alt="Our Services"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <p className="text-white/80 text-sm tracking-[0.3em] uppercase mb-6 font-light">
                  Our Services
                </p>
                <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
                  Furniture Solutions
                  <span className="block font-normal mt-2">For Every Space</span>
                </h1>
                <p className="text-xl text-white/90 font-light leading-relaxed">
                  Specialized furniture for homes, offices, hospitals, schools, and retail spaces
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-light">
                What We Offer
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
                Our Services
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Category Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-xs tracking-widest uppercase mb-2 opacity-80 font-light">
                        {category.subtitle}
                      </p>
                      <h3 className="text-3xl font-light mb-2">{category.name}</h3>
                      <p className="text-sm opacity-80 font-light mb-4">{category.description}</p>
                      <div className="flex items-center text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Detail Modal */}
        <AnimatePresence>
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000] flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelectedCategory(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl w-full max-w-[95vw] h-[95vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="fixed top-6 right-6 z-[60] w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors text-white"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="p-4 md:p-8">
                  {renderCategoryContent()}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Dialog open={quoteOpen} onOpenChange={setQuoteOpen}>
          <DialogContent className="sm:max-w-[480px]">
            <DialogHeader>
              <DialogTitle>Get Free Quote</DialogTitle>
              <DialogDescription>
                Fill out the form below and our team will get back to you with a personalized quote.
              </DialogDescription>
            </DialogHeader>
            <ConsultationForm compact defaultService={quoteService} readOnlyService={true} />
          </DialogContent>
        </Dialog>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-[#e8f0f7] text-gray-900">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-light mb-8">
                Need Custom Solutions?
              </h2>
              <p className="text-lg text-gray-700 font-light mb-12 max-w-2xl mx-auto">
                Our team can create bespoke furniture solutions tailored to your specific needs
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary text-white hover:bg-primary/90 px-8 py-4 rounded-lg font-light transition-colors shadow-lg"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

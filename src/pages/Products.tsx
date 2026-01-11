import React, { useState, useEffect, lazy, Suspense, useCallback, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
// import WorkingConsultationForm from '@/components/common/WorkingConsultationForm';
import './Products.css';
import {
  ArrowRight,
  Sparkles,
  Building2,
  GraduationCap,
  Heart,
  Briefcase,
  ShoppingBag,
  Star,
  CheckCircle,
  Phone,
  Mail,
  Trophy,
  ChevronRight,
  X,
  Eye
} from 'lucide-react';

// Lazy load category components
const InterioCategory = lazy(() => import('@/components/categories/InterioCategory'));
const EdufurnCategory = lazy(() => import('@/components/categories/EdufurnCategory'));
const MedifurnCategory = lazy(() => import('@/components/categories/MedifurnCategory'));
const ModularCategory = lazy(() => import('@/components/categories/ModularCategory'));
const ShopfitCategory = lazy(() => import('@/components/categories/ShopfitCategory'));

interface FurnitureCategory {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  image: string;
  route: string;
  bgColor: string;
  gradientColors: string;
  icon: React.ReactNode;
  features: string[];
  stats: {
    projects: string;
    satisfaction: string;
    experience: string;
  };
  gallery: string[];
  component: React.ComponentType;
}

const categories: FurnitureCategory[] = [
  {
    id: "interio",
    name: "INTERIO",
    description: "Our product for crafting efficient and appealing home interiors",
    detailedDescription: "Transform your living spaces with our premium home interior solutions. We specialize in creating harmonious environments that blend functionality with aesthetic appeal, ensuring every corner of your home reflects your personality and lifestyle.",
    image: "https://royalfurn.in/static/media/kit.c96f4868b9b35d568837.webp",
    route: "/products?category=interio",
    bgColor: "bg-primary/80",
    gradientColors: "bg-primary",
    icon: <Building2 className="w-6 h-6" />,
    features: ["Custom Design", "Premium Materials", "Space Optimization", "Modern Aesthetics"],
    stats: {
      projects: "500+",
      satisfaction: "98%",
      experience: "10+ Years"
    },
    gallery: [
      "https://royalfurn.in/static/media/kit.c96f4868b9b35d568837.webp",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400"
    ],
    component: InterioCategory
  },
  {
    id: "edufurn",
    name: "EDUFURN",
    description: "Our product for creating inspiring school and college interiors",
    detailedDescription: "Create inspiring learning environments with our specialized educational furniture solutions. We understand the unique needs of educational institutions and design spaces that foster creativity, collaboration, and academic excellence.",
    image: "https://royalfurn.in/static/media/classroom.f4a1e6a7c6df760446ce.webp",
    route: "/products?category=edufurn",
    bgColor: "bg-primary/80",
    gradientColors: "bg-primary",
    icon: <GraduationCap className="w-6 h-6" />,
    features: ["Ergonomic Design", "Durable Materials", "Safety First", "Learning Focused"],
    stats: {
      projects: "200+",
      satisfaction: "95%",
      experience: "8+ Years"
    },
    gallery: [
      "https://royalfurn.in/static/media/classroom.f4a1e6a7c6df760446ce.webp",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400"
    ],
    component: EdufurnCategory
  },
  {
    id: "medifurn",
    name: "MEDIFURN",
    description: "Our product for crafting functional and welcoming hospital interior and furnitures",
    detailedDescription: "Design healing environments with our specialized medical furniture solutions. We create spaces that prioritize patient comfort, staff efficiency, and hygiene standards while maintaining a welcoming atmosphere for healthcare facilities.",
    image: "https://royalfurn.in/static/media/hospitalcottrolly.a9880d1c7812d4f39839.webp",
    route: "/products?category=medifurn",
    bgColor: "bg-primary/80",
    gradientColors: "bg-primary",
    icon: <Heart className="w-6 h-6" />,
    features: ["Hygiene Standards", "Patient Comfort", "Staff Efficiency", "Medical Grade"],
    stats: {
      projects: "150+",
      satisfaction: "99%",
      experience: "12+ Years"
    },
    gallery: [
      "https://royalfurn.in/static/media/hospitalcottrolly.a9880d1c7812d4f39839.webp",
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400"
    ],
    component: MedifurnCategory
  },
  {
    id: "modular",
    name: "MODULA",
    description: "Our product for crafting efficient and appealing office interiors",
    detailedDescription: "Boost productivity with our innovative office interior solutions. We create dynamic workspaces that adapt to modern business needs, promoting collaboration, efficiency, and employee well-being in professional environments.",
    image: "https://royalfurn.in/static/media/modular.66ffa99c82d1993db955.webp",
    route: "/products?category=modular",
    bgColor: "bg-primary/80",
    gradientColors: "bg-primary",
    icon: <Briefcase className="w-6 h-6" />,
    features: ["Flexible Design", "Productivity Focus", "Modern Workspace", "Collaborative Spaces"],
    stats: {
      projects: "300+",
      satisfaction: "97%",
      experience: "9+ Years"
    },
    gallery: [
      "https://royalfurn.in/static/media/modular.66ffa99c82d1993db955.webp",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
      "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=400"
    ],
    component: ModularCategory
  },
  {
    id: "shopfit",
    name: "SHOPFIT",
    description: "Our product for designing and constructing appealing retail shop interiors",
    detailedDescription: "Maximize your retail potential with our specialized shop interior solutions. We create captivating retail environments that enhance customer experience, optimize product display, and drive sales through strategic design.",
    image: "https://royalfurn.in/static/media/shopfit.5e41e3d4b46be1460dae.webp",
    route: "/products?category=shopfit",
    bgColor: "bg-primary/80",
    gradientColors: "bg-primary",
    icon: <ShoppingBag className="w-6 h-6" />,
    features: ["Customer Experience", "Product Display", "Brand Identity", "Sales Optimization"],
    stats: {
      projects: "400+",
      satisfaction: "96%",
      experience: "11+ Years"
    },
    gallery: [
      "https://royalfurn.in/static/media/shopfit.5e41e3d4b46be1460dae.webp",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400"
    ],
    component: ShopfitCategory
  }
];

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(searchParams.get('category'));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [consultationService, setConsultationService] = useState<string>("");

  const selectedCategoryData = useMemo(() =>
    selectedCategory ? categories.find(cat => cat.id === selectedCategory) : null,
    [selectedCategory]
  );

  const SelectedComponent = selectedCategoryData?.component;

  // Update URL when category changes
  useEffect(() => {
    if (selectedCategory) {
      setSearchParams({ category: selectedCategory });
      setIsModalOpen(true);
    } else {
      setSearchParams({});
      setIsModalOpen(false);
    }
  }, [selectedCategory, setSearchParams]);

  const handleCategoryClick = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedCategory(null);
    setIsModalOpen(false);
  }, []);

  const handleQuickConsultation = useCallback((categoryId?: string) => {
    // Set the service based on category and show consultation form
    if (categoryId) {
      setConsultationService(categoryId);
    }
    setShowConsultationForm(true);
  }, []);

  const scrollToCategories = useCallback(() => {
    const categoriesSection = document.querySelector('[data-categories-section]');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleConsultationClose = useCallback(() => {
    setShowConsultationForm(false);
    setConsultationService("");
  }, []);

  // Optimized animation variants
  const fadeInUp = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  }), []);

  const staggerContainer = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }), []);

  const cardHover = useMemo(() => ({
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -5
    }
  }), []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Consultation Form Popup */}
      {/* <WorkingConsultationForm autoShow={false} triggerButton={false} /> */}

      {/* Modern Hero Section - Inspired by architectural sites */}
      <section className="relative py-32 md:py-40 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            className="max-w-5xl"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-primary max-w-[120px]"></div>
              <span className="text-sm tracking-widest text-primary uppercase">Our Solutions</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-neutral-900 mb-8 tracking-tight leading-tight">
              Product
              <span className="block">
                Categories
              </span>
            </h1>

            <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl font-light">
              Discover specialized furniture solutions designed for every space and need.
              Each category represents our commitment to excellence and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid Section - Minimalist grid */}
      <section className="py-20 bg-neutral-50" data-categories-section>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={fadeInUp}
                className="group cursor-pointer"
                onClick={() => handleCategoryClick(category.id)}
              >
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  variants={cardHover}
                  className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
                >
                  {/* Category Image */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmM2Y0ZjYiLz48cGF0aCBkPSJtMjAwIDE1MC0xNS0xNWgzMGwtMTUgMTVaIiBmaWxsPSIjOWI5Yzk5Ii8+PHRleHQgeD0iMjAwIiB5PSIxODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2YjcyODYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCI+SW1hZ2UgTm90IEZvdW5kPC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                    <div className={`absolute inset-0 opacity-30 group-hover:opacity-20 transition-opacity duration-300`}></div>

                    {/* Category Icon */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${category.gradientColors} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {category.icon}
                      </div>
                    </div>

                    {/* Stats Badge */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/90 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 rounded-xl">
                      <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold text-gray-900">
                        <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        {category.stats.projects}
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Details
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary transition-all">
                        {category.name}
                      </h3>
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                      {category.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                      {category.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                      <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-xl group-hover:bg-primary/5 transition-colors">
                        <div className="flex items-center justify-center mb-1">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        </div>
                        <div className="text-sm sm:text-lg font-bold text-gray-900">{category.stats.satisfaction}</div>
                        <div className="text-xs text-gray-500">Satisfaction</div>
                      </div>
                      <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-xl group-hover:bg-primary/5 transition-colors">
                        <div className="flex items-center justify-center mb-1">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        </div>
                        <div className="text-sm sm:text-lg font-bold text-gray-900">{category.stats.experience}</div>
                        <div className="text-xs text-gray-500">Experience</div>
                      </div>
                    </div>

                    {/* Quick Action Button */}
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleQuickConsultation(category.id);
                      }}
                      size="sm"
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 rounded-xl transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                    >
                      Get Quote for {category.name}
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action with Clean Design */}
      <section className="py-20 md:py-24 bg-neutral-900 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 mb-8 font-light">
              <Sparkles className="w-5 h-5" />
              Ready to Get Started?
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-light text-white mb-6">
              Transform Your Space with
              <span className="block font-normal">
                Premium Furniture
              </span>
            </h2>

            <p className="text-xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Connect with our experts to bring your vision to life. We're here to help you create
              spaces that inspire, comfort, and perform.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                onClick={() => handleQuickConsultation()}
                size="lg"
                className="group bg-white text-neutral-900 hover:bg-neutral-100 font-normal px-8 py-4"
              >
                <Phone className="mr-3 h-5 w-5" />
                Start Your Journey
              </Button>
              <Button
                onClick={scrollToCategories}
                variant="outline"
                size="lg"
                className="bg-transparent text-white hover:bg-white hover:text-neutral-900 border-white/30 hover:border-white px-8 py-4 font-light"
              >
                <Eye className="mr-3 h-5 w-5" />
                Explore Categories
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80">
              <div className="text-center">
                <div className="text-2xl font-light text-white mb-1">1200+</div>
                <div className="text-sm text-neutral-400 font-light">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-white mb-1">500+</div>
                <div className="text-sm text-neutral-400 font-light">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-white mb-1">15+</div>
                <div className="text-sm text-neutral-400 font-light">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-white mb-1">98%</div>
                <div className="text-sm text-neutral-400 font-light">Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCategoryData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-start justify-center p-4 overflow-y-auto"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white rounded-3xl shadow-2xl max-w-7xl w-full my-8 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`relative p-6 md:p-8 ${selectedCategoryData.gradientColors} text-white`}>
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
                >
                  <ArrowRight className="w-5 h-5 rotate-45" />
                </button>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 pr-16">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    {selectedCategoryData.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">{selectedCategoryData.name}</h2>
                    <p className="text-white/90 text-base md:text-lg">{selectedCategoryData.detailedDescription}</p>
                  </div>
                </div>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-2 md:gap-3 mt-6">
                  {selectedCategoryData.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 md:px-4 py-1 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Category-specific Consultation Button */}
                <div className="mt-6">
                  <Button
                    onClick={() => {
                      handleQuickConsultation(selectedCategoryData.id);
                    }}
                    size="lg"
                    className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/30"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Get {selectedCategoryData.name} Consultation
                  </Button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-6 md:p-8">
                <Suspense fallback={
                  <div className="flex items-center justify-center h-48 sm:h-64">
                    <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent"></div>
                  </div>
                }>
                  <div className="category-content">
                    {SelectedComponent && <SelectedComponent />}
                  </div>
                </Suspense>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action with Clean Design */}
      <section className="py-20 md:py-24 bg-neutral-900 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 mb-8 font-light">
              <Sparkles className="w-5 h-5" />
              Ready to Get Started?
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-light text-white mb-6">
              Transform Your Space with
              <span className="block font-normal">
                Premium Furniture
              </span>
            </h2>

            <p className="text-xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Connect with our experts to bring your vision to life. We're here to help you create
              spaces that inspire, comfort, and perform.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                onClick={() => handleQuickConsultation()}
                size="lg"
                className="group bg-white text-neutral-900 hover:bg-neutral-100 font-normal px-8 py-4"
              >
                <Phone className="mr-3 h-5 w-5" />
                Start Your Journey
              </Button>
              <Button
                onClick={scrollToCategories}
                variant="outline"
                size="lg"
                className="bg-transparent text-white hover:bg-white hover:text-neutral-900 border-white/30 hover:border-white px-8 py-4 font-light"
              >
                <Eye className="mr-3 h-5 w-5" />
                Explore Categories
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80">
              <div className="text-center">
                <div className="text-2xl font-light text-white mb-1">1200+</div>
                <div className="text-sm text-neutral-400 font-light">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-white mb-1">500+</div>
                <div className="text-sm text-neutral-400 font-light">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-white mb-1">15+</div>
                <div className="text-sm text-neutral-400 font-light">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-white mb-1">98%</div>
                <div className="text-sm text-neutral-400 font-light">Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import interioImage from '@/assets/interio-hero.jpg';
import edufurnImage from '@/assets/edufurn-hero.jpg';
import medifurnImage from '@/assets/medifurn-hero.jpg';
import modularImage from '@/assets/modular-hero.jpg';
import shopfitImage from '@/assets/shopfit-hero.jpg';

interface ProductCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
}

const productCategories: ProductCategory[] = [
  {
    id: 'interio',
    title: 'INTERIO',
    subtitle: 'Home Interiors',
    description: 'Transform your living spaces with our premium home interior solutions. From modern kitchens to elegant living rooms.',
    image: interioImage,
    href: '/products/interio'
  },
  {
    id: 'edufurn',
    title: 'EDUFURN',
    subtitle: 'Institution Furniture',
    description: 'Comprehensive furniture solutions for educational institutions. Durable, functional, and designed for learning environments.',
    image: edufurnImage,
    href: '/products/edufurn'
  },
  {
    id: 'medifurn',
    title: 'MEDIFURN',
    subtitle: 'Hospital Furniture',
    description: 'Specialized medical furniture designed for healthcare facilities. Ensuring comfort, hygiene, and functionality.',
    image: medifurnImage,
    href: '/products/medifurn'
  },
  {
    id: 'modular',
    title: 'MODULAR',
    subtitle: 'Work Station',
    description: 'Modern modular office solutions that adapt to your workspace needs. Efficient, ergonomic, and stylish.',
    image: modularImage,
    href: '/products/modular'
  },
  {
    id: 'shopfit',
    title: 'SHOPFIT',
    subtitle: 'Retail Solutions',
    description: 'Complete retail shop fitting solutions. Create engaging shopping experiences with our custom designs.',
    image: shopfitImage,
    href: '/products/shopfit'
  }
];

export const InnovativeHero = () => {
  const [activeTab, setActiveTab] = useState(productCategories[0].id);
  const activeIndex = productCategories.findIndex(cat => cat.id === activeTab);
  
  const navigateToTab = (direction: 'prev' | 'next') => {
    const currentIndex = productCategories.findIndex(cat => cat.id === activeTab);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? productCategories.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === productCategories.length - 1 ? 0 : currentIndex + 1;
    }
    
    setActiveTab(productCategories[newIndex].id);
  };

  return (
    <section className="relative min-h-screen bg-gradient-warm overflow-hidden">
      {/* Brand Header */}
      <div className="absolute top-0 left-0 w-full z-20 pt-8 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-2">
              Royal Furniture
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              Premium Furniture in Erode & Coimbatore
            </p>
          </div>
        </div>
      </div>

      <Tabs.Root
        value={activeTab}
        onValueChange={setActiveTab}
        className="relative h-screen flex flex-col"
      >
        {/* Main Content Area */}
        <div className="flex-1 relative pt-32">
          <Tabs.Content
            value={activeTab}
            className="absolute inset-0 data-[state=active]:animate-fade-in"
          >
            <div className="h-full grid lg:grid-cols-2 items-center max-w-7xl mx-auto px-6 lg:px-8">
              {/* Content Side */}
              <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-px w-16 bg-gold" />
                    <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                      {productCategories[activeIndex]?.subtitle}
                    </span>
                  </div>
                  
                  <h2 className="text-5xl md:text-7xl font-display font-bold text-primary leading-tight">
                    {productCategories[activeIndex]?.title}
                  </h2>
                  
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                    {productCategories[activeIndex]?.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-gold text-gold-foreground hover:shadow-gold transition-luxury px-8"
                    asChild
                  >
                    <a href={productCategories[activeIndex]?.href}>
                      Explore Collections
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-luxury px-8"
                    asChild
                  >
                    <a href="/contact">
                      Get Quote
                    </a>
                  </Button>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative mt-8 lg:mt-0">
                <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-luxury">
                  <img
                    src={productCategories[activeIndex]?.image}
                    alt={productCategories[activeIndex]?.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>
              </div>
            </div>
          </Tabs.Content>
        </div>

        {/* Navigation Controls */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
          <button
            onClick={() => navigateToTab('prev')}
            className="p-3 bg-card/90 backdrop-blur-md border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-luxury shadow-elegant"
            aria-label="Previous category"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => navigateToTab('next')}
            className="p-3 bg-card/90 backdrop-blur-md border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-luxury shadow-elegant"
            aria-label="Next category"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="relative z-20 pb-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Tabs.List className="flex justify-center gap-2 bg-card/90 backdrop-blur-md rounded-2xl p-2 shadow-luxury">
              {productCategories.map((category, index) => (
                <Tabs.Trigger
                  key={category.id}
                  value={category.id}
                  className={cn(
                    "flex-1 max-w-48 px-6 py-4 rounded-xl transition-all duration-300 text-sm font-medium",
                    "hover:bg-accent hover:text-accent-foreground",
                    "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-elegant",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  )}
                >
                  <div className="text-center">
                    <div className="font-bold text-xs uppercase tracking-wider mb-1">
                      {category.title}
                    </div>
                    <div className="text-xs opacity-80">
                      {category.subtitle}
                    </div>
                  </div>
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
          <div className="flex gap-2">
            {productCategories.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-1 w-8 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-gold" : "bg-border"
                )}
              />
            ))}
          </div>
        </div>
      </Tabs.Root>

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};
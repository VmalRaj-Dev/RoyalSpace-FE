import React from 'react';
import { motion } from 'framer-motion';

const InterioCategory: React.FC = () => {
  const services = [
    {
      title: 'Full Home Interior',
      description: 'We bring your dreams to life in every room with our complete home interior solution',
      icon: '🏠',
      image: '/interio/living.webp'
    },
    {
      title: 'Modular Interior',
      description: 'Functional modular solutions for modern living & workspaces',
      icon: '🏗️',
      image: '/interio/m.webp'
    },
    {
      title: 'Furniture & Decor',
      description: 'Fill your home with our Royal and elegant furniture',
      icon: '🛋️',
      image: '/interio/fur.webp'
    },
    {
      title: 'Renovation',
      description: 'With our expertise, we can transform your way of life into your home',
      icon: '🔧',
      image: '/interio/ren.webp'
    }
  ];

  const steps = [
    { number: '01', title: 'Discovery & Consultation', description: 'Understanding your lifestyle and design preferences' },
    { number: '02', title: 'Design & Planning', description: 'Creating personalized design concepts' },
    { number: '03', title: 'Customization & Manufacturing', description: 'Crafting bespoke furniture and fixtures' },
    { number: '04', title: 'Installation & Quality Assurance', description: 'Meticulous installation with quality control' },
    { number: '05', title: 'Handover & Post Support', description: 'Final walkthrough and ongoing care' }
  ];

  const features = [
    { title: 'Budget friendly', description: 'Affordable luxury solutions', icon: '💰' },
    { title: 'On time move-in guarantee', description: 'Punctual project delivery', icon: '⏰' },
    { title: 'High quality checks', description: 'Rigorous quality standards', icon: '✅' },
    { title: 'Flat 10-year warranty', description: 'Comprehensive warranty protection', icon: '🛡️' }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative"
      >
        {/* Background Image */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <img 
            src="/interio/liv.webp" 
            alt="Luxurious Living Space"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-50/80 to-red-50/80"></div>
        </div>
        
        <div className="relative z-10 py-16">
          <div className="text-8xl mb-6">🏠</div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-4">
            INTERIO
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Master the art of living like the Royals
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Your ultimate Royal destination for all things interior! We provide a full range of services for your home or office, 
            from design to completion. We can handle a full-scale interior transformation, a renovation project, or modular solutions.
          </p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Image */}
              <div className="w-full h-48 rounded-xl mb-4 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Inspiration Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-12"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Get started on your design journey, with selected inspiration.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer overflow-hidden"
          >
            <div className="h-48 rounded-xl mb-4 overflow-hidden">
              <img 
                src="/interio/living.webp" 
                alt="Living Spaces"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Living Spaces</h3>
            <p className="text-gray-600 text-sm">Elegant and comfortable living areas</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer overflow-hidden"
          >
            <div className="h-48 rounded-xl mb-4 overflow-hidden">
              <img 
                src="/interio/m.webp" 
                alt="Modular Designs"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Modular Designs</h3>
            <p className="text-gray-600 text-sm">Smart and functional modular solutions</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer overflow-hidden"
          >
            <div className="h-48 rounded-xl mb-4 overflow-hidden">
              <img 
                src="/interio/fur.webp" 
                alt="Premium Furniture"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Premium Furniture</h3>
            <p className="text-gray-600 text-sm">Royal and elegant furniture collections</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Process Steps */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-3xl p-12"
      >
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Five steps to your dream home!
        </h2>
        <p className="text-center text-gray-600 mb-12">Looking to design your home interiors? Here's how you can get started.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Royal Furniture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-center text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Your Dream Home is Just a Click Away</h2>
        <p className="text-lg mb-8 opacity-90">
          Ready to transform your living space into a royal residence?
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-red-500 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Start Your Journey
        </motion.button>
      </motion.section>
    </div>
  );
};

export default InterioCategory;
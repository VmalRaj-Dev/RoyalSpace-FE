import React from 'react';
import { motion } from 'framer-motion';

const ModularCategory: React.FC = () => {
  const services = [
    {
      title: 'Full Office Interior',
      description: 'Elevate Every Space with Full-Service office Designs',
      icon: '🏢',
      image: '/modular/fullofficeinterio.webp'
    },
    {
      title: 'Furniture',
      description: 'Creating modular environment with fine furniture',
      icon: '🪑',
      image: '/modular/fur.webp'
    },
    {
      title: 'Decors',
      description: 'Smart modular solutions for client workspaces',
      icon: '🎨',
      image: '/modular/moddec.webp'
    },
    {
      title: 'Renovation',
      description: 'Undertake a fresh Look and Royal appearance',
      icon: '🔨',
      image: '/modular/ren.webp'
    }
  ];

  const steps = [
    { number: '01', title: 'Discovery & Consultation', description: 'Understanding your workspace needs and vision' },
    { number: '02', title: 'Design & Planning', description: 'Creating detailed plans and 3D visualizations' },
    { number: '03', title: 'Customization & Manufacturing', description: 'Building custom solutions for your space' },
    { number: '04', title: 'Installation & Quality Assurance', description: 'Professional installation with quality checks' },
    { number: '05', title: 'Handover & Post Support', description: 'Final handover with ongoing support' }
  ];

  const features = [
    { title: 'Budget friendly', description: 'Cost-effective solutions', icon: '💰' },
    { title: 'On time move-in guarantee', description: 'Timely project completion', icon: '⏰' },
    { title: 'High quality checks', description: 'Premium quality assurance', icon: '✅' },
    { title: 'Flat 10-year warranty', description: 'Extended warranty coverage', icon: '🛡️' }
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
            src="/modular/off.webp"
            alt="Modern Office Space"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-50/80 to-amber-50/80"></div>
        </div>

        <div className="relative z-10 py-16">
          <div className="text-8xl mb-6">🏢</div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 mb-4">
            MODULAR
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Office Interior - Designing Spaces that Energize Workflows
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Experience the Journey of Conceptualizing, Creating and Conquering Your Office Interiors!
            We offer everything you need for your workplace, including complete interiors, renovations, and modular solutions.
            We provide a large selection of furniture and décor, and we help you turn inspiration into beautifully designed spaces.
          </p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Modular Kitchen Designs Tailored for Indian Homes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden"
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

      {/* Process Steps */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-3xl p-12"
      >
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          5-Step Guide to Revitalize Your Office Space
        </h2>
        <p className="text-center text-gray-600 mb-12">Here's how you can get started.</p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Work Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { image: '/modular/cafe.webp', title: 'Cafe Design' },
            { image: '/modular/conf.webp', title: 'Conference Room' },
            { image: '/modular/seat.webp', title: 'Seating Solutions' },
            { image: '/modular/ws.webp', title: 'Workspace Design' },
            { image: '/modular/exdes.webp', title: 'Executive Design' },
            { image: '/modular/fo.webp', title: 'Front Office' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>
                </div>
              </div>
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
        className="bg-gradient-to-r from-orange-400 to-amber-500 rounded-3xl p-12 text-center text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Transform Your Workspace Today</h2>
        <p className="text-lg mb-8 opacity-90">
          Ready to create an office space that energizes workflows and boosts productivity?
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Get Started Now
        </motion.button>
      </motion.section>
    </div>
  );
};

export default ModularCategory;
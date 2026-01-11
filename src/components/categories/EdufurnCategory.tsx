import React from 'react';
import { motion } from 'framer-motion';

const EdufurnCategory: React.FC = () => {
  const services = [
    {
      title: 'Full School Interior',
      description: 'Full comprehensive solution for every nook and corner',
      icon: '🏫',
      image: '/edufurn/fullschoolinterior.webp'
    },
    {
      title: 'Furniture',
      description: 'Creating elegant environment with fine furniture',
      icon: '🪑',
      image: '/edufurn/furniture.webp'
    },
    {
      title: 'Labs',
      description: 'Complete Lab equipment for better school',
      icon: '🔬',
      image: '/edufurn/labs.webp'
    },
    {
      title: 'Renovation',
      description: 'Give your School a brand new look and feel',
      icon: '🔨',
      image: '/edufurn/class.webp'
    }
  ];

  const steps = [
    { number: '01', title: 'Discovery & Consultation', description: 'Understanding educational requirements and vision' },
    { number: '02', title: 'Design & Planning', description: 'Creating learning-focused design concepts' },
    { number: '03', title: 'Customization & Manufacturing', description: 'Building educational-specific solutions' },
    { number: '04', title: 'Installation & Quality Assurance', description: 'Safe and secure installation process' },
    { number: '05', title: 'Handover & Post Support', description: 'Training and ongoing maintenance support' }
  ];

  const features = [
    { title: 'Budget friendly', description: 'Cost-effective educational solutions', icon: '💰' },
    { title: 'On time move-in guarantee', description: 'Meeting academic schedules', icon: '⏰' },
    { title: 'High quality checks', description: 'Safety-first quality standards', icon: '✅' },
    { title: 'Flat 10-year warranty', description: 'Long-term educational investment', icon: '🛡️' }
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
            src="/edufurn/ed.webp" 
            alt="Educational Environment"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-50/80 to-green-50/80"></div>
        </div>
        
        <div className="relative z-10 py-16">
          <div className="text-8xl mb-6">🎓</div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-500 mb-4">
            EDUFURN
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Interior for Educational Institution - "Elevating Learning Spaces, Shaping Bright Futures"
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Crafting Learning Experiences through Design. We provide complete interior design, refurbishment, 
            and modular solutions for your schools. We have you covered from start to finish with a vast 
            selection of furniture and décor.
          </p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Educational Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden"
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

      {/* About Edufurn */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-gradient-to-br from-teal-50 to-green-50 rounded-3xl p-12"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Edufurn - Shaping the Future of Learning Spaces
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Royal Furniture is pleased to announce "Edufurn," our specialized service for schools and colleges. 
            We build fascinating learning environments that inspire creativity, engagement, and academic achievement 
            using Edufurn.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our skilled staff creates ergonomic classrooms, bright common areas, and effective administrative 
            spaces to meet the specific requirements of educational institutions. Royal Furniture is creating 
            the future for students and educators alike.
          </p>
        </div>
      </motion.section>

      {/* Process Steps */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-gradient-to-br from-gray-50 to-teal-50 rounded-3xl p-12"
      >
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Streamline the education space with our 5-step process
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
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Learning Environments */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Learning Environments We Create</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer overflow-hidden"
          >
            <div className="h-48 rounded-xl mb-4 overflow-hidden">
              <img 
                src="/edufurn/auditorium.webp" 
                alt="Auditorium"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Auditoriums</h3>
            <p className="text-gray-600 text-sm">Modern presentation and event spaces</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer overflow-hidden"
          >
            <div className="h-48 rounded-xl mb-4 overflow-hidden">
              <img 
                src="/edufurn/lab.webp" 
                alt="Laboratory"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Laboratories</h3>
            <p className="text-gray-600 text-sm">Modern scientific research facilities</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer overflow-hidden"
          >
            <div className="h-48 rounded-xl mb-4 overflow-hidden">
              <img 
                src="/edufurn/lib.webp" 
                alt="Library"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Libraries</h3>
            <p className="text-gray-600 text-sm">Quiet study and research environments</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Educational Spaces Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { image: '/edufurn/chairs.webp', title: 'Student Seating' },
            { image: '/edufurn/comp.webp', title: 'Computer Lab' },
            { image: '/edufurn/kind.webp', title: 'Kindergarten' },
            { image: '/edufurn/management.webp', title: 'Administration' },
            { image: '/edufurn/off.webp', title: 'Faculty Office' },
            { image: '/edufurn/hos.webp', title: 'Hostel Rooms' }
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
        className="bg-gradient-to-r from-teal-500 to-green-500 rounded-3xl p-12 text-center text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Shape the Future of Education</h2>
        <p className="text-lg mb-8 opacity-90">
          Ready to create inspiring learning environments that foster growth and achievement?
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Transform Education
        </motion.button>
      </motion.section>
    </div>
  );
};

export default EdufurnCategory;
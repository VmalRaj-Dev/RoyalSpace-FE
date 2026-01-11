import React from 'react';
import { motion } from 'framer-motion';

const MedifurnCategory: React.FC = () => {
  const services = [
    {
      title: 'Full Hospital Interior',
      description: 'We transform your Hospital to transform every room',
      icon: '🏥',
      image: '/medifurn/fullhospital.webp'
    },
    {
      title: 'Furniture & Decor',
      description: 'Thematic Furniture Especially that fit medical environment',
      icon: '🛏️',
      image: '/medifurn/furniture.webp'
    },
    {
      title: 'Hospital Cos',
      description: 'Gather into everything you need for the medical care and support',
      icon: '⚕️',
      image: '/medifurn/hospitalcots.webp'
    },
    {
      title: 'Renovation',
      description: 'Significantly modifying the functionality and look of your space',
      icon: '🔧',
      image: '/medifurn/recbed.webp'
    }
  ];

  const steps = [
    { number: '01', title: 'Discovery & Consultation', description: 'Understanding healthcare facility requirements' },
    { number: '02', title: 'Design & Planning', description: 'Creating patient-centered design solutions' },
    { number: '03', title: 'Customization & Manufacturing', description: 'Building medical-grade furniture and fixtures' },
    { number: '04', title: 'Installation & Quality Assurance', description: 'Sterile and safe installation process' },
    { number: '05', title: 'Handover & Post Support', description: 'Compliance training and maintenance support' }
  ];

  const features = [
    { title: 'Budget friendly', description: 'Cost-effective healthcare solutions', icon: '💰' },
    { title: 'On time move-in guarantee', description: 'Meeting critical healthcare deadlines', icon: '⏰' },
    { title: 'High quality checks', description: 'Medical-grade quality standards', icon: '✅' },
    { title: 'Flat 10-year warranty', description: 'Extended healthcare facility coverage', icon: '🛡️' }
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
            src="/medifurn/medi.webp" 
            alt="Modern Healthcare Facility"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-teal-50/80"></div>
        </div>
        
        <div className="relative z-10 py-16">
          <div className="text-8xl mb-6">🏥</div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-teal-700 mb-4">
            MEDIFURN
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Modern solutions for modern healthcare
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Redesigning healthcare spaces with innovative solutions. Explore our extensive collection of furniture 
            and décor designed specifically for healthcare settings. We will work with you every step of the way 
            to create a welcoming space.
          </p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Healthcare Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden"
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

      {/* About Medifurn */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-3xl p-12"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Medifurn: Blending comfort and aesthetics into patient care
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            With great pride, Royal Furniture introduces our specialized service called Medifurn. Our goal with Medifurn is 
            to create healing environments where staff productivity and patient comfort come first.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our skilled team carefully considers utility, hygiene practices, and aesthetics when designing hospital rooms, 
            waiting areas, and office spaces. We make sure that every element of the interior promotes the health of patients 
            and medical staff because we recognize the vital role that healthcare facilities, hospitals are transformed into 
            spaces that prioritize the overall well-being of treatment.
          </p>
        </div>
      </motion.section>

      {/* Process Steps */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-3xl p-12"
      >
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Revolutionizing the healthcare spaces with Royal aesthetics
        </h2>
        <p className="text-center text-gray-600 mb-4">A 5-Step Interior Design Journey!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-teal-700 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Healthcare Environments */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Healthcare Environments We Design</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer overflow-hidden"
          >
            <div className="h-48 rounded-xl mb-4 overflow-hidden">
              <img 
                src="/medifurn/funcbed.webp" 
                alt="Patient Rooms"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Patient Rooms</h3>
            <p className="text-gray-600 text-sm">Comfortable and healing patient environments</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer overflow-hidden"
          >
            <div className="h-48 rounded-xl mb-4 overflow-hidden">
              <img 
                src="/medifurn/labset.webp" 
                alt="Medical Labs"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Medical Labs</h3>
            <p className="text-gray-600 text-sm">Advanced diagnostic and testing facilities</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer overflow-hidden"
          >
            <div className="h-48 rounded-xl mb-4 overflow-hidden">
              <img 
                src="/medifurn/lob.webp" 
                alt="Waiting Areas"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Waiting Areas</h3>
            <p className="text-gray-600 text-sm">Calming spaces for patients and families</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Healthcare Facilities Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { image: '/medifurn/consult.webp', title: 'Consultation Rooms' },
            { image: '/medifurn/conf.webp', title: 'Conference Rooms' },
            { image: '/medifurn/cafe.webp', title: 'Hospital Cafeteria' },
            { image: '/medifurn/ad.webp', title: 'Administrative Office' },
            { image: '/medifurn/trans.webp', title: 'Transport Equipment' },
            { image: '/medifurn/trol.webp', title: 'Medical Trolleys' }
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
        className="bg-gradient-to-r from-slate-600 to-teal-700 rounded-3xl p-12 text-center text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Revolutionize Healthcare Design</h2>
        <p className="text-lg mb-8 opacity-90">
          Ready to create healing environments that prioritize patient comfort and staff efficiency?
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-slate-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Transform Healthcare
        </motion.button>
      </motion.section>
    </div>
  );
};

export default MedifurnCategory;
import React from 'react';
import { motion } from 'framer-motion';

const ShopfitCategory: React.FC = () => {
  const services = [
    {
      title: 'Full Store Interior',
      description: 'Complete turnkey solutions for your Store Interior',
      icon: '🏪',
      image: '/shopfit/fullshop.webp'
    },
    {
      title: 'Customized Racks',
      description: 'Amazing Racks with Grand Furniture',
      icon: '🗄️',
      image: '/shopfit/furniture.webp'
    },
    {
      title: 'Wallpaper',
      description: 'Beautify your stores with Grand Decors',
      icon: '🎨',
      image: '/shopfit/4.webp'
    },
    {
      title: 'Renovation',
      description: 'Revitalizing Renovation work for Shops',
      icon: '🔨',
      image: '/shopfit/2.webp'
    }
  ];

  const steps = [
    { number: '01', title: 'Discovery & Consultation', description: 'Understanding your retail brand and customer needs' },
    { number: '02', title: 'Design & Planning', description: 'Creating customer journey-focused designs' },
    { number: '03', title: 'Customization & Manufacturing', description: 'Building brand-specific retail fixtures' },
    { number: '04', title: 'Installation & Quality Assurance', description: 'Efficient installation with minimal downtime' },
    { number: '05', title: 'Handover & Post Support', description: 'Training and ongoing retail support' }
  ];

  const features = [
    { title: 'Budget friendly', description: 'Cost-effective retail solutions', icon: '💰' },
    { title: 'On time move-in guarantee', description: 'Meeting retail launch deadlines', icon: '⏰' },
    { title: 'High quality checks', description: 'Retail-grade durability standards', icon: '✅' },
    { title: 'Flat 10-year warranty', description: 'Long-term retail investment protection', icon: '🛡️' }
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
            src="/shopfit/1.webp" 
            alt="Modern Retail Space"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/80 to-orange-50/80"></div>
        </div>
        
        <div className="relative z-10 py-16">
          <div className="text-8xl mb-6">🛍️</div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-4">
            SHOPFIT
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Our product for designing and constructing appealing retail shop interiors
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Embark on Your Shopfitting Odyssey: From Concept to Completion! Discover the Art of Crafting Your Ideal Retail Space. 
            Explore the art of shopfitting with us! We'll turn your retail Store into a captivating retail space that elevates your 
            brand and boosts sales. Our team ensures every detail reflects your unique identity, creating an engaging shopping experience 
            that delights customers.
          </p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Retail Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden"
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

      {/* About Shopfit */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-12"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Shopfit: Elevating Your Retail Experience.
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Royal Furniture, renowned for its signature "Shopfit" service, is your go-to destination for exceptional 
            shopfitting solutions. Our expert team excels in crafting functional and stylish retail spaces that enhance 
            customer experience and reflect your brand's identity.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We prioritize efficient layout designs, premium material choices, and budget-conscious solutions. Let Royal 
            Shopfit revolutionize your retail space into a showcase environment where your business can thrive. Elevate your 
            store's appeal with Royal, where innovation meets sophistication.
          </p>
        </div>
      </motion.section>

      {/* Process Steps */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-gradient-to-br from-gray-50 to-yellow-50 rounded-3xl p-12"
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
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Retail Environments */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Retail Spaces We Transform</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer overflow-hidden"
          >
            <div className="h-48 rounded-xl mb-4 overflow-hidden">
              <img 
                src="/shopfit/6.webp" 
                alt="Fashion Stores"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Fashion Stores</h3>
            <p className="text-gray-600 text-sm">Stylish and trendy clothing retail spaces</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer overflow-hidden"
          >
            <div className="h-48 rounded-xl mb-4 overflow-hidden">
              <img 
                src="/shopfit/8.webp" 
                alt="Cafes & Restaurants"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Cafes & Restaurants</h3>
            <p className="text-gray-600 text-sm">Inviting dining and beverage spaces</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer overflow-hidden"
          >
            <div className="h-48 rounded-xl mb-4 overflow-hidden">
              <img 
                src="/shopfit/10.webp" 
                alt="Retail Stores"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Retail Stores</h3>
            <p className="text-gray-600 text-sm">Modern and engaging retail environments</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Retail Transformations Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { image: '/shopfit/3.webp', title: 'Boutique Store' },
            { image: '/shopfit/5.webp', title: 'Modern Retail' },
            { image: '/shopfit/7.webp', title: 'Showroom Design' },
            { image: '/shopfit/9.webp', title: 'Luxury Store' },
            { image: '/shopfit/shopfit1.jpg', title: 'Fashion Outlet' },
            { image: '/shopfit/shopfit2.jpg', title: 'Electronics Store' },
            { image: '/shopfit/shopfit3.jpg', title: 'Lifestyle Store' },
            { image: '/shopfit/shopfit4.jpg', title: 'Department Store' }
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
        className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl p-12 text-center text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Elevate Your Retail Experience</h2>
        <p className="text-lg mb-8 opacity-90">
          Ready to transform your retail space into a customer magnet that drives sales and builds brand loyalty?
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Start Your Transformation
        </motion.button>
      </motion.section>
    </div>
  );
};

export default ShopfitCategory;
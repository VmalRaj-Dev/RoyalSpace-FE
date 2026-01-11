import { motion } from "framer-motion";
import { Award, Users, Building2, Trophy, Shield, Wrench } from "lucide-react";
import SEO from "@/components/common/SEO";

const milestones = [
  { year: "1996", title: "Foundation", description: "Royal Furniture established by K.C. Kailasam" },
  { year: "2005", title: "Expansion", description: "Grew to 25,000 sq.ft facility" },
  { year: "2012", title: "ISO Certified", description: "Achieved ISO 9001:14001 certification" },
  { year: "2018", title: "Modern Evolution", description: "Expanded to 50,000 sq.ft facility" },
  { year: "2024", title: "Excellence Today", description: "100+ professionals, 10,000+ satisfied clients" },
];

const features = [
  { icon: Building2, title: "50,000 sq.ft", description: "State-of-the-art facility" },
  { icon: Users, title: "100+ Team", description: "Skilled professionals" },
  { icon: Award, title: "ISO Certified", description: "Quality standards" },
  { icon: Trophy, title: "28+ Years", description: "Industry experience" },
  { icon: Shield, title: "10,000+", description: "Happy clients" },
  { icon: Wrench, title: "Free Setup", description: "Professional installation" },
];

export default function NewAbout() {
  return (
    <>
      <SEO 
        title="About Us - Royal Furniture | 28+ Years of Excellence"
        description="Learn about Royal Furniture's journey since 1996. ISO certified manufacturer with 50,000 sq.ft facility, 100+ skilled professionals, and 10,000+ satisfied clients across Tamil Nadu."
        keywords="about royal furniture, furniture manufacturer history, ISO certified furniture, Tamil Nadu furniture company, furniture factory"
      />
      <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/aboutbg.webp"
            alt="Royal Furniture Manufacturing"
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
                Our Story
              </p>
              <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
                Crafting Excellence
                <span className="block font-normal mt-2">Since 1996</span>
              </h1>
              <p className="text-xl text-white/90 font-light leading-relaxed">
                28 years of dedication to quality, innovation, and customer satisfaction
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative Background Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl" />
              
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/founder.webp"
                  alt="K.C. Kailasam - Founder"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                
                {/* Decorative Frame */}
                <div className="absolute inset-0 border-2 border-white/20 rounded-2xl" />
                
                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary/40" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary/40" />
              </div>
              
              {/* Founder Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-br from-primary to-purple-600 text-white px-6 py-3 rounded-full shadow-xl"
              >
                <p className="text-sm font-semibold">Founder & Visionary</p>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-light">
                Our Founder
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
                Mr. K.C. Kailasam
              </h2>
              <div className="space-y-4 text-lg text-neutral-600 font-light leading-relaxed">
                <p>
                  Royal Furniture was established in 1996 by Mr. K.C. Kailasam with a vision to 
                  deliver premium furniture solutions. What began with just 10 passionate craftsmen 
                  has flourished into a 50,000 sq.ft state-of-the-art facility.
                </p>
                <p>
                  Today, our ISO 9001:14001 certified factory is powered by over 100 skilled 
                  professionals and cutting-edge machinery. Our founder's unwavering commitment 
                  to quality has propelled us to the forefront of the industry.
                </p>
                <p className="text-primary text-xl italic font-normal">
                  "We don't just make furniture; we craft legacies for generations to come."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-light">
              Our Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              28 Years of Excellence
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/20" />

            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="text-5xl font-light text-primary mb-2">{milestone.year}</div>
                    <h3 className="text-2xl font-normal text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-neutral-600 font-light">{milestone.description}</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-light">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              Our Achievements
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 hover:bg-neutral-50 transition-colors"
                >
                  <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <div className="text-xl font-normal text-foreground mb-1">{feature.title}</div>
                  <div className="text-sm text-neutral-600 font-light">{feature.description}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-20 md:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-light">
              Our Facility
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              State-of-the-Art Manufacturing
            </h2>
            <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
              50,000 sq.ft facility equipped with modern machinery and skilled craftsmen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["/2.png", "/3.png", "/4.png", "/5.png"].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg group"
              >
                <img
                  src={image}
                  alt={`Factory machinery and manufacturing facility ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-6xl font-light mb-8">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-gray-700 font-light mb-12 max-w-2xl mx-auto">
              Experience the difference of 28 years of furniture excellence
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white hover:bg-primary/90 px-8 py-4 rounded-lg font-light transition-colors shadow-lg"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
    </>
  );
}

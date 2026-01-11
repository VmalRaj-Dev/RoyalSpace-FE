import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Hero section component for the contact page
export default function HeroSection() {
  return (
    <section className="relative h-[50vh] max-h-[500px] min-h-[400px] bg-primary">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/70 z-10" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('/contact-pattern.png')] bg-center bg-repeat opacity-30"
        />
      </div>
      
      <div className="relative z-20 h-full container mx-auto px-6 flex flex-col justify-center items-center text-center text-primary-foreground">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We're here to answer any questions about our furniture solutions and services.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Location data - moved outside component for better memory management
const locations = [
  {
    id: 1,
    city: "Madurai",
    address: "123 Furniture Avenue, Madurai, Tamil Nadu 625001",
    phone: "+91 98765 43210",
    hours: "Mon-Sat: 9:30 AM - 7:00 PM",
    mapLink: "https://maps.google.com/?q=Madurai"
  },
  {
    id: 2,
    city: "Coimbatore",
    address: "456 Craft Street, Coimbatore, Tamil Nadu 641008",
    phone: "+91 98765 43211",
    hours: "Mon-Sat: 10:00 AM - 8:00 PM",
    mapLink: "https://maps.google.com/?q=Coimbatore"
  },
];

export default function LocationsSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Our Locations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit our showrooms to experience the quality and craftsmanship firsthand.
          </p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {locations.map((location) => (
            <motion.div
              key={location.id}
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="bg-card border border-accent/10 hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-display font-bold text-primary mb-4">
                    {location.city}
                  </h3>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
                      <p>{location.address}</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-accent shrink-0 mt-1" />
                      <p>{location.phone}</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-accent shrink-0 mt-1" />
                      <p>{location.hours}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <a 
                      href={location.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 font-medium flex items-center"
                    >
                      View on Map
                      <MapPin className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Location } from "@/data/locations";

// Animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

interface LocationCardProps {
  location: Location;
}

export const LocationCard = ({ location }: LocationCardProps) => (
  <motion.div variants={itemVariants}>
    <Card className="border-0 shadow-elegant overflow-hidden">
      <CardContent className="p-6">
        <h3 className="text-xl font-display font-bold text-primary mb-4">
          {location.name}
        </h3>
        <ul className="space-y-4 text-sm text-muted-foreground">
          <li className="flex items-start gap-3">
            <MapPin className="h-4 w-4 text-gold shrink-0 mt-1" />
            <span>{location.address}</span>
          </li>
          <li className="flex items-start gap-3">
            <Phone className="h-4 w-4 text-gold shrink-0" />
            <a href={`tel:${location.phone}`} className="hover:text-gold transition-colors">{location.phone}</a>
          </li>
          <li className="flex items-start gap-3">
            <Mail className="h-4 w-4 text-gold shrink-0" />
            <a href={`mailto:${location.email}`} className="hover:text-gold transition-colors">{location.email}</a>
          </li>
          <li className="flex items-start gap-3">
            <Clock className="h-4 w-4 text-gold shrink-0" />
            <span>{location.hours}</span>
          </li>
        </ul>
        <Button 
          className="w-full mt-6 bg-gradient-gold text-gold-foreground hover:opacity-90 hover:shadow-gold transition-all"
          onClick={() => window.open(`https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}`, '_blank')}
        >
          Get Directions <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  </motion.div>
);

export default LocationCard;
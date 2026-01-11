import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Location } from "@/data/locations";

interface LocationMapProps {
  location: Location;
}

const LocationMap = ({ location }: LocationMapProps) => {
  return (
    <Card className="border-0 shadow-luxury h-full overflow-hidden">
      <div className="h-[500px] overflow-hidden bg-gradient-to-br from-background to-background/40">
        <iframe
          title="Office Location"
          width="100%"
          height="100%"
          frameBorder="0"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY_HERE&q=${location.coordinates.lat},${location.coordinates.lng}&zoom=16`}
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </Card>
  );
};

export default LocationMap;
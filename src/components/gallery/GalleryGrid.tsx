import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface GalleryItem {
  id: string | number;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  filteredCategory: string;
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function GalleryGrid({ items, filteredCategory }: GalleryGridProps) {
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    // Small delay for animation effect
    const timer = setTimeout(() => {
      const filtered = filteredCategory === "All" 
        ? items 
        : items.filter(item => item.category === filteredCategory);
      
      setFilteredItems(filtered);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [items, filteredCategory]);

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-gold border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
      </div>
    );
  }

  if (filteredItems.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <p className="text-lg text-muted-foreground">No items found in this category.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {filteredItems.map((item) => (
        <motion.div 
          key={item.id}
          variants={fadeIn}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <Card className="group relative overflow-hidden shadow-elegant hover:shadow-luxury transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </div>
              
              <Badge className="absolute top-4 right-4 bg-primary/80 text-primary-foreground">
                {item.category}
              </Badge>
            </div>
            
            <CardContent className="p-5">
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {item.year}
                </div>
              </div>
              
              <h3 className="text-lg font-display font-semibold text-primary mb-1">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground text-sm line-clamp-2">
                {item.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
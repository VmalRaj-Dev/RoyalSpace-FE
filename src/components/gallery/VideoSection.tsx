import { motion } from "framer-motion";
import { PlayCircle, Clock } from "lucide-react";

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  description: string;
}

interface VideoSectionProps {
  videos: Video[];
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const VideoSection = ({ videos }: VideoSectionProps) => {
  return (
    <section className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Behind the Craft
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our world of precision, passion, and craftsmanship.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {videos.map((video) => (
            <motion.div 
              key={video.id}
              variants={fadeIn}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="h-16 w-16 text-white/80 transform transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
                </div>
                
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  <Clock className="h-4 w-4" />
                  <span>{video.duration}</span>
                </div>
              </div>
              
              <div className="p-4 bg-card rounded-b-xl">
                <h3 className="text-lg font-display font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;

import { motion } from "framer-motion";
import { ReactNode } from "react";

// Animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

interface ServiceItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const ServiceItem = ({ icon, title, description }: ServiceItemProps) => (
  <motion.div variants={itemVariants} className="flex items-start gap-3">
    {icon}
    <div>
      <p className="font-medium text-primary">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </motion.div>
);

export default ServiceItem;
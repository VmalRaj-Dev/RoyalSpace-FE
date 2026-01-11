import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  primaryButtonIcon?: React.ReactNode;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CTASection({
  title = "Ready to Get Started?",
  description = "Contact us today to discuss your project needs and requirements.",
  primaryButtonText = "Contact Us Now",
  primaryButtonHref = "/contact",
  primaryButtonIcon = <ArrowRight className="ml-2 h-5 w-5" />,
  secondaryButtonText,
  secondaryButtonHref
}: CTASectionProps) {
  return (
    <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/cta-pattern.png')] opacity-10" />
      
      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {title}
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground hover:shadow-md transition-all px-8"
            >
              <Link to={primaryButtonHref} className="flex items-center">
                {primaryButtonText} {primaryButtonIcon}
              </Link>
            </Button>
            
            {secondaryButtonText && secondaryButtonHref && (
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary transition-all px-8"
              >
                <Link to={secondaryButtonHref}>
                  {secondaryButtonText}
                </Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
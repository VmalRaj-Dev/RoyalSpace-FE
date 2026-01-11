import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Shield, Wrench, Star } from "lucide-react";
import heroImage from "@/assets/hero-furniture.jpg";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  features?: Array<{
    icon: React.ReactNode;
    text: string;
  }>;
}

export const HeroSection = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage = heroImage,
  features = [
    { icon: <Award className="h-5 w-5" />, text: "40+ Years Experience" },
    { icon: <Shield className="h-5 w-5" />, text: "5-Year Warranty" },
    { icon: <Wrench className="h-5 w-5" />, text: "Free Installation" },
    { icon: <Star className="h-5 w-5" />, text: "Premium Quality" },
  ]
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Premium furniture showcase"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Subtitle */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-medium text-sm uppercase tracking-wider">
              {subtitle}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-xl">
            {description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-primary-foreground/90 text-sm"
              >
                <div className="text-gold">
                  {feature.icon}
                </div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-gold text-gold-foreground hover:shadow-gold transition-luxury px-8"
              asChild
            >
              <a href={primaryCTA.href}>
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            {secondaryCTA && (
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-luxury px-8"
                asChild
              >
                <a href={secondaryCTA.href}>
                  {secondaryCTA.text}
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <div className="bg-card/95 backdrop-blur-md rounded-2xl p-6 shadow-luxury">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary mb-1">40+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
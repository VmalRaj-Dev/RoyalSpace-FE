import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderSrc?: string;
  width?: number | string;
  height?: number | string;
  priority?: boolean;
  loadingStrategy?: "eager" | "lazy";
  onLoad?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  className = "",
  placeholderSrc,
  width,
  height,
  priority = false,
  loadingStrategy = "lazy",
  onLoad
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Handle image load event
  const handleImageLoaded = useCallback(() => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  }, [onLoad]);
  
  // Check if image is already cached
  useEffect(() => {
    const img = new Image();
    img.src = src;
    if (img.complete) {
      handleImageLoaded();
    }
  }, [src, handleImageLoaded]);
  
  return (
    <div 
      className={cn("relative overflow-hidden", className)}
      style={{ width, height }}
    >
      {/* Low quality placeholder */}
      {placeholderSrc && !isLoaded && (
        <div 
          className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
          style={{ 
            backgroundImage: `url(${placeholderSrc})`,
            opacity: isLoaded ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
      )}
      
      {/* Main image */}
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        width={typeof width === 'number' ? width : undefined}
        height={typeof height === 'number' ? height : undefined}
        onLoad={handleImageLoaded}
        loading={priority ? "eager" : loadingStrategy}
        fetchPriority={priority ? "high" : "auto"}
      />
    </div>
  );
}

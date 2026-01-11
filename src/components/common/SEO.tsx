import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

const SEO = ({ 
  title = "Royal Furniture - Premium Furniture Solutions | 28+ Years of Excellence",
  description = "ISO certified furniture manufacturer in Tamil Nadu. Specializing in home interiors (INTERIO), educational furniture (EDUFURN), healthcare solutions (MEDIFURN), office workstations (MODULAR), and retail solutions (SHOPFIT). Free installation & warranty.",
  keywords = "furniture manufacturer, royal furniture, interior design, office furniture, hospital furniture, educational furniture, modular furniture, Tamil Nadu furniture, Erode furniture, Coimbatore furniture, custom furniture, ISO certified furniture",
  image = "/og-image.png",
  type = "website"
}: SEOProps) => {
  const location = useLocation();
  const baseUrl = "https://rspacestudio.com";
  const currentUrl = `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', `${baseUrl}${image}`, true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `${baseUrl}${image}`);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);
  }, [title, description, keywords, image, type, currentUrl, baseUrl]);

  return null;
};

export default SEO;

import { useState, useEffect } from 'react';

interface UseConsultationPopupProps {
  delay?: number;
  enabledRoutes?: string[];
  disabledRoutes?: string[];
}

export function useConsultationPopup({
  delay = 4000,
  enabledRoutes = ['/'],
  disabledRoutes = ['/contact']
}: UseConsultationPopupProps = {}) {
  const [shouldShow, setShouldShow] = useState(false);
  
  useEffect(() => {
    const currentPath = window.location.pathname;
    
    // Check if current route should show popup
    const isEnabledRoute = enabledRoutes.some(route => 
      route === '/' ? currentPath === route : currentPath.startsWith(route)
    );
    
    const isDisabledRoute = disabledRoutes.some(route => 
      currentPath.startsWith(route)
    );
    
    // Don't show if on disabled route
    if (isDisabledRoute) {
      setShouldShow(false);
      return;
    }
    
    // Show if on enabled route or if enabledRoutes includes all routes
    if (isEnabledRoute || enabledRoutes.includes('*')) {
      // Check if already shown in this session
      const hasShown = sessionStorage.getItem('consultation-popup-shown');
      if (!hasShown) {
        const timer = setTimeout(() => {
          setShouldShow(true);
          sessionStorage.setItem('consultation-popup-shown', 'true');
        }, delay);
        
        return () => clearTimeout(timer);
      }
    }
  }, [delay, enabledRoutes, disabledRoutes]);
  
  return {
    shouldShow,
    setShouldShow
  };
}
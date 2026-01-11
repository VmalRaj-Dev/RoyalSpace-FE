import React from 'react';
import PopupConsultationForm from './PopupConsultationForm';
import { useConsultationPopup } from '@/hooks/useConsultationPopup';

interface GlobalConsultationPopupProps {
  delay?: number;
  enabledRoutes?: string[];
  disabledRoutes?: string[];
}

export default function GlobalConsultationPopup({
  delay = 4000,
  enabledRoutes = ['/', '/products', '/about'],
  disabledRoutes = ['/contact']
}: GlobalConsultationPopupProps) {
  const { shouldShow, setShouldShow } = useConsultationPopup({
    delay,
    enabledRoutes,
    disabledRoutes
  });

  if (!shouldShow) return null;

  return (
    <PopupConsultationForm 
      delay={0} // No delay since hook handles timing
      showOnLoad={true}
    />
  );
}
import React from 'react';
import PopupConsultationForm from './PopupConsultationForm';

interface PageWrapperProps {
  children: React.ReactNode;
  showConsultationPopup?: boolean;
  popupDelay?: number;
}

export default function PageWrapper({ 
  children, 
  showConsultationPopup = true, 
  popupDelay = 3000 
}: PageWrapperProps) {
  return (
    <>
      {children}
      {showConsultationPopup && (
        <PopupConsultationForm 
          delay={popupDelay} 
          showOnLoad={true} 
        />
      )}
    </>
  );
}
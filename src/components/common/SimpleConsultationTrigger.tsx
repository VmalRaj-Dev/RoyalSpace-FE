import React, { useState, useEffect } from 'react';
import PopupConsultationForm from './PopupConsultationForm';

export default function SimpleConsultationTrigger() {
  const [showPopup, setShowPopup] = useState(false);

  // Auto-show popup after 3 seconds on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if we should show the popup (not shown today)
      const lastShown = localStorage.getItem('consultation-shown');
      const today = new Date().toDateString();
      
      if (lastShown !== today) {
        setShowPopup(true);
        localStorage.setItem('consultation-shown', today);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Function to manually trigger consultation (for category buttons)
  const triggerConsultation = (service?: string) => {
    setShowPopup(true);
  };

  // Make this function available globally for category buttons
  useEffect(() => {
    (window as Window & { openConsultationForm?: (service?: string) => void }).openConsultationForm = triggerConsultation;
    
    return () => {
      delete (window as Window & { openConsultationForm?: (service?: string) => void }).openConsultationForm;
    };
  }, []);

  if (!showPopup) return null;

  return (
    <PopupConsultationForm 
      triggerOpen={true}
      showOnLoad={false}
      onClose={() => setShowPopup(false)}
    />
  );
}
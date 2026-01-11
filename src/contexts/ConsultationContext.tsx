import React, { createContext, useState, ReactNode } from 'react';

interface ConsultationContextType {
  showConsultation: (service?: string) => void;
  hideConsultation: () => void;
  isVisible: boolean;
  selectedService: string;
}

export const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined);

interface ConsultationProviderProps {
  children: ReactNode;
}

const ConsultationProvider: React.FC<ConsultationProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const showConsultation = (service: string = '') => {
    setSelectedService(service);
    setIsVisible(true);
  };

  const hideConsultation = () => {
    setIsVisible(false);
    setSelectedService('');
  };

  const value = {
    showConsultation,
    hideConsultation,
    isVisible,
    selectedService
  };

  return (
    <ConsultationContext.Provider value={value}>
      {children}
    </ConsultationContext.Provider>
  );
};

export default ConsultationProvider;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { Loader2, CheckCircle, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PopupConsultationFormProps {
  delay?: number;
  showOnLoad?: boolean;
  preSelectedService?: string;
  onClose?: () => void;
  triggerOpen?: boolean;
}

export default function PopupConsultationForm({ 
  delay = 3000, 
  showOnLoad = true,
  preSelectedService,
  onClose,
  triggerOpen = false
}: PopupConsultationFormProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [selectedService, setSelectedService] = useState(preSelectedService || "");

  // Debug logging
  useEffect(() => {
    console.log('PopupConsultationForm state:', {
      triggerOpen,
      showOnLoad,
      isVisible,
      isDismissed,
      preSelectedService,
      selectedService
    });
  }, [triggerOpen, showOnLoad, isVisible, isDismissed, preSelectedService, selectedService]);

  useEffect(() => {
    // Handle manual trigger (from category buttons)
    if (triggerOpen) {
      setIsVisible(true);
      setIsDismissed(false);
      return;
    }

    // Handle auto-show on page load
    if (!showOnLoad) return;

    // Check if user has already dismissed the popup in this session
    const dismissed = sessionStorage.getItem('consultation-popup-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, showOnLoad, triggerOpen]);

  useEffect(() => {
    if (preSelectedService) {
      setSelectedService(preSelectedService);
    }
  }, [preSelectedService]);

  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
    onClose?.();
    // Only remember dismissal for auto-shown popups, not manually triggered ones
    if (!triggerOpen) {
      sessionStorage.setItem('consultation-popup-dismissed', 'true');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate service type is selected
    if (!selectedService) {
      alert('Please select a service type');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Auto close after success
      setTimeout(() => {
        handleClose();
      }, 2000);
    }, 1500);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (isDismissed && !triggerOpen) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-orange-500 text-white p-4 sm:p-6 relative">
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="flex items-center gap-3 pr-12">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold">Free Consultation</h3>
                  <p className="text-white/90 text-xs sm:text-sm">Get expert advice for your space</p>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600">We'll contact you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="popup-name" className="text-sm font-medium">Your Name *</Label>
                    <Input
                      id="popup-name"
                      placeholder="Enter your name"
                      required
                      disabled={isSubmitting}
                      className="h-9 sm:h-10"
                    />
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="popup-email" className="text-sm font-medium">Email Address *</Label>
                    <Input
                      id="popup-email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      disabled={isSubmitting}
                      className="h-9 sm:h-10"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="popup-phone" className="text-sm font-medium">Phone Number</Label>
                    <Input
                      id="popup-phone"
                      placeholder="+91 98765 43210"
                      disabled={isSubmitting}
                      className="h-9 sm:h-10"
                    />
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="popup-service" className="text-sm font-medium">Interested In *</Label>
                    <Select 
                      disabled={isSubmitting} 
                      value={selectedService} 
                      onValueChange={setSelectedService}
                      required
                    >
                      <SelectTrigger id="popup-service" className="h-9 sm:h-10">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="interio">Home Interiors (INTERIO)</SelectItem>
                        <SelectItem value="edufurn">Educational Furniture (EDUFURN)</SelectItem>
                        <SelectItem value="medifurn">Medical Furniture (MEDIFURN)</SelectItem>
                        <SelectItem value="modular">Office Furniture (MODULAR)</SelectItem>
                        <SelectItem value="shopfit">Retail Solutions (SHOPFIT)</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="popup-message" className="text-sm font-medium">Message</Label>
                    <Textarea
                      id="popup-message"
                      placeholder="Tell us about your requirements..."
                      rows={2}
                      disabled={isSubmitting}
                      className="resize-none text-sm"
                    />
                  </div>

                  <div className="flex gap-2 sm:gap-3 pt-2 sm:pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleClose}
                      className="flex-1 h-9 sm:h-10 text-sm"
                      disabled={isSubmitting}
                    >
                      Maybe Later
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 h-9 sm:h-10 text-sm bg-orange-500 hover:bg-orange-600 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                          <span className="hidden sm:inline">Sending...</span>
                          <span className="sm:hidden">...</span>
                        </>
                      ) : (
                        'Get Consultation'
                      )}
                    </Button>
                  </div>
                </form>
              )}

              {/* Trust indicators */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>✓ Free consultation</span>
                  <span>✓ 24hr response</span>
                  <span>✓ Expert advice</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
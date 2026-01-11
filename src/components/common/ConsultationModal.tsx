import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Phone, Mail, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface ConsultationModalProps {
  onClose: () => void;
}

export default function ConsultationModal({ onClose }: ConsultationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Auto close after success
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-0" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all hover:scale-110"
            aria-label="Close"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>

          {/* Content */}
          <div className="relative p-6 sm:p-8 md:p-10">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl mb-3 sm:mb-4 shadow-lg"
              >
                <Sparkles className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-2 px-2">
                Get Your <span className="font-semibold text-primary">Free Quote</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-light px-2">
                Transform your space with premium furniture solutions
              </p>
            </div>

            {/* Form */}
            {isSuccess ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8 sm:py-12"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mb-4">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 px-4">Thank You!</h3>
                <p className="text-sm sm:text-base text-gray-600 px-4">
                  We'll get back to you within 24 hours with your personalized quote.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="modal-name" className="text-gray-700 font-medium flex items-center gap-2">
                      <User className="h-4 w-4 text-primary" />
                      Your Name
                    </Label>
                    <Input
                      id="modal-name"
                      placeholder="John Doe"
                      required
                      disabled={isSubmitting}
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="border-gray-300 focus:border-primary focus:ring-primary"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="modal-email" className="text-gray-700 font-medium flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      Email Address
                    </Label>
                    <Input
                      id="modal-email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="border-gray-300 focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="modal-phone" className="text-gray-700 font-medium flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      Phone Number
                    </Label>
                    <Input
                      id="modal-phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      disabled={isSubmitting}
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="border-gray-300 focus:border-primary focus:ring-primary"
                    />
                  </div>

                  {/* Service */}
                  <div className="space-y-2">
                    <Label htmlFor="modal-service" className="text-gray-700 font-medium flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                      Interested In
                    </Label>
                    <Select
                      disabled={isSubmitting}
                      value={formData.service}
                      onValueChange={(value) => handleChange("service", value)}
                    >
                      <SelectTrigger id="modal-service" className="border-gray-300 focus:border-primary focus:ring-primary">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="interio">Home Interiors (INTERIO)</SelectItem>
                        <SelectItem value="edufurn">Educational Furniture (EDUFURN)</SelectItem>
                        <SelectItem value="medifurn">Healthcare Furniture (MEDIFURN)</SelectItem>
                        <SelectItem value="modular">Office Workstations (MODULAR)</SelectItem>
                        <SelectItem value="shopfit">Retail Solutions (SHOPFIT)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="modal-message" className="text-gray-700 font-medium flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    Your Requirements
                  </Label>
                  <Textarea
                    id="modal-message"
                    placeholder="Tell us about your project..."
                    rows={3}
                    disabled={isSubmitting}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="border-gray-300 focus:border-primary focus:ring-primary resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white py-5 sm:py-6 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="mr-2"
                      >
                        <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                      </motion.div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Get Free Quote
                    </>
                  )}
                </Button>

                <p className="text-center text-xs sm:text-sm text-gray-500 font-light px-2">
                  We respect your privacy. Your information is safe with us.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

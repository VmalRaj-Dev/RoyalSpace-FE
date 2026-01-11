import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";
import { sendConsultationEmail } from "@/utils/emailService";
import { useTracking } from "@/hooks/useTracking";

interface ConsultationFormProps {
  compact?: boolean;
  defaultService?: string;
  readOnlyService?: boolean;
}

export default function ConsultationForm({
  compact = false,
  defaultService = "",
  readOnlyService = false
}: ConsultationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serviceType, setServiceType] = useState(defaultService);
  const { trackConsultationRequest } = useTracking();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate service type is selected
    if (!serviceType) {
      alert('Please select a service type');
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      serviceType: serviceType,
      message: formData.get('message') as string,
    };

    try {
      await sendConsultationEmail(data);
      trackConsultationRequest();
      setIsSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        (e.target as HTMLFormElement).reset();
        setServiceType("");
      }, 3000);
    } catch (error) {
      console.error('Error submitting consultation form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-${compact ? '4' : '6'}`}>
      <div className={`grid grid-cols-1 ${compact ? '' : 'md:grid-cols-2'} gap-4`}>
        <div className="space-y-2">
          <Label htmlFor="consultation-name">Your Name</Label>
          <Input
            id="consultation-name"
            name="name"
            placeholder="John Doe"
            required
            disabled={isSubmitting || isSuccess}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="consultation-email">Email Address</Label>
          <Input
            id="consultation-email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            disabled={isSubmitting || isSuccess}
          />
        </div>
      </div>

      <div className={`grid grid-cols-1 ${compact ? '' : 'md:grid-cols-2'} gap-4`}>
        <div className="space-y-2">
          <Label htmlFor="consultation-phone">Phone Number</Label>
          <Input
            id="consultation-phone"
            name="phone"
            placeholder="Enter your phone number"
            disabled={isSubmitting || isSuccess}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="consultation-type">Interested In *</Label>
          <Select
            disabled={isSubmitting || isSuccess || readOnlyService}
            value={serviceType}
            onValueChange={setServiceType}
            required
          >
            <SelectTrigger id="consultation-type">
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="INTERIO - Home Interiors">INTERIO - Home Interiors</SelectItem>
              <SelectItem value="EDUFURN - Educational Furniture">EDUFURN - Educational Furniture</SelectItem>
              <SelectItem value="MEDIFURN - Healthcare Furniture">MEDIFURN - Healthcare Furniture</SelectItem>
              <SelectItem value="MODULAR - Office Workstations">MODULAR - Office Workstations</SelectItem>
              <SelectItem value="SHOPFIT - Retail Solutions">SHOPFIT - Retail Solutions</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {!compact && (
        <div className="space-y-2">
          <Label htmlFor="consultation-message">Message (Optional)</Label>
          <Textarea
            id="consultation-message"
            name="message"
            placeholder="Tell us more about your requirements..."
            rows={3}
            disabled={isSubmitting || isSuccess}
          />
        </div>
      )}

      {isSuccess ? (
        <div className="p-4 bg-green-50 text-green-700 rounded-md flex items-center">
          <CheckCircle className="h-5 w-5 mr-2" />
          <span>Thank you! We'll contact you soon.</span>
        </div>
      ) : (
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-secondary hover:text-primary text-white transition-all duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Get Consultation"
          )}
        </Button>
      )}
    </form>
  );
}
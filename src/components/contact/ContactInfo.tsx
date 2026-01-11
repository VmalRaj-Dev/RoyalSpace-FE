import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card className="border-accent/10">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-primary mb-4">Get in Touch</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-accent mt-1 shrink-0" />
              <div>
                <p className="font-medium">Visit our showroom</p>
                <p className="text-sm text-muted-foreground">
                  3-3, Kanjikovil Main Road, Perundurai, Erode - 638 052
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 text-accent mt-1 shrink-0" />
              <div>
                <p className="font-medium">Call us</p>
                <p className="text-sm text-muted-foreground">+91 9313163131</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-accent mt-1 shrink-0" />
              <div>
                <p className="font-medium">Email us</p>
                <p className="text-sm text-muted-foreground">info@royalfurn.in</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-accent mt-1 shrink-0" />
              <div>
                <p className="font-medium">Business hours</p>
                <p className="text-sm text-muted-foreground">Mon-Sat: 10:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
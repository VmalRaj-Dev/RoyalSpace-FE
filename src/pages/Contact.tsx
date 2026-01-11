import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/common/SEO";

const offices = [
  {
    name: "Coimbatore Office",
    address: "No.188, DB Road, R.S. Puram, Coimbatore-641 002, Tamilnadu, India",
    phone: "+91 9313163131",
    email: "info@rspace.com",
    hours: "Mon-Sat: 10AM-8PM",
    latitude: 11.003847819194577,
    longitude: 76.95159432446962
  },
  {
    name: "Erode Office",
    address: "3-3, Kanjikovil Main Road, Thiththampalayam Pirivu, Perundurai, Erode - 638 052",
    phone: "+91 9313163131",
    email: "info@rspace.com",
    hours: "Mon-Sat: 10AM-8PM",
    latitude: 11.316442465349917,
    longitude: 77.58292752331363
  }
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us - Royal Furniture | Get Free Quote"
        description="Contact Royal Furniture for premium furniture solutions. Visit our offices in Erode and Coimbatore. Call +91-9842935863 for free consultation and quotes."
        keywords="contact royal furniture, furniture quote, Erode furniture store, Coimbatore furniture, furniture consultation"
      />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/ws.webp"
              alt="Contact Us"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <p className="text-white/80 text-sm tracking-[0.3em] uppercase mb-6 font-light">
                  Get in Touch
                </p>
                <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
                  Contact
                  <span className="block font-normal mt-2">Our Team</span>
                </h1>
                <p className="text-xl text-white/90 font-light leading-relaxed">
                  We're here to help bring your furniture vision to life
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-light">
                  Send Message
                </p>
                <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8">
                  Get Free Quote
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-light text-neutral-600 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary font-light"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-light text-neutral-600 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary font-light"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-light text-neutral-600 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary font-light"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-light text-neutral-600 mb-2">
                      Service Required *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary font-light"
                    >
                      <option value="">Select a service</option>
                      <option>INTERIO - Home Interiors</option>
                      <option>EDUFURN - Educational Furniture</option>
                      <option>MEDIFURN - Healthcare Solutions</option>
                      <option>MODULAR - Office Workstations</option>
                      <option>SHOPFIT - Retail Solutions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-light text-neutral-600 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary font-light resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 font-light">
                    Send Message
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-light">
                    Our Offices
                  </p>
                  <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8">
                    Visit Us
                  </h2>
                </div>

                {/* Office Cards */}
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 border border-neutral-200 rounded-lg hover:border-primary transition-colors"
                    >
                      <h3 className="text-xl font-normal text-foreground mb-4">{office.name}</h3>

                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-neutral-600 font-light">
                            {office.address}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-primary" />
                          <a
                            href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}
                            className="text-sm text-neutral-600 font-light hover:text-primary transition-colors"
                          >
                            {office.phone}
                          </a>
                        </div>

                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-primary" />
                          <a
                            href={`mailto:${office.email}`}
                            className="text-sm text-neutral-600 font-light hover:text-primary transition-colors"
                          >
                            {office.email}
                          </a>
                        </div>

                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-primary" />
                          <span className="text-sm text-neutral-600 font-light">
                            {office.hours}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Contact */}
                <div className="p-6 bg-neutral-50 rounded-lg">
                  <h3 className="text-lg font-normal text-foreground mb-4">Quick Contact</h3>
                  <p className="text-sm text-neutral-600 font-light mb-4">
                    For immediate assistance, call us directly:
                  </p>
                  <a
                    href="tel:+919313163131"
                    className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-light transition-colors"
                  >
                    +91 9313163131
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-light">
                Find Us
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-foreground">
                Our Locations
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <div className="bg-white p-6 rounded-lg border border-neutral-200">
                    <h3 className="text-xl font-normal text-foreground mb-2">{office.name}</h3>
                    <div className="flex items-start gap-2 text-sm text-neutral-600">
                      <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="font-light">{office.address}</span>
                    </div>
                  </div>
                  <div className="aspect-[16/10] bg-neutral-200 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src={`https://www.google.com/maps?q=${office.latitude},${office.longitude}+(${encodeURIComponent(office.name)})&hl=en&z=15&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${office.name}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

import { motion } from "framer-motion";
import { SEOHead } from "@/components/shared/SEOHead";
import { MapPin, Phone, Mail, Building } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().min(2, { message: "Company name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  industry: z.string().min(2, { message: "Please select your industry." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      industry: "",
      message: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    // Standard mock submission behavior
    alert("Thank you for reaching out! A security consultant will contact you shortly.");
    form.reset();
  }

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with Sporada Secure for a free demo or consultation on how AI video analytics can protect your business."
      />
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">

            {/* Contact Info Col */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Reach Out Direct</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-foreground mb-1">Global Headquarters</h4>
                      <p className="text-muted-foreground leading-relaxed">687/7, Trichy Road, Ramanathapuram<br />Coimbatore – 641045, Tamil Nadu, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">+91-422-231-2363</p>
                      <p className="text-muted-foreground">+91-739-975-0001</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">sales@sporadasecure.com</p>
                      <p className="text-muted-foreground">support@sporadasecure.com</p>
                      <p className="text-muted-foreground">billing@sporadasecure.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-40 rounded-2xl bg-card border border-border overflow-hidden relative shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.558937419591!2d77.00413!3d10.996626499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857833472ff6b%3A0x638caf0fa1ed3f0c!2sSporada%20Secure%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1773392965941!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
                />
              </div>
            </motion.div>

            {/* Contact Form Col */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-card/50 backdrop-blur-lg border border-border/50 p-4 md:p-6 rounded-3xl shadow-2xl relative"
            >
              {/* Subtle top glare */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <h3 className="text-2xl font-bold text-foreground mb-2">Send a Message</h3>
              <p className="text-muted-foreground mb-4 text-sm">Fill out the form below and we'll be in touch within 24 hours.</p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Building className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                              <Input placeholder="Acme Corp" className="pl-10 bg-background" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Work Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@company.com" className="bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+1 (555) 000-0000" className="bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Industry</FormLabel>
                        <FormControl>
                          {/* Simple native select for compatibility, Shadcn Select requires more components installed */}
                          <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            {...field}
                          >
                            <option value="">Select your industry...</option>
                            <option value="retail">Retail Outlets</option>
                            <option value="bfsi">ATM & BFSI</option>
                            <option value="construction">Construction</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="warehouse">Warehouse & Logistics</option>
                            <option value="other">Other Business</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How can we help you?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your security challenges..."
                            className="resize-none h-20 bg-background"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full font-bold text-base h-12">Submit Request</Button>
                </form>
              </Form>

            </motion.div>
          </div>

        </div>
      </div>
    </>
  );
}

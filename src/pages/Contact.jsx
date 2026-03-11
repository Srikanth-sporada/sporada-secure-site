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
      <div className="min-h-screen bg-background pt-24 pb-24">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black mb-6"
            >
               Get a Free <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Demo</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Ready to eliminate false alarms and maximize your security budget? Speak directly with our security architects today.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
            
            {/* Contact Info Col */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-8">Reach Out Direct</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-foreground mb-1">Global Headquarters</h4>
                      <p className="text-muted-foreground leading-relaxed">687/7, Trichy Road, Ramanathapuram<br/>Coimbatore – 641045, Tamil Nadu, India</p>
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

              {/* Fake Map Embed Placeholder for NeoMorphic Vibe */}
              <div className="h-64 rounded-2xl bg-card border border-border overflow-hidden relative group cursor-pointer shadow-lg">
                <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Coimbatore,India&zoom=12&size=600x300&style=feature:all|element:labels|visibility:off&style=feature:water|color:0x000000&style=feature:landscape|color:0x111111&sensor=false')] bg-cover bg-center mix-blend-screen opacity-40 grayscale" />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-background/80 backdrop-blur px-4 py-2 rounded-full border border-border shadow-md flex items-center gap-2 font-medium text-sm text-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    View on Google Maps
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form Col */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 0.4 }}
              className="bg-card/50 backdrop-blur-lg border border-border/50 p-8 md:p-10 rounded-3xl shadow-2xl relative"
            >
              {/* Subtle top glare */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <h3 className="text-2xl font-bold text-foreground mb-2">Send a Message</h3>
              <p className="text-muted-foreground mb-8">Fill out the form below and we'll be in touch within 24 hours.</p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            className="resize-none h-32 bg-background" 
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

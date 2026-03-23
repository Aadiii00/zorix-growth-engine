import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { toast } from "sonner";

const AboutSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Handle multiple services selection
    const services = form.querySelectorAll('input[name="services"]:checked');
    const selectedServices = Array.from(services).map((checkbox) => (checkbox as HTMLInputElement).value);
    
    // Update services data
    data.services = selectedServices.join(', ');

    try {
      // Using EmailJS for direct email sending
      const serviceId = 'service_cogjefp'; // Replace with your EmailJS service ID
      const templateId = 'template_kp8407p'; // Replace with your EmailJS template ID
      const publicKey = '1rhqJ88jJ36saOLBx'; // Replace with your EmailJS public key
      
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        mobile: data.mobile,
        business: data.business,
        website: data.website,
        services: data.services,
        to_email: 'zorixagency@gmail.com', // Your business email
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: templateParams,
        }),
      });

      if (response.ok) {
        toast.success("Thank you! Your consultation request has been sent successfully.");
        form.reset();
      } else {
        const err = await response.json();
        console.error("EmailJS Error:", err);
        toast.error("Failed to send request. Please try again.");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      
      // Fallback: Open email client with pre-filled data
      const subject = encodeURIComponent("New Consultation Request from ZORIX Website");
      const body = encodeURIComponent(`
Name: ${data.name}
Mobile: ${data.mobile}
Email: ${data.email}
Business Name: ${data.business}
Website: ${data.website}
Services Required: ${data.services}
      `);
      
      window.location.href = `mailto:zorixagency@gmail.com?subject=${subject}&body=${body}`;
      
      toast.success("Opening your email client. Please send the email to complete your request.");
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-slate-50/50">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Content */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-border/50 text-xs font-medium text-primary mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary" />
              ABOUT ZORIX
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8 text-foreground">
              Digital Marketing <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Agency in India</span>
            </h2>
            
            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed font-medium">
              <p>
                Welcome to ZORIX – Next-Gen Solutions, a results-driven digital marketing agency based in Davangere, India. We help businesses across India grow faster with data-driven strategies, creative branding, and high-performance marketing solutions.
              </p>
              <p>
                Our mission is to help brands scale online by combining innovation, technology, and marketing expertise. Whether you're a startup or an established business, we create customized strategies that deliver real, measurable growth.
              </p>
              <p>
                We provide our services across all major cities in India including Bangalore, Mumbai, Delhi, Hyderabad, Chennai, and more. With a remote-first approach, we ensure seamless communication and execution regardless of location.
              </p>
              <p className="pb-4">
                Our core services include Social Media Marketing, Performance Ads (Meta & Google), Website Development, SEO, Branding, and Content Marketing — all focused on maximizing ROI.
              </p>
            </div>
          </ScrollReveal>
          
          {/* Right Side: Lead Form */}
          <ScrollReveal delay={200} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent blur-2xl rounded-3xl opacity-70" />
            
            <div className="relative bg-white border border-slate-100 shadow-[0_20px_40px_rgb(0,0,0,0.08)] p-8 md:p-10 rounded-3xl">
              <div className="mb-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 mb-2">Let's Grow Your Business 🚀</h3>
                <p className="text-muted-foreground text-sm font-medium">100% free consultation. No commitment.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80">Mobile Number</label>
                    <input 
                      type="tel" 
                      name="mobile"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/80">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80">Business Name</label>
                    <input 
                      type="text" 
                      name="business"
                      placeholder="Your Company Ltd."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80">Website URL</label>
                    <input 
                      type="url" 
                      name="website"
                      placeholder="https://yourwebsite.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/80">Select Services</label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors">
                      <input 
                        type="checkbox" 
                        name="services"
                        value="social-media"
                        className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary/20"
                      />
                      <span className="text-sm text-foreground">Social Media Marketing</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors">
                      <input 
                        type="checkbox" 
                        name="services"
                        value="performance-ads"
                        className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary/20"
                      />
                      <span className="text-sm text-foreground">Performance Ads (Meta & Google)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors">
                      <input 
                        type="checkbox" 
                        name="services"
                        value="web-dev"
                        className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary/20"
                      />
                      <span className="text-sm text-foreground">Website Development</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors">
                      <input 
                        type="checkbox" 
                        name="services"
                        value="seo"
                        className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary/20"
                      />
                      <span className="text-sm text-foreground">Search Engine Optimization (SEO)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors">
                      <input 
                        type="checkbox" 
                        name="services"
                        value="branding"
                        className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary/20"
                      />
                      <span className="text-sm text-foreground">Branding & Design</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors">
                      <input 
                        type="checkbox" 
                        name="services"
                        value="content"
                        className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary/20"
                      />
                      <span className="text-sm text-foreground">Content Marketing</span>
                    </label>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 mt-4 bg-gradient-to-r from-purple-600 to-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending Request..." : "Get Free Consultation"}
                </button>
              </form>

              <div className="mt-8 text-center flex items-center justify-center gap-2">
                <span className="w-12 h-[1px] bg-slate-200"></span>
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Serving clients across India 🇮🇳
                </p>
                <span className="w-12 h-[1px] bg-slate-200"></span>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

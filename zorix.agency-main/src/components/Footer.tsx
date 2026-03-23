import zorixLogo from "@/assets/zorix-logo.png";
import { Phone } from "lucide-react";

const links = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Our Work", href: "/portfolio" },
  { label: "Contact", href: "/#cta" },
];

const Footer = () => (
  <footer className="border-t border-border/50 py-16 bg-white">
    <div className="container relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-8">
        <div className="md:col-span-2">
          <img src={zorixLogo} alt="ZORIX – Next-Gen Solutions" className="h-14 w-auto mb-6" />
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed" style={{ textWrap: "pretty" }}>
            A performance-driven digital marketing agency that blends creativity with data to craft strategies that deliver measurable growth.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors font-semibold uppercase tracking-wide">
              Twitter
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors font-semibold uppercase tracking-wide">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/zorix.agency?igsh=MXZ1aGwzcW9kMzZraA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors font-semibold uppercase tracking-wide">
              Instagram
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider">Quick Links</p>
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium inline-block w-fit">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider">Enquiry</p>
          <div className="flex flex-col gap-4">
            <a href="tel:7483147208" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
              <div className="w-8 h-8 rounded-full bg-slate-50 border border-border/50 flex items-center justify-center group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">+91 74831 47208</span>
            </a>
            <a href="tel:7022728079" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
              <div className="w-8 h-8 rounded-full bg-slate-50 border border-border/50 flex items-center justify-center group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">+91 70227 28079</span>
            </a>
            <a href="tel:8618130353" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
              <div className="w-8 h-8 rounded-full bg-slate-50 border border-border/50 flex items-center justify-center group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">+91 86181 30353</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground font-medium">© {new Date().getFullYear()} ZORIX. All rights reserved.</p>
        <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

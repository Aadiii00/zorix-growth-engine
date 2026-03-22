import zorixLogo from "@/assets/zorix-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#cta" },
];

const Footer = () => (
  <footer className="border-t border-border bg-muted/30 py-12">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Brand */}
        <div>
          <img src={zorixLogo} alt="ZORIX" className="h-8 mb-3" />
          <p className="text-sm text-muted-foreground max-w-xs">
            Performance-driven digital marketing for brands that refuse to settle.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="md:text-right">
          <p className="text-sm font-semibold mb-1">Get in touch</p>
          <p className="text-sm text-muted-foreground">hello@zorix.agency</p>
          <div className="flex gap-3 mt-3 md:justify-end">
            {/* Simple social icons as text links */}
            {["Twitter", "LinkedIn", "Instagram"].map((s) => (
              <a key={s} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-6 text-center">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} ZORIX. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#cta" },
];

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-lg font-black tracking-tight text-foreground">ZORIX</span>
          <p className="text-sm text-muted-foreground mt-1">Next-Gen Digital Solutions</p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex gap-4">
          {["Twitter", "LinkedIn", "Instagram"].map((s) => (
            <a key={s} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-medium uppercase tracking-wide">
              {s}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-6">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} ZORIX. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

const Footer = () => {
  return (
    <footer className="bg-forest border-t border-primary-foreground/10 py-6 sm:py-8">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Copyright */}
          <div>
            <p className="text-primary-foreground/60 text-sm">
              © 2025 Core Pages
            </p>
            <p className="text-primary-foreground/40 text-xs mt-1">
              Operated by Luke Farrell • Sydney, Australia
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-primary-foreground text-xs sm:text-sm transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-primary-foreground text-xs sm:text-sm transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
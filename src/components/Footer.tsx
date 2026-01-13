const Footer = () => {
  return (
    <footer className="w-full px-4 py-6 mt-auto">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-center gap-6 text-sm">
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Terms
          </a>
          <span className="text-border">|</span>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Privacy
          </a>
        </div>
        
        <p className="text-center text-xs text-muted-foreground/60 mt-4">
          © 2026 Roll88. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

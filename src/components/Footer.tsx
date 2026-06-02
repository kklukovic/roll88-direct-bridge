const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 border-t border-border/30">
      <div className="max-w-md mx-auto text-center space-y-2">
        <p className="text-[11px] text-muted-foreground">
          สำหรับผู้ที่มีอายุ 18 ปีขึ้นไปเท่านั้น · เล่นอย่างมีสติ
        </p>
        <div className="flex justify-center gap-6 text-xs text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

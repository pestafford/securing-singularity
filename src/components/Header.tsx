
import { Shield, Lock, ChartLine } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  // For GitHub Pages, we need to ensure the image paths are relative to the base URL
  const logoPath = process.env.NODE_ENV === 'production' 
    ? "lovable-uploads/4a152f32-ee27-4680-b298-515454c750b8.png" 
    : "/lovable-uploads/4a152f32-ee27-4680-b298-515454c750b8.png";

  return (
    <header className="flex justify-between items-center py-6 px-8">
      <div className="flex items-center gap-2">
        <div className="h-20 w-auto">
          <img 
            src={logoPath}
            alt="Securing the Singularity Logo" 
            className="h-full w-auto"
            loading="eager"
          />
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a href="#services" className="text-gray-700 hover:text-[#1EAEDB] transition-colors">Services</a>
        <a href="#about" className="text-gray-700 hover:text-[#1EAEDB] transition-colors">About</a>
        <a href="#contact" className="text-gray-700 hover:text-[#1EAEDB] transition-colors">Contact</a>
        <Button variant="default" className="bg-[#1EAEDB] hover:bg-[#1795BD]">
          Get Started
        </Button>
      </nav>
    </header>
  );
};

export default Header;

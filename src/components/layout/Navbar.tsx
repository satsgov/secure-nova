import React from 'react';
import { Menu, X, Shield } from 'lucide-react';
import Container from './Container';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navItems = ['Solutions', 'Industries', 'Resources', 'Company'];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-[#0C0D0E]" />
            <span className="font-semibold text-xl text-[#0C0D0E]">SecureNova</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[#667085] hover:text-[#0C0D0E] text-sm font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <button className="bg-[#0C0D0E] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-500"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block py-2 text-[#667085] hover:text-[#0C0D0E] text-sm font-medium"
              >
                {item}
              </a>
            ))}
            <button className="mt-4 w-full bg-[#0C0D0E] text-white px-4 py-2 rounded-lg text-sm font-medium">
              Get Started
            </button>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;

import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MenuIcon, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const links = [
    { path: '/', label: 'Главная' },
    { path: '/services', label: 'Услуги' },
    { path: '/contact', label: 'Контакты' }
  ];

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2"
          >
            <NavLink to="/" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/9c8d14f9-a8b6-4a66-ad06-4dd9ae5dbb5a.png" 
                alt="MwX Logo" 
                className="h-10 w-10 animate-pulse-soft"
              />
              <span className="text-2xl font-bold font-mwx text-gradient">MwX</span>
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center gap-6"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {links.map((link) => (
              <motion.div key={link.path} variants={itemVariants}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-1 py-2 text-sm font-medium transition-colors hover:text-mwx-blue ${
                      isActive ? 'text-mwx-blue' : 'text-muted-foreground'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-mwx-blue to-mwx-purple" />
                      )}
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}
            <motion.div variants={itemVariants}>
              <Button 
                asChild 
                className="bg-mwx-blue hover:bg-mwx-blue/90 rounded-lg text-white font-medium transition-all hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]"
              >
                <NavLink to="/contact">
                  Заказать
                </NavLink>
              </Button>
            </motion.div>
          </motion.nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-card/95 backdrop-blur-lg border-t border-border"
          >
            <div className="container px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {links.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-2 py-2 text-base ${
                        isActive
                          ? 'font-medium text-gradient'
                          : 'text-muted-foreground hover:text-foreground'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <Button 
                  asChild 
                  className="bg-gradient-to-r from-mwx-blue to-mwx-purple hover:opacity-90 rounded-lg text-white"
                >
                  <NavLink to="/contact">
                    Заказать
                  </NavLink>
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

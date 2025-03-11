
import { NavLink } from 'react-router-dom';
import { Linkedin, GitHub, Twitter, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-muted/20 bg-gradient-to-b from-background to-muted/[0.03] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      
      {/* Decorative elements */}
      <div className="tech-line left-1/4 top-0"></div>
      <div className="tech-line left-1/2 top-0"></div>
      <div className="tech-line left-3/4 top-0"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/9c8d14f9-a8b6-4a66-ad06-4dd9ae5dbb5a.png" 
                alt="MwX Logo" 
                className="h-10 w-10" 
              />
              <span className="text-2xl font-bold font-mwx text-gradient">MwX</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Разработка инновационных технологических решений: сайты, программы, игры и боты.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-mwx-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-mwx-blue transition-colors"
                aria-label="GitHub"
              >
                <GitHub className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-mwx-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-medium text-lg">Навигация</h3>
            <nav className="flex flex-col space-y-2">
              <NavLink to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Главная
              </NavLink>
              <NavLink to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                Услуги
              </NavLink>
              <NavLink to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Контакты
              </NavLink>
            </nav>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-medium text-lg">Услуги</h3>
            <nav className="flex flex-col space-y-2">
              <NavLink to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                Разработка сайтов
              </NavLink>
              <NavLink to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                Разработка программ
              </NavLink>
              <NavLink to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                Разработка игр
              </NavLink>
              <NavLink to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                Боты для Telegram
              </NavLink>
              <NavLink to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                Боты для Discord
              </NavLink>
            </nav>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-medium text-lg">Контакты</h3>
            <div className="space-y-2">
              <a 
                href="mailto:info@mwx.ru" 
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@mwx.ru</span>
              </a>
              <a 
                href="tel:+71234567890" 
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+7 (123) 456-7890</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-muted/20 pt-6 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm"
        >
          <p>&copy; {currentYear} MwX. Все права защищены.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Условия использования
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

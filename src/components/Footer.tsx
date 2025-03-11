import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react'; // Fixed: GitHub -> Github

const Footer = () => {
  return (
    <footer className="bg-mwx-darkblue py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MwX. Все права защищены.
          </div>
          <motion.a
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-mwx-blue transition-colors flex items-center"
            whileHover={{ scale: 1.1 }}
          >
            <Github className="h-5 w-5 mr-2" />
            GitHub
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      container.style.setProperty('--mouse-x', `${x}`);
      container.style.setProperty('--mouse-y', `${y}`);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/10"
      style={{ 
        '--mouse-x': '0.5', 
        '--mouse-y': '0.5' 
      } as React.CSSProperties}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.03]"></div>
      
      {/* Glowing circle that follows mouse */}
      <div 
        className="absolute pointer-events-none w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
        style={{
          background: `radial-gradient(circle, rgba(14, 165, 233, 0.5) 0%, rgba(139, 92, 246, 0.3) 50%, rgba(0,0,0,0) 70%)`,
          left: `calc(var(--mouse-x) * 100%)`,
          top: `calc(var(--mouse-y) * 100%)`,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>

      {/* Tech lines decoration */}
      <div className="tech-line left-1/4 top-1/4"></div>
      <div className="tech-line left-1/3 top-1/2"></div>
      <div className="tech-line left-1/2 top-3/4"></div>
      <div className="tech-line left-2/3 top-1/4"></div>
      <div className="tech-line left-3/4 top-1/2"></div>

      <div className="container px-4 md:px-6 relative z-10 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-mwx text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">Технологии</span> будущего <br />
                для вашего <span className="text-gradient">бизнеса</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                Разрабатываем инновационные решения: от современных веб-сайтов до сложных программ, игр и умных ботов для Telegram и Discord
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                className="bg-gradient-to-r from-mwx-blue to-mwx-purple hover:opacity-90 text-white font-medium px-6 py-6 rounded-lg"
                size="lg"
              >
                <Link to="/services">
                  Наши услуги
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-mwx-blue/30 hover:border-mwx-blue text-white bg-transparent hover:bg-mwx-blue/10 font-medium px-6 py-6 rounded-lg"
                size="lg"
              >
                <Link to="/contact">
                  Связаться с нами
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:justify-self-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-r from-mwx-blue/30 to-mwx-purple/30 animate-pulse-soft"></div>
              <img 
                src="/lovable-uploads/9c8d14f9-a8b6-4a66-ad06-4dd9ae5dbb5a.png" 
                alt="MwX Logo" 
                className="relative z-10 h-[300px] w-[300px] md:h-[400px] md:w-[400px] animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

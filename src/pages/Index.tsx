
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Monitor, Server, Zap, Shield, Users, ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import AnimatedButton from '@/components/AnimatedButton';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Monitor,
      title: 'Современный дизайн',
      description: 'Создаем стильные и удобные интерфейсы с учетом последних тенденций в дизайне.'
    },
    {
      icon: Server,
      title: 'Производительность',
      description: 'Разрабатываем высокопроизводительные решения для бесперебойной работы.'
    },
    {
      icon: Zap,
      title: 'Быстрая разработка',
      description: 'Эффективные методологии разработки для быстрого запуска проектов.'
    },
    {
      icon: Shield,
      title: 'Безопасность',
      description: 'Обеспечиваем высокий уровень безопасности для всех наших решений.'
    },
    {
      icon: Users,
      title: 'Поддержка',
      description: 'Предоставляем техническую поддержку и консультации по всем вопросам.'
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />

      <ServicesSection />

      <section className="py-20 bg-muted/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.03]"></div>
        
        {/* Tech lines decoration */}
        <div className="tech-line left-1/4 top-0"></div>
        <div className="tech-line left-1/2 top-0"></div>
        <div className="tech-line left-3/4 top-0"></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <SectionTitle
            title="Почему выбирают нас"
            subtitle="MwX предлагает комплексный подход к разработке, объединяя инновационные технологии и опыт профессионалов для создания первоклассных решений."
            centered
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-start p-6 glass-card rounded-xl border border-muted/20 hover:border-mwx-blue/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-mwx-blue/20 to-mwx-purple/20 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-mwx-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.03]"></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-mwx">
                Готовы начать <span className="text-gradient">сотрудничество</span>?
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Свяжитесь с нами сегодня и расскажите о своем проекте. Мы поможем воплотить ваши идеи в реальность с помощью передовых технологий и опыта наших специалистов.
              </p>
              <AnimatedButton 
                asChild
                variant="primary"
                className="mt-4 py-6 px-8 rounded-lg text-white font-medium"
              >
                <Link to="/contact">
                  Заказать разработку
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </AnimatedButton>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl blur-3xl bg-gradient-to-r from-mwx-blue/20 to-mwx-purple/20 animate-pulse-soft"></div>
                <div className="neo-card relative overflow-hidden p-6 rounded-2xl border border-muted/20">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mwx-blue to-mwx-purple"></div>
                  <div className="flex items-center justify-center space-x-8">
                    <div className="text-center">
                      <h3 className="text-4xl md:text-5xl font-bold text-gradient mb-2">150+</h3>
                      <p className="text-muted-foreground">Завершенных проектов</p>
                    </div>
                    <div className="h-16 w-px bg-gradient-to-b from-mwx-blue/50 to-mwx-purple/50"></div>
                    <div className="text-center">
                      <h3 className="text-4xl md:text-5xl font-bold text-gradient mb-2">5+</h3>
                      <p className="text-muted-foreground">Лет опыта</p>
                    </div>
                    <div className="h-16 w-px bg-gradient-to-b from-mwx-blue/50 to-mwx-purple/50"></div>
                    <div className="text-center">
                      <h3 className="text-4xl md:text-5xl font-bold text-gradient mb-2">98%</h3>
                      <p className="text-muted-foreground">Довольных клиентов</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

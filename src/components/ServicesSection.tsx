
import { motion } from 'framer-motion';
import { Globe, Code, Cpu, Database, Bot, Gamepad2 } from 'lucide-react';
import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'Разработка веб-сайтов',
      description: 'Создаем современные, адаптивные и функциональные веб-сайты с учетом ваших бизнес-потребностей.'
    },
    {
      icon: Code,
      title: 'Разработка программ',
      description: 'Разрабатываем пользовательское программное обеспечение для различных платформ и задач.'
    },
    {
      icon: Gamepad2,
      title: 'Разработка игр',
      description: 'Создаем увлекательные игровые проекты с уникальным дизайном и захватывающим геймплеем.'
    },
    {
      icon: Database,
      title: 'Разработка читов',
      description: 'Разрабатываем программное обеспечение для модификации игрового процесса и улучшения игрового опыта.'
    },
    {
      icon: Bot,
      title: 'Боты для Telegram',
      description: 'Создаем умных ботов для Telegram, которые помогут автоматизировать процессы и улучшить взаимодействие с клиентами.'
    },
    {
      icon: Cpu,
      title: 'Боты для Discord',
      description: 'Разрабатываем многофункциональных ботов для Discord с учетом специфики вашего сервера и требований.'
    }
  ];

  return (
    <section className="py-20 relative" id="services">
      <div className="absolute inset-0 bg-grid opacity-[0.03]"></div>
      
      {/* Tech lines decoration */}
      <div className="tech-line left-1/4 top-0"></div>
      <div className="tech-line left-1/2 top-0"></div>
      <div className="tech-line left-3/4 top-0"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <SectionTitle
          title="Наши услуги"
          subtitle="Предлагаем широкий спектр услуг для реализации ваших идей в цифровом пространстве. От создания веб-сайтов до разработки игр и ботов."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

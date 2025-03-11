
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Code, Cpu, Database, Bot, Gamepad2, CheckCircle2 } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import AnimatedButton from '@/components/AnimatedButton';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'websites',
      icon: Globe,
      title: 'Разработка веб-сайтов',
      description: 'Создаем современные, адаптивные и функциональные веб-сайты с учетом ваших бизнес-потребностей и последних тенденций в веб-разработке.',
      features: [
        'Адаптивный дизайн для всех устройств',
        'SEO-оптимизация для лучшей видимости в поисковых системах',
        'Интеграция с CMS для удобного управления контентом',
        'Оптимизация скорости загрузки',
        'Интеграция с аналитическими системами',
        'Защита от взлома и вредоносных программ'
      ],
      price: 'от 50 000 ₽'
    },
    {
      id: 'software',
      icon: Code,
      title: 'Разработка программ',
      description: 'Разрабатываем пользовательское программное обеспечение для различных платформ и задач, учитывая специфику вашего бизнеса и требования к функциональности.',
      features: [
        'Кроссплатформенные решения (Windows, macOS, Linux)',
        'Интуитивно понятный интерфейс',
        'Высокая производительность и стабильность',
        'Интеграция с существующими системами',
        'Регулярные обновления и поддержка',
        'Шифрование данных и защита информации'
      ],
      price: 'от 100 000 ₽'
    },
    {
      id: 'games',
      icon: Gamepad2,
      title: 'Разработка игр',
      description: 'Создаем увлекательные игровые проекты с уникальным дизайном и захватывающим геймплеем для различных платформ и целевых аудиторий.',
      features: [
        'Уникальный игровой процесс и механики',
        'Высококачественная графика и визуальные эффекты',
        'Оптимизация для целевых платформ',
        'Интеграция с игровыми сервисами',
        'Мультиплеер и сетевое взаимодействие',
        'Монетизация и аналитика'
      ],
      price: 'от 150 000 ₽'
    },
    {
      id: 'cheats',
      icon: Database,
      title: 'Разработка читов',
      description: 'Разрабатываем программное обеспечение для модификации игрового процесса и улучшения игрового опыта с учетом особенностей конкретных игр.',
      features: [
        'Незаметность для античит-систем',
        'Широкий функционал и настройки',
        'Регулярные обновления под новые версии игр',
        'Интуитивный интерфейс',
        'Техническая поддержка',
        'Защита от обнаружения'
      ],
      price: 'от 30 000 ₽'
    },
    {
      id: 'telegram-bots',
      icon: Bot,
      title: 'Боты для Telegram',
      description: 'Создаем умных ботов для Telegram, которые помогут автоматизировать процессы и улучшить взаимодействие с клиентами, оптимизируя рабочие процессы.',
      features: [
        'Интеграция с внешними API и сервисами',
        'Обработка платежей и подписок',
        'Автоматизация рутинных задач',
        'Умная обработка естественного языка',
        'Интерактивные элементы управления',
        'Аналитика использования'
      ],
      price: 'от 20 000 ₽'
    },
    {
      id: 'discord-bots',
      icon: Cpu,
      title: 'Боты для Discord',
      description: 'Разрабатываем многофункциональных ботов для Discord с учетом специфики вашего сервера и требований к функциональности и модерации.',
      features: [
        'Управление ролями и правами пользователей',
        'Модерация и защита от спама',
        'Интеграция с игровыми сервисами',
        'Музыкальные функции и развлечения',
        'Автоматическое приветствие новых пользователей',
        'Настраиваемые команды и автоматизация'
      ],
      price: 'от 25 000 ₽'
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <SectionTitle
            title="Наши услуги"
            subtitle="Предлагаем широкий спектр технологических решений для вашего бизнеса и проектов. Каждая услуга разрабатывается с учетом ваших индивидуальных потребностей и целей."
          />

          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row gap-8 items-start"
                >
                  <div className="md:w-2/3 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-mwx-blue/20 to-mwx-purple/20 flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-mwx-blue" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold font-mwx">{service.title}</h2>
                    </div>
                    <p className="text-muted-foreground">{service.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-mwx-blue mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:w-1/3">
                    <div className="neo-card p-6 rounded-xl border border-muted/20">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mwx-blue to-mwx-purple"></div>
                      <h3 className="text-xl font-semibold mb-1">Стоимость</h3>
                      <p className="text-3xl font-bold text-gradient mb-4">{service.price}</p>
                      <p className="text-sm text-muted-foreground mb-6">
                        Финальная стоимость зависит от сложности и объема работ. Свяжитесь с нами для получения точной оценки.
                      </p>
                      <AnimatedButton 
                        asChild
                        variant="primary"
                        className="w-full py-5 rounded-lg"
                      >
                        <Link to="/contact">
                          Заказать
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </AnimatedButton>
                    </div>
                  </div>
                </motion.div>
                
                {index < services.length - 1 && (
                  <div className="my-12 border-b border-muted/10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.03]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-mwx">
              Нужно <span className="text-gradient">индивидуальное решение</span>?
            </h2>
            <p className="text-muted-foreground">
              Если вы не нашли подходящую услугу или вам требуется комплексное решение, свяжитесь с нами для обсуждения вашего проекта. Мы разработаем индивидуальное предложение с учетом ваших требований и бюджета.
            </p>
            <AnimatedButton 
              asChild
              variant="primary"
              className="mt-4 py-6 px-8 rounded-lg text-white font-medium"
            >
              <Link to="/contact">
                Обсудить проект
              </Link>
            </AnimatedButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;


import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, Clock, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import SectionTitle from '@/components/SectionTitle';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'info@mwx.ru',
      link: 'mailto:info@mwx.ru'
    },
    {
      icon: Phone,
      title: 'Телефон',
      details: '+7 (123) 456-7890',
      link: 'tel:+71234567890'
    },
    {
      icon: MessageSquare,
      title: 'Мессенджеры',
      details: 'Telegram, WhatsApp',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Время работы',
      details: 'Пн-Пт: 9:00 - 18:00',
      link: null
    },
    {
      icon: MapPin,
      title: 'Адрес',
      details: 'г. Москва, ул. Примерная, 123',
      link: '#'
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.03]"></div>
        
        {/* Tech lines decoration */}
        <div className="tech-line left-1/4 top-0"></div>
        <div className="tech-line left-1/2 top-0"></div>
        <div className="tech-line left-3/4 top-0"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <SectionTitle
                title="Связаться с нами"
                subtitle="Заполните форму, чтобы рассказать о вашем проекте, или используйте альтернативные способы связи. Мы оперативно ответим на ваш запрос."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card border border-muted/20 p-4 rounded-xl flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-mwx-blue/20 to-mwx-purple/20 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-mwx-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-muted-foreground hover:text-mwx-blue transition-colors"
                        >
                          {item.details}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.details}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="neo-card p-6 rounded-xl mt-4 border border-muted/20"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mwx-blue to-mwx-purple"></div>
                <h3 className="text-xl font-semibold mb-4">Что указать в заявке?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-mwx-blue">•</span>
                    <span>Тип проекта, который вас интересует</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-mwx-blue">•</span>
                    <span>Ключевые требования и функциональность</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-mwx-blue">•</span>
                    <span>Примерные сроки реализации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-mwx-blue">•</span>
                    <span>Бюджет проекта (если определен)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-mwx-blue">•</span>
                    <span>Предпочитаемый способ связи</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            
            <div>
              <div className="neo-card p-8 rounded-xl border border-muted/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mwx-blue to-mwx-purple"></div>
                <ContactForm />
              </div>
            </div>
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
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-mwx">
              <span className="text-gradient">Процесс работы</span> с нами
            </h2>
            <p className="text-muted-foreground">
              Мы стремимся сделать процесс сотрудничества максимально простым и эффективным. Вот как мы обычно работаем с новыми проектами:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="glass-card border border-muted/20 p-6 rounded-xl"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mwx-blue/20 to-mwx-purple/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-mwx-blue">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">Обсуждение проекта</h3>
                <p className="text-muted-foreground text-center">
                  Анализируем ваши требования и предлагаем оптимальные решения
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass-card border border-muted/20 p-6 rounded-xl"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mwx-blue/20 to-mwx-purple/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-mwx-blue">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">Разработка и тестирование</h3>
                <p className="text-muted-foreground text-center">
                  Реализуем проект с регулярными обновлениями о прогрессе
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-card border border-muted/20 p-6 rounded-xl"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mwx-blue/20 to-mwx-purple/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-mwx-blue">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">Запуск и поддержка</h3>
                <p className="text-muted-foreground text-center">
                  Выпускаем готовый продукт и обеспечиваем техническую поддержку
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

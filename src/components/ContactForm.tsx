
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast({
        title: "Заявка отправлена",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      
      // Reset form after showing success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          service: '',
          message: ''
        });
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full max-w-lg"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Имя</Label>
          <Input
            id="name"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-muted/20 border-muted/20 focus:border-mwx-blue"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="ваш@email.ru"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-muted/20 border-muted/20 focus:border-mwx-blue"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="service">Интересующая услуга</Label>
          <Select onValueChange={handleServiceChange} value={formData.service}>
            <SelectTrigger id="service" className="bg-muted/20 border-muted/20 focus:border-mwx-blue">
              <SelectValue placeholder="Выберите услугу" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="website">Разработка сайта</SelectItem>
              <SelectItem value="software">Разработка программы</SelectItem>
              <SelectItem value="game">Разработка игры</SelectItem>
              <SelectItem value="cheat">Разработка чита</SelectItem>
              <SelectItem value="telegram_bot">Бот для Telegram</SelectItem>
              <SelectItem value="discord_bot">Бот для Discord</SelectItem>
              <SelectItem value="other">Другое</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message">Сообщение</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Опишите ваш проект..."
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-muted/20 border-muted/20 focus:border-mwx-blue resize-none"
          />
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting || isSuccess}
          className={`w-full py-6 rounded-lg transition-all duration-300 ${
            isSuccess 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-gradient-to-r from-mwx-blue to-mwx-purple hover:opacity-90'
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Отправка...
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Отправлено
            </>
          ) : (
            'Отправить заявку'
          )}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;

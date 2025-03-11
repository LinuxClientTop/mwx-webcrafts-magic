
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="neo-card border border-muted/20 h-full transition-all duration-300 hover:border-mwx-blue/30 hover:translate-y-[-5px] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-mwx-blue to-mwx-purple"></div>
        <CardHeader className="space-y-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-mwx-blue/20 to-mwx-purple/20 flex items-center justify-center">
            <Icon className="h-6 w-6 text-mwx-blue" />
          </div>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CardDescription className="text-muted-foreground min-h-[80px]">
            {description}
          </CardDescription>
          <Button 
            asChild
            variant="outline" 
            className="border-mwx-blue/30 hover:border-mwx-blue text-white bg-transparent hover:bg-mwx-blue/10 font-medium rounded-lg"
          >
            <Link to="/contact">
              Подробнее
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;

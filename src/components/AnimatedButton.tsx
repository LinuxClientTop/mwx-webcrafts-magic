
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Button as ShadcnButton } from '@/components/ui/button';
import { ButtonProps as ShadcnButtonProps } from '@/components/ui/button';

interface AnimatedButtonProps extends Omit<ShadcnButtonProps, 'asChild'> {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'default' | 'primary' | 'outline';
  asChild?: boolean;
}

const AnimatedButton = ({ 
  children, 
  className = '',
  onClick,
  disabled = false,
  variant = 'default',
  asChild = false,
  ...props
}: AnimatedButtonProps) => {
  let buttonClass = '';
  
  if (variant === 'primary') {
    buttonClass = 'bg-gradient-to-r from-mwx-blue to-mwx-purple text-white hover:opacity-90';
  } else if (variant === 'outline') {
    buttonClass = 'bg-transparent border-2 border-mwx-blue/30 hover:border-mwx-blue text-white hover:bg-mwx-blue/10';
  } else {
    buttonClass = 'bg-mwx-blue hover:bg-mwx-blue/90 text-white';
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative"
    >
      <ShadcnButton
        onClick={onClick}
        disabled={disabled}
        className={`${buttonClass} ${className} shadow-none`}
        asChild={asChild}
        {...props}
      >
        {children}
      </ShadcnButton>
      <motion.div
        className="absolute inset-0 -z-10 opacity-70 blur-sm rounded-lg bg-gradient-to-r from-mwx-blue to-mwx-purple"
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 0.5 }
        }}
        animate="rest"
        whileHover="hover"
      />
    </motion.div>
  );
};

export default AnimatedButton;

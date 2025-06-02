import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  text: string;
  primary?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, primary = false, onClick }) => {
  return (
    <motion.button
      className={`px-6 py-2.5 rounded-md font-medium text-sm transition-all duration-300 ${
        primary
          ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20'
          : 'bg-white/10 text-emerald-400 backdrop-blur-sm border border-emerald-500/20'
      }`}
      whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(16, 185, 129, 0.2)' }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default Button;
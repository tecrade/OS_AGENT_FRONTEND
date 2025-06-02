import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  isCenter: boolean;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, isCenter, index }) => {
  const IconComponent = (LucideIcons[icon as keyof typeof LucideIcons] as LucideIcon) || LucideIcons.Terminal;

  return (
    <motion.div
      className={`relative flex-shrink-0 transition-all duration-500 mx-4 ${
        isCenter 
          ? 'w-80 scale-110 z-10' 
          : 'w-72 scale-95 opacity-80'
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: isCenter ? 1.12 : 1.02,
        opacity: 1,
        transition: { duration: 0.3 } 
      }}
    >
      {/* Icon positioned above the neckline */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 z-20">
        <div className={`rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 p-3 shadow-lg border-4 border-gray-900 ${
          isCenter ? 'w-16 h-16' : 'w-14 h-14'
        }`}>
          <IconComponent 
            className="text-white" 
            size={isCenter ? 28 : 24} 
          />
        </div>
      </div>

      {/* Card with neckline cut */}
      <div className={`relative mt-8 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-emerald-500/30 shadow-xl h-80 ${
        isCenter ? 'shadow-emerald-500/20' : 'shadow-gray-900/50'
      }`}
      style={{
        clipPath: 'polygon(0 25px, 40% 25px, 50% 0, 60% 25px, 100% 25px, 100% 100%, 0 100%)',
        borderRadius: '0 0 12px 12px'
      }}>
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-b-xl" 
             style={{ clipPath: 'inherit' }} />
        
        <div className="relative p-6 pt-12 h-full flex flex-col justify-center">
          <h3 className={`font-bold mb-3 text-center transition-all duration-300 ${
            isCenter 
              ? 'text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400' 
              : 'text-lg lg:text-xl text-emerald-400'
          }`}>
            {title}
          </h3>
          <p className={`text-center leading-relaxed transition-all duration-300 ${
            isCenter 
              ? 'text-gray-200 text-base' 
              : 'text-gray-300 text-sm'
          }`}>
            {description}
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/50 to-cyan-500/50" />
        {isCenter && (
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none" 
               style={{ clipPath: 'inherit' }} />
        )}
      </div>
    </motion.div>
  );
};

export default FeatureCard;
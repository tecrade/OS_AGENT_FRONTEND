import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import Button from './Button';

const HeroBanner: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-20 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-slate-900"
    >
      {/* Pattern Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="absolute right-0 w-1/2 h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-emerald-500/20 to-emerald-500/0"
              style={{
                width: Math.random() * 200 + 100,
                height: Math.random() * 200 + 100,
                borderRadius: '40%',
                top: `${Math.random() * 100}%`,
                right: `${Math.random() * 50}%`,
              }}
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <div className="text-8xl mb-8">🤖</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6 leading-tight [text-shadow:_0_0_30px_rgb(52_211_153_/_0.3)]">
            Your Personal AI Terminal Companion
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            OS-AGENT helps you manage commands, perform security checks, and automate web tasks all through an intuitive terminal interface.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button text="TRY OS-AGENT" primary={true} />
            <Button text="GITHUB" />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-5 left-0 right-0 flex justify-center">
        <motion.a
          href="#features"
          className="text-emerald-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroBanner;
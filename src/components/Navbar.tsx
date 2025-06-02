import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { navItems } from '../data';
import Button from './Button';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <motion.a
          href="#home"
          className="flex items-center gap-2 text-xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Terminal className={`${scrolled ? 'text-black' : 'text-white'}`} size={28} />
          <span className={`${scrolled ? 'text-black' : 'text-white'}`}>OS-AGENT</span>
        </motion.a>

        <div className={`hidden md:flex items-center gap-8 ${!scrolled && 'bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full'}`}>
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <Button
  text="TRY OS-AGENT"
  primary={true}
  onClick={() => window.open('https://0805-13-61-96-76.ngrok-free.app/', '_blank')}
/>


        <div className="md:hidden">
          <motion.button
            className={`p-2 ${scrolled ? 'text-black' : 'text-white'}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Github, Linkedin, Twitter } from 'lucide-react';
import { teamMembers } from '../data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-indigo-500 to-violet-600 p-6 rounded-2xl shadow-xl flex items-center justify-center h-72">
              <div className="relative">
                <Terminal className="text-white w-24 h-24" />
                <motion.div
                  className="absolute inset-0"
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0px rgba(255,255,255,0.2)", 
                      "0 0 0 20px rgba(255,255,255,0)", 
                    ] 
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 1.5,
                  }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              About OS-AGENT
            </h2>
            <p className="text-gray-600 mb-6">
              OS-AGENT was created by a team of developers, AI specialists, and UX designers who 
              wanted to make terminal interactions more intuitive, secure, and powerful. Our mission 
              is to bridge the gap between traditional command-line interfaces and modern AI capabilities.
            </p>
            <p className="text-gray-600 mb-8">
              With OS-AGENT, terminal usage is no longer limited to experts. Anyone can leverage the 
              power of command-line interfaces with the help of our intelligent assistant.
            </p>

            <div className="flex gap-4">
              <a 
                href="#" 
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-300"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                <Twitter size={18} />
                <span>Twitter</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
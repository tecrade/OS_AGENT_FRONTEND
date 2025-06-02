import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import { features } from '../data';

const Features: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef<number | null>(null);

  // Auto-play functionality - smooth automatic sliding
  useEffect(() => {
    if (!isHovered) {
      autoPlayRef.current = window.setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const maxIndex = features.length - 3; // Since we show 3 cards at once
          return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
      }, 3000); // 3 seconds interval
    } else {
      if (autoPlayRef.current) {
        window.clearInterval(autoPlayRef.current);
      }
    }

    return () => {
      if (autoPlayRef.current) {
        window.clearInterval(autoPlayRef.current);
      }
    };
  }, [isHovered]);

  // Remove scroll handling since we're using transform-based sliding
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (carouselRef.current) {
  //       const scrollLeft = carouselRef.current.scrollLeft;
  //       const cardWidth = carouselRef.current.clientWidth / visibleCards;
  //       const newIndex = Math.round(scrollLeft / cardWidth);
  //       setCurrentIndex(Math.min(newIndex, features.length - visibleCards));
  //     }
  //   };

  //   const carousel = carouselRef.current;
  //   if (carousel) {
  //     carousel.addEventListener('scroll', handleScroll);
  //     return () => carousel.removeEventListener('scroll', handleScroll);
  //   }
  // }, [visibleCards]);

  // Calculate total dots for the new sliding system
  const totalDots = Math.max(0, features.length - 2); // Show dots for each possible starting position

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 [text-shadow:_0_0_30px_rgb(52_211_153_/_0.3)]">
            Powerful Terminal Features
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
            OS-AGENT brings intelligence, automation, and security to your terminal experience.
          </p>
        </motion.div>

        <div 
          className="relative max-w-7xl mx-auto overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Boxed Carousel Container */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 shadow-2xl">
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              }}
            >
              {features.map((feature, index) => {
                const isCenter = index === currentIndex + 1; // Middle card of the 3 visible cards
                
                return (
                  <div
                    key={feature.id}
                    className="flex justify-center items-center"
                    style={{
                      flex: `0 0 ${100 / 3}%`,
                    }}
                  >
                    <FeatureCard
                      title={feature.title}
                      description={feature.description}
                      icon={feature.icon}
                      isCenter={isCenter}
                      index={index}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Indicator Dots */}
          {totalDots > 1 && (
            <div className="flex justify-center mt-8 gap-3">
              {Array.from({ length: totalDots }).map((_, index) => (
                <button
                  key={index}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'bg-emerald-400 w-8 h-3'
                      : 'bg-gray-600 hover:bg-gray-500 w-3 h-3'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* How OS-AGENT Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="mt-16 sm:mt-20 lg:mt-24 max-w-6xl mx-auto"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-xl border border-emerald-500/20 shadow-2xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              How OS-AGENT Works
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { title: "Input", desc: "Command entered in terminal", icon: "1" },
                { title: "Process", desc: "AI analyzes and enhances", icon: "2" },
                { title: "Secure", desc: "Security checks performed", icon: "3" },
                { title: "Execute", desc: "Command executed safely", icon: "4" }
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-emerald-500/30 hover:scale-110 transition-transform duration-300">
                    <span className="text-emerald-400 font-bold text-lg sm:text-xl lg:text-2xl">{step.icon}</span>
                  </div>
                  <h4 className="font-semibold text-emerald-400 text-base sm:text-lg mb-2">{step.title}</h4>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
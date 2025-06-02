import React from 'react';
import { motion } from 'framer-motion';
import DemoCard from './DemoCard';

const Demos: React.FC = () => {
  // Single demo data - you can replace with your actual video URL
  const demoData = {
    title: "OS-AGENT Terminal Experience",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4", // Replace with your actual video URL
    description: "Watch how OS-AGENT transforms your terminal experience with intelligent automation, seamless integrations, and powerful command-line tools. See real-time demonstrations of key features including automated workflows, smart suggestions, and enhanced productivity tools.",
    posterUrl: "https://via.placeholder.com/1280x720/4f46e5/ffffff?text=OS-AGENT+Demo" // Replace with your actual poster image
  };

  return (
    <section id="demos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            See OS-AGENT In Action
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Experience the power of intelligent terminal automation through our comprehensive demo video
          </p>
        </motion.div>

        {/* Single Large Demo Card */}
        <DemoCard
          title={demoData.title}
          videoUrl={demoData.videoUrl}
          description={demoData.description}
          posterUrl={demoData.posterUrl}
        />

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#" 
              className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-lg shadow-indigo-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              Try OS-AGENT Now
            </a>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Demos;
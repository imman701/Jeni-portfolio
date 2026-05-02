import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background animated gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full glass border-white/10 text-primary text-sm font-medium mb-6">
            Welcome to my creative universe
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Hi, I'm <span className="text-gradient">Jenisha R</span>
            <br />
            <span className="text-4xl md:text-6xl text-textSecondary mt-2 block">
              UI/UX Designer
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-textSecondary text-lg mb-10 leading-relaxed">
            Crafting beautiful, intuitive, and modern digital experiences that solve real problems. I blend aesthetics with functionality to deliver premium user interfaces.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="portfolio" 
              smooth={true} 
              duration={500}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all cursor-pointer flex items-center justify-center space-x-2 group"
            >
              <span>View Projects</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="/jenisha-cv.pdf" 
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass hover:bg-white/10 transition-all border border-white/10 text-textPrimary font-medium flex items-center justify-center space-x-2"
            >
              <span>Download CV</span>
              <FiDownload />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

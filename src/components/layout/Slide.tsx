import React from 'react';
import { motion } from 'framer-motion';
import './Slide.css';

interface SlideProps {
  children: React.ReactNode;
  title?: string;
  notes?: string;
  className?: string;
}

const Slide: React.FC<SlideProps> = ({ children, title, notes, className = '' }) => {
  return (
    <motion.div 
      className={`slide-container ${className}`}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {title && <h2 className="slide-title">{title}</h2>}
      <div className="slide-content">
        {children}
      </div>
    </motion.div>
  );
};

export default Slide;

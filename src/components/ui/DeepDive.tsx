import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import './DeepDive.css';

interface DeepDiveProps {
  title?: string;
  children: React.ReactNode;
}

const DeepDive: React.FC<DeepDiveProps> = ({ title = "Biraz Daha Derin", children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="deep-dive-wrapper glass-panel">
      <button className="deep-dive-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="header-left">
          <BookOpen size={20} className="icon-book" />
          <span>{title}</span>
        </div>
        <div className="header-right">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="deep-dive-content"
          >
            <div className="content-inner">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DeepDive;

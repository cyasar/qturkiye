import React, { Suspense, useState } from 'react';
import { usePresentation } from '../../hooks/usePresentation';
import ProgressBar from './ProgressBar';
import { Maximize, Minimize, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './PresentationShell.css';

const slideModules = import.meta.glob('../../slides/*-Slide.tsx');

const slides = Array.from({ length: 35 }, (_, i) => {
  const num = (i + 1).toString().padStart(2, '0');
  const path = `../../slides/${num}-Slide.tsx`;
  
  return React.lazy(() => {
    const importFn = slideModules[path];
    if (importFn) {
      return importFn() as Promise<{ default: React.ComponentType<any> }>;
    }
    return Promise.resolve({ 
      default: () => <div className="slide-placeholder">Slayt {num} Yapım Aşamasında</div> 
    });
  });
});

const PresentationShell: React.FC = () => {
  const { currentSlide, nextSlide, prevSlide, goToSlide, isFullscreen, toggleFullscreen, showNotes } = usePresentation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="presentation-shell">
      {/* Main Slide Area */}
      <div className="slide-viewport">
        <Suspense fallback={<div className="loading">Yükleniyor...</div>}>
          <CurrentSlideComponent />
        </Suspense>
      </div>

      {/* Slide Navigation Menu Modal */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="slide-menu-overlay glass"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <div className="slide-menu-header">
              <h2>Slayt Listesi</h2>
              <button className="icon-btn" onClick={() => setIsMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="slide-menu-grid">
              {slides.map((_, idx) => (
                <button 
                  key={idx}
                  className={`slide-menu-item ${currentSlide === idx ? 'active' : ''}`}
                  onClick={() => {
                    goToSlide(idx);
                    setIsMenuOpen(false);
                  }}
                >
                  Slayt {idx + 1}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation Bar */}
      <div className="bottom-nav-bar">
        
        <button className="icon-btn" onClick={prevSlide} disabled={currentSlide === 0} title="Önceki Slayt">
          <ChevronLeft size={24} />
        </button>

        <button className="icon-btn" onClick={() => setIsMenuOpen(true)} title="Slayt Listesi">
          <Menu size={20} />
        </button>

        <div className="slide-number-display" onClick={() => setIsMenuOpen(true)} title="Herhangi bir slayta git">
          {currentSlide + 1} / {slides.length}
        </div>

        <button className="icon-btn" onClick={nextSlide} disabled={currentSlide === slides.length - 1} title="Sonraki Slayt">
          <ChevronRight size={24} />
        </button>

        <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.2)', margin: '0 10px' }} />

        <button className="icon-btn" onClick={toggleFullscreen} title="Tam Ekran (F)">
          {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
        </button>

      </div>
      
      {/* Hidden Navigation Zones for Mouse */}
      <div className="nav-zone nav-left" onClick={prevSlide} />
      <div className="nav-zone nav-right" onClick={nextSlide} />

      <ProgressBar currentSlide={currentSlide} />
      
      {showNotes && (
        <div className="speaker-notes-overlay glass">
          <h3>Konuşmacı Notları (Geliştirme Aşamasında)</h3>
          <p>Bu slayt için süre ve açıklamalar buraya gelecek.</p>
        </div>
      )}
    </div>
  );
};

export default PresentationShell;

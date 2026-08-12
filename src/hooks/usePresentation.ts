import { useState, useEffect, useCallback } from 'react';
import { seminarConfig } from '../config/seminar';

export function usePresentation() {
  const getInitialSlide = () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && !isNaN(Number(hash))) {
      const slideIndex = parseInt(hash, 10);
      if (slideIndex >= 0 && slideIndex < seminarConfig.totalSlides) return slideIndex;
    }
    const saved = localStorage.getItem('qturkiye_current_slide');
    if (saved !== null && !isNaN(Number(saved))) {
      const slideIndex = parseInt(saved, 10);
      if (slideIndex >= 0 && slideIndex < seminarConfig.totalSlides) return slideIndex;
    }
    return 0;
  };

  const [currentSlide, setCurrentSlide] = useState(getInitialSlide());

  useEffect(() => {
    localStorage.setItem('qturkiye_current_slide', currentSlide.toString());
    window.history.replaceState(null, '', `#${currentSlide}`);
  }, [currentSlide]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, seminarConfig.totalSlides - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(Math.max(0, Math.min(index, seminarConfig.totalSlides - 1)));
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          prevSlide();
          break;
        case 'Home':
          goToSlide(0);
          break;
        case 'End':
          goToSlide(seminarConfig.totalSlides - 1);
          break;
        case 'f':
        case 'F':
          toggleFullscreen();
          break;
        case 's':
        case 'S':
          setShowNotes(prev => !prev);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, toggleFullscreen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
    isFullscreen,
    toggleFullscreen,
    showNotes,
  };
}

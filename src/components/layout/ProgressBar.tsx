import React from 'react';
import { seminarConfig } from '../../config/seminar';

interface ProgressBarProps {
  currentSlide: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentSlide }) => {
  const progress = (currentSlide / (seminarConfig.totalSlides - 1)) * 100;

  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '4px',
      background: 'rgba(255,255,255,0.1)',
      zIndex: 1000
    }}>
      <div style={{
        width: `${progress}%`,
        height: '100%',
        background: 'var(--primary)',
        transition: 'width 0.3s ease'
      }} />
    </div>
  );
};

export default ProgressBar;

import React, { useRef, useEffect } from 'react';
import katex from 'katex';

interface EquationProps {
  math: string;
  display?: boolean;
}

const Equation: React.FC<EquationProps> = ({ math, display = true }) => {
  const containerRef = useRef<HTMLDivElement | HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      katex.render(math, containerRef.current, {
        displayMode: display,
        throwOnError: false,
      });
    }
  }, [math, display]);

  if (display) {
    return <div ref={containerRef as React.RefObject<HTMLDivElement>} style={{ margin: '1rem 0' }} />;
  }
  
  return <span ref={containerRef as React.RefObject<HTMLSpanElement>} />;
};

export default Equation;

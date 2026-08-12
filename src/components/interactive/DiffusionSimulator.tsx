import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './GroverSimulator.css'; // Reuse styles

const DiffusionSimulator: React.FC = () => {
  const N = 8;
  const initialAmp = 1 / Math.sqrt(N);
  const targetIndex = 5; // |101>

  const [hasDiffusionApplied, setHasDiffusionApplied] = useState(false);

  // Oracle is already applied in this step
  const baseAmplitudes = Array(N).fill(initialAmp).map((amp, idx) => (idx === targetIndex ? -amp : amp));
  
  // Calculate the mean (average) of the base amplitudes
  const mean = baseAmplitudes.reduce((a, b) => a + b, 0) / N;

  const amplitudes = baseAmplitudes.map((amp) => {
    if (hasDiffusionApplied) return 2 * mean - amp;
    return amp;
  });

  const getStateName = (index: number) => {
    return `|${index.toString(2).padStart(3, '0')}>`;
  };

  // Convert mean to height scale (same as bar scale)
  const meanHeight = mean * 200; 

  return (
    <div className="grover-container glass" style={{ marginTop: '1rem', padding: '1.5rem', gap: '1rem' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <div>
          <h3 style={{ color: 'var(--primary)', margin: '0 0 0.5rem 0' }}>Difüzyon (Genlik Büyütme)</h3>
          <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.9rem' }}>Oracle sonrası oluşan durumun ortalamaya göre tersi alınır.</p>
        </div>
        
        <div style={{ textAlign: 'right' }}>
          <button 
            onClick={() => setHasDiffusionApplied(!hasDiffusionApplied)}
            style={{
              padding: '0.8rem 1.5rem',
              background: hasDiffusionApplied ? 'var(--accent-green)' : 'var(--primary)',
              color: '#000',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1.1rem',
              boxShadow: `0 0 15px ${hasDiffusionApplied ? 'var(--accent-green)' : 'var(--primary)'}`
            }}
          >
            {hasDiffusionApplied ? "Sıfırla" : "Difüzyon Uygula"}
          </button>
        </div>
      </div>

      <div className="grover-bars" style={{ height: '220px', position: 'relative' }}>
        
        {/* Mean Line Visualization */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, pointerEvents: 'none' }}>
           <div style={{
              position: 'absolute',
              top: `calc(50% - ${meanHeight}px)`,
              left: 0, right: 0,
              height: '2px',
              background: 'var(--accent-yellow)',
              borderBottom: '1px dashed #fff',
              zIndex: 20,
              boxShadow: '0 0 10px var(--accent-yellow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start'
           }}>
             <span style={{ position: 'absolute', left: '-60px', color: 'var(--accent-yellow)', fontSize: '0.8rem', fontWeight: 'bold', background: 'rgba(0,0,0,0.5)', padding: '2px 4px', borderRadius: '4px' }}>
               Ortalama
             </span>
           </div>
        </div>

        {amplitudes.map((amp, idx) => {
          const height = Math.abs(amp) * 200; 
          const isNegative = amp < 0;
          return (
            <div key={idx} className="bar-wrapper" style={{ zIndex: 10 }}>
              <div className="bar-container" style={{ height: '160px' }}>
                {/* Positive area */}
                <div className="bar-half positive">
                  {!isNegative && (
                    <motion.div 
                      className="bar-fill pos-fill" 
                      animate={{ height: height }} 
                      transition={{ type: 'spring', bounce: 0.4 }}
                      style={{ background: idx === targetIndex && hasDiffusionApplied ? 'var(--accent-green)' : 'var(--primary)' }}
                    />
                  )}
                </div>
                {/* Zero line */}
                <div className="zero-line" />
                {/* Negative area */}
                <div className="bar-half negative">
                  {isNegative && (
                    <motion.div 
                      className="bar-fill neg-fill" 
                      animate={{ height: height }} 
                      transition={{ type: 'spring', bounce: 0.4 }}
                    />
                  )}
                </div>
              </div>
              <div className="bar-label" style={{ 
                color: idx === targetIndex ? (hasDiffusionApplied ? 'var(--accent-green)' : 'var(--accent-pink)') : 'var(--text-muted)',
                fontWeight: idx === targetIndex ? 'bold' : 'normal',
                marginTop: '0.5rem'
              }}>
                {getStateName(idx)}
              </div>
              {idx === targetIndex && (
                <div style={{ color: hasDiffusionApplied ? 'var(--accent-green)' : 'var(--accent-pink)', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  Hedef
                </div>
              )}
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default DiffusionSimulator;

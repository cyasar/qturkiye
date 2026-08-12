import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './GroverSimulator.css'; // Reusing styles

const OracleSimulator: React.FC = () => {
  const N = 8;
  const initialAmp = 1 / Math.sqrt(N);
  const targetIndex = 5; // |101>

  const [hasOracleApplied, setHasOracleApplied] = useState(false);

  const amplitudes = Array(N).fill(initialAmp).map((amp, idx) => {
    if (hasOracleApplied && idx === targetIndex) return -amp;
    return amp;
  });

  const getStateName = (index: number) => {
    return `|${index.toString(2).padStart(3, '0')}>`;
  };

  return (
    <div className="grover-container glass" style={{ marginTop: '1rem', padding: '1.5rem', gap: '1rem' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <div>
          <h3 style={{ color: 'var(--primary)', margin: '0 0 0.5rem 0' }}>Süperpozisyon (Başlangıç)</h3>
          <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.9rem' }}>Tüm ihtimallerin olasılık genliği aynı (pozitif).</p>
        </div>
        
        <div style={{ textAlign: 'right' }}>
          <button 
            onClick={() => setHasOracleApplied(!hasOracleApplied)}
            style={{
              padding: '0.8rem 1.5rem',
              background: hasOracleApplied ? 'var(--accent-pink)' : 'var(--primary)',
              color: '#000',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1.1rem',
              boxShadow: `0 0 15px ${hasOracleApplied ? 'var(--accent-pink)' : 'var(--primary)'}`
            }}
          >
            {hasOracleApplied ? "Sıfırla" : "Oracle U_{f} Uygula"}
          </button>
        </div>
      </div>

      <div className="grover-bars" style={{ height: '220px' }}>
        {amplitudes.map((amp, idx) => {
          const height = Math.abs(amp) * 200; // max height scale
          const isNegative = amp < 0;
          return (
            <div key={idx} className="bar-wrapper">
              <div className="bar-container" style={{ height: '160px' }}>
                {/* Positive area */}
                <div className="bar-half positive">
                  {!isNegative && (
                    <motion.div 
                      className="bar-fill pos-fill" 
                      animate={{ height: height }} 
                      transition={{ type: 'spring', bounce: 0.4 }}
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
                color: idx === targetIndex ? 'var(--accent-pink)' : 'var(--text-muted)',
                fontWeight: idx === targetIndex ? 'bold' : 'normal',
                marginTop: '0.5rem'
              }}>
                {getStateName(idx)}
              </div>
              {idx === targetIndex && (
                <div style={{ color: 'var(--accent-pink)', fontSize: '0.8rem', fontWeight: 'bold' }}>
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

export default OracleSimulator;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Equation from '../ui/Equation';

interface WaveInterferenceProps {
  phaseShift: number;
  setPhaseShift: (val: number) => void;
}

const WaveInterference: React.FC<WaveInterferenceProps> = ({ phaseShift, setPhaseShift }) => {

  const amplitude = 15;
  const frequency = 0.05;
  const width = 500;
  const height = 35;
  const offset = height / 2;
  
  // Wave 1: Fixed
  const wave1Points = Array.from({ length: width }, (_, x) => {
    return `${x === 0 ? 'M' : 'L'} ${x} ${offset + amplitude * Math.sin(x * frequency)}`;
  }).join(' ');

  // Wave 2: Phase Shifted
  const wave2Points = Array.from({ length: width }, (_, x) => {
    return `${x === 0 ? 'M' : 'L'} ${x} ${offset + amplitude * Math.sin(x * frequency + phaseShift)}`;
  }).join(' ');

  // Wave 3 (Sum)
  const sumPoints = Array.from({ length: width }, (_, x) => {
    const y1 = amplitude * Math.sin(x * frequency);
    const y2 = amplitude * Math.sin(x * frequency + phaseShift);
    return `${x === 0 ? 'M' : 'L'} ${x} ${offset + y1 + y2}`;
  }).join(' ');

  // Etkileşim durumu
  let statusColor = 'var(--accent-yellow)';
  let statusText = 'Kısmi Girişim';
  
  if (phaseShift < 0.2) {
    statusColor = '#10b981'; // Green
    statusText = 'Yapıcı Girişim (Genlik İkiye Katlandı)';
  } else if (phaseShift > Math.PI - 0.2) {
    statusColor = '#ef4444'; // Red
    statusText = 'Yıkıcı Girişim (Dalgalar Birbirini Yok Etti)';
  }

  return (
    <div className="glass" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0.8rem' }}>
      
      {/* Kontroller */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(0,0,0,0.3)', padding: '0.8rem', borderRadius: '8px' }}>
        <div style={{ flex: '1' }}>
          <label style={{ display: 'block', color: 'var(--primary)', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            Faz Farkı (Phase Shift): {(phaseShift / Math.PI).toFixed(2)}π
          </label>
          <input 
            type="range" 
            min="0" max={Math.PI} step="0.01" 
            value={phaseShift} 
            onChange={(e) => setPhaseShift(parseFloat(e.target.value))} 
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ flex: '1', textAlign: 'center' }}>
          <div style={{ fontSize: '1.2rem', color: statusColor, fontWeight: 'bold' }}>{statusText}</div>
        </div>
      </div>

      {/* Dalga 1 ve Dalga 2 Yanyana */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ margin: '0 0 1rem 0', color: 'var(--text-muted)' }}>1. Olasılık Dalğası (Sabit Faz)</h4>
          <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
            <line x1="0" y1={offset} x2={width} y2={offset} stroke="rgba(255,255,255,0.2)" strokeDasharray="4 4" />
            <path d={wave1Points} fill="none" stroke="var(--primary)" strokeWidth="3" />
          </svg>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ margin: '0 0 1rem 0', color: 'var(--text-muted)' }}>2. Olasılık Dalğası (Değişken Faz)</h4>
          <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
            <line x1="0" y1={offset} x2={width} y2={offset} stroke="rgba(255,255,255,0.2)" strokeDasharray="4 4" />
            <path d={wave2Points} fill="none" stroke="var(--accent-yellow)" strokeWidth="3" />
          </svg>
        </div>
      </div>

      {/* Toplam Dalga (Girişim) */}
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <svg width="100%" height={height * 1.5} viewBox={`0 0 ${width} ${height * 1.5}`} style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', border: `2px solid ${statusColor}` }}>
          <line x1="0" y1={height * 0.75} x2={width} y2={height * 0.75} stroke="rgba(255,255,255,0.2)" strokeDasharray="4 4" />
          <motion.path 
            d={sumPoints} 
            fill="none" 
            stroke={statusColor} 
            strokeWidth="4" 
            animate={{ d: sumPoints }}
            transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
          />
        </svg>
      </div>

    </div>
  );
};

export default WaveInterference;

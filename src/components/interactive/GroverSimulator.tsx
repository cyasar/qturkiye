import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './GroverSimulator.css';

const GroverSimulator: React.FC = () => {
  const N = 8;
  const initialAmp = 1 / Math.sqrt(N);
  const targetIndex = 5; // |101> is index 5
  
  // 0: Init, 1: Superposition, 2: Oracle, 3: Diffusion, 4: Measured
  const [step, setStep] = useState(0);
  const [amplitudes, setAmplitudes] = useState<number[]>(Array(N).fill(0).map((_, i) => i === 0 ? 1 : 0));
  const [message, setMessage] = useState("Durum: Başlangıç |000> durumu.");

  const applySuperposition = () => {
    setAmplitudes(Array(N).fill(initialAmp));
    setStep(1);
    setMessage("Durum: Süperpozisyon oluşturuldu (Hadamard kapıları uygulandı). Tüm durumlar eşit genliğe sahip.");
  };

  const applyOracle = () => {
    const newAmps = [...amplitudes];
    newAmps[targetIndex] = -newAmps[targetIndex]; // Phase inversion
    setAmplitudes(newAmps);
    setStep(2);
    setMessage("Durum: Oracle uygulandı. Hedef durumun (|101>) fazı tersine çevrildi (negatif genlik).");
  };

  const applyDiffusion = () => {
    // Calculate mean
    const mean = amplitudes.reduce((a, b) => a + b, 0) / N;
    // Invert about mean: 2*mean - x
    const newAmps = amplitudes.map(amp => 2 * mean - amp);
    setAmplitudes(newAmps);
    setStep(3);
    setMessage("Durum: Difüzyon (Grover operatörü) uygulandı. Negatif genlikli hedef durum büyütüldü, diğerleri küçüldü.");
  };

  const applyMeasurement = () => {
    // Simple deterministic measurement for demo (prob = |amp|^2)
    // Actually we just show the state collapses to target for pedagogical reasons
    const newAmps = Array(N).fill(0);
    newAmps[targetIndex] = 1;
    setAmplitudes(newAmps);
    setStep(4);
    setMessage("Durum: Ölçüm yapıldı. Yüksek olasılıklı hedef durum %100 kesinlikle elde edildi.");
  };

  const reset = () => {
    setAmplitudes(Array(N).fill(0).map((_, i) => i === 0 ? 1 : 0));
    setStep(0);
    setMessage("Durum: Başlangıç |000> durumu.");
  };

  const getStateName = (index: number) => {
    return `|${index.toString(2).padStart(3, '0')}>`;
  };

  return (
    <div className="grover-container glass">
      <div className="grover-bars">
        {amplitudes.map((amp, idx) => {
          const height = Math.abs(amp) * 150; // max height scale
          const isNegative = amp < 0;
          return (
            <div key={idx} className="bar-wrapper">
              <div className="bar-container">
                {/* Positive area */}
                <div className="bar-half positive">
                  {!isNegative && (
                    <motion.div 
                      className="bar-fill pos-fill" 
                      animate={{ height: height }} 
                      transition={{ duration: 0.5 }}
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
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </div>
              </div>
              <div className="bar-label" style={{ color: idx === targetIndex ? 'var(--accent-pink)' : 'var(--text-muted)' }}>
                {getStateName(idx)}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="grover-message">
        {message}
      </div>

      <div className="grover-controls">
        <button onClick={applySuperposition} disabled={step !== 0}>1. Süperpozisyon</button>
        <button onClick={applyOracle} disabled={step !== 1}>2. Oracle Uygula</button>
        <button onClick={applyDiffusion} disabled={step !== 2}>3. Difüzyon Uygula</button>
        <button onClick={applyMeasurement} disabled={step !== 3}>4. Ölçüm Yap</button>
        <button onClick={reset} className="reset-btn">Başa Dön</button>
      </div>
    </div>
  );
};

export default GroverSimulator;

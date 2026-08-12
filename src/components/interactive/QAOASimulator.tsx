import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, Cpu, Activity } from 'lucide-react';
import './QAOASimulator.css';

const QAOASimulator: React.FC = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [iteration, setIteration] = useState(0);
  const [history, setHistory] = useState<{ iter: number; cost: number; gamma: number; beta: number }[]>([]);
  
  // Optimizasyon parametreleri
  const [gamma, setGamma] = useState(0.1);
  const [beta, setBeta] = useState(0.1);
  const [currentCost, setCurrentCost] = useState(0);

  const maxIterations = 30;

  // Mock optimization logic
  useEffect(() => {
    let timer: number;
    if (isOptimizing && iteration < maxIterations) {
      timer = window.setTimeout(() => {
        setIteration(prev => prev + 1);
        
        // Simüle edilmiş Gradient Descent
        // Hedef Cost: -12 (Örnek minimum enerji)
        const targetCost = -12;
        const progress = iteration / maxIterations;
        
        // Cost giderek azalır (salınımlı bir şekilde)
        const newCost = 5 - (17 * progress) + (Math.sin(iteration) * (1 - progress) * 3);
        
        // Parametreler güncellenir
        const newGamma = gamma + 0.05 * Math.random();
        const newBeta = beta * 0.95 + 0.02 * Math.random();

        setCurrentCost(newCost);
        setGamma(newGamma);
        setBeta(newBeta);
        
        setHistory(prev => [...prev, { iter: iteration, cost: newCost, gamma: newGamma, beta: newBeta }]);
        
      }, 150);
    } else if (iteration >= maxIterations) {
      setIsOptimizing(false);
    }
    return () => clearTimeout(timer);
  }, [isOptimizing, iteration, gamma, beta]);

  const startOptimization = () => {
    setIteration(0);
    setHistory([]);
    setGamma(0.1);
    setBeta(0.1);
    setCurrentCost(5);
    setIsOptimizing(true);
  };

  // 16 olası durum (0000'dan 1111'e)
  // Optimal durum "1010" (Projeler 0 ve 2 seçildi -> Maliyet 3+4=7, Fayda 5+4=9)
  const generateProbabilities = () => {
    const probs = [];
    for (let i = 0; i < 16; i++) {
      const bin = i.toString(2).padStart(4, '0');
      let prob = 1 / 16; // Başlangıçta eşit
      
      if (iteration > 0) {
        // Optimizasyon ilerledikçe 1010'un olasılığı artar
        const progress = iteration / maxIterations;
        if (bin === '1010') {
          prob = (1 / 16) + (0.7 * progress); // Max %76'ya çıkar
        } else if (bin === '1000' || bin === '0010') {
          prob = (1 / 16) + (0.05 * progress); // Sub-optimal çözümler biraz artar
        } else {
          // Diğerleri düşer
          prob = Math.max(0.01, (1 / 16) - (0.05 * progress));
        }
      }
      probs.push({ bin, prob });
    }
    
    // Normalize (toplam 1 olsun diye, basitçe)
    const total = probs.reduce((sum, p) => sum + p.prob, 0);
    return probs.map(p => ({ ...p, prob: p.prob / total }));
  };

  const probabilities = generateProbabilities();

  return (
    <div className="qaoa-sim-container">
      
      {/* Üst Panel: Kontroller ve Grafik */}
      <div className="qaoa-sim-top">
        
        {/* Kontrol Paneli */}
        <div className="sim-control-panel glass">
          <h4 style={{ color: 'var(--primary)', margin: '0 0 1rem 0' }}>CPU-QPU Hibrit Optimizatör</h4>
          
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '8px', marginBottom: '1rem', borderLeft: '3px solid var(--accent-yellow)', fontSize: '0.85rem' }}>
            <div style={{ color: 'var(--accent-yellow)', fontWeight: 'bold', marginBottom: '0.3rem' }}>Test Edilen QUBO Problemi:</div>
            <div style={{ color: '#e2e8f0', marginBottom: '0.3rem' }}>Projeler: P0(Maliyet:3, Fayda:5), P1(M:2, F:3), P2(M:4, F:4), P3(M:1, F:2) | <strong>Bütçe: 7</strong></div>
            <div style={{ color: 'var(--accent-green)' }}><strong>Hedef Çözüm (1010):</strong> P0 ve P2 seçilirse; Maliyet = 3+4 = 7 (Bütçeye tam uygun), Fayda = 5+4 = 9 (Maksimum fayda).</div>
          </div>

          <div className="metrics-grid">
            <div className="metric-box">
              <span className="label">İterasyon</span>
              <span className="value">{iteration} / {maxIterations}</span>
            </div>
            <div className="metric-box">
              <span className="label">Beklenen Enerji (Cost)</span>
              <span className="value highlight">{currentCost.toFixed(2)}</span>
            </div>
            <div className="metric-box">
              <span className="label">Cost Açısı (γ)</span>
              <span className="value">{gamma.toFixed(3)}</span>
            </div>
            <div className="metric-box">
              <span className="label">Mixer Açısı (β)</span>
              <span className="value">{beta.toFixed(3)}</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <button 
              className={`sim-btn primary ${isOptimizing ? 'disabled' : ''}`}
              onClick={startOptimization}
              disabled={isOptimizing}
            >
              {iteration === 0 ? <><Play size={18} /> Optimizasyonu Başlat</> : <><RotateCcw size={18} /> Yeniden Başlat</>}
            </button>
          </div>
          
          <div style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <strong>Bilgi:</strong> Klasik bilgisayar her iterasyonda enerjiyi (cost) ölçer ve bir sonraki tur için γ, β açılarını günceller. Amacımız grafiği dibe (minimum enerjiye) indirmektir.
          </div>
        </div>

        {/* Canlı Grafik */}
        <div className="sim-chart-panel glass">
          <h4 style={{ margin: '0 0 1rem 0', color: 'var(--text-muted)', textAlign: 'center' }}>Enerji Düşüş Grafiği (Cost Minimization)</h4>
          <div className="line-chart-area">
            {history.map((point, i) => {
              const x = (i / maxIterations) * 100;
              const y = ((point.cost + 15) / 25) * 100; // -15 to +10 range normalized
              return (
                <motion.div
                  key={i}
                  className="chart-point"
                  style={{ left: `${x}%`, bottom: `${y}%` }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                />
              );
            })}
            {/* Çizgi bağlantıları (Basit SVG) */}
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
              <polyline
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2"
                points={history.map((p, i) => {
                  const x = (i / maxIterations) * 100;
                  const y = 100 - (((p.cost + 15) / 25) * 100);
                  return `${x}%,${y}%`;
                }).join(' ')}
              />
            </svg>
          </div>
        </div>

      </div>

      {/* Alt Panel: Olasılık Dağılımı */}
      <div className="qaoa-sim-bottom glass">
        <h4 style={{ textAlign: 'center', margin: '0 0 1rem 0', color: 'var(--accent-green)' }}>Kuantum Devresi Çıkışı (Ölçüm Olasılıkları)</h4>
        <div className="prob-chart">
          {probabilities.map((item, i) => (
            <div key={i} className="prob-bar-container">
              <span className="prob-value">{(item.prob * 100).toFixed(0)}%</span>
              <div className="prob-bar-track">
                <motion.div 
                  className={`prob-bar-fill ${item.bin === '1010' ? 'optimal' : ''}`}
                  animate={{ height: `${item.prob * 100}%` }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                />
              </div>
              <span className={`prob-label ${item.bin === '1010' ? 'optimal-text' : ''}`}>{item.bin}</span>
            </div>
          ))}
        </div>
        {iteration === maxIterations && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--accent-green)', fontWeight: 'bold' }}
          >
            Mükemmel! Algoritma 1010 (Proje 0 ve Proje 2) durumunun olasılığını %70'in üzerine çıkararak optimum çözümü buldu.
          </motion.div>
        )}
      </div>

    </div>
  );
};

export default QAOASimulator;

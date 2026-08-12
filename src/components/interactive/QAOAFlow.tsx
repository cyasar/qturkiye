import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, RefreshCw, Activity, ArrowRight, ArrowLeft } from 'lucide-react';
import './QAOAFlow.css';

const QAOAFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    { name: 'Başlangıç Durumu', icon: <Activity />, desc: 'Tüm olası durumların eşit süperpozisyonu.' },
    { name: 'Kuantum Devresi (P parametreli)', icon: <Cpu />, desc: 'Cost (γ) ve Mixer (β) Hamiltonian uygulanır.' },
    { name: 'Ölçüm', icon: <ArrowRight />, desc: 'Kuantum durumu klasik bite çöker. Beklenen değer hesaplanır.' },
    { name: 'Klasik Optimizasyon', icon: <RefreshCw />, desc: 'Klasik bilgisayar yeni γ ve β parametrelerini hesaplar.' },
  ];

  return (
    <div className="qaoa-flow-container glass-panel">
      <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary)' }}>QAOA: Hibrit Kuantum-Klasik Döngü</h3>
      
      <div className="qaoa-grid">
        {/* Kuantum Tarafı */}
        <div className="qaoa-side kuantum-side">
          <h4 className="side-title">KUANTUM İŞLEMCİ (QPU)</h4>
          <div className={`flow-node ${activeStep === 0 ? 'active' : ''}`}>
            {steps[0].icon}
            <div>
              <strong>{steps[0].name}</strong>
              <p>{steps[0].desc}</p>
            </div>
          </div>
          <div className="arrow">↓</div>
          <div className={`flow-node ${activeStep === 1 ? 'active' : ''}`}>
            {steps[1].icon}
            <div>
              <strong>{steps[1].name}</strong>
              <p>{steps[1].desc}</p>
            </div>
          </div>
          <div className="arrow">↓</div>
          <div className={`flow-node ${activeStep === 2 ? 'active' : ''}`}>
            {steps[2].icon}
            <div>
              <strong>{steps[2].name}</strong>
              <p>{steps[2].desc}</p>
            </div>
          </div>
        </div>

        {/* Köprü */}
        <div className="qaoa-bridge">
          <div className={`bridge-arrow-right ${activeStep === 2 ? 'active-bridge' : ''}`}>
            Beklenen Değer (Cost)
            <ArrowRight size={32} />
          </div>
          <div className={`bridge-arrow-left ${activeStep === 3 ? 'active-bridge' : ''}`}>
            <ArrowLeft size={32} />
            Yeni Parametreler (γ, β)
          </div>
        </div>

        {/* Klasik Taraf */}
        <div className="qaoa-side klasik-side">
          <h4 className="side-title">KLASİK İŞLEMCİ (CPU)</h4>
          <div className={`flow-node ${activeStep === 3 ? 'active cpu-active' : ''}`} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
            {steps[3].icon}
            <div>
              <strong>{steps[3].name}</strong>
              <p>{steps[3].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QAOAFlow;

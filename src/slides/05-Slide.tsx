import React, { useState } from 'react';
import Slide from '../components/layout/Slide';
import Equation from '../components/ui/Equation';
import MathModelingGraph from '../components/interactive/MathModelingGraph';
import { motion, AnimatePresence } from 'framer-motion';
import { LogIn, Target, ShieldAlert, Cpu, LogOut } from 'lucide-react';

const Slide05: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const problemSteps = [
    { 
      id: 0,
      icon: <LogIn size={24} />, 
      title: "Girdi (Input)", 
      question: "Bu problemde bize baştan hangi veriler veriliyor?",
      answer: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
          <span>A, B ve C alternatif yollarının uzunlukları (km).</span>
          <span>Köprü ve otoyol geçiş ücretleri (TL).</span>
        </div>
      )
    },
    { 
      id: 1,
      icon: <Target size={24} />, 
      title: "Karar Değişkeni", 
      question: "Algoritma neye 'Evet' veya 'Hayır' diyecek?",
      answer: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', width: '100%' }}>
          <div style={{ fontSize: '1.1rem', padding: '0.5rem', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', textAlign: 'center' }}>
            <Equation math="x_A, x_B, x_C \in \{0,1\}" display={false} />
          </div>
        </div>
      )
    },
    { 
      id: 2,
      icon: <Cpu size={24} />, 
      title: "Amaç Fonksiyonu", 
      question: "Neyi minimize etmeye çalışıyoruz?",
      answer: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', width: '100%' }}>
          <div style={{ fontSize: '1.1rem', padding: '0.5rem', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', textAlign: 'center' }}>
            <Equation math="\min \sum (\text{Süre}_i \cdot x_i)" display={false} />
          </div>
        </div>
      )
    },
    { 
      id: 3,
      icon: <ShieldAlert size={24} />, 
      title: "Kısıt (Constraint)", 
      question: "Hangi kuralları çiğneyemeyiz?",
      answer: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '0.5rem', borderRadius: '4px' }}>
            <Equation math="\text{Maliyet} \le 500" display={false} />
          </div>
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '0.5rem', borderRadius: '4px' }}>
            <Equation math="\sum x_i = 1" display={false} />
          </div>
        </div>
      )
    },
    { 
      id: 4,
      icon: <LogOut size={24} />, 
      title: "Çıktı (Output)", 
      question: "Bilgisayarın vereceği nihai sonuç nedir?",
      answer: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
          <div style={{ fontSize: '1.1rem', padding: '0.5rem', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', textAlign: 'center' }}>
            <Equation math="x_A = 1, x_B = 0, x_C = 0" display={false} />
          </div>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center' }}>Optimum Süre: 1.5 saat (A Yolu)</span>
        </div>
      )
    }
  ];

  return (
    <Slide title="Uygulama: Problemi Matematikselleştirmek" notes="Katılımcılardan grafik üzerinde rotaları seçmelerini isteyin ve denklemlerin nasıl değiştiğini gösterin. Sonra kartları açın.">
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1.5rem' }}>
        
        {/* Üst Kısım: İnteraktif Grafik */}
        <MathModelingGraph />

        {/* Alt Kısım: Anatomik Kartlar (Küçültülmüş) */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', marginTop: 'auto', flexWrap: 'nowrap' }}>
          {problemSteps.map((step) => (
            <motion.div 
              key={step.id}
              className="glass"
              style={{ 
                flex: '1',
                padding: '1rem', 
                cursor: 'pointer',
                border: activeStep === step.id ? '1px solid var(--accent-yellow)' : '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                background: activeStep === step.id ? 'rgba(250, 204, 21, 0.05)' : 'var(--bg-surface)'
              }}
              onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: activeStep === step.id ? 'var(--accent-yellow)' : 'var(--primary)' }}>
                {step.icon}
                <h4 style={{ margin: 0, fontSize: '1rem', color: '#fff' }}>{step.title}</h4>
              </div>
              
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, minHeight: '35px' }}>
                {step.question}
              </p>

              <AnimatePresence>
                {activeStep === step.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ 
                      marginTop: '0.5rem', 
                      paddingTop: '0.5rem', 
                      borderTop: '1px dashed rgba(255,255,255,0.2)',
                      color: 'var(--accent-yellow)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}>
                      {step.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
      </div>
    </Slide>
  );
};

export default Slide05;

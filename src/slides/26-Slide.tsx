import React, { useState } from 'react';
import Slide from '../components/layout/Slide';
import { motion, AnimatePresence } from 'framer-motion';
import Equation from '../components/ui/Equation';

const Slide26: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "GERÇEK PROBLEM", detail: "Sınırlı bütçeyle maksimum fayda sağlayacak projeleri seçmek.", math: "Bütçe = 7 Birim" },
    { title: "BINARY DEĞİŞKENLER", detail: "Kuantum bitleri (qubit) sadece 0 ve 1 olabilir. Proje seçilirse 1, seçilmezse 0 deriz.", math: "x_i \\in \\{0, 1\\}" },
    { title: "AMAÇ FONKSİYONU", detail: "Hedefimiz toplam faydayı en üst düzeye çıkarmak (veya maliyeti en aza indirmek).", math: "\\max (5x_0 + 3x_1 + 4x_2 + 2x_3)" },
    { title: "KISITLAR (Constraints)", detail: "Seçilen projelerin toplam maliyeti elimizdeki bütçeyi (7) aşmamalıdır.", math: "3x_0 + 2x_1 + 4x_2 + 1x_3 \\le 7" },
    { title: "CEZA (Penalty)", detail: "Kuantum bilgisayarlar 'kural/kısıt' anlamaz, sadece enerji (cost) anlar. Bütçe aşılırsa devasa bir ceza (P) keserek bu durumu yüksek enerjili (istenmeyen) hale getiririz.", math: "Cost = -Fayda + P \\cdot (Maliyet - Bütçe)^2" },
    { title: "QUBO Formülasyonu", detail: "Yukarıdaki denklemin karesini açıp düzenlediğimizde, sadece tekil değişkenler (lineer) ve ikili çarpımlar (kuadratik) kalır. (Kuantumda x² = x olduğu için dereceler düşer).", math: "\\min \\sum_i c_i x_i + \\sum_{i<j} Q_{ij} x_i x_j" },
    { title: "Ising Hamiltonian", detail: "QUBO'daki 0 ve 1 değerlerini, kuantum spinlerine (+1, -1) dönüştürmek için dönüşüm yaparız.", math: "x_i = \\frac{1 - Z_i}{2}" },
    { title: "QAOA Devresi", detail: "Elde edilen bu Z (Pauli-Z) terimleri, kuantum devresinde doğrudan faz kapıları (Rz ve Rzz) olarak kodlanır.", math: "e^{-i \\gamma Z_i Z_j}" }
  ];

  return (
    <Slide title="Model Dönüşüm Zinciri: Adım Adım QUBO" notes="Problem modellemesinin her adımını katılımcılarla interaktif olarak incele.">
      <div style={{ display: 'flex', gap: '2rem', height: '100%', alignItems: 'center', padding: '1rem 0' }}>
        
        {/* Sol Taraf: Adımlar */}
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              onClick={() => setActiveStep(index)}
              className="glass"
              style={{ 
                padding: '1rem', 
                borderRadius: '8px', 
                cursor: 'pointer',
                borderLeft: activeStep === index ? '4px solid var(--primary)' : '4px solid transparent',
                background: activeStep === index ? 'rgba(59, 130, 246, 0.15)' : 'rgba(255,255,255,0.02)',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: activeStep === index ? 'var(--primary)' : 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                {index + 1}
              </div>
              <span style={{ fontWeight: activeStep === index ? 'bold' : 'normal', color: activeStep === index ? '#fff' : 'var(--text-muted)' }}>
                {step.title}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Sağ Taraf: Detay ve Formül */}
        <div style={{ flex: '1.2', height: '100%' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="glass-panel"
              style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3rem', gap: '2rem' }}
            >
              <h2 style={{ color: 'var(--primary)', margin: 0, fontSize: '2rem' }}>{steps[activeStep].title}</h2>
              
              <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#e2e8f0', margin: 0 }}>
                {steps[activeStep].detail}
              </p>

              <div style={{ background: 'rgba(0,0,0,0.4)', padding: '2rem', borderRadius: '12px', border: '1px dashed var(--accent-yellow)', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '120px' }}>
                <Equation math={steps[activeStep].math} />
              </div>

              {activeStep === 4 && (
                <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', borderRadius: '8px', fontSize: '0.9rem' }}>
                  <strong>Neden Ceza?</strong> Klasik optimizasyonda kısıtlar sadece denklemi sınırlar. Kuantumda ise tüm uzay aynı anda araştırıldığı için, istenmeyen durumlara "yüksek enerji" vererek olasılıklarını düşürmek zorundayız.
                </div>
              )}
              {activeStep === 5 && (
                <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid var(--accent-green)', borderRadius: '8px', fontSize: '0.9rem' }}>
                  <strong>Kuantumun Doğası:</strong> İkili (Binary) değişkenlerde <Equation math="0^2=0" display={false}/> ve <Equation math="1^2=1" display={false}/> olduğu için, <Equation math="x^2 = x" display={false}/> kabul edilir. Bu sayede tüm kübik veya daha yüksek dereceli terimler Quadatik (ikinci derece) forma indirgenebilir.
                </div>
              )}
              {activeStep === 6 && (
                <div style={{ padding: '1rem', background: 'rgba(234, 179, 8, 0.1)', borderLeft: '4px solid var(--accent-yellow)', borderRadius: '8px', fontSize: '0.9rem' }}>
                  <strong>Neden Z Kapısı (Pauli-Z)?</strong> Kuantum mekaniğinde Z matrisi, temel <Equation math="|0\rangle" display={false}/> ve <Equation math="|1\rangle" display={false}/> durumları üzerinde ölçüm yapıldığında sırasıyla <strong>+1 ve -1 özdeğerlerini (eigenvalue)</strong> üretir. Bu özellik, klasik binary matematiğini fiziksel kuantum spinlerine (mıknatıs yönlerine) çevirmek için kusursuz bir köprüdür!
                  <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center', alignItems: 'center', marginTop: '1rem', background: 'rgba(0,0,0,0.3)', padding: '0.5rem', borderRadius: '8px' }}>
                    <Equation math="Z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}" display={false} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <Equation math="Z|0\rangle = +1|0\rangle" display={false} />
                      <Equation math="Z|1\rangle = -1|1\rangle" display={false} />
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </Slide>
  );
};

export default Slide26;

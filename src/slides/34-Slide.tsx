import React, { useState } from 'react';
import Slide from '../components/layout/Slide';
import { motion } from 'framer-motion';
import Equation from '../components/ui/Equation';

const Slide34: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. Problemin Graf (Ağ) Olarak Çizilmesi",
      text: "Her 'uyumlu çapraz takas ihtimali' (ister 2'li ister 3'lü zincir olsun) bir 'Düğüm' (Node) olarak çizilir. Eğer iki farklı takas ihtimali aynı hastayı içeriyorsa (yani aynı anda yapılamazlarsa), aralarına bir 'Kenar' (Çizgi) çekilir.",
      math: "V = \\{Takaslar\\}, \\quad E = \\{Çakışan Takaslar\\}"
    },
    {
      title: "2. Binary (İkili) Değişkenler",
      text: "Kuantum bilgisayara sormamız gereken soru şudur: Hangi takasları gerçekleştirelim? Gerçekleşen takasa 1, gerçekleşmeyene 0 diyoruz.",
      math: "x_i \\in \\{0, 1\\}"
    },
    {
      title: "3. Amaç Fonksiyonu (Max Kurtarılan Hayat)",
      text: "Amacımız olabildiğince çok takası gerçekleştirmek (yani olabildiğince çok hayat kurtarmak). Eğer her takas farklı sayıda hastayı kapsıyorsa (w_i), amacımız bu ağırlıkları maksimize etmektir.",
      math: "\\max \\sum_i w_i x_i"
    },
    {
      title: "4. Kısıtlar (Penalty - Ceza)",
      text: "Bir hasta aynı anda iki farklı ameliyata giremez! Eğer iki takas birbiriyle çakışıyorsa (aralarında çizgi varsa), her ikisini birden (1 ve 1) seçmemeliyiz. Seçersek devasa bir Ceza (P) uygularız.",
      math: "Cost = - \\sum_i w_i x_i + P \\sum_{(i,j) \\in E} x_i x_j"
    },
    {
      title: "5. QUBO'dan QAOA'ya Çözüm",
      text: "İşte Kusursuz QUBO! Bu denklemdeki x_i x_j çarpımları sayesinde problem tam bir Kuantum Ising modeline dönüşür. QAOA (Hibrit kuantum) algoritması bu enerji denklemini minimize ederek bize en çok hayatı kurtaran takas listesini verir.",
      math: "H_C = \\sum_i h_i Z_i + \\sum_{i<j} J_{ij} Z_i Z_j"
    }
  ];

  return (
    <Slide title="Böbrek Nakli: QUBO Modellemesi" notes="Problemin kuantum diline nasıl çevrildiğini adım adım anlat. (Maximum Weight Independent Set problemi)">
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Bu devasa hayat kurtarma problemini (Graf Teorisinde <em>Maximum Weight Independent Set</em> problemi olarak bilinir) QAOA algoritmasına nasıl öğretiriz?
        </p>

        <div style={{ display: 'flex', gap: '2rem', flex: 1, overflow: 'hidden' }}>
          
          {/* Sol Taraf: Adımlar */}
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '0.8rem', overflowY: 'auto', paddingRight: '1rem' }}>
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                onClick={() => setActiveStep(index)}
                className="glass"
                style={{ 
                  padding: '1rem', 
                  borderRadius: '8px', 
                  cursor: 'pointer',
                  borderLeft: activeStep === index ? '4px solid var(--accent-pink)' : '4px solid transparent',
                  background: activeStep === index ? 'rgba(236, 72, 153, 0.15)' : 'rgba(255,255,255,0.02)',
                  opacity: index > activeStep + 1 ? 0.4 : 1, // Henüz gelinmemiş adımları soluklaştır
                  pointerEvents: index > activeStep + 1 ? 'none' : 'auto',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ fontWeight: 'bold', color: activeStep === index ? '#fff' : 'var(--text-muted)' }}>
                  {step.title}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sağ Taraf: Matematiksel Detay */}
          <div style={{ flex: '1.2', display: 'flex', flexDirection: 'column' }}>
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-panel"
              style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3rem', gap: '2rem' }}
            >
              <h3 style={{ color: 'var(--accent-pink)', margin: 0, fontSize: '1.8rem' }}>
                {steps[activeStep].title}
              </h3>
              
              <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#e2e8f0', margin: 0 }}>
                {steps[activeStep].text}
              </p>

              <div style={{ background: 'rgba(0,0,0,0.5)', padding: '2rem', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '150px' }}>
                <Equation math={steps[activeStep].math} />
              </div>

              {activeStep < steps.length - 1 && (
                <button 
                  onClick={() => setActiveStep(prev => prev + 1)}
                  style={{ alignSelf: 'flex-start', padding: '0.8rem 1.5rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  Sonraki Modelleme Adımı ➔
                </button>
              )}

            </motion.div>
          </div>

        </div>
      </div>
    </Slide>
  );
};

export default Slide34;

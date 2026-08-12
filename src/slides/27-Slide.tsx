import React, { useState } from 'react';
import Slide from '../components/layout/Slide';
import { motion, AnimatePresence } from 'framer-motion';
import Equation from '../components/ui/Equation';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Slide27: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. Temel Denklem",
      desc: "Problemimizin toplam enerji (Cost) denklemini yazarak başlıyoruz. Amaç bu enerjiyi en aza indirmek.",
      math: "Cost = -Fayda + P \\cdot (Maliyet - B\\ddot{u}t\\c{c}e)^2",
      note: "P (Penalty) bütçe aşıldığında uygulanacak büyük bir cezadır."
    },
    {
      title: "2. Değişkenlerin Yerleştirilmesi",
      desc: "Önceki slaytta belirlediğimiz ağırlıkları ve kısıtları denkleme yerleştiriyoruz.",
      math: "Cost = -(5x_0 + 3x_1 + 4x_2 + 2x_3) + P \\cdot (3x_0 + 2x_1 + 4x_2 + x_3 - 7)^2",
      note: "Eğer parantez içi 0 olursa (maliyet tam bütçeye eşitse), ceza sıfırlanır."
    },
    {
      title: "3. Karesini Açma (Genişletme)",
      desc: "İşte işlerin karmaşıklaştığı (ama kuantumun çözdüğü) yer! Kısıt parantezinin karesini cebirsel olarak açıyoruz.",
      math: "\\dots + P \\cdot (9x_0^2 + 4x_1^2 + 16x_2^2 + x_3^2 + 12x_0 x_1 + 24x_0 x_2 + \\dots - 42x_0 \\dots)",
      note: "Fark ettiyseniz x_0^2 gibi kareli terimler ve x_0 x_1 gibi çapraz çarpımlar ortaya çıktı."
    },
    {
      title: "4. Kuantum Büyüsü (x² = x)",
      desc: "Binary (0 veya 1) sistemlerde mucizevi bir sadeleşme olur. 0²=0 ve 1²=1 olduğu için x² her zaman x'e eşittir! Tüm kareleri silebiliriz.",
      math: "\\Rightarrow 9x_0^2 \\rightarrow 9x_0 \\quad \\text{ve} \\quad 4x_1^2 \\rightarrow 4x_1",
      note: "Bu sayede 3. ve 4. dereceden karmaşık terimlerden kurtuluruz. Denklem tamamen İkinci Dereceden (Quadratic) hale gelir."
    },
    {
      title: "5. Nihai QUBO Matrisi",
      desc: "Benzer terimleri (örneğin tüm tekli x_0'ları) kendi arasında topladığımızda efsanevi QUBO formatı ortaya çıkar.",
      math: "Cost = \\sum_i c_i x_i + \\sum_{i<j} Q_{ij} x_i x_j",
      note: "Buradaki Q_{ij} (örneğin 12x_0x_1) katsayıları, projelerin birlikte seçilip seçilmemesi arasındaki 'etkileşimi' belirler."
    }
  ];

  return (
    <Slide title="Matematiğin Derinlikleri: QUBO Genişletmesi" notes="QUBO'daki Quadratic (ikinci derece) terimlerin kısıtların karesinden geldiğini vurgula.">
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem', paddingBottom: '1rem' }}>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '1.1rem', margin: '0 0 1rem 0' }}>
          Bir önceki slayttaki ceza (penalty) formülünün nasıl kırılarak kuantum donanımına yüklenecek matrislere dönüştüğünü adım adım görelim.
        </p>

        <div style={{ display: 'flex', gap: '2rem', flex: 1, overflow: 'hidden' }}>
          
          {/* Sol Taraf: Adım Kontrolü */}
          <div style={{ flex: '0.8', display: 'flex', flexDirection: 'column', gap: '0.5rem', overflowY: 'auto', paddingRight: '1rem' }}>
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                onClick={() => setActiveStep(index)}
                className="glass"
                style={{ 
                  padding: '1rem', 
                  borderRadius: '8px', 
                  cursor: 'pointer',
                  borderLeft: activeStep === index ? '4px solid var(--accent-yellow)' : '4px solid transparent',
                  background: activeStep === index ? 'rgba(234, 179, 8, 0.15)' : 'rgba(255,255,255,0.02)',
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

            {activeStep < steps.length - 1 && (
              <motion.button 
                onClick={() => setActiveStep(prev => prev + 1)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  background: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                Sonraki Adımı Göster <ChevronDown size={20} />
              </motion.button>
            )}
          </div>

          {/* Sağ Taraf: Matematiksel Detay */}
          <div style={{ flex: '1.2', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-panel"
                style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3rem', gap: '2rem' }}
              >
                <h3 style={{ color: 'var(--accent-yellow)', margin: 0, fontSize: '1.8rem' }}>
                  {steps[activeStep].title}
                </h3>
                
                <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#e2e8f0', margin: 0 }}>
                  {steps[activeStep].desc}
                </p>

                <div style={{ background: 'rgba(0,0,0,0.5)', padding: '2rem', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '150px' }}>
                  <Equation math={steps[activeStep].math} />
                </div>

                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderLeft: '4px solid var(--text-muted)', borderRadius: '8px', fontSize: '1rem', color: 'var(--text-muted)' }}>
                  💡 <strong>Not:</strong> {steps[activeStep].note}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </Slide>
  );
};

export default Slide27;

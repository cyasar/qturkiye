import React, { useState } from 'react';
import Slide from '../components/layout/Slide';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartPulse, UserPlus, RefreshCw } from 'lucide-react';

const Slide33: React.FC = () => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Klasik Bir Trajedi",
      desc: "Ali'nin böbreğe ihtiyacı var. Eşi Ayşe böbreğini vermek istiyor ancak kan grupları (veya doku) uyuşmuyor. Mehmet'in de böbreğe ihtiyacı var, kardeşi Can vermek istiyor ama onlar da uyuşmuyor.",
      icon: <UserPlus size={40} color="var(--accent-pink)" />
    },
    {
      title: "Çapraz Eşleşme (Çözüm)",
      desc: "Hastanenin veritabanına bakılıyor: Ayşe'nin böbreği Mehmet'e mükemmel uyuyor. Can'ın böbreği ise Ali'ye tam uyuyor! İki aile kendi aralarında böbrekleri çapraz değiştirerek 2 hayat kurtarabilir.",
      icon: <RefreshCw size={40} color="var(--accent-yellow)" />
    },
    {
      title: "Gerçek Dünyada Sorun Nerede?",
      desc: "Gerçekte Türkiye'de binlerce böyle hasta-donör çifti var. Bazen 3'lü, bazen 4'lü zincirler kurmak gerekir. Sistemdeki yüzlerce çiftten birbirine uyan EN FAZLA sayıda hayat kurtaracak zincirleri bulmak Devasa bir kombinasyon (Graph) problemidir.",
      icon: <HeartPulse size={40} color="var(--accent-green)" />
    }
  ];

  return (
    <Slide title="Bölüm 8: Çapraz Böbrek Nakli Problemi" notes="Gerçek dünyadan çok vurucu bir örnek. Seyircilerin hislerine hitap et, sonra matematiğine geç.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%' }}>
        
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
          Şimdi soyut problemleri bırakıp, kuantum bilgisayarların ileride <strong>doğrudan insan hayatını</strong> nasıl kurtarabileceğine bakalım.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', flex: 1, alignItems: 'center' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {steps.map((s, idx) => (
              <motion.div 
                key={idx}
                className="glass"
                style={{ 
                  padding: '1.5rem', 
                  borderRadius: '12px',
                  borderLeft: idx === step ? '4px solid var(--primary)' : '4px solid transparent',
                  opacity: idx <= step ? 1 : 0.3,
                  cursor: 'pointer',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'center'
                }}
                onClick={() => setStep(idx)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: idx <= step ? 1 : 0.3 }}
                transition={{ delay: idx * 0.2 }}
              >
                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}>
                  {s.icon}
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: idx === step ? '#fff' : 'var(--text-muted)' }}>{s.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}

            {step < 2 && (
              <button 
                onClick={() => setStep(prev => prev + 1)}
                style={{ marginTop: '1rem', padding: '1rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Sonraki Adım
              </button>
            )}
          </div>

          <div style={{ position: 'relative', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.img 
                  key="step0"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Kidney_exchange_2-way.svg/512px-Kidney_exchange_2-way.svg.png" 
                  alt="2 Way Exchange" 
                  style={{ maxWidth: '80%', filter: 'invert(1) hue-rotate(180deg)' }} // Basit görsel efekti karanlık temaya uyması için
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🧬</div>
                  <h3 style={{ color: 'var(--accent-yellow)' }}>2 Hayat Kurtarıldı</h3>
                </motion.div>
              )}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                  <h2 style={{ color: 'var(--accent-pink)' }}>NP-Hard Problem</h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                    Sistemdeki hasta sayısı arttıkça, olası kombinasyonlar <strong>üstel (eksponansiyel)</strong> olarak artar. Klasik süper bilgisayarlar bile binlerce hasta arasındaki "en fazla hayatı kurtaracak" o ideal zincir kombinasyonunu bulmakta zorlanır.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </Slide>
  );
};

export default Slide33;

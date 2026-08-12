import React from 'react';
import Slide from '../components/layout/Slide';
import { motion } from 'framer-motion';
import { LogIn, Target, ShieldAlert, Cpu, LogOut } from 'lucide-react';

const Slide04: React.FC = () => {
  const steps = [
    { icon: <LogIn size={32} />, title: "Girdi (Input)", desc: "Elimizdeki veriler (Şehirler, yollar, mesafeler)" },
    { icon: <Target size={32} />, title: "Karar Değişkeni", desc: "Seçeceğimiz yol (x = 1 ise yoldan geç, x = 0 ise geçme)" },
    { icon: <Cpu size={32} />, title: "Amaç Fonksiyonu", desc: "Minimize veya maksimize edilecek değer (min: Toplam Süre)" },
    { icon: <ShieldAlert size={32} />, title: "Kısıt (Constraint)", desc: "İhlal edilmemesi gereken kurallar (Maliyet < 1000 TL)" },
    { icon: <LogOut size={32} />, title: "Çıktı (Output)", desc: "Optimum çözüm" },
  ];

  return (
    <Slide title="Bir Problemin Anatomisi" notes="Bu 5 kavram seminer boyunca kullanılacak. Kuantum algoritmaları en çok Amaç Fonksiyonu ve Kısıtlar üzerinde oynar.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
        <p>Hangi algoritmayı kullanacağımızı seçmeden önce, problemi yapı taşlarına ayırmalıyız:</p>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="glass"
              style={{ padding: '1.5rem', flex: '1 1 18%', minWidth: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div style={{ color: 'var(--primary)' }}>{step.icon}</div>
              <h4 style={{ margin: 0, color: 'var(--accent-yellow)' }}>{step.title}</h4>
              <p style={{ fontSize: '1rem' }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{ marginTop: '3rem', textAlign: 'center' }}
        >
          <h2 style={{ color: 'var(--accent-pink)' }}>PROBLEM ≠ ALGORİTMA ≠ PROGRAM</h2>
          <p style={{ marginTop: '1rem' }}>Bir problemi matematiksel modele dönüştürmeden algoritma seçmek <strong>yanlıştır.</strong></p>
        </motion.div>
      </div>
    </Slide>
  );
};

export default Slide04;

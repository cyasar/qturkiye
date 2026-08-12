import React from 'react';
import Slide from '../components/layout/Slide';
import { motion } from 'framer-motion';

const Slide08: React.FC = () => {
  return (
    <Slide title="Asıl Sihir: Girişim (Interference)" notes="Kuantum hesaplamanın sadece 'paralel evrenlerde her şeyi aynı anda denemek' olmadığını anlat. Asıl sihir, istenmeyen cevapları iptal etmektir.">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '3rem' }}>
        
        <div className="glass" style={{ padding: '3rem', textAlign: 'center', maxWidth: '1000px' }}>
          <h2 style={{ fontSize: '2.5rem', lineHeight: 1.4 }}>
            Kuantum algoritmalarındaki asıl sihir <br/>
            <span style={{ color: 'var(--text-muted)', fontSize: '2rem' }}>çok sayıda cevabı aynı anda hesaplamak değildir.</span>
          </h2>
          
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            style={{ color: 'var(--accent-pink)', marginTop: '2rem', fontSize: '3.5rem' }}
          >
            İSTENMEYEN CEVAPLARI BİRBİRİYLE SÖNDÜRMEKTİR.
          </motion.h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', width: '100%', maxWidth: '900px' }}>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ color: 'var(--accent-green)', marginBottom: '1rem' }}>Yapıcı Girişim</h3>
            <p>Aynı fazdaki dalgalar birbirini güçlendirir.</p>
            <div style={{ height: '60px', marginTop: '1rem', background: 'linear-gradient(90deg, transparent, var(--accent-green), transparent)', opacity: 0.5, borderRadius: '30px' }} />
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ color: 'var(--accent-pink)', marginBottom: '1rem' }}>Yıkıcı Girişim</h3>
            <p>Zıt fazdaki (negatif genlikli) dalgalar birbirini söndürür.</p>
            <div style={{ height: '60px', marginTop: '1rem', background: 'linear-gradient(90deg, var(--accent-pink), transparent, var(--accent-pink))', opacity: 0.3, borderRadius: '30px' }} />
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide08;

import React from 'react';
import Slide from '../components/layout/Slide';
import { motion } from 'framer-motion';

const Slide35: React.FC = () => {
  return (
    <Slide className="text-center" notes="Kapanış slaytı. Teşekkür et ve en büyük soruyu bırak.">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '4rem', textAlign: 'center' }}>
        
        <h2 style={{ color: 'var(--text-muted)' }}>Her zor problem kuantum problemi değildir.</h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{ padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
        >
          <h1 style={{ fontSize: '2.5rem', lineHeight: 1.4 }}>
            AMA DOĞRU PROBLEMİ <br/>
            DOĞRU ŞEKİLDE MODELLERSENİZ,<br/>
            <span style={{ color: 'var(--primary)' }}>KUANTUM HESAPLAMA BAMBAŞKA BİR</span><br/>
            <span style={{ color: 'var(--primary)' }}>ALGORİTMİK DÜŞÜNME BİÇİMİ SUNAR.</span>
          </h1>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
          style={{ color: 'var(--accent-pink)', fontSize: '3.5rem' }}
        >
          SİZ HANGİ PROBLEMİ <br/>KUANTUMLAŞTIRMAK İSTERSİNİZ?
        </motion.h2>

      </div>
    </Slide>
  );
};

export default Slide35;

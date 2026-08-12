import React from 'react';
import Slide from '../components/layout/Slide';
import { motion } from 'framer-motion';

const Slide02: React.FC = () => {
  return (
    <Slide notes="Etkileyici giriş sorusu. Hemen cevaplama, izleyicinin düşünmesine izin ver.">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '4rem', textAlign: 'center' }}>
        
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: '5rem', lineHeight: 1.2 }}
        >
          BİR PROBLEMİ <br/>
          <span className="text-gradient">KUANTUM BİLGİSAYARA</span> <br/>
          NASIL ANLATIRIZ?
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <h3 style={{ color: 'var(--text-muted)' }}>Bugün size kuantum algoritmalarını ezberletmeyeceğim.</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <h2 style={{ color: 'var(--accent-yellow)', fontSize: '2.5rem' }}>
            Bir problemi kuantumlaştırmayı birlikte deneyeceğiz.
          </h2>
        </motion.div>
      </div>
    </Slide>
  );
};

export default Slide02;

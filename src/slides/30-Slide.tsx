import React from 'react';
import Slide from '../components/layout/Slide';
import { motion } from 'framer-motion';

const Slide30: React.FC = () => {
  return (
    <Slide title="Bölüm 7: Kuantum Makine Öğrenmesi (QML)" notes="Klasik makine öğrenmesi ile farkını anlat. Veriyi kuantumlaştırmak en büyük zorluktur.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', justifyContent: 'center' }}>
        
        <p style={{ fontSize: '1.3rem', textAlign: 'center', margin: '0 auto', maxWidth: '900px', color: 'var(--text-muted)' }}>
          Kuantum bilgisayarların, günümüzün en sıcak konusu olan <strong>Yapay Zeka (AI) ve Makine Öğrenmesi</strong> alanına getirdiği devrimsel yaklaşıma hoş geldiniz.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
          
          <motion.div 
            className="glass" 
            style={{ padding: '2rem', borderRadius: '12px', borderLeft: '4px solid var(--accent-pink)' }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 style={{ color: 'var(--accent-pink)', marginTop: 0 }}>Klasik Makine Öğrenmesi</h3>
            <ul style={{ color: '#e2e8f0', lineHeight: '1.8', fontSize: '1.1rem' }}>
              <li>Veri klasik bitler (0 ve 1) dizisi olarak işlenir.</li>
              <li>Ağırlıklar (weights) devasa matris çarpımlarıyla hesaplanır (GPU/TPU ihtiyacı).</li>
              <li>Özellik uzayı (Feature Space) sınırlıdır; birbirinden zor ayrılan karmaşık verilerde modeller tıkanabilir.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="glass" 
            style={{ padding: '2rem', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 style={{ color: 'var(--primary)', marginTop: 0 }}>Kuantum Makine Öğrenmesi</h3>
            <ul style={{ color: '#e2e8f0', lineHeight: '1.8', fontSize: '1.1rem' }}>
              <li>Klasik Veri doğrudan kuantum durumlarına kodlanır (<strong>Feature Mapping</strong>).</li>
              <li>Süperpozisyon sayesinde algoritmalar devasa veri uzaylarını aynı anda tarayabilir.</li>
              <li>Kuantumun yüksek boyutlu <em>Hilbert uzayı</em>, klasik algoritmaların ayıramadığı karmaşık verileri kolayca sınıflandırabilir.</li>
            </ul>
          </motion.div>

        </div>

      </div>
    </Slide>
  );
};

export default Slide30;

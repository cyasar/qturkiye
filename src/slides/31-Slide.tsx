import React from 'react';
import Slide from '../components/layout/Slide';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Database, Network } from 'lucide-react';

const Slide31: React.FC = () => {
  return (
    <Slide title="Değişken Kuantum Sınıflandırıcı (VQC)" notes="VQC'nin yapay sinir ağlarına (Neural Networks) olan kuantum alternatifi olduğunu belirt.">
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
        
        <h3 style={{ textAlign: 'center', color: 'var(--accent-yellow)', marginBottom: '3rem' }}>VQC (Variational Quantum Classifier) Mimarisi</h3>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1rem' }}>
          
          {/* Klasik Veri */}
          <motion.div className="glass" style={{ padding: '1.5rem', textAlign: 'center', width: '22%' }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <Database size={40} color="var(--text-muted)" style={{ marginBottom: '1rem' }} />
            <h4 style={{ margin: '0 0 0.5rem 0' }}>Klasik Veri (x)</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Resimler, finansal veriler veya sensör okumaları.</p>
          </motion.div>

          <ArrowRight color="var(--primary)" size={24} />

          {/* Feature Map */}
          <motion.div className="glass" style={{ padding: '1.5rem', textAlign: 'center', width: '22%', borderTop: '3px solid var(--accent-pink)' }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <Network size={40} color="var(--accent-pink)" style={{ marginBottom: '1rem' }} />
            <h4 style={{ margin: '0 0 0.5rem 0' }}>Feature Map (U)</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Veriyi kuantum durumuna çevirir (Encoding).</p>
          </motion.div>

          <ArrowRight color="var(--primary)" size={24} />

          {/* Ansatz */}
          <motion.div className="glass" style={{ padding: '1.5rem', textAlign: 'center', width: '22%', borderTop: '3px solid var(--primary)' }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <Cpu size={40} color="var(--primary)" style={{ marginBottom: '1rem' }} />
            <h4 style={{ margin: '0 0 0.5rem 0' }}>Kuantum Ağı (W)</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Eğitilebilir parametreler (θ) içeren kuantum devresi.</p>
          </motion.div>

          <ArrowRight color="var(--primary)" size={24} />

          {/* Ölçüm ve CPU */}
          <motion.div className="glass" style={{ padding: '1.5rem', textAlign: 'center', width: '22%', borderTop: '3px solid var(--accent-green)' }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
            <h2 style={{ margin: '0 0 1rem 0', color: 'var(--accent-green)', display: 'inline-block' }}>Z</h2>
            <h4 style={{ margin: '0 0 0.5rem 0' }}>Ölçüm & CPU</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Sonuç hesaplanır, Loss (hata) bulunur ve θ güncellenir.</p>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: '4rem', textAlign: 'center', color: '#e2e8f0', fontSize: '1.1rem', background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-yellow)' }}
        >
          Tıpkı QAOA'da olduğu gibi, bu da <strong>Hibrit</strong> bir döngüdür. Kuantum devresi veriyi çok yüksek boyutlu uzayda işler, Klasik bilgisayar ise devrenin açılarını (θ) eğiterek yapay zekanın öğrenmesini sağlar!
        </motion.div>

      </div>
    </Slide>
  );
};

export default Slide31;

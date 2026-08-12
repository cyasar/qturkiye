import React from 'react';
import Slide from '../components/layout/Slide';
import QAOAFlow from '../components/interactive/QAOAFlow';

const Slide24: React.FC = () => {
  return (
    <Slide title="Kuantum Çözümü: QAOA (Hibrit Döngü)" notes="QAOA'nın klasik bilgisayar (CPU) ile kuantum bilgisayarın (QPU) birlikte çalıştığı hibrit bir algoritma olduğunu anlat.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%', justifyContent: 'center' }}>
        
        <p style={{ fontSize: '1.2rem', textAlign: 'center', margin: '0 auto', maxWidth: '900px' }}>
          Önceki slaytta gördüğümüz optimizasyon problemini (QUBO) çözmek için, günümüzdeki gürültülü (NISQ) kuantum cihazlarında <strong>QAOA (Quantum Approximate Optimization Algorithm)</strong> kullanılır. 
        </p>

        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', textAlign: 'center', margin: '0 auto', maxWidth: '850px' }}>
          QAOA, <strong>Hibrit</strong> bir algoritmadır. Kuantum bilgisayar (QPU) olasılık dağılımını hesaplar, Klasik bilgisayar (CPU) ise bu olasılıkları optimize ederek yeni kuantum parametreleri (γ ve β) üretir. Bu döngü, en iyi çözüme ulaşana kadar devam eder.
        </p>

        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', width: '100%' }}>
          <QAOAFlow />
        </div>

      </div>
    </Slide>
  );
};

export default Slide24;

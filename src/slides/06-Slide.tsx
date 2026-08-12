import React from 'react';
import Slide from '../components/layout/Slide';
import Equation from '../components/ui/Equation';
import DeepDive from '../components/ui/DeepDive';

const Slide06: React.FC = () => {
  return (
    <Slide title="Bölüm 2: Kuantumlaştırma Fikri" notes="Qubit tanımı. Klasik 0 ve 1 klişesine saplanma. Durum vektörü olduğunu anlat.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--text-muted)' }}>Klasik Bit</h3>
            <div style={{ fontSize: '6rem', fontWeight: 'bold', margin: '2rem 0', fontFamily: 'var(--font-mono)' }}>0 <span style={{ color: 'var(--text-muted)', fontSize: '3rem' }}>veya</span> 1</div>
            <p>Kesin bir durum. Ya öyledir, ya böyle.</p>
          </div>
          
          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', borderColor: 'var(--primary)' }}>
            <h3 style={{ color: 'var(--primary)' }}>Kuantum Bit (Qubit)</h3>
            <div style={{ fontSize: '3rem', margin: '3.5rem 0' }}>
              <Equation math="|\psi\rangle = \alpha|0\rangle + \beta|1\rangle" />
            </div>
            <p>Bir <strong>durum vektörü</strong>. İki durumun lineer kombinasyonu.</p>
          </div>
        </div>
        
        <DeepDive title="Matematiksel Derinlik (Olasılık Genlikleri)">
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', flexWrap: 'wrap' }}>
            <Equation math="\alpha" display={false} /> ve <Equation math="\beta" display={false} /> sıradan olasılıklar değildir. Bunlar <strong>karmaşık sayılardır (complex numbers)</strong> ve bunlara "olasılık genliği" (probability amplitude) denir.
          </p>
          <Equation math="|\alpha|^2 + |\beta|^2 = 1" />
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', flexWrap: 'wrap' }}>
            Ölçüm yapıldığında sistemi <Equation math="|0\rangle" display={false} /> durumunda bulma olasılığı <Equation math="|\alpha|^2" display={false} /> dir.
          </p>
        </DeepDive>
      </div>
    </Slide>
  );
};

export default Slide06;

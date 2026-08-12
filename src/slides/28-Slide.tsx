import React from 'react';
import Slide from '../components/layout/Slide';
import QAOASimulator from '../components/interactive/QAOASimulator';

const Slide28: React.FC = () => {
  return (
    <Slide title="Bölüm 6: QAOA Laboratuvarı (Canlı Uygulama)" notes="Klasik optimizasyon (CPU) ile kuantum ölçümlerinin (QPU) nasıl beraber çalışarak enerjiyi düşürdüğünü göster. Optimum çözüm olan '1010'un olasılığının nasıl arttığına dikkat çek.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', margin: 0 }}>
          Sıra geldi bu öğrendiğimiz teoriyi <strong>somut bir uygulamada</strong> çalıştırmaya! Aşağıdaki simülasyon, QUBO problemimizi çözmek için Klasik Bilgisayar (CPU) ve Kuantum Bilgisayar'ın (QPU) nasıl ortaklaşa çalıştığını (Optimizasyon döngüsünü) canlı olarak göstermektedir.
        </p>
        
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <QAOASimulator />
        </div>
      </div>
    </Slide>
  );
};

export default Slide28;

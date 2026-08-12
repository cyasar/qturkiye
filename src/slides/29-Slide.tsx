import React from 'react';
import Slide from '../components/layout/Slide';
import ColabButton from '../components/ui/ColabButton';
import { seminarConfig } from '../config/seminar';

const Slide25: React.FC = () => {
  return (
    <Slide title="Colab Laboratuvarı: QAOA ile Proje Seçimi" notes="Eğitmen kodu çalıştırır.">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '3rem', textAlign: 'center' }}>
        
        <div className="glass-panel" style={{ padding: '4rem', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <h2 style={{ color: 'var(--primary)', margin: 0 }}>Uygulamalı Görev</h2>
          <div style={{ fontSize: '1.5rem', lineHeight: 1.5, textAlign: 'left' }}>
            <ol>
              <li>Bütçeyi 7'den 8'e değiştirin.</li>
              <li>Fayda değerlerinden birini (örneğin Proje B'yi 10) değiştirin.</li>
              <li>QAOA sonucunun yeni optimal çözüme nasıl adapte olduğunu yorumlayın.</li>
            </ol>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <ColabButton url={seminarConfig.colabQaoaUrl}>
              QAOA / QUBO Uygulamasını Colab'da Aç
            </ColabButton>
          </div>
        </div>

      </div>
    </Slide>
  );
};

export default Slide25;

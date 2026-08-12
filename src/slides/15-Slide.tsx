import React from 'react';
import Slide from '../components/layout/Slide';
import ColabButton from '../components/ui/ColabButton';
import { seminarConfig } from '../config/seminar';

const Slide14: React.FC = () => {
  return (
    <Slide title="Colab Laboratuvarı: Grover" notes="Eğitmen kodu burada Colab üzerinden açar.">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '3rem', textAlign: 'center' }}>
        
        <div className="glass-panel" style={{ padding: '4rem', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <h2 style={{ color: 'var(--primary)', margin: 0 }}>Uygulamalı Görev</h2>
          <p style={{ fontSize: '1.5rem', lineHeight: 1.5 }}>
            Oracle devresindeki hedef durumu <strong>$|011\rangle$</strong> yerine <strong>$|101\rangle$</strong> yapın. <br/>
            Sonuç histogramı nasıl değişiyor?
          </p>
          
          <div style={{ marginTop: '2rem' }}>
            <ColabButton url={seminarConfig.colabGroverUrl}>
              Grover Uygulamasını Colab'da Aç
            </ColabButton>
          </div>
        </div>

        <p style={{ color: 'var(--text-muted)' }}>
          (Sunumdan ayrılmadan, yeni sekmede açılacaktır.)
        </p>

      </div>
    </Slide>
  );
};

export default Slide14;

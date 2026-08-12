import React from 'react';
import Slide from '../components/layout/Slide';
import ColabButton from '../components/ui/ColabButton';
import { seminarConfig } from '../config/seminar';
import Equation from '../components/ui/Equation';

const Slide19: React.FC = () => {
  return (
    <Slide title="Colab Laboratuvarı: Shor Algoritması" notes="Eğitmen kodu burada Colab üzerinden açar ve Qiskit'te QFT'nin nasıl kodlandığını gösterir.">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '3rem', textAlign: 'center' }}>
        
        <div className="glass-panel" style={{ padding: '4rem', maxWidth: '850px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <h2 style={{ color: 'var(--primary)', margin: 0, fontSize: '2.5rem' }}>Uygulamalı Görev</h2>
          <p style={{ fontSize: '1.4rem', lineHeight: 1.6 }}>
            Gerçek bir kuantum devresinde (Qiskit kullanarak) <Equation math="N=21" display={false} /> sayısını çarpanlarına ayırın. <br/><br/>
            <strong>Görev:</strong> QFT (Quantum Fourier Transform) devre elemanlarının kodlarına (<Equation math="H" display={false} /> ve Kontrollü Faz kapılarına) dikkat edin. Devrenin periyodu (<Equation math="r" display={false} />) nasıl çıkardığını histogram grafiğinde gözlemleyin.
          </p>
          
          <div style={{ marginTop: '2rem' }}>
            <ColabButton url={seminarConfig.colabShorUrl}>
              Shor Uygulamasını Colab'da Aç
            </ColabButton>
          </div>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          (Tıkladığınızda IBM Qiskit Shor Laboratuvarı yeni sekmede açılacaktır.)
        </p>

      </div>
    </Slide>
  );
};

export default Slide19;

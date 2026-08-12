import React from 'react';
import Slide from '../components/layout/Slide';
import GroverSimulator from '../components/interactive/GroverSimulator';
import DeepDive from '../components/ui/DeepDive';

const Slide13: React.FC = () => {
  return (
    <Slide title="Grover Animasyonu: Genlik Büyütme (Amplitude Amplification)" notes="Grover'ın 4 adımını sırayla göster. İstenmeyen durumların nasıl küçüldüğüne dikkat çek.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
          Aşağıda 8 olası durum ($N=8$) için Grover algoritmasının adım adım çalışmasını görebilirsiniz. Hedef durumumuz $|101\rangle$ (Ondalık: 5).
        </p>
        
        <GroverSimulator />
        
        <DeepDive title="Biraz Daha Derin: Neden Difüzyon?">
          <p>
            Difüzyon operatörü $2|\psi\rangle\langle\psi| - I$ aslında "ortalama etrafında ters çevirme" işlemidir. 
            Oracle hedef durumun fazını negatif yaptığında, genliklerin ortalaması hafifçe düşer. 
            Negatif genliği bu yeni (ve pozitif) ortalamanın etrafında ters çevirdiğimizde, 
            hedef genlik büyük pozitif bir değere sıçrar. 
          </p>
        </DeepDive>
      </div>
    </Slide>
  );
};

export default Slide13;

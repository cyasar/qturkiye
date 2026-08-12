import React from 'react';
import Slide from '../components/layout/Slide';
import QuboPlayground from '../components/interactive/QuboPlayground';

const Slide20: React.FC = () => {
  return (
    <Slide title="Bölüm 5: Optimizasyon Laboratuvarı" notes="Kullanıcıdan parametreleri değiştirmesini iste. Henüz kuantum devrede değil. Sadece problemi modelliyoruz.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
        <p>
          Gerçek Problem: "Sınırlı bütçeyle (7 birim) hangi projeleri desteklemeliyiz?" <br/>
          Aşağıdaki laboratuvarda bütçe ve proje parametrelerini değiştirerek klasik çözüm uzayını ($2^4 = 16$ olasılık) inceleyin.
        </p>
        
        <QuboPlayground />
        
        <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid var(--accent-green)', borderRadius: '4px', textAlign: 'center' }}>
          <strong>Dikkat:</strong> Henüz kuantum bilgisayar kullanmadık! Klasik brute-force (kaba kuvvet) yöntemiyle tüm uzayı taradık. Değişken sayısı 40 olduğunda bu uzay $2^{40} \approx 1$ trilyon satır olurdu.
        </div>
      </div>
    </Slide>
  );
};

export default Slide20;

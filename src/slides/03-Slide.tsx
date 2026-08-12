import React from 'react';
import Slide from '../components/layout/Slide';
import QuizCard from '../components/ui/QuizCard';
import RouteMapVisualizer from '../components/ui/RouteMapVisualizer';

const Slide03: React.FC = () => {
  return (
    <Slide title="Bölüm 1: Problem Nedir?" notes="Günlük bir problem ile başla. 'En iyi' kavramının göreceli olduğunu ve hedefe/kısıtlara bağlı olduğunu vurgula.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', height: '100%', alignItems: 'flex-start', paddingTop: '1rem' }}>
        
        {/* Sol Kolon */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h2>Klasik Bir Günlük Hayat Problemi</h2>
            <p style={{ fontSize: '1.4rem', color: '#fff', margin: '1rem 0 0 0' }}>
              "Çanakkale'den İstanbul'a gitmek istiyorum. <br/>
              <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>En iyi</span> yol hangisi?"
            </p>
          </div>
          
          <QuizCard 
            question="Sizce 'En iyi' ne demek?"
            answer={
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: 0 }}>
                <li>🚀 <strong>En hızlı?</strong> (Süre optimizasyonu)</li>
                <li>🛣️ <strong>En kısa?</strong> (Mesafe optimizasyonu)</li>
                <li>💰 <strong>En ucuz?</strong> (Maliyet optimizasyonu)</li>
                <li>🔋 <strong>En az enerji?</strong> (Yakıt/Karbon optimizasyonu)</li>
                <li>🛡️ <strong>En düşük risk?</strong> (Güvenlik optimizasyonu)</li>
              </ul>
            }
          />
        </div>
        
        {/* Sağ Kolon */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <RouteMapVisualizer />
          
          <div className="glass-panel" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-yellow)', textAlign: 'center' }}>Matematiksel Düşünce</h3>
            <p>
              Bilgisayarlar (klasik veya kuantum fark etmez) "en iyi" kavramını anlamazlar. 
              Onlar sadece bizim verdiğimiz matematiksel denklemleri minimize veya maksimize ederler.
            </p>
            <div style={{ padding: '1.25rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
              <strong>Mesaj:</strong> Kuantum algoritması yazmadan önce problemi matematiksel bir hedefe dönüştürmeliyiz.
            </div>
          </div>
        </div>

      </div>
    </Slide>
  );
};

export default Slide03;

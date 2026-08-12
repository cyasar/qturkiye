import React from 'react';
import Slide from '../components/layout/Slide';

const Slide01: React.FC = () => {
  return (
    <Slide className="text-center" notes="Açılış slaytı. Etkinlik ismi ve konuşmacı bilgisi burada. Yaklaşık 1 dakika ayır.">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', gap: '4rem', padding: '0 2rem' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', gap: '1.5rem' }}>
          <img src={`${import.meta.env.BASE_URL}QSummer26-1600-x-800-px.png`} alt="QSummer26 Logo" style={{ maxHeight: '120px', objectFit: 'contain', marginBottom: '1rem', alignSelf: 'flex-start' }} />
          
          <h4 style={{ color: 'var(--accent-pink)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            QTürkiye Seminerleri
          </h4>
          <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, maxWidth: '800px' }}>
            Klasik Problemlerden Kuantum Algoritmalarına
          </h1>
          <h2 style={{ color: 'var(--primary)', marginTop: '-0.5rem' }}>
            Kuantum Hesaplamada Problem Modelleme
          </h2>
          
          <div style={{ marginTop: '2rem' }}>
            <p style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 600 }}>Dr. Cumali YAŞAR</p>
            <p style={{ color: 'var(--text-muted)' }}>Çanakkale Onsekiz Mart Üniversitesi</p>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>12 Ağustos 2026 • 20:30</p>
          </div>
        </div>
        
        <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}>
          <img src={`${import.meta.env.BASE_URL}afis.jpeg`} alt="Seminer Afişi" style={{ maxHeight: '600px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid var(--border-color)' }} />
        </div>
      </div>
    </Slide>
  );
};

export default Slide01;

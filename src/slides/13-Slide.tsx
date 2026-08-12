import React from 'react';
import Slide from '../components/layout/Slide';
import { RefreshCw, Zap, Box, Activity } from 'lucide-react';
import Equation from '../components/ui/Equation';

const Slide12: React.FC = () => {
  return (
    <Slide title="Adım 3: İterasyon (Sihri Tekrarlamak)" notes="Grover'ın gücünün iterasyondan geldiğini ve O(sqrt(N)) tekrar gerektiğini açıkla.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', justifyContent: 'center' }}>
        
        <p style={{ fontSize: '1.2rem', textAlign: 'center', margin: '0 auto', maxWidth: '900px' }}>
          Milyonlarca verinin olduğu gerçek bir problemde, sadece bir kere Oracle ve Difüzyon uygulamak doğru cevabı yeterince belirgin yapmaz. Kuantum bilgisayar bu işlemi <strong>arka arkaya tekrarlayarak</strong> genliği adım adım zirveye taşır.
        </p>

        <div className="glass" style={{ padding: '3rem', margin: '2rem auto', borderRadius: '12px', width: '80%', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(16, 185, 129, 0.1) 100%)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
          
          <h3 style={{ color: 'var(--accent-green)', marginBottom: '2rem', fontSize: '1.8rem' }}>Grover Döngüsü</h3>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1rem' }}>
                <Box size={48} color="#ef4444" />
              </div>
              <h4 style={{ color: '#ef4444' }}>1. Oracle</h4>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>(Hedefi -1 Yap)</span>
            </div>

            <RefreshCw size={48} color="var(--accent-green)" className="animate-spin-slow" style={{ animationDuration: '4s' }} />

            <div style={{ textAlign: 'center' }}>
              <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1rem' }}>
                <Activity size={48} color="#3b82f6" />
              </div>
              <h4 style={{ color: '#3b82f6' }}>2. Difüzyon</h4>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>(Hedefi Büyüt)</span>
            </div>
          </div>

          <div style={{ marginTop: '3rem', padding: '1rem 2rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', fontSize: '1.3rem' }}>
            Döngü Sayısı: <strong style={{ color: 'var(--accent-yellow)', fontSize: '1.5rem', marginLeft: '0.5rem' }}><Equation math="\approx \frac{\pi}{4} \sqrt{N}" display={false} /></strong> kere tekrarlanır.
          </div>
          
        </div>

        <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          Örneğin 1.000.000 eleman için sadece <strong>~785</strong> tekrar yeterlidir! Şimdi bu adımların birleştiği tam simülasyona geçelim.
        </p>

      </div>
    </Slide>
  );
};

export default Slide12;

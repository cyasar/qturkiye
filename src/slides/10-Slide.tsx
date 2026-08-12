import React from 'react';
import Slide from '../components/layout/Slide';
import { Search, Zap, Database } from 'lucide-react';
import Equation from '../components/ui/Equation';

const Slide09: React.FC = () => {
  return (
    <Slide title="Grover Algoritması: Samanlıkta İğne Aramak" notes="Grover'ın ne işe yaradığını anlat. N elemanlı sırasız bir listede arama yapma problemi.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', justifyContent: 'center' }}>
        
        <p style={{ fontSize: '1.2rem', textAlign: 'center', margin: '0 auto', maxWidth: '900px' }}>
          Faz ve girişim (interference) mantığını anladığımıza göre, bunu kullanan ilk büyük kuantum algoritmasına bakabiliriz: <strong>Grover Algoritması</strong>.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
          
          {/* Klasik Arama */}
          <div className="glass" style={{ padding: '2rem', borderRadius: '12px', textAlign: 'center', borderTop: '4px solid #ef4444' }}>
            <Database size={48} color="#ef4444" style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: '#ef4444', marginBottom: '1rem' }}>Klasik Bilgisayar (Sırasız Arama)</h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
              1 Milyon verinin olduğu sırasız bir listede (örneğin telefon rehberinde isimsiz bir numarayı aramak) aradığınızı bulmak için ortalama 500.000, en kötü ihtimalle <strong>1 Milyon</strong> kez deneme yapmanız gerekir.
            </p>
            <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px' }}>
              Karmaşıklık: <strong style={{ fontSize: '1.2rem' }}><Equation math="O(N)" display={false} /></strong>
            </div>
          </div>

          {/* Kuantum Arama */}
          <div className="glass" style={{ padding: '2rem', borderRadius: '12px', textAlign: 'center', borderTop: '4px solid #10b981' }}>
            <Zap size={48} color="#10b981" style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: '#10b981', marginBottom: '1rem' }}>Kuantum Bilgisayar (Grover)</h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
              Grover algoritması kuantum süperpozisyonu ve faz girişimini kullanarak aynı 1 Milyon verilik listede aradığınızı sadece <strong>1.000</strong> adımda bulur!
            </p>
            <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px' }}>
              Karmaşıklık: <strong style={{ fontSize: '1.2rem' }}><Equation math="O(\sqrt{N})" display={false} /></strong>
            </div>
          </div>

        </div>

      </div>
    </Slide>
  );
};

export default Slide09;

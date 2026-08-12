import React from 'react';
import Slide from '../components/layout/Slide';
import Equation from '../components/ui/Equation';

const Slide25: React.FC = () => {
  return (
    <Slide title="QAOA'nın Matematiksel Anatomisi" notes="QAOA formülünün altındaki bileşenleri Cost ve Mixer Hamiltonian olarak açıkla.">
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflowY: 'auto', paddingRight: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}>
          
          <p style={{ fontSize: '1.15rem', textAlign: 'center', margin: '0 auto', maxWidth: '900px', color: 'var(--text-muted)' }}>
            O şık hibrit animasyonun arkasında, kuantum mekaniğinin süperpozisyon ve faz özelliklerini kullanan çok zarif bir denklem yatar. QAOA temel olarak şu iki kuantum operatörü etrafında şekillenir:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            
            {/* 1. Kuantum Durumu (Ansatz) */}
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
              <h4 style={{ margin: '0 0 1rem 0', color: 'var(--primary)', fontSize: '1.1rem' }}>1. Kuantum Durumu (Ansatz) Parametrizasyonu</h4>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                QAOA'da hedefimiz, problemin en iyi çözümüne evrilen ideal bir kuantum durumu yaratmaktır. Bu durum, başlarda gördüğümüz her şeyin birleşimidir (Superposition <Equation math="|+\rangle^{\otimes n}" display={false}/> üzerinden başlar) ve <Equation math="p" display={false}/> defa art arda şu formülle ilerler:
              </p>
              <div style={{ textAlign: 'center', background: 'rgba(0,0,0,0.4)', padding: '1.5rem', borderRadius: '8px' }}>
                <Equation math="|\gamma, \beta\rangle = \prod_{k=1}^p \textcolor{#eab308}{e^{-i \beta_k H_M}} \textcolor{#10b981}{e^{-i \gamma_k H_C}} |+\rangle^{\otimes n}" />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {/* 2. Cost Hamiltonian */}
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-green)' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--accent-green)', fontSize: '1.1rem' }}>Problem (Cost) Hamiltonian (<Equation math="H_C" display={false}/>)</h4>
                <p style={{ color: '#fff', fontSize: '0.95rem', margin: 0 }}>
                  Çözmek istediğimiz problemi (QUBO) temsil eder. Kötü cevaplara eksi faz, iyi cevaplara artı faz verir. Klasik bilgisayardan gelen <Equation math="\gamma" display={false}/> açısıyla gücü kontrol edilir.
                </p>
              </div>

              {/* 3. Mixer Hamiltonian */}
              <div style={{ background: 'rgba(234, 179, 8, 0.1)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-yellow)' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--accent-yellow)', fontSize: '1.1rem' }}>Karıştırıcı (Mixer) Hamiltonian (<Equation math="H_M" display={false}/>)</h4>
                <p style={{ color: '#fff', fontSize: '0.95rem', margin: 0 }}>
                  Sadece tek bir durumda sıkışıp kalmamak için (Local Minima problemi), durumlar arası kuantum sıçramaları (tünelleme) yaratır. <Equation math="\beta" display={false}/> açısıyla kontrol edilir.
                </p>
              </div>
            </div>

            {/* 4. Beklenen Değer (Optimizasyon) */}
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px dashed var(--text-muted)' }}>
              <h4 style={{ margin: '0 0 1rem 0', color: '#fff', fontSize: '1.1rem' }}>Klasik Bilgisayarın Görevi (Beklenen Değer Optimizasyonu)</h4>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.95rem' }}>
                Kuantum bilgisayar bu devreyi yüzlerce kez çalıştırıp ölçüm aldığında, Klasik işlemci (CPU) şu "Beklenen Değeri" (Expectation Value) hesaplar:
              </p>
              <div style={{ textAlign: 'center', color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>
                <Equation math="E(\gamma, \beta) = \langle \gamma, \beta | H_C | \gamma, \beta \rangle" />
              </div>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Klasik makine (örneğin COBYLA veya Gradient Descent algoritması) bu enerjiyi (<Equation math="E" display={false}/>) <strong>minimuma indirecek</strong> yeni <Equation math="\gamma" display={false}/> ve <Equation math="\beta" display={false}/> parametrelerini tahmin eder ve döngü QPU'ya geri döner. Optimizasyon tamamlandığında, devre bize asıl problemi çözen değişkenleri olasılık zirvesi olarak verir!
              </p>
            </div>

          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide25;

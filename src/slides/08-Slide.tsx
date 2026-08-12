import React, { useState } from 'react';
import Slide from '../components/layout/Slide';
import Equation from '../components/ui/Equation';
import WaveInterference from '../components/interactive/WaveInterference';
import DeepDive from '../components/ui/DeepDive';

const Slide07: React.FC = () => {
  const [phaseShift, setPhaseShift] = useState(0); // 0 to Math.PI

  const phaseInPi = phaseShift / Math.PI;
  const phaseFormatted = phaseInPi === 0 ? "0" : phaseInPi === 1 ? "\\pi" : `${phaseInPi.toFixed(2)}\\pi`;
  const isDestructive = phaseShift > Math.PI - 0.2;
  const isConstructive = phaseShift < 0.2;
  const mathResultText = isConstructive ? "Faz farkı 0'a yakın, genlikler birbirini güçlendirip maksimuma çıkar (Yapıcı Girişim)." : isDestructive ? "Faz farkı π'ye (180 dereceye) yakın, genlikler matematiksel olarak iptal olur (Yıkıcı Girişim)." : "Kısmi girişim: dalgalar birbirini kısmen güçlendirir veya zayıflatır.";
  const mathColor = isConstructive ? '#10b981' : isDestructive ? '#ef4444' : 'var(--accent-yellow)';

  return (
    <Slide title="Faz (Phase) ve Girişim (Interference)" notes="Grover veya Shor algoritmalarının temel sırrı: Kuantum fazını kullanarak yanlış cevapları sönümlemek, doğru cevabı yükseltmek.">
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflowY: 'auto', paddingRight: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          <p style={{ fontSize: '1.2rem', margin: 0 }}>
            Kuantum durumlarındaki <Equation math="\phi" display={false} /> fazı, tek bir qubitin ölçüm olasılığını değiştirmez. 
            <strong>Ancak sistemde birden fazla olasılık dalgası kesiştiğinde</strong> her şeyi değiştirir!
          </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '0.5rem', borderRadius: '4px', borderLeft: '2px solid var(--primary)', fontSize: '0.9rem' }}>
            <strong style={{ color: 'var(--primary)' }}>Faz (Phase):</strong> Bir olasılık dalgasının titreşim döngüsündeki konumunu ve yönelimini (açısını) ifade eder.
          </div>
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '0.5rem', borderRadius: '4px', borderLeft: '2px solid var(--accent-yellow)', fontSize: '0.9rem' }}>
            <strong style={{ color: 'var(--accent-yellow)' }}>Girişim (Interference):</strong> Kuantum dalgalarının uzayda üst üste binerek (toplanarak) birbirini güçlendirmesi veya yok etmesi olayıdır.
          </div>
        </div>

        {/* İnteraktif Simülasyon */}
        <WaveInterference phaseShift={phaseShift} setPhaseShift={setPhaseShift} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginTop: '0.5rem' }}>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981', padding: '0.5rem 0.8rem', borderRadius: '4px' }}>
            <h4 style={{ color: '#10b981', margin: '0 0 0.3rem 0', fontSize: '0.95rem' }}>Fiziksel Karşılığı (Yapıcı Girişim)</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.4' }}>Dalgalar aynı fazda (<Equation math="\Delta\phi = 0" display={false}/>) karşılaştığında genlikler toplanır: <Equation math="\alpha + \alpha = 2\alpha" display={false} />. Olasılık ise genliğin karesi olduğu için <Equation math="|2\alpha|^2 = 4|\alpha|^2" display={false} /> olarak katlanarak artar. Bu durum algoritmada <strong>doğru sonucun olasılığını</strong> yükseltir.</p>
          </div>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', padding: '0.5rem 0.8rem', borderRadius: '4px' }}>
            <h4 style={{ color: '#ef4444', margin: '0 0 0.3rem 0', fontSize: '0.95rem' }}>Fiziksel Karşılığı (Yıkıcı Girişim)</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.4' }}>Dalgalar zıt fazda (<Equation math="\Delta\phi = \pi" display={false}/>) karşılaştığında genlikler birbirini yok eder: <Equation math="\alpha + (-\alpha) = 0" display={false} />. Olasılık tamamen <strong>sıfırlanır</strong>. Kuantum algoritmaları bu sayede yanlış cevapları eler.</p>
          </div>
        </div>

        <DeepDive title="Matematiksel Derinlik (Euler Formülü ve Kuantum Fazı)">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Dinâmik Kuantum Durumu</h4>
              <p>Şu an yukarıdaki simülasyonda ayarladığınız faz farkı: <strong style={{color: mathColor}}><Equation math={`\\phi = ${phaseFormatted}`} display={false}/></strong>. İki durum toplanırken (girişim yaparken) faz farkı hesaba katılır:</p>
              <Equation math={`\\psi_{toplam} = \\frac{1}{\\sqrt{2}}|x\\rangle + \\frac{e^{i(${phaseFormatted})}}{\\sqrt{2}}|x\\rangle`} />
            </div>
            <div>
              <h4 style={{ color: mathColor, marginBottom: '0.5rem' }}>Matematiksel Sonuç (Euler)</h4>
              <p>Euler formülü gereği <Equation math={`e^{i\\phi} = \\cos(\\phi) + i\\sin(\\phi)`} display={false}/>. Faz farkının kuantum genliğini nasıl değiştirdiğini hesaplarsak:</p>
              <Equation math={`\\psi_{toplam} = \\left( \\frac{1 + e^{i(${phaseFormatted})}}{\\sqrt{2}} \\right) |x\\rangle`} />
              <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', padding: '0.5rem', background: 'rgba(0,0,0,0.2)', borderLeft: `3px solid ${mathColor}`, color: mathColor }}>
                <strong>Durum:</strong> {mathResultText}
              </div>
            </div>
          </div>
        </DeepDive>

        </div>
      </div>
    </Slide>
  );
};

export default Slide07;

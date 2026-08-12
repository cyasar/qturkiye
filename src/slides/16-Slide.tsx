import React from 'react';
import Slide from '../components/layout/Slide';
import { Lock, Unlock, Calculator, ShieldAlert } from 'lucide-react';
import Equation from '../components/ui/Equation';

const Slide15: React.FC = () => {
  return (
    <Slide title="Shor Algoritması: Kriptografinin Sonu mu?" notes="RSA şifrelemenin çalışma mantığını ve asimetrik şifrelemenin zayıf noktasını (asal çarpanlara ayırma) anlat.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', justifyContent: 'center' }}>
        
        <p style={{ fontSize: '1.2rem', textAlign: 'center', margin: '0 auto', maxWidth: '900px' }}>
          Grover ile arama hızımızı arttırdık. Ancak Peter Shor'un 1994'te bulduğu algoritma çok daha büyük bir etki yarattı: <strong>İnternet güvenliğinin (RSA) temelini kırmak.</strong>
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1rem' }}>
          
          <div className="glass" style={{ padding: '2rem', borderRadius: '12px', borderTop: '4px solid #3b82f6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Calculator size={40} color="#3b82f6" />
              <h3 style={{ color: '#3b82f6', margin: 0 }}>Klasik Matematik (Tek Yönlü İşlem)</h3>
            </div>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              İki büyük asal sayıyı çarpmak bilgisayarlar için çok kolaydır: <br/>
              <Equation math="P_1 \times P_2 = N" display={false}/> (Kolay)
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              Ancak sadece devasa <Equation math="N" display={false}/> sayısını verip, <em>"Hangi iki asal sayının çarpımıdır?"</em> diye sorarsanız (Asal Çarpanlara Ayırma), dünyanın en güçlü süper bilgisayarları bile <strong>milyonlarca yıl</strong> sürebilir.
            </p>
          </div>

          <div className="glass" style={{ padding: '2rem', borderRadius: '12px', borderTop: '4px solid #ef4444' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <ShieldAlert size={40} color="#ef4444" />
              <h3 style={{ color: '#ef4444', margin: 0 }}>Shor'un Kuantum Çözümü</h3>
            </div>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              Peter Shor, problemi bir <strong>"periyot bulma" (dalga frekansı ölçme)</strong> problemine dönüştürdü.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              Kuantum Fourier Dönüşümü (QFT) ve dalga girişimi (interference) sayesinde, Kuantum bilgisayarlar bu problemi klasik bilgisayarlara kıyasla <strong>üstel (eksponansiyel) olarak daha hızlı</strong> çözer. Milyonlarca yıllık işlem saatlere düşer!
            </p>
          </div>

        </div>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', background: 'rgba(239, 68, 68, 0.15)', padding: '1rem 2rem', borderRadius: '30px', border: '1px solid #ef4444' }}>
            <Lock size={24} color="#ef4444" />
            <ArrowRight size={24} color="var(--text-muted)" />
            <Unlock size={24} color="#10b981" />
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>İnternetteki tüm şifreli iletişimler (Bankalar, WhatsApp, E-devlet) risk altındadır!</span>
          </div>
        </div>

      </div>
    </Slide>
  );
};

// Add ArrowRight as it was missing from lucide-react import
import { ArrowRight } from 'lucide-react';

export default Slide15;

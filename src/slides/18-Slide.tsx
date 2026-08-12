import React from 'react';
import Slide from '../components/layout/Slide';
import Equation from '../components/ui/Equation';
import { ArrowRight, Calculator } from 'lucide-react';

const Slide17: React.FC = () => {
  return (
    <Slide title="Matematiksel Dönüşüm: Klasikten Kuantuma" notes="N=21 örneği ile problemin nasıl periyot bulmaya dönüştüğünü anlat.">
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflowY: 'auto', paddingRight: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
          
          <p style={{ fontSize: '1.2rem', textAlign: 'center', margin: '0 auto', maxWidth: '900px' }}>
            Klasik bir problem olan <strong>"Asal Çarpanlara Ayırma"</strong>, Kuantum'un anlayabileceği bir <strong>"Periyot Bulma"</strong> problemine nasıl dönüşür? Dünyaca ünlü <Equation math="N=21" display={false}/> örneği ile adım adım görelim.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '1rem' }}>
            
            {/* Adım 1 */}
            <div style={{ display: 'flex', gap: '1rem', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--text-muted)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--text-muted)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0 }}>1</div>
              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#fff' }}>Rastgele Bir Sayı Seçimi (Klasik Adım)</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)' }}>
                  Önce <Equation math="N" display={false}/>'den küçük rastgele bir sayı (<Equation math="a" display={false}/>) seçiyoruz. <Equation math="a=2" display={false}/> seçtiğimizi varsayalım.
                </p>
              </div>
            </div>

            {/* Adım 2 */}
            <div style={{ display: 'flex', gap: '1rem', background: 'rgba(234, 179, 8, 0.1)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-yellow)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-yellow)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0 }}>2</div>
              <div style={{ width: '100%' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--accent-yellow)' }}>Fonksiyon ve Periyot (Kuantumun Çözeceği Adım)</h4>
                <p style={{ margin: '0 0 1rem 0', color: '#fff' }}>
                  Şimdi şu fonksiyona bakalım: <Equation math="f(x) = a^x \pmod N" display={false}/>. Kuantum bilgisayar bu denklemi tüm <Equation math="x" display={false}/> değerleri için <strong>aynı anda</strong> hesaplayarak içindeki tekrar eden yapıyı (periyodu) bulacaktır:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem', textAlign: 'center', background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                  <div><Equation math="2^1 \equiv \mathbf{2}" display={false} /></div>
                  <div><Equation math="2^2 \equiv \mathbf{4}" display={false} /></div>
                  <div><Equation math="2^3 \equiv \mathbf{8}" display={false} /></div>
                  <div><Equation math="2^4 \equiv \mathbf{16}" display={false} /></div>
                  <div><Equation math="2^5 \equiv \mathbf{11}" display={false} /></div>
                  <div><Equation math="2^6 \equiv \mathbf{1}" display={false} /></div>
                  <div style={{ opacity: 0.5 }}><Equation math="2^7 \equiv 2..." display={false} /></div>
                </div>
                <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '1.1rem', color: 'var(--accent-yellow)', fontWeight: 'bold' }}>
                  Sonuçların "2, 4, 8, 16, 11, 1" şeklinde kendini tekrar ettiğini görüyoruz. Yani Periyot: <Equation math="r = 6" display={false}/>'dır.
                </div>
              </div>
            </div>

            {/* Adım 3 */}
            <div style={{ display: 'flex', gap: '1rem', background: 'rgba(16, 185, 129, 0.1)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-green)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-green)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0 }}>3</div>
              <div style={{ width: '100%' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--accent-green)' }}>Çarpanları Bulmak (Öklid Algoritması)</h4>
                <p style={{ margin: '0 0 1rem 0', color: '#fff' }}>
                  Kuantum bilgisayar bize <Equation math="r=6" display={false}/> sonucunu verdiğinde, klasik bilgisayar basit bir EBOB (En Büyük Ortak Bölen) formülüyle asıl şifreyi kırar:
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-around', background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ marginBottom: '0.5rem', color: 'var(--text-muted)' }}>1. Çarpan</div>
                    <Equation math="\gcd(a^{r/2} - 1, N)" />
                    <div style={{ marginTop: '0.5rem', fontSize: '1.2rem', color: 'var(--accent-green)', fontWeight: 'bold' }}><Equation math="\gcd(7, 21) = 7" display={false} /></div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}><ArrowRight color="var(--text-muted)" /></div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ marginBottom: '0.5rem', color: 'var(--text-muted)' }}>2. Çarpan</div>
                    <Equation math="\gcd(a^{r/2} + 1, N)" />
                    <div style={{ marginTop: '0.5rem', fontSize: '1.2rem', color: 'var(--accent-green)', fontWeight: 'bold' }}><Equation math="\gcd(9, 21) = 3" display={false} /></div>
                  </div>
                </div>
                <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '1.2rem' }}>
                  İşte <Equation math="N=21" display={false}/> sayısının asal çarpanları bulundu: <strong>7 ve 3!</strong>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide17;

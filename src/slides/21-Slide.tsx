import React from 'react';
import Slide from '../components/layout/Slide';
import Equation from '../components/ui/Equation';
import DeepDive from '../components/ui/DeepDive';

const Slide21: React.FC = () => {
  return (
    <Slide title="Matematiğin Kalbi: Zirveler Nasıl Oluşur?" notes="N=21 örneğindeki periyodik çökmenin QFT formülünde nasıl yapıcı girişime dönüştüğünün matematiksel kanıtını sun.">
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflowY: 'auto', paddingRight: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}>
          
          <p style={{ fontSize: '1.2rem', textAlign: 'center', margin: '0 auto', maxWidth: '900px' }}>
            Önceki slaytta gördüğümüz o spesifik olasılık zirvelerinin (piklerin) arkasında çok zarif bir matematik yatar. QFT'nin formülü, periyodik bir duruma uygulandığında <strong>sadece belirli frekanslarda yapıcı girişim (constructive interference)</strong> yaratır.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            
            {/* Adım 1: Çökmüş Durum */}
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--text-muted)' }}>
              <h4 style={{ margin: '0 0 1rem 0', color: '#fff', fontSize: '1.1rem' }}>1. Ölçüm Sonrası Periyodik Durum (Tarak Yapısı)</h4>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                <Equation math="f(x) = 2^x \pmod{21}" display={false} /> fonksiyonunu ölçtüğümüzde sonuç <strong>2</strong> çıkarsa, sistem sadece bu sonucu veren <Equation math="x" display={false} /> değerlerine çöker (<Equation math="r=6" display={false} /> periyoduyla):
              </p>
              <div style={{ textAlign: 'center', background: 'rgba(0,0,0,0.4)', padding: '1rem', borderRadius: '8px' }}>
                <Equation math="|\psi\rangle = \frac{1}{\sqrt{m}} \sum_{k=0}^{m-1} |x_0 + k \cdot r\rangle" />
              </div>
              
              <div style={{ marginTop: '1rem', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', border: '1px dashed var(--text-muted)' }}>
                <h5 style={{ color: 'var(--text-muted)', margin: '0 0 0.5rem 0', fontSize: '1rem' }}>Değişkenlerin Açık Hali (<Equation math="N=64" display={false}/> uzayı için)</h5>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '1rem', fontSize: '0.95rem' }}>
                  <ul style={{ color: 'var(--text-muted)', margin: 0, paddingLeft: '1.5rem' }}>
                    <li><Equation math="r = 6" display={false}/> (Periyot)</li>
                    <li><Equation math="x_0 = 1" display={false}/> (İlk değer, <Equation math="2^1 \equiv 2" display={false}/>)</li>
                    <li><Equation math="m = 11" display={false}/> (64'e kadar 11 tepe var)</li>
                  </ul>
                  <ul style={{ color: 'var(--text-muted)', margin: 0, paddingLeft: '0.5rem', listStyleType: 'none' }}>
                    <li><Equation math="k = 0 \rightarrow x_0 = 1" display={false}/></li>
                    <li><Equation math="k = 1 \rightarrow x_1 = 1 + 6 = 7" display={false}/></li>
                    <li><Equation math="k = 2 \rightarrow x_2 = 1 + 12 = 13" display={false}/></li>
                    <li><Equation math="k = 3 \rightarrow x_3 = 1 + 18 = 19 \dots" display={false}/></li>
                  </ul>
                </div>
                <div style={{ textAlign: 'center', color: '#fff', fontSize: '1.05rem', marginTop: '1rem' }}>
                  <Equation math="|\psi\rangle = \frac{1}{\sqrt{11}} \big( |1\rangle + |7\rangle + |13\rangle + |19\rangle + \dots + |61\rangle \big)" display={false} />
                </div>
              </div>
            </div>

            {/* Adım 2: QFT Uygulaması ve Dağılma */}
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-green)' }}>
              <h4 style={{ margin: '0 0 1rem 0', color: 'var(--accent-green)', fontSize: '1.1rem' }}>2. İç İçe Geçen Fazlar (QFT'nin Etkisi)</h4>
              <p style={{ color: '#fff', marginBottom: '1rem' }}>
                Bu periyodik <Equation math="|\psi\rangle" display={false}/> durumuna QFT formülünü (<Equation math="e^{2\pi i \frac{xy}{N}}" display={false}/>) uygulayıp <Equation math="x_0" display={false}/> terimini dışarı çektiğimizde asıl sihri görürüz:
              </p>
              <div style={{ textAlign: 'center', background: 'rgba(0,0,0,0.4)', padding: '1rem', borderRadius: '8px' }}>
                <Equation math="QFT|\psi\rangle = \frac{1}{\sqrt{mN}} \sum_{y=0}^{N-1} e^{2\pi i \frac{x_0 y}{N}} \left( \sum_{k=0}^{m-1} \textcolor{#eab308}{e^{2\pi i k \frac{ry}{N}}} \right) |y\rangle" />
              </div>
            </div>

            {/* Adım 3: Girişim Şartı */}
            <div style={{ background: 'rgba(234, 179, 8, 0.1)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-yellow)' }}>
              <h4 style={{ margin: '0 0 1rem 0', color: 'var(--accent-yellow)', fontSize: '1.1rem' }}>3. Yapıcı Girişim Şartı (Zirveler)</h4>
              <p style={{ color: '#fff', marginBottom: '1rem' }}>
                İçerideki sarı toplam <Equation math="\sum e^{2\pi i k \frac{ry}{N}}" display={false}/> terimi bir geometrik seridir. Bu dalgaların birbirini yok etmemesi (Sıfır olmaması) ve <strong>maksimum genliğe ulaşması için fazın tam sayı olması</strong>, yani <Equation math="1" display={false}/>'e eşit olması gerekir:
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', alignItems: 'center' }}>
                <div style={{ background: 'rgba(0,0,0,0.4)', padding: '1rem', borderRadius: '8px' }}>
                  <Equation math="\frac{r \cdot y}{N} = c \quad \text{(Tam sayı)}" />
                </div>
                <div style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>&#8594;</div>
                <div style={{ background: 'rgba(0,0,0,0.4)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--primary)' }}>
                  <Equation math="y = c \cdot \frac{N}{r}" />
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', border: '1px dashed var(--accent-yellow)' }}>
                <h5 style={{ color: 'var(--accent-yellow)', margin: '0 0 0.5rem 0', fontSize: '1rem' }}>Nümerik Örnek (<Equation math="N=64, r=6" display={false}/>)</h5>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Önceki slayttaki grafiği hatırlayalım. <Equation math="N=64" display={false}/> olasılık durumuna sahip bir uzayda, periyodumuz <Equation math="r=6" display={false}/> ise zirvelerin nerede oluşacağını hesaplayalım:
                </p>
                <div style={{ textAlign: 'center', color: '#fff', fontSize: '1.1rem', margin: '0.8rem 0' }}>
                  <Equation math="y \approx c \cdot \frac{64}{6} \approx c \cdot 10.66" display={false} />
                </div>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  <Equation math="c = 0, 1, 2, 3, 4, 5" display={false}/> değerlerini (katları) sırasıyla verdiğimizde, yapıcı girişimin (zirvelerin) oluştuğu noktaları buluruz: <strong><Equation math="y \approx 0, 11, 21, 32, 43, 53" display={false}/></strong>. Grafikte gördüğümüz pikler tamamen bu hesabın sonucudur!
                </p>
              </div>

              <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '1.1rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                Kuantum bilgisayar bu <Equation math="y" display={false}/> değerlerinden herhangi birini ölçtüğünde, klasik bir bilgisayar tersine işlem (Sürekli Kesirler / Continued Fractions) yaparak <Equation math="r=6" display={false}/> periyodunu çeker ve N=21 şifresini saniyeler içinde kırar.
              </div>
            </div>

          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slide21;

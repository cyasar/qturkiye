import React, { useState } from 'react';
import Slide from '../components/layout/Slide';
import Equation from '../components/ui/Equation';
import DeepDive from '../components/ui/DeepDive';
import WaveInterference from '../components/interactive/WaveInterference';

const Slide18: React.FC = () => {
  const [phaseShift, setPhaseShift] = useState(0);
  return (
    <Slide title="Fiziksel ve Matematiksel Derinlik: QFT" notes="Shor algoritmasının asıl kalbi olan QFT'nin fiziğini (yapıcı/yıkıcı girişim) anlat.">
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflowY: 'auto', paddingRight: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
          
          <p style={{ fontSize: '1.2rem', textAlign: 'center', margin: '0 auto', maxWidth: '900px' }}>
            Önceki slaytta <Equation math="r=6" display={false} /> periyodunu bulduk. Peki kuantum bilgisayar <strong>milyarlarca ihtimal arasından</strong> bu "6" sayısını tek seferde fiziksel olarak nasıl buluyor? Cevap: <strong>Kuantum Fourier Dönüşümü (QFT)</strong>.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1rem' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', borderTop: '4px solid var(--accent-yellow)' }}>
                <h3 style={{ color: 'var(--accent-yellow)', marginBottom: '1rem' }}>Dalgaların Fiziği (Interference)</h3>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
                  Fonksiyonu süperpozisyonda çalıştırdığımızda elimizde sadece belirli aralıklarla (periyot kadar) yükselen <strong>ayrık kuantum dalgaları</strong> oluşur.
                  QFT bu dalgalara karmaşık fazlar verir.
                </p>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
                  Fazlar uyuşursa <strong>Yapıcı Girişim</strong> olur. Uyuşmazsa <strong>Yıkıcı Girişim</strong> ile sönümler ve geriye sadece gerçek periyodu gösteren tek bir dev dalga kalır!
                </p>
              </div>

              {/* Interaktif Dalga Girişimi Bileşeni */}
              <WaveInterference phaseShift={phaseShift} setPhaseShift={setPhaseShift} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>QFT Operatörü & Dalga Eşleşmesi</h4>
                <p style={{ margin: '0 0 1rem 0', fontSize: '1rem', color: 'var(--text-muted)' }}>
                  Her bir <Equation math="|x\rangle" display={false} /> durumu, birim üniter matris ile yeni bir dalga süperpozisyonuna çevrilir:
                </p>
                <div style={{ background: 'rgba(0,0,0,0.4)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <Equation math="QFT|x\rangle = \frac{1}{\sqrt{N}} \sum_{y=0}^{N-1} \textcolor{#eab308}{e}^{\textcolor{#10b981}{2\pi i} \textcolor{#3b82f6}{\frac{xy}{N}}} |y\rangle" />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.95rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '35px', textAlign: 'center', color: '#eab308', fontWeight: 'bold', fontSize: '1.1rem' }}><Equation math="e" display={false}/></div>
                    <div style={{ color: 'var(--text-muted)', paddingTop: '0.1rem' }}><strong>Dalga Rotasyonu:</strong> Kompleks düzlemdeki dairesel hareketi temsil eder.</div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '35px', textAlign: 'center', color: '#10b981', fontWeight: 'bold', fontSize: '1.1rem' }}><Equation math="2\pi i" display={false}/></div>
                    <div style={{ color: 'var(--text-muted)', paddingTop: '0.1rem' }}><strong>Tam Döngü:</strong> 360 derecelik (dalga boyu) tam bir periyodu belirler.</div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '35px', textAlign: 'center', color: '#3b82f6', fontWeight: 'bold', fontSize: '1.1rem' }}><Equation math="\frac{xy}{N}" display={false}/></div>
                    <div style={{ color: 'var(--text-muted)', paddingTop: '0.1rem' }}><strong>Faz Frekansı (Matrix Modeli):</strong> Matrisin <Equation math="(x,y)" display={false}/> koordinatında dalganın ne kadar (faz açısı) kayacağını belirler. Soldaki kaydırıcı (Phase Shift) tam olarak buna müdahale eder.</div>
                  </div>
                </div>

                <div style={{ marginTop: '1rem', background: 'rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '8px', textAlign: 'center', fontSize: '0.9rem' }}>
                  <strong>Matris Gösterimi: </strong> 
                  <Equation math="F_{xy} = \frac{1}{\sqrt{N}} \omega^{xy}" display={false} />  <span style={{ color: 'var(--text-muted)', marginLeft: '0.5rem' }}>( <Equation math="\omega = e^{2\pi i / N}" display={false}/> )</span>
                </div>
              </div>

              <DeepDive title="Faz İptali (Phase Cancellation)">
                <p style={{ fontSize: '0.95rem' }}>
                  Euler formülü <Equation math="e^{i\theta} = \cos\theta + i\sin\theta" display={false} /> sayesinde, periyotla eşleşmeyen <Equation math="y" display={false} /> değerleri için kompleks düzlemdeki faz okları (<Equation math="\theta" display={false} />) 360 derece etrafına eşit şekilde dağılır. 
                </p>
                <p style={{ fontSize: '0.95rem' }}>
                  Simetri gereği, matris çarpımında bu okların vektörel toplamı tam olarak <strong>SIFIR</strong> eder (Olasılık kaybolur). Sadece tam katlarında oklar aynı yöne bakar ve genlik toplanarak devasa boyutlara ulaşır.
                </p>
              </DeepDive>
            </div>

          </div>
          
        </div>
      </div>
    </Slide>
  );
};

export default Slide18;

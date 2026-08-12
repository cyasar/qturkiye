import React from 'react';
import Slide from '../components/layout/Slide';
import Equation from '../components/ui/Equation';
import DiffusionSimulator from '../components/interactive/DiffusionSimulator';
import DeepDive from '../components/ui/DeepDive';

const Slide11: React.FC = () => {
  return (
    <Slide title="Adım 2: Difüzyon (Ortalamaya Göre Tersini Alma)" notes="Grover algoritmasındaki difüzyon adımının negatif genliği nasıl kocaman bir pozitif genliğe dönüştürdüğünü göster.">
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflowY: 'auto', paddingRight: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
          
          <p style={{ fontSize: '1.2rem', textAlign: 'center', margin: '0 auto', maxWidth: '900px' }}>
            Oracle ile aradığımız cevabı işaretledik (fazını -1 yaptık) ama bu yeterli değil! Ölçüm yaptığımızda olasılıklar genliğin karesidir: <Equation math="|-1|^2 = |1|^2" display={false} />. Yani doğru cevabı bulma ihtimalimiz henüz artmadı. İşte tam burada <strong>Difüzyon Operatörü</strong> devreye girer.
          </p>

          <DiffusionSimulator />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-green)' }}>
              <h4 style={{ color: 'var(--accent-green)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Matematiksel Sihir: Genlik Büyütme (Amplitude Amplification)</h4>
              <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
                Difüzyon operatörü tüm sistemin ortalama genliğini hesaplar ve <strong>her ihtimalin genliğini bu ortalamaya göre tersine çevirir</strong> (Inversion about the mean). Diğer tüm ihtimaller ortalamanın biraz üzerindeyken ters dönüp küçülürler. Ancak Oracle tarafından dibe vurulmuş (negatif) olan doğru cevabımız, ortalamaya çok uzak olduğu için ters dönünce <strong>devvasa bir şekilde fırlar!</strong>
              </p>
            </div>
          </div>

          <DeepDive title="Matematiksel Derinlik (Difüzyon Operatörü)">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Matematiksel Tanım</h4>
                <p>Difüzyon (Grover) operatörü <Equation math="U_s" display={false}/>, eşit süperpozisyon durumuna (<Equation math="|s\rangle" display={false}/>) göre yansıma (reflection) işlemi yapar:</p>
                <Equation math="U_s = 2|s\rangle\langle s| - I" />
                <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>Buradaki <Equation math="I" display={false}/> birim matristir. Bu operatör geometrik olarak uzayda bir yansıma hareketini temsil eder.</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--accent-green)', marginBottom: '0.5rem' }}>Ortalamaya Göre Ters Çevirme</h4>
                <p>Bu matrisin genlikler (amplitudes) üzerindeki matematiksel etkisi çok basittir. Sistemin ortalama genliğini <Equation math="\mu" display={false}/> kabul edersek, her bir <Equation math="\alpha_i" display={false}/> genliği şu formülle güncellenir:</p>
                <Equation math="\alpha_i' = 2\mu - \alpha_i" />
                <div style={{ marginTop: '0.5rem', padding: '0.8rem', background: 'rgba(0,0,0,0.2)', borderLeft: '3px solid var(--accent-green)', fontSize: '0.9rem' }}>
                  <strong>Nasıl Çalışır?</strong> Eğer <Equation math="\alpha_i" display={false}/> ortalamanın altındaysa (örneğin Oracle sonrası eksi olan hedefimiz), denklem onu ortalamanın çok üstüne çıkarır!
                </div>
              </div>
            </div>
          </DeepDive>

        </div>
      </div>
    </Slide>
  );
};

export default Slide11;

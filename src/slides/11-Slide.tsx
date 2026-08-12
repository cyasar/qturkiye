import React from 'react';
import Slide from '../components/layout/Slide';
import Equation from '../components/ui/Equation';
import OracleSimulator from '../components/interactive/OracleSimulator';
import DeepDive from '../components/ui/DeepDive';

const Slide10: React.FC = () => {
  return (
    <Slide title="Adım 1: Oracle (Kara Kutu) ile Hedefi İşaretlemek" notes="Kuantum Oracle'ın ne olduğunu ve sadece doğru cevabın fazını nasıl -1 yaptığını anlat.">
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflowY: 'auto', paddingRight: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
          
          <p style={{ fontSize: '1.2rem', textAlign: 'center', margin: '0 auto', maxWidth: '900px' }}>
            Grover algoritmasının ilk adımı, aradığımız doğru cevabı işaretlemektir. Bilgisayar cevabın nerede olduğunu bilmez! Bunun için girdiğimiz herhangi bir duruma bakıp <em>"bu aradığım şey mi?"</em> diye test eden matematiksel bir <strong>Oracle (Kara Kutu)</strong> fonksiyonu kullanılır.
          </p>

          <OracleSimulator />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-pink)' }}>
            <h4 style={{ color: 'var(--accent-pink)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Faz Geri Dönüşü (Phase Kickback) Sırrı</h4>
            <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
              Oracle, doğru cevabın hangisi olduğunu bulduğunda onun olasılığını <strong>arttıramaz</strong>. Sadece matematiksel bir işaret bırakır: Doğru cevabın fazını <Equation math="\pi" display={false} /> (180 derece) döndürerek eksi (<Equation math="-" display={false} />) yapar. Bu işlem, az önce gördüğümüz <strong>Yıkıcı Girişim</strong> (Destructive Interference) mekanizmasının ilk adımıdır!
            </p>
          </div>
        </div>

        <DeepDive title="Matematiksel Derinlik (Oracle Operatörü ve Matris Gösterimi)">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Matematiksel Tanım</h4>
              <p>Oracle (Kara Kutu) <Equation math="U_f" display={false}/>, durumları bir fonksiyon <Equation math="f(x)" display={false}/>'e göre işaretler. Aradığımız doğru cevap (hedef) için <Equation math="f(x)=1" display={false}/>, diğer tüm yanlış cevaplar için <Equation math="f(x)=0" display={false}/>'dır:</p>
              <Equation math="U_f |x\rangle = (-1)^{f(x)} |x\rangle" />
              
              <h4 style={{ color: 'var(--primary)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Birim Matris ile Gösterim</h4>
              <p>Hedef durumumuzu <Equation math="|x^*\rangle" display={false}/> ile gösterirsek, Oracle operatörü aslında şu matris işlemidir:</p>
              <Equation math="U_f = I - 2|x^*\rangle\langle x^*|" />
            </div>
            <div>
              <h4 style={{ color: 'var(--accent-pink)', marginBottom: '0.5rem' }}>Süperpozisyona Etkisi (İspat)</h4>
              <p>Bu operatörü herhangi bir genel dalga durumuna (<Equation math="|\psi\rangle" display={false}/>) uyguladığımızda ne olduğunu iç çarpım (<Equation math="\langle x^*|\psi\rangle" display={false}/>) ile görebiliriz:</p>
              <Equation math="U_f |\psi\rangle = (I - 2|x^*\rangle\langle x^*|) |\psi\rangle = |\psi\rangle - 2|x^*\rangle \langle x^*|\psi\rangle" />
              <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(0,0,0,0.2)', borderLeft: '3px solid var(--accent-pink)', fontSize: '0.95rem' }}>
                <strong>Sonuç:</strong> Dalga durumundaki (<Equation math="|\psi\rangle" display={false}/>) hedef bileşenden kendisinin 2 katını çıkartmış oluyoruz (<Equation math="1 - 2 = -1" display={false}/>). Bu sayede hedefin işareti eksiye (yıkıcı faza) dönerken, hedefe dik (ortogonal) olan diğer tüm durumlar için iç çarpım 0 olduğundan hiç etkilenmeden kalırlar!
              </div>
            </div>
          </div>
        </DeepDive>

        </div>
      </div>
    </Slide>
  );
};

export default Slide10;

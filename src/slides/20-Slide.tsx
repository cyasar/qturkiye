import React from 'react';
import Slide from '../components/layout/Slide';
import Equation from '../components/ui/Equation';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Slide20: React.FC = () => {
  // N=64 qubits space for simplicity, period r=6
  // Zirveler (Peaks): k * (N_toplam / r) = k * (64 / 6) = 0, 11, 21, 32, 43, 53
  const data = Array.from({ length: 64 }, (_, i) => {
    const peaks = [0, 11, 21, 32, 43, 53];
    let prob = Math.random() * 0.02; // Noise
    if (peaks.includes(i)) prob = 0.85 + Math.random() * 0.1;
    else if (peaks.some(p => Math.abs(p - i) === 1)) prob = 0.15 + Math.random() * 0.1;
    
    return { 
      state: `|${i}⟩`, 
      Olasılık: prob 
    };
  });

  return (
    <Slide title="N=21 İçin QFT'nin Uygulanması" notes="N=21 örneğinde f(x)=2^x mod 21 ile bulunan r=6 periyodunun QFT ile nasıl olasılık zirvelerine dönüştüğünü göster.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', justifyContent: 'center' }}>
        
        <p style={{ fontSize: '1.2rem', textAlign: 'center', margin: '0 auto', maxWidth: '950px' }}>
          <Equation math="f(x) = 2^x \pmod{21}" display={false} /> fonksiyonunu hatırlayalım. <Equation math="r=6" display={false} /> periyodunu bulmak için 
          devreye QFT'yi soktuğumuzda neler yaşanıyor adım adım görelim:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="glass" style={{ padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-yellow)' }}>
              <h4 style={{ color: 'var(--accent-yellow)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>1. Süperpozisyonun Çökmesi</h4>
              <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '1.05rem' }}>
                Fonksiyon değerini ölçtüğümüzde (örneğin sonuç <strong>2</strong> çıksın), giriş yazmacı sadece bu sonucu veren <Equation math="x" display={false} /> değerlerine çöker:
                <br/><br/>
                <div style={{ textAlign: 'center', background: 'rgba(0,0,0,0.3)', padding: '0.8rem', borderRadius: '4px' }}>
                  <Equation math="|\psi\rangle = |1\rangle + |7\rangle + |13\rangle + |19\rangle + \dots" display={false} />
                </div>
                <br/>
                Bu yeni durum tam olarak <strong>6</strong> birimlik mesafelerle tekrar eden kusursuz bir frekansa sahiptir.
              </p>
            </div>
            
            <div className="glass" style={{ padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>2. QFT ile Fazların Hizalanması</h4>
              <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '1.05rem' }}>
                Bu periyodik duruma QFT uyguladığımızda, QFT'nin formülündeki <Equation math="e^{2\pi i \frac{xy}{N}}" display={false}/> terimi devreye girer. <Equation math="y" display={false}/> değeri, periyodun <strong>(r=6)</strong> katlarıyla eşleştiğinde dalgaların dönüşleri üst üste biner (Yapıcı Girişim). Diğer tüm <Equation math="y" display={false}/> değerlerinde ise birbirini sıfırlar.
              </p>
            </div>
          </div>

          <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(0,0,0,0.4)', height: '100%' }}>
            <h4 style={{ color: '#fff', marginBottom: '1rem' }}>QFT Sonrası Olasılık Dağılımı</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem', textAlign: 'center' }}>
              Grafikte görüldüğü gibi, milyarlarca ihtimal arasından sadece belirli frekanslar (Zirveler) hayatta kalır. Bu zirvelerin aralığı doğrudan <Equation math="r=6" display={false}/> değerini verir!
            </p>
            
            <div style={{ width: '100%', height: '250px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="state" tick={{fill: 'var(--text-muted)', fontSize: 10}} interval={5} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid var(--primary)' }}
                    itemStyle={{ color: 'var(--primary)' }}
                  />
                  <Bar dataKey="Olasılık" fill="var(--primary)" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </Slide>
  );
};

export default Slide20;

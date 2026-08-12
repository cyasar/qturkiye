import React from 'react';
import Slide from '../components/layout/Slide';
import { Activity, ArrowRight, Waves } from 'lucide-react';
import Equation from '../components/ui/Equation';
import { motion } from 'framer-motion';

const Slide16: React.FC = () => {
  return (
    <Slide title="Shor Algoritmasının Sırrı: Periyot Bulma (QFT)" notes="Asal çarpanlara ayırmanın nasıl periyot bulmaya dönüştüğünü ve QFT'nin rolünü anlat.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', justifyContent: 'center' }}>
        
        <p style={{ fontSize: '1.2rem', textAlign: 'center', margin: '0 auto', maxWidth: '950px' }}>
          Shor algoritması sayıları doğrudan bölerek asal çarpanlarına ayırmaz. Klasik olarak çözülemeyen bu problemi, kuantum dalgalarının çok iyi çözdüğü bir <strong>"frekans/periyot bulma"</strong> problemine dönüştürür.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '1rem', alignItems: 'center' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="glass" style={{ padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>1. Modüler Üs Alma (Süperpozisyon)</h4>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                Önce tüm ihtimaller aynı anda hesaplanarak <Equation math="f(x) = a^x \pmod N" display={false} /> fonksiyonu oluşturulur. Bu fonksiyon bir süre sonra <strong>kendini tekrar eden (periyodik)</strong> bir yapıya sahiptir.
              </p>
            </div>
            <div className="glass" style={{ padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-yellow)' }}>
              <h4 style={{ color: 'var(--accent-yellow)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>2. Kuantum Fourier Dönüşümü (QFT)</h4>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                Karmaşık kuantum dalgasına QFT uygulanır. Tıpkı bir prizmanın beyaz ışığı renklere (frekanslara) ayırması gibi, QFT de bu tekrar eden gizli yapıyı (periyodu) tek bir <strong>yüksek olasılıklı pika</strong> dönüştürür.
              </p>
            </div>
            <div className="glass" style={{ padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-green)' }}>
              <h4 style={{ color: 'var(--accent-green)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>3. Klasik Çözüm (Çarpanlar)</h4>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                Kuantum bilgisayar bize sadece bu <Equation math="r" display={false}/> periyodunu söyler. Klasik bir bilgisayar bu periyodu kullanarak asıl şifreyi (çarpanları) saniyeler içinde bulur.
              </p>
            </div>
          </div>

          <div className="glass" style={{ padding: '2rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(0,0,0,0.4)' }}>
            
            <h4 style={{ color: '#fff', marginBottom: '2rem' }}>QFT ile Faz Girişimi</h4>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', justifyContent: 'center' }}>
              
              <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '100px' }}>
                {[30, 80, 20, 30, 80, 20, 30, 80, 20].map((h, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: [h, h+20, h] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
                    style={{ width: '15px', background: 'var(--primary)', borderRadius: '2px' }}
                  />
                ))}
              </div>

              <ArrowRight size={32} color="var(--text-muted)" />
              
              <div style={{ background: 'rgba(234, 179, 8, 0.2)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--accent-yellow)' }}>
                <Waves size={40} color="var(--accent-yellow)" />
                <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--accent-yellow)' }}>QFT</div>
              </div>

              <ArrowRight size={32} color="var(--text-muted)" />

              <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '100px' }}>
                {[5, 5, 5, 5, 95, 5, 5, 5, 5].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 5 }}
                    animate={{ height: h }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ width: '15px', background: i === 4 ? 'var(--accent-green)' : 'rgba(255,255,255,0.1)', borderRadius: '2px', boxShadow: i === 4 ? '0 0 10px var(--accent-green)' : 'none' }}
                  />
                ))}
              </div>

            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem', padding: '0 1rem' }}>
              <span>Karmaşık Periyodik Dalga</span>
              <span></span>
              <span style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>Tek Bir Ölçülebilir Periyot ($r$)</span>
            </div>

          </div>

        </div>

      </div>
    </Slide>
  );
};

export default Slide16;

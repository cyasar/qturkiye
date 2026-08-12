import React from 'react';
import Slide from '../components/layout/Slide';
import { motion } from 'framer-motion';
import { ShieldAlert, Stethoscope, LineChart } from 'lucide-react';

const Slide32: React.FC = () => {
  const cases = [
    {
      icon: <ShieldAlert size={48} color="var(--accent-pink)" />,
      title: "Finansal Dolandırıcılık Tespiti",
      desc: "Kredi kartı sahtekarlıklarında normal işlemler ile dolandırıcılar birbirine çok benzer. QML'in yüksek boyutlu uzayı, bu ikisini birbirinden çok daha net bir sınırla (hyperplane) ayırabilir."
    },
    {
      icon: <Stethoscope size={48} color="var(--accent-green)" />,
      title: "Tıbbi Görüntüleme & DNA",
      desc: "Kanserli hücrelerin tespiti veya karmaşık genetik dizilimlerin sınıflandırılması gibi devasa veriler içeren işlemlerde, kuantum durumlarının üstel veri tutma kapasitesinden yararlanılır."
    },
    {
      icon: <LineChart size={48} color="var(--accent-yellow)" />,
      title: "Borsa & Risk Analizi",
      desc: "Piyasa koşullarındaki gizli korelasyonları ve çok değişkenli örüntüleri (patterns) klasik algoritmaların bulamayacağı şekilde algılayarak portföy risk analizini optimize eder."
    }
  ];

  return (
    <Slide title="QML: Gerçek Dünyada Neleri Değiştirecek?" notes="Uygulama alanlarına örnek vererek QML konusunu bağla.">
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', gap: '3rem' }}>
        
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-muted)', margin: 0 }}>
          Neden yapay zekayı kuantum bilgisayarlara taşıyoruz? Çünkü klasik bilgisayarların sınırlarına ulaştığı karmaşıklık noktalarında, kuantum <strong>yepyeni ufuklar</strong> açıyor.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {cases.map((c, idx) => (
            <motion.div 
              key={idx}
              className="glass"
              style={{ padding: '2.5rem 1.5rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              {c.icon}
              <h3 style={{ color: '#fff', margin: 0, fontSize: '1.2rem' }}>{c.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem', margin: 0 }}>
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </Slide>
  );
};

export default Slide32;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Equation from '../ui/Equation';

const routes = [
  { id: 'A', name: 'A Yolu (Otoyol)', time: 1.5, cost: 450, color: '#ec4899', d: 'M 50,150 Q 250,20 450,150' },
  { id: 'B', name: 'B Yolu (Devlet Yolu)', time: 3.0, cost: 0, color: '#00d2ff', d: 'M 50,150 L 450,150' },
  { id: 'C', name: 'C Yolu (Vapur)', time: 2.5, cost: 600, color: '#facc15', d: 'M 50,150 Q 250,280 450,150' },
];

const MathModelingGraph: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<string>('A');

  const activeRoute = routes.find(r => r.id === selectedRoute) || routes[0];
  const isValid = activeRoute.cost <= 500;

  return (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
      
      {/* Sol Taraf: İnteraktif SVG Grafik */}
      <div style={{ flex: 1, position: 'relative', height: '220px' }}>
        <svg width="100%" height="100%" viewBox="0 0 500 300" style={{ overflow: 'visible' }}>
          
          {/* Rotalar */}
          {routes.map(route => {
            const isActive = selectedRoute === route.id;
            return (
              <g key={route.id} onClick={() => setSelectedRoute(route.id)} style={{ cursor: 'pointer' }}>
                {/* Hitbox for easier clicking */}
                <path d={route.d} fill="none" stroke="transparent" strokeWidth="30" />
                
                {/* Görünür Çizgi */}
                <motion.path 
                  d={route.d} 
                  fill="none" 
                  stroke={isActive ? route.color : 'rgba(255,255,255,0.1)'} 
                  strokeWidth={isActive ? 6 : 3}
                  strokeDasharray={isActive ? "0" : "8 8"}
                  animate={{ 
                    strokeWidth: isActive ? 6 : 3,
                    opacity: isActive ? 1 : 0.5
                  }}
                  whileHover={{ opacity: 1, strokeWidth: 5 }}
                />
              </g>
            );
          })}

          {/* Düğümler */}
          <circle cx="50" cy="150" r="12" fill="var(--primary)" />
          <text x="50" y="180" fill="white" fontSize="14" textAnchor="middle" fontWeight="bold">Çanakkale</text>
          
          <circle cx="450" cy="150" r="12" fill="var(--accent-pink)" />
          <text x="450" y="180" fill="white" fontSize="14" textAnchor="middle" fontWeight="bold">İstanbul</text>
          
          {/* Etiketler (Sadece aktif rota için daha belirgin) */}
          {routes.map(route => {
            const isActive = selectedRoute === route.id;
            // Etiketi eğrinin ortasına yerleştirmek için basit bir y tahmini
            const labelY = route.id === 'A' ? 70 : (route.id === 'B' ? 145 : 230);
            
            return (
              <motion.g 
                key={`label-${route.id}`}
                initial={false}
                animate={{ 
                  opacity: isActive ? 1 : 0.4,
                  scale: isActive ? 1.1 : 1
                }}
                style={{ pointerEvents: 'none' }}
              >
                <rect x="200" y={labelY - 15} width="100" height="30" rx="15" fill={route.color} opacity="0.2" />
                <text x="250" y={labelY + 4} fill={isActive ? '#fff' : route.color} fontSize="14" textAnchor="middle" fontWeight="bold">
                  {route.name}
                </text>
              </motion.g>
            );
          })}
        </svg>
      </div>

      {/* Sağ Taraf: Canlı Matematiksel Model */}
      <div style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h4 style={{ color: 'var(--accent-yellow)', margin: 0, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
          Canlı Model (Karar: {selectedRoute} Yolu)
        </h4>
        
        {/* Karar Değişkenleri Durumu */}
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.8rem', borderRadius: '8px' }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Değişkenler:</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem' }}>
            <span style={{ color: selectedRoute === 'A' ? routes[0].color : '#555' }}><Equation math={`x_A = ${selectedRoute === 'A' ? '1' : '0'}`} display={false} /></span>
            <span style={{ color: selectedRoute === 'B' ? routes[1].color : '#555' }}><Equation math={`x_B = ${selectedRoute === 'B' ? '1' : '0'}`} display={false} /></span>
            <span style={{ color: selectedRoute === 'C' ? routes[2].color : '#555' }}><Equation math={`x_C = ${selectedRoute === 'C' ? '1' : '0'}`} display={false} /></span>
          </div>
        </div>

        {/* Amaç Fonksiyonu (Süre) */}
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.8rem', borderRadius: '8px' }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Amaç (Min Süre):</div>
          <div style={{ fontSize: '1.2rem', color: '#fff' }}>
            {activeRoute.time} Saat
          </div>
        </div>

        {/* Kısıt Kontrolü (Maliyet) */}
        <div style={{ background: isValid ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', borderLeft: `4px solid ${isValid ? '#10b981' : '#ef4444'}`, padding: '0.8rem', borderRadius: '8px' }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Bütçe Kısıtı (≤ 500 TL):</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '1.2rem', color: isValid ? '#10b981' : '#ef4444', fontWeight: 'bold' }}>
              {activeRoute.cost} TL
            </span>
            <span style={{ fontSize: '1.2rem' }}>
              {isValid ? '✅ Uygun' : '❌ İhlal!'}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MathModelingGraph;

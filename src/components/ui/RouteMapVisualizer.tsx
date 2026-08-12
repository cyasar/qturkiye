import React from 'react';
import { motion } from 'framer-motion';

const RouteMapVisualizer: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '180px', marginBottom: '0.5rem', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
      <svg width="100%" height="100%" viewBox="0 0 500 250">
        
        {/* En Kısa Yol (Mesafe) */}
        <motion.path 
          d="M 100,200 L 400,50" 
          fill="none" 
          stroke="#00d2ff" 
          strokeWidth="4" 
          strokeDasharray="8 8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
        
        {/* En Hızlı Yol (Süre) */}
        <motion.path 
          d="M 100,200 Q 200,80 400,50" 
          fill="none" 
          stroke="#ec4899" 
          strokeWidth="5" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        {/* En Ucuz Yol (Maliyet) */}
        <motion.path 
          d="M 100,200 Q 300,280 400,50" 
          fill="none" 
          stroke="#facc15" 
          strokeWidth="3" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
        
        {/* Çanakkale Node */}
        <circle cx="100" cy="200" r="10" fill="var(--primary)" />
        <circle cx="100" cy="200" r="18" fill="none" stroke="var(--primary)" strokeWidth="2" opacity="0.5" />
        <text x="100" y="230" fill="white" fontSize="16" textAnchor="middle" fontWeight="bold">Çanakkale</text>
        
        {/* İstanbul Node */}
        <circle cx="400" cy="50" r="10" fill="var(--accent-pink)" />
        <circle cx="400" cy="50" r="18" fill="none" stroke="var(--accent-pink)" strokeWidth="2" opacity="0.5" />
        <text x="400" y="30" fill="white" fontSize="16" textAnchor="middle" fontWeight="bold">İstanbul</text>
        
        {/* Etiketler */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
          {/* Hızlı */}
          <rect x="200" y="100" width="60" height="24" rx="12" fill="#ec4899" opacity="0.2" />
          <text x="230" y="116" fill="#ec4899" fontSize="12" textAnchor="middle" fontWeight="bold">🚀 Hızlı</text>
          
          {/* Kısa */}
          <rect x="230" y="145" width="60" height="24" rx="12" fill="#00d2ff" opacity="0.2" />
          <text x="260" y="161" fill="#00d2ff" fontSize="12" textAnchor="middle" fontWeight="bold">📏 Kısa</text>
          
          {/* Ucuz */}
          <rect x="300" y="195" width="60" height="24" rx="12" fill="#facc15" opacity="0.2" />
          <text x="330" y="211" fill="#facc15" fontSize="12" textAnchor="middle" fontWeight="bold">💰 Ucuz</text>
        </motion.g>

      </svg>
    </div>
  );
};

export default RouteMapVisualizer;

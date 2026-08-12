import React, { useState } from 'react';
import './BlochSphere.css';
import Equation from '../ui/Equation';

interface BlochSphereProps {
  initialTheta?: number;
  initialPhi?: number;
}

const BlochSphere: React.FC<BlochSphereProps> = ({ initialTheta = Math.PI / 2, initialPhi = Math.PI / 4 }) => {
  const [theta, setTheta] = useState(initialTheta);
  const [phi, setPhi] = useState(initialPhi);

  const R = 120; // Sphere radius

  // 3D to 2D Isometric-style Projection
  // Z is up (negative Y in SVG)
  // X is out/left
  // Y is out/right
  const project = (x: number, y: number, z: number) => {
    // X and Y axes in 2D
    const px = y * 0.85 - x * 0.85;
    const py = -z * 1.0 + x * 0.35 + y * 0.35;
    return { px, py };
  };

  // Generate an SVG path from an array of 3D points
  const generatePath = (points: [number, number, number][]) => {
    return points.map((p, i) => {
      const { px, py } = project(p[0], p[1], p[2]);
      return `${i === 0 ? 'M' : 'L'} ${px} ${py}`;
    }).join(' ');
  };

  // Qubit vector in 3D
  const qx = R * Math.sin(theta) * Math.cos(phi);
  const qy = R * Math.sin(theta) * Math.sin(phi);
  const qz = R * Math.cos(theta);

  // Projected Vector
  const pQubit = project(qx, qy, qz);
  
  // Projected XY plane point (for the dashed vertical line)
  const pXY = project(qx, qy, 0);

  // Generate Theta Arc (from Z-axis to Qubit)
  const thetaPoints: [number, number, number][] = [];
  for (let i = 0; i <= theta; i += 0.05) {
    thetaPoints.push([
      R * 0.3 * Math.sin(i) * Math.cos(phi),
      R * 0.3 * Math.sin(i) * Math.sin(phi),
      R * 0.3 * Math.cos(i)
    ]);
  }
  const thetaPath = generatePath(thetaPoints);
  // Get middle point of theta arc for label
  const thetaLabel = project(
    R * 0.4 * Math.sin(theta / 2) * Math.cos(phi),
    R * 0.4 * Math.sin(theta / 2) * Math.sin(phi),
    R * 0.4 * Math.cos(theta / 2)
  );

  // Generate Phi Arc (from X-axis to Qubit's XY projection)
  const phiPoints: [number, number, number][] = [];
  for (let i = 0; i <= phi; i += 0.05) {
    phiPoints.push([
      R * 0.4 * Math.cos(i),
      R * 0.4 * Math.sin(i),
      0
    ]);
  }
  const phiPath = generatePath(phiPoints);
  // Get middle point of phi arc for label
  const phiLabel = project(
    R * 0.5 * Math.cos(phi / 2),
    R * 0.5 * Math.sin(phi / 2),
    0
  );

  // Equator Path
  const equatorPoints: [number, number, number][] = [];
  for (let i = 0; i <= Math.PI * 2 + 0.1; i += 0.1) {
    equatorPoints.push([R * Math.cos(i), R * Math.sin(i), 0]);
  }
  const equatorPath = generatePath(equatorPoints);

  // Axes projections
  const pZTop = project(0, 0, R);
  const pZBot = project(0, 0, -R);
  const pXPos = project(R, 0, 0);
  const pXNeg = project(-R, 0, 0);
  const pYPos = project(0, R, 0);
  const pYNeg = project(0, -R, 0);

  const alpha = Math.cos(theta / 2).toFixed(2);
  const beta = Math.sin(theta / 2).toFixed(2);
  const phase = (phi / Math.PI).toFixed(2);
  
  const latexState = `|\\psi\\rangle = ${alpha}|0\\rangle + e^{i ${phase}\\pi} ${beta}|1\\rangle`;

  return (
    <div className="bloch-container glass" style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', padding: '2rem' }}>
      
      {/* 3D SVG Engine */}
      <div className="bloch-sphere-svg-container" style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
        <svg width="340" height="340" viewBox="-170 -170 340 340" style={{ overflow: 'visible' }}>
          
          {/* Sphere Outline */}
          <circle cx="0" cy="0" r={R} fill="rgba(0, 210, 255, 0.05)" stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 4" />
          
          {/* Equator */}
          <path d={equatorPath} fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
          
          {/* Axes */}
          <line x1={pZBot.px} y1={pZBot.py} x2={pZTop.px} y2={pZTop.py} stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" /> {/* Z */}
          <line x1={pXNeg.px} y1={pXNeg.py} x2={pXPos.px} y2={pXPos.py} stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" /> {/* X */}
          <line x1={pYNeg.px} y1={pYNeg.py} x2={pYPos.px} y2={pYPos.py} stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" /> {/* Y */}
          
          {/* Axis Labels */}
          <text x={pZTop.px} y={pZTop.py - 10} fill="white" fontSize="14" textAnchor="middle">|0⟩</text>
          <text x={pZBot.px} y={pZBot.py + 20} fill="white" fontSize="14" textAnchor="middle">|1⟩</text>
          <text x={pXPos.px - 15} y={pXPos.py + 15} fill="white" fontSize="12">X</text>
          <text x={pYPos.px + 10} y={pYPos.py + 5} fill="white" fontSize="12">Y</text>

          {/* Qubit Vector Projections (Dashed lines to XY plane) */}
          <line x1="0" y1="0" x2={pXY.px} y2={pXY.py} stroke="var(--accent-pink)" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
          <line x1={pXY.px} y1={pXY.py} x2={pQubit.px} y2={pQubit.py} stroke="var(--accent-pink)" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
          
          {/* Theta Arc & Label */}
          {theta > 0 && (
            <>
              <path d={thetaPath} fill="none" stroke="var(--accent-yellow)" strokeWidth="2" />
              <text x={thetaLabel.px} y={thetaLabel.py - 5} fill="var(--accent-yellow)" fontSize="14" fontWeight="bold">θ</text>
            </>
          )}

          {/* Phi Arc & Label */}
          {phi > 0 && theta > 0 && (
            <>
              <path d={phiPath} fill="none" stroke="var(--primary)" strokeWidth="2" />
              <text x={phiLabel.px} y={phiLabel.py + 15} fill="var(--primary)" fontSize="14" fontWeight="bold">φ</text>
            </>
          )}

          {/* Qubit State Vector */}
          <line x1="0" y1="0" x2={pQubit.px} y2={pQubit.py} stroke="var(--accent-pink)" strokeWidth="4" markerEnd="url(#arrowhead)" />
          <circle cx={pQubit.px} cy={pQubit.py} r="4" fill="var(--accent-pink)" />
          
          {/* Arrow head definition */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent-pink)" />
            </marker>
          </defs>
        </svg>
      </div>

      <div className="bloch-controls" style={{ flex: '1', minWidth: '300px' }}>
        <div className="slider-group">
          <label style={{ color: 'var(--accent-yellow)', fontWeight: 'bold' }}>θ (Theta): Dikey Açı (Süperpozisyon)</label>
          <input 
            type="range" 
            min="0" max={Math.PI} step="0.01" 
            value={theta} 
            onChange={(e) => setTheta(parseFloat(e.target.value))} 
          />
          <div className="val" style={{ color: 'var(--accent-yellow)' }}>{(theta / Math.PI).toFixed(2)}π</div>
        </div>
        
        <div className="slider-group">
          <label style={{ color: 'var(--primary)', fontWeight: 'bold' }}>φ (Phi): Yatay Açı (Faz)</label>
          <input 
            type="range" 
            min="0" max={Math.PI * 2} step="0.01" 
            value={phi} 
            onChange={(e) => setPhi(parseFloat(e.target.value))} 
          />
          <div className="val" style={{ color: 'var(--primary)' }}>{(phi / Math.PI).toFixed(2)}π</div>
        </div>

        <div className="state-equation" style={{ marginTop: '2rem', background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
          <Equation math={latexState} />
        </div>
      </div>
    </div>
  );
};

export default BlochSphere;

import React, { useState } from 'react';
import './QuboPlayground.css';

interface Project {
  id: string;
  name: string;
  cost: number;
  value: number;
}

const initialProjects: Project[] = [
  { id: 'x1', name: 'Proje A', cost: 4, value: 8 },
  { id: 'x2', name: 'Proje B', cost: 3, value: 6 },
  { id: 'x3', name: 'Proje C', cost: 5, value: 9 },
  { id: 'x4', name: 'Proje D', cost: 2, value: 4 },
];

const QuboPlayground: React.FC = () => {
  const [budget, setBudget] = useState(7);
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const combinations = Array.from({ length: 16 }, (_, i) => {
    return [
      (i >> 3) & 1, // x1
      (i >> 2) & 1, // x2
      (i >> 1) & 1, // x3
      i & 1         // x4
    ];
  });

  const getResult = (combo: number[]) => {
    let cost = 0;
    let val = 0;
    combo.forEach((bit, idx) => {
      if (bit === 1) {
        cost += projects[idx].cost;
        val += projects[idx].value;
      }
    });
    const valid = cost <= budget;
    return { cost, val, valid };
  };

  // Find optimal valid solution
  let maxVal = -1;
  let bestIdx = -1;
  combinations.forEach((c, idx) => {
    const res = getResult(c);
    if (res.valid && res.val > maxVal) {
      maxVal = res.val;
      bestIdx = idx;
    }
  });

  return (
    <div className="qubo-container">
      <div className="qubo-sidebar glass">
        <h3>Parametreler</h3>
        
        <div className="budget-slider">
          <label>Toplam Bütçe: {budget}</label>
          <input type="range" min="1" max="15" value={budget} onChange={e => setBudget(Number(e.target.value))} />
        </div>

        <div className="projects-list">
          {projects.map((p, i) => (
            <div key={p.id} className="project-editor">
              <strong>{p.name} ({p.id})</strong>
              <div className="inputs">
                <div>
                  <label>Maliyet</label>
                  <input type="number" min="1" max="10" value={p.cost} onChange={e => {
                    const newP = [...projects];
                    newP[i].cost = Number(e.target.value);
                    setProjects(newP);
                  }} />
                </div>
                <div>
                  <label>Fayda</label>
                  <input type="number" min="1" max="20" value={p.value} onChange={e => {
                    const newP = [...projects];
                    newP[i].value = Number(e.target.value);
                    setProjects(newP);
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="qubo-main glass">
        <div className="table-header">
          <div>Seçim (x1,x2,x3,x4)</div>
          <div>Maliyet</div>
          <div>Fayda</div>
          <div>Durum</div>
        </div>
        
        <div className="table-body">
          {combinations.map((c, idx) => {
            const res = getResult(c);
            const isBest = idx === bestIdx;
            
            return (
              <div key={idx} className={`table-row ${res.valid ? 'valid' : 'invalid'} ${isBest ? 'best' : ''}`}>
                <div style={{ fontFamily: 'var(--font-mono)' }}>{c.join('')}</div>
                <div>{res.cost}</div>
                <div>{res.val}</div>
                <div>
                  {res.valid ? 
                    (isBest ? <span className="badge-best">OPTİMUM</span> : <span className="badge-ok">Geçerli</span>) : 
                    <span className="badge-err">Aşıldı</span>
                  }
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuboPlayground;

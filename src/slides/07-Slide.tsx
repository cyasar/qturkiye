import React from 'react';
import Slide from '../components/layout/Slide';
import BlochSphere from '../components/interactive/BlochSphere';
import Equation from '../components/ui/Equation';

const Slide07: React.FC = () => {
  return (
    <Slide title="Bloch Küresi: Qubit'in Geometrisi" notes="İnteraktif laboratuvar. Theta olasılığı değiştirir, Phi ise fazı. Fazın önemini vurgula.">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <p style={{ marginBottom: '2rem' }}>
          Bir qubitin durumunu görselleştirmenin en iyi yolu Bloch küresidir. 
          Lütfen sürgüleri (slider) kullanarak qubit durumunu değiştirin.
        </p>
        
        <BlochSphere />
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap', marginTop: '2rem', padding: '1rem', background: 'rgba(255, 236, 179, 0.1)', borderLeft: '4px solid var(--accent-yellow)', borderRadius: '4px', lineHeight: '1.8' }}>
          <strong>Önemli Gözlem:</strong> 
          <Equation math="\theta" display={false} /> (Theta) açısını değiştirdiğinizde 
          <Equation math="|0\rangle" display={false} /> ve <Equation math="|1\rangle" display={false} /> 
          olma olasılıkları değişir. Ancak <Equation math="\phi" display={false} /> (Phi) açısını değiştirmek olasılıkları 
          <strong>etkilemez!</strong> Peki o zaman faz ne işe yarar?
        </div>
      </div>
    </Slide>
  );
};

export default Slide07;

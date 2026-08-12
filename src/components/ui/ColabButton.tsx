import React from 'react';
import { ExternalLink } from 'lucide-react';
import './ColabButton.css';

interface ColabButtonProps {
  url: string;
  children?: React.ReactNode;
}

const ColabButton: React.FC<ColabButtonProps> = ({ url, children = "Colab'da Canlı Çalıştır" }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="colab-button">
      <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab" className="colab-icon" />
      <span>{children}</span>
      <ExternalLink size={18} className="ext-icon" />
    </a>
  );
};

export default ColabButton;

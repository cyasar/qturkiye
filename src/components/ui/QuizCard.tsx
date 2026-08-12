import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, CheckCircle } from 'lucide-react';
import './QuizCard.css';

interface QuizCardProps {
  question: string;
  answer: React.ReactNode;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, answer }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="quiz-card glass">
      <div className="quiz-question">
        <HelpCircle className="quiz-icon-q" size={28} />
        <h4>{question}</h4>
      </div>
      
      {!revealed ? (
        <button className="quiz-reveal-btn" onClick={() => setRevealed(true)}>
          TAHMİN ET
        </button>
      ) : (
        <motion.div 
          className="quiz-answer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <CheckCircle className="quiz-icon-a" size={24} />
          <div className="answer-content">{answer}</div>
        </motion.div>
      )}
    </div>
  );
};

export default QuizCard;

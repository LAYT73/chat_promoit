import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  animationDelay?: number;
  duration?: number;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  animationDelay = 0.1,
  duration = 0.25,
  className = '',
}) => {
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: duration,
            delay: index * animationDelay,
          }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;

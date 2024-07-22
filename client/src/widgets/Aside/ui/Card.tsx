import React from 'react';
import styles from './Card.module.scss';
import { Paragraph } from '@/shared/ui';

type CardProps = {
  icon: string;
  title: string;
  onClick: () => void;
};

const Card: React.FC<CardProps> = ({ icon, title, onClick }) => {
  return (
    <button className={styles.card} onClick={onClick}>
      <img src={icon} alt={title} className={styles.icon} />
      <Paragraph styleParagraph={styles.title}>{title}</Paragraph>
    </button>
  );
};

export default Card;

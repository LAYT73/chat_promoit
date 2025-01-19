import React from 'react';

import { Paragraph } from '@/shared/ui';

import styles from './Card.module.scss';

type CardProps = {
  icon: string;
  title: string;
  onClick: () => void;
};

/**
 * A Card component that displays an icon and a title, and triggers an action when clicked.
 *
 * @param {string} icon - The URL of the icon to be displayed on the card.
 * @param {string} title - The title text to be displayed on the card.
 * @param {() => void} onClick - The function to be called when the card is clicked.
 * @returns {JSX.Element} A button element containing an image and a paragraph.
 */
const Card: React.FC<CardProps> = ({ icon, title, onClick }) => {
  return (
    <button className={styles.card} onClick={onClick}>
      <img src={icon} alt={title} className={styles.icon} />
      <Paragraph styleParagraph={styles.title}>{title}</Paragraph>
    </button>
  );
};

export default Card;

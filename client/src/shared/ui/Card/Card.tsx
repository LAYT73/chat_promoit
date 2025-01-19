import classNames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';

import styles from './Card.module.scss';
import CardProps from './ICardProps.ts';

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <motion.div
      className={classNames(styles.card, className)}
      transition={{ type: 'spring' }}
      initial={{ y: -20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default Card;

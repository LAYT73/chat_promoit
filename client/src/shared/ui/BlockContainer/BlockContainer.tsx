import React from 'react';
import styles from './Button.module.scss';
import BlockContainerProps from './IBlockContainerProps.ts';
import { motion } from 'framer-motion';

const BlockContainer: React.FC<BlockContainerProps> = ({ children }) => {
  return (
    <motion.div
      className={styles.blockContainer}
      transition={{ type: 'spring' }}
      initial={{ y: -20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default BlockContainer;

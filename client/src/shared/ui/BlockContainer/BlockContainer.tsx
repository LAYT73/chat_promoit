import classNames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';

import styles from './BlockContainer.module.scss';
import BlockContainerProps from './IBlockContainerProps.ts';

const BlockContainer: React.FC<BlockContainerProps> = ({
  children,
  className,
}) => {
  return (
    <motion.div
      className={classNames(styles.blockContainer, className)}
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

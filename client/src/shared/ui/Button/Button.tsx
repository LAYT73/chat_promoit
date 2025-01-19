import classNames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';

import styles from './Button.module.scss';
import ButtonProps from './IButtonProps';

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  primary,
  styleButton,
  children,
  ...args
}) => {
  const buttonClasses = classNames(
    styles.button,
    {
      [styles.primary]: primary,
      [styles.disabled]: disabled,
    },
    styleButton,
  );

  return (
    <motion.div
      transition={{ type: 'spring' }}
      initial={{ y: -20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
    >
      <button
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled}
        {...args}
      >
        {children}
      </button>
    </motion.div>
  );
};

export default Button;

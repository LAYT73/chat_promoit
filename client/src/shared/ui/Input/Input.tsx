import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';
import { InputProps } from '@/shared/ui/Input/IInputProps.ts';
import Info_Circle_Solid from '@/assets/icons/info-circle-solid.svg';
import { motion } from 'framer-motion';

const Input: React.FC<InputProps> = ({ icon, className, hint, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      transition={{ type: 'spring' }}
      initial={{ y: -20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
    >
      <div
        className={classNames(styles.inputContainer, className, {
          [styles.focused]: isFocused,
        })}
      >
        {icon && <img className={styles.icon} src={icon} alt="" />}
        <input
          className={styles.input}
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
      {hint && (
        <div className={styles.hint}>
          <img className={styles.hintIcon} src={Info_Circle_Solid} alt="" />
          <p className={styles.hintText}>{hint}</p>
        </div>
      )}
    </motion.div>
  );
};

export default Input;

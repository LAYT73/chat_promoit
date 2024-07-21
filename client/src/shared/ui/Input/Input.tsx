import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';
import { InputProps } from '@/shared/ui/Input/IInputProps.ts';
import Info_Circle_Solid from '@/assets/icons/info-circle-solid.svg';
import { motion } from 'framer-motion';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, className, hint, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <motion.div
        transition={{ type: 'spring' }}
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      >
        <div
          onBlur={() => {
            setIsFocused(false);
          }}
          onFocus={() => {
            setIsFocused(true);
          }}
          className={classNames(styles.inputContainer, className, {
            [styles.focused]: isFocused,
          })}
        >
          {icon && <img className={styles.icon} src={icon} alt="" />}
          <input ref={ref} className={styles.input} {...props} />
        </div>
        {hint && (
          <motion.div
            transition={{ type: 'spring' }}
            initial={{ y: -16 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            className={styles.hint}
          >
            <img className={styles.hintIcon} src={Info_Circle_Solid} alt="" />
            <p className={styles.hintText}>{hint}</p>
          </motion.div>
        )}
      </motion.div>
    );
  },
);

Input.displayName = 'Input';

export default Input;

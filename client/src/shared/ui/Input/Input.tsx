import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';
import { InputProps } from '@/shared/ui/Input/IInputProps.ts';
import Info_Circle_Solid from '@/assets/icons/info-circle-solid.svg';

const Input: React.FC<InputProps> = ({ icon, className, hint, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <div
        className={classNames(styles.inputContainer, className, {
          [styles.focused]: isFocused,
        })}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
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
    </div>
  );
};

export default Input;

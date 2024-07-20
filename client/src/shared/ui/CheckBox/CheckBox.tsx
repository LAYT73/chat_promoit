import React from 'react';
import classNames from 'classnames';
import styles from './CheckBox.module.scss';
import CheckBoxProps from '@/shared/ui/CheckBox/ICheckBoxProps.ts';

const CheckBox: React.FC<CheckBoxProps> = ({ children, style }) => {
  return (
    <label className={classNames(styles.container, style)}>
      <input type="checkbox" className={styles.checkbox} />
      <span className={styles.checkmark}></span>
      {children}
    </label>
  );
};

export default CheckBox;

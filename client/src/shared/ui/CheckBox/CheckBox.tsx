import classNames from 'classnames';
import { forwardRef } from 'react';

import CheckBoxProps from '@/shared/ui/CheckBox/ICheckBoxProps.ts';

import styles from './CheckBox.module.scss';

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ children, style }, ref) => {
    return (
      <label className={classNames(styles.container, style)}>
        <input ref={ref} type="checkbox" className={styles.checkbox} />
        <span className={styles.checkmark}></span>
        {children}
      </label>
    );
  },
);

CheckBox.displayName = 'CheckBox';

export default CheckBox;

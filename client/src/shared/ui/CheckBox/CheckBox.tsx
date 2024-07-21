import { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './CheckBox.module.scss';
import CheckBoxProps from '@/shared/ui/CheckBox/ICheckBoxProps.ts';

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

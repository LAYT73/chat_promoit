import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
import ButtonProps from './IButtonProps';

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  primary,
  children,
}) => {
  const buttonClasses = classNames(styles.button, {
    [styles.primary]: primary,
    [styles.disabled]: disabled,
  });

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;

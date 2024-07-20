import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
import ButtonProps from './IButtonProps';

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  primary,
  style,
  children,
}) => {
  const buttonClasses = classNames(
    styles.button,
    {
      [styles.primary]: primary,
      [styles.disabled]: disabled,
    },
    style,
  );

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;

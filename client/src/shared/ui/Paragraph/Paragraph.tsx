import React from 'react';
import classNames from 'classnames';
import styles from './Paragraph.module.scss';
import ParagraphProps from './IParagraphProps';

const Paragraph: React.FC<ParagraphProps> = ({
  size = 'medium',
  style,
  children,
}) => {
  const paragraphSizeClass: string = styles[size];

  const paragraphClasses: string = classNames(
    styles.paragraph,
    paragraphSizeClass,
    style,
  );

  return <p className={paragraphClasses}>{children}</p>;
};

export default Paragraph;

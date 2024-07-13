import React from 'react';
import classNames from 'classnames';
import styles from './Paragraph.module.scss';
import ParagraphProps from './IParagraphProps';

const Paragraph: React.FC<ParagraphProps> = ({ size = 'medium', children }) => {
  const paragraphSizeClass: string = styles[size];

  const paragraphClasses: string = classNames(
    styles.paragraph,
    paragraphSizeClass,
  );

  return <p className={paragraphClasses}>{children}</p>;
};

export default Paragraph;

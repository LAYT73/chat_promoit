import React from 'react';
import classNames from 'classnames';
import styles from './Paragraph.module.scss';
import ParagraphProps from './IParagraphProps';

const Paragraph: React.FC<ParagraphProps> = ({
  size = 'medium',
  styleParagraph,
  children,
  ...args
}) => {
  const paragraphSizeClass: string = styles[size];

  const paragraphClasses: string = classNames(
    styles.paragraph,
    paragraphSizeClass,
    styleParagraph,
  );

  return (
    <p {...args} className={paragraphClasses}>
      {children}
    </p>
  );
};

export default Paragraph;

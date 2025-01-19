import classNames from 'classnames';
import React from 'react';

import ParagraphProps from './IParagraphProps';
import styles from './Paragraph.module.scss';

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

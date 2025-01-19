import classNames from 'classnames';
import React from 'react';

import styles from './Heading.module.scss';
import HeadingProps from './IHeadingProps';

const Heading: React.FC<HeadingProps> = ({
  size = 'h1',
  fontStyle = 'regular',
  style,
  children,
}) => {
  const headingSizeClass = styles[size];
  const headingStyleClass = styles[fontStyle];

  const headingClasses = classNames(
    styles.heading,
    headingSizeClass,
    headingStyleClass,
    style,
  );

  switch (size) {
    case 'h1':
      return <h1 className={headingClasses}>{children}</h1>;
    case 'h2':
      return <h2 className={headingClasses}>{children}</h2>;
    case 'h3':
      return <h3 className={headingClasses}>{children}</h3>;
    case 'h4':
      return <h4 className={headingClasses}>{children}</h4>;
    case 'h5':
      return <h5 className={headingClasses}>{children}</h5>;
    case 'h6':
      return <h6 className={headingClasses}>{children}</h6>;
    default:
      return null;
  }
};

export default Heading;

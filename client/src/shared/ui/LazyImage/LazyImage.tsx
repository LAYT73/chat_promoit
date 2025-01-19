import classnames from 'classnames';
import React, { FC, useEffect } from 'react';

import styles from './LazyImage.module.scss';

type Props = {
  src: string;
  alt: string;
  style?: string;
  imageStyle?: string;
};

const LazyImage: FC<Props> = ({ src, alt, style, imageStyle }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = src;
  }, []);

  return (
    <div className={classnames(styles.lazyImageContainer, style)}>
      {isLoaded ? (
        <img
          src={src}
          alt={alt}
          className={classnames(styles.lazyImage, imageStyle)}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default LazyImage;

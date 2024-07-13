import React, { useEffect, FC } from 'react';
import classnames from 'classnames';
import styles from './LazyImage.module.scss';

type Props = {
  src: string;
  alt: string;
  style?: string;
};

const LazyImage: FC<Props> = ({ src, alt, style }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = src;
  }, []);

  return (
    <div className={classnames(styles.lazyImageContainer, style)}>
      {isLoaded ? (
        <img src={src} alt={alt} className={styles.lazyImage} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default LazyImage;

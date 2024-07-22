import React, { useState } from 'react';
import styles from './LoginPage.module.scss';
import { Login } from '@/widgets';
import { motion } from 'framer-motion';

const LoginPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  const backgroundPosition = {
    x: (mousePosition.x / window.innerWidth) * 10,
    y: (mousePosition.y / window.innerHeight) * 10,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container} onMouseMove={handleMouseMove}>
        <div className={styles.loginContainer}>
          <Login />
        </div>
        <motion.div
          style={{
            backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`,
          }}
          initial={{ opacity: 0, rotate: 2 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ type: 'spring' }}
          className={styles.imageContainer}
        ></motion.div>
      </div>
    </div>
  );
};

export default LoginPage;

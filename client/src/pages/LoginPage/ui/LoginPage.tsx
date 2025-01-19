import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Login } from '@/widgets';

import styles from './LoginPage.module.scss';

/**
 * LoginPage component for rendering the login page with interactive background.
 *
 * This component creates a login page with a responsive background that moves
 * based on the user's mouse position. It includes a login form and an animated
 * background image.
 *
 * @returns {JSX.Element} The rendered LoginPage component.
 */
const LoginPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  /**
   * Handles mouse movement within the container.
   *
   * @param {React.MouseEvent<HTMLDivElement, MouseEvent>} event - The mouse event.
   */
  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  /**
   * Calculates the background position based on mouse coordinates.
   */
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

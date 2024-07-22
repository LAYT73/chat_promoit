import React from 'react';
import styles from './NavElement.module.scss';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

type NavElementProps = {
  link: string;
  text: string;
  icon: string;
};

const NavElement: React.FC<NavElementProps> = ({ link, text, icon }) => {
  const controls = useAnimation();

  return (
    <Link
      to={link}
      className={styles.nav_element}
      onMouseEnter={() => controls.start({ y: 0 })}
      onMouseLeave={() => controls.start({ y: 20 })}
    >
      <motion.div
        className={styles.nav_element_line}
        initial={{ y: 20 }}
        animate={controls}
        transition={{ type: 'tween' }}
      />
      <img src={icon} alt={text} />
      <span className={styles.nav_element_text}>{text}</span>
    </Link>
  );
};

export default NavElement;

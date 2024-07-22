import React from 'react';
import styles from './NotFoundPage.module.scss';
import { motion } from 'framer-motion';
import { AnimatedText, Button, Heading, Paragraph } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <motion.div
        transition={{ type: 'spring' }}
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        className={styles.container}
      >
        <Heading size={'h1'} fontStyle={'bold'}>
          <AnimatedText text={'404 Page Not Found!'} />
        </Heading>
        <Paragraph>
          The page you are looking for does not exist. Please check the URL and
          try again.
        </Paragraph>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;

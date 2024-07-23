import React from 'react';
import styles from './NotFoundPage.module.scss';
import { motion } from 'framer-motion';
import { AnimatedText, Button, Heading, Paragraph } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';
import { useTranslate } from '@/app/i18n/i18n.ts';

const NotFoundPage: React.FC = () => {
  const translate = useTranslate();
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
          <AnimatedText text={translate('page_not_found.title')} />
        </Heading>
        <Paragraph>{translate('page_not_found')}</Paragraph>
        <Button onClick={() => navigate('/')}>{translate('back_to_home')}</Button>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;

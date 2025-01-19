import { motion } from 'framer-motion';
import React from 'react';

import { Button, Portal } from '@/shared/ui';

import styles from './ModalConfirm.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceed: () => void;
  onCancel: () => void;
  title: string;
  message: string;
}

const ModalConfirm: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onProceed,
  onCancel,
  title,
  message,
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <Portal>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className={styles.overlay}
        onClick={handleOverlayClick}
      >
        <div className={styles.modal} onClick={handleModalClick}>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.message}>{message}</p>
          <div className={styles.buttons}>
            <Button styleButton={styles.cancelButton} onClick={onCancel}>
              Cancel
            </Button>
            <Button styleButton={styles.proceedButton} onClick={onProceed}>
              Proceed
            </Button>
          </div>
        </div>
      </motion.div>
    </Portal>
  );
};

export default ModalConfirm;

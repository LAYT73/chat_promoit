import React from 'react';

import Portal from '../Portal';
import ModalProps from './IModalProps';
import styles from './Modal.module.scss';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <div className={styles.modal__overlay} onClick={onClose}>
        <div
          className={styles.modal__content}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <button className={styles.modal__close_button} onClick={onClose}>
            Закрыть
          </button>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;

import { useState, useCallback } from 'react';
import { UseModalReturn } from '@/shared/hooks/useModal/IUseModalReturn.ts';

export const useModal = (): UseModalReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const changeModal = useCallback((value: boolean) => {
    setIsOpen(value);
  }, []);

  return {
    isOpen,
    setIsOpen: changeModal,
    openModal,
    closeModal,
    toggleModal,
  };
};

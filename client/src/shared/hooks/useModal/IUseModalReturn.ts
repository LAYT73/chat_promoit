export interface UseModalReturn {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
}

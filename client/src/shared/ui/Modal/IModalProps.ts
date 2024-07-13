export default interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

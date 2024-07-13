export default interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  primary?: boolean;
  children: React.ReactNode;
}

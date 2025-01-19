import ErrorIcon from '@/assets/icons/error-icon.svg';
import InfoIcon from '@/assets/icons/info-icon.svg';
import SuccessIcon from '@/assets/icons/success-icon.svg';
import WarningIcon from '@/assets/icons/warning-icon.svg';

export interface NotificationProps {
  message: string;
  onDismiss: () => void;
  duration?: number;
  type?: 'success' | 'error' | 'info' | 'warning';
}

export const typeIconMap = {
  success: SuccessIcon,
  error: ErrorIcon,
  info: InfoIcon,
  warning: WarningIcon,
};

export const typeMessageMap = {
  success: 'Success! ',
  error: 'Something went wrong. ',
  info: 'Info: ',
  warning: 'Warning! ',
};

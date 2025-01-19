import { createPortal } from 'react-dom';

import PortalProps from './IPortalProps';

const Portal = ({ children, container = document.body }: PortalProps) => {
  if (container) {
    return createPortal(children, container);
  }
  return;
};

export default Portal;

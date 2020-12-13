import { useMediaQuery } from 'react-responsive';

export const Default = ({ children }) => {
	  const isNotMobile = useMediaQuery({ minWidth: 992 })
	  return isNotMobile ? children : null
};

export const Device = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 })
  return isMobile ? children : null
};

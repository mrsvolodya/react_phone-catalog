import { useContext } from 'react';
import darkLogo from '../../image/DarkTheme/cart.svg';
import lightLogo from '../../image/Light-Theme/cart.svg';
import { ThemeContext } from '../../store/ThemeProvider';

export const LogoCart = ({ ...props }) => {
  const { theme } = useContext(ThemeContext);
  const logo = theme ? darkLogo : lightLogo;

  return <img src={logo} rel="Logo" {...props} />;
};

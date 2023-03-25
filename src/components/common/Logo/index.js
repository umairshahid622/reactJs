import { logo } from 'assets';
import logoStyles from './logo.module.css';
const Logo = ({ ...props }) => {
  return (
    <img
      className={logoStyles.icon}
      src={logo}
      alt='Little lemon app'
      {...props}
    />
  );
};

export default Logo;

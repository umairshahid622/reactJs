import { footerLogo } from 'assets';
import footerStyles from './footer.module.css';

const Footer = () => {
  return (
    <div className={footerStyles.wrap}>
      <img src={footerLogo} alt='footer' />
      <div className={footerStyles.column}>
        <h3>Navigation</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={footerStyles.column}>
        <h3>Contact</h3>
        <ul>
          <li>KM 1 Sango Road</li>
          <li>Ogun State, Nigeri</li>
        </ul>
      </div>
      <div className={footerStyles.column}>
        <h3>Connect</h3>
        <ul>
          <li>
            <a href='/'>LinkedIn</a>
          </li>
          <li>
            {' '}
            <a href='/'>Twitter</a>
          </li>
          <li>
            {' '}
            <a href='/'>Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

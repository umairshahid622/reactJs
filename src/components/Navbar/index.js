import Logo from '../common/Logo';
import NavLink from '../common/NavLink';
import navbarStyles from './navbar.module.css';
const NAVLINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Bookings',
    href: '/reserve',
  },
];
const Navbar = () => {
  return (
    <nav className={navbarStyles.navbar}>
      <Logo />
      <label className={navbarStyles.hamburger} htmlFor='checkbox'>
        MENU
      </label>
      <input type='checkbox' id='checkbox' className={navbarStyles.checkbox} />
      <div className={navbarStyles.navlinks}>
        {NAVLINKS.map((link) => (
          <NavLink key={link.label} {...link} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

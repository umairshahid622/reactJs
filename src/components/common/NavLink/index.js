const NavLink = ({ href, label, ...props }) => {
  return (
    <a href={href} {...props}>
      {label}
    </a>
  );
};

export default NavLink;

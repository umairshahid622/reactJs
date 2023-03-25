import buttonStyles from './button.module.css';
const Button = ({ label, ...props }) => {
  return (
    <button className={buttonStyles.button} {...props}>
      {label}
    </button>
  );
};

export default Button;

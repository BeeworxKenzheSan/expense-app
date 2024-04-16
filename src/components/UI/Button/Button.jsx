import PropTypes from "prop-types";
import css from "./Button.module.css";

const Button = ({ title, styles }) => {
  return <button className={`${css.button} ${styles}`}>{title}</button>;
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.string,
};

export default Button;

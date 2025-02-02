import "./Button.scss";

const Button = ({
  size = "medium",
  variant = "default",
  fullWidth = false,
  disabled = false,
  onClick,
  children,
  iconLeft,
  iconRight,
  textLight = false,
}) => {
  const sizeClass =
    size === "small"
      ? "button--small"
      : size === "large"
      ? "button--large"
      : "";

  const textLightClass = textLight ? "button--text-light" : ""; // added text light variant for searchbar button
  const variantClass = variant !== "default" ? `button--${variant}` : ""; // primary or secondary
  const fullWidthClass = fullWidth ? "button--full" : "";

  return (
    <button
      className={`button ${sizeClass} ${variantClass} ${fullWidthClass} ${textLightClass}`}
      disabled={disabled}
      onClick={onClick}
    >
      {iconLeft && <span className="icon">{iconLeft}</span>}
      {children}
      {iconRight && <span className="icon">{iconRight}</span>}
    </button>
  );
};

export default Button;

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
}) => {
  const sizeClass =
    size === "small"
      ? "button--small"
      : size === "large"
      ? "button--large"
      : "";
  const variantClass = variant !== "default" ? `button--${variant}` : "";
  const fullWidthClass = fullWidth ? "button--full" : "";

  return (
    <button
      className={`button ${sizeClass} ${variantClass} ${fullWidthClass}`}
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

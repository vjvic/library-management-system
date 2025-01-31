import "./Button.scss";

const Button = ({
  size = "medium",
  variant = "default",
  fullWidth = false,
  disabled = false,
  onClick,
  children,
  icon,
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
      {icon && <span className="icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;

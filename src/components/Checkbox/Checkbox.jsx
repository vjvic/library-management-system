import "./Checkbox.scss";

const Checkbox = ({
  size = "medium",
  disabled = false,
  checked = false,
  onChange,
  label,
}) => {
  const sizeClass =
    size === "small"
      ? "checkbox--small"
      : size === "large"
      ? "checkbox--large"
      : "";

  return (
    <label className={`checkbox ${sizeClass}`}>
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      {label && <span>{label}</span>}
    </label>
  );
};

export default Checkbox;

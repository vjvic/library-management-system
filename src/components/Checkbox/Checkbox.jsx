import "./Checkbox.scss";

const Checkbox = ({
  size = "medium",
  disabled = false,
  checked = false,
  onChange,
  label,
  name,
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
        name={name}
        disabled={disabled}
        checked={checked}
        onChange={(e) => onChange(e)}
      />
      {label && <span>{label}</span>}
    </label>
  );
};

export default Checkbox;

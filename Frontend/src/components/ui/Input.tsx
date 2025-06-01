type InputProps = {
  htmlFor: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder?: string;
  value?: string;
  errors?: string;
  className: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  htmlFor,
  label,
  type,
  placeholder,
  value,
  errors,
  className,
  onChange,
  onFocus,
  onBlur,
}) => {
  return (
    <div className="w-full my-2">
      <label
        htmlFor={htmlFor}
        className="block mb-0.5"
        // style={{ display: "block", marginBottom: "0.25rem" }}
      >
        {label}
      </label>
      <input
        // id={htmlFor}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`w-full p-2 rounded border ${className} ${
          errors ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors && (
        <p style={{ color: "red", fontSize: "0.8rem", marginTop: "0.25rem" }}>
          {errors}
        </p>
      )}
    </div>
  );
};

export default Input;

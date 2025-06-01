import * as React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string;
  label: string;
  type: string;
  // className: string;
  errors: string;
  // errorsMessage: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      htmlFor,
      label,
      type,
      // className,
      errors,
      // errorsMessage,
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full my-2">
        <label
          htmlFor={htmlFor}
          className={`mb-0.5 flex flex-row justify-start items-center gap-x-2 ${errors ? "text-red-500 font-bold" : ""}`}
        >
          {label}
          {errors && <p className="text-red-500 text-md">({errors})</p>}
        </label>
        <input
          ref={ref}
          type={type}
          className={`w-full p-2 rounded border ${
            errors ? "border-red-500" : "border-gray-300"
          }`}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon: JSX.Element;
}

const Input: React.FC<InputProps> = ({ label, name, icon, ...props }) => {
  const IconComponent = React.cloneElement(icon as JSX.Element, {
    size: 18,
    className:
      "text-primary absolute left-4 max-sm:left-3 top-1/2 -translate-y-1/2",
  });

  return (
    <div className="w-full relative">
      {label && (
        <label
          htmlFor={name}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-base text-white"
        >
          {label}
        </label>
      )}
      <div className="w-full relative">
        {IconComponent}
        <input
          name={name}
          className="bg-card text-white rounded-xl  w-full px-12 py-2 max-sm:pr-8 max-sm:pl-9 outline-none focus:outline-primary shadow-none  placeholder:text-base text-base"
          {...props} // Usar spread operator para passar todos os props
        />
      </div>
    </div>
  );
};

export default Input;

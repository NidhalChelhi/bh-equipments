import React, { ChangeEvent } from "react";

interface InputProps {
  id: string;
  name: string;
  isRequired?: boolean;
  placeholder?: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  isRequired = false,
  placeholder,
  type,
  value,
  onChange,
}) => {
  return (
    <div className="w-full flex flex-col my-3">
     
      <input
        type={type}
        id={id}
        name={name}
        className="p-2 bg-gray-50 rounded-lg border "
        required={isRequired ? true : undefined}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;

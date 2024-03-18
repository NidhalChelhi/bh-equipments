import React, { ChangeEvent } from 'react';

interface TextareaProps {
  id: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({
  id,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="w-full flex flex-col my-6">
    
      <textarea
        id={id}
        name={name}
        className="p-3 bg-gray-50 rounded-lg border w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Textarea;

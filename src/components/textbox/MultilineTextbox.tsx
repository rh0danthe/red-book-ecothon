import { useFormContext } from "react-hook-form";
import { useEffect } from "react";

interface IMultilineTextBox {
  label: string;
  name: string;
  value?: string;
}

const MultilineTextBox = ({ label, name, value }: IMultilineTextBox) => {
  const { register, setValue } = useFormContext();

  useEffect(() => {
    if (value !== undefined) {
      setValue(name, value);
    }
  }, [name, value, setValue]);

  return (
    <textarea
      {...register(name, { required: true })}
      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 resize-none" // Added resize-none class
      placeholder={label}
      rows={4} 
      cols={50} 
    />
  );
};

export default MultilineTextBox;

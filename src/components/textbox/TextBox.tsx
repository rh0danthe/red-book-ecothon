import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';

interface ITextBox {
  label: string;
  name: string;
  value?: string; 
  type?: string
}

const TextBox = ({ label, name, value, type }: ITextBox) => {
  const { register, setValue } = useFormContext();

  useEffect(() => {
    if (value !== undefined) {
      setValue(name, value); 
    }
  }, [name, value, setValue]);

  return (
    <input
      {...register(name, { required: true })}
      type={type ? type : 'text'}
      className="w-full h-[75px]  p-[26px] pl-[35px]  rounded-[24px] focus:outline-none focus:ring focus:ring-blue-500
      font-raleway text-[20px] text-[#828282]
      placeholder:font-raleway placeholder:text-[20px] placeholder:text-[#828282] bg-[#000000] bg-opacity-50"
      placeholder={label}
    />
  );
};

export default TextBox;

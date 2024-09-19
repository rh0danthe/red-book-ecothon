import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';

interface ITextBox {
  label: string;
  name: string;
  value?: string;
  type?: string;
  className?: string;
}

const TextBox = ({ label, name, value, type = 'text', className }: ITextBox) => {
  const { register, setValue } = useFormContext();

  useEffect(() => {
    if (value !== undefined) {
      setValue(name, value);
    }
  }, [name, value, setValue]);

  return (
    <div className="">
      <input
        {...register(name, { required: true })}
        type={type ? type : 'text'}
        id={name}
        className={`w-full rounded-3xl shadow-sm  ${className}`}
        placeholder={label}
      />
    </div>
  );
};

export default TextBox;

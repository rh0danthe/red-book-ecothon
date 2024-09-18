import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';

interface IComboBox {
  name: string;
  options: Array<{ value: string; label: string }>; 
  value?: string; 
}

const ComboBox = ({ name, options, value }: IComboBox) => {
  const { register, setValue } = useFormContext();

  useEffect(() => {
    if (value !== undefined) {
      setValue(name, value);
    }
  }, [name, value, setValue]);

  return (
    <div>
      <select
        {...register(name, { required: true })}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        defaultValue={value}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;

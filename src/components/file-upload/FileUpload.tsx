import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useController, Control } from 'react-hook-form';
import { Typography } from '../typography/Typography';

interface FileUploadProps {
  name: string;
  control: Control<any>;
  className?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ name, control, className }) => {
  const { field } = useController({ name, control });
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
    },
    multiple: false,
    onDrop: (files) => {
      field.onChange(files[0]);
    },
  });

  return (
    <div {...getRootProps({ className: `dropzone ${className}` })}>
      <input {...getInputProps()} />
      <Typography type="p3" className='pt-32 font-bold'>Перетащите сюда файл или кликните для выбора</Typography>
      {acceptedFiles.length > 0 && <p>Выбран файл: {acceptedFiles[0].name}</p>}
    </div>
  );
};

export default FileUpload;

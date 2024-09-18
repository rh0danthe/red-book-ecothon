import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useController, Control } from 'react-hook-form';

interface FileUploadProps {
  name: string;
  control: Control<any>;
}

const FileUpload: React.FC<FileUploadProps> = ({ name, control }) => {
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
    <div {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      <p>Перетащите сюда файл или кликните для выбора</p>
      {acceptedFiles.length > 0 && <p>Выбран файл: {acceptedFiles[0].name}</p>}
    </div>
  );
};

export default FileUpload;

import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import { ITypographyTypes, Typography } from '../typography/Typography';
import { colorClasses } from './styles';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  colorBehavior: 'whitetp' | 'white' | 'green' | 'transparent' | 'transparent2' | 'transparentTop';
  fontBehaviour: ITypographyTypes;
  className?: string;
  children?: React.ReactNode;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'],
  type?: 'button' | 'submit' |'reset',  
}

export const Button = ({
  colorBehavior,
  fontBehaviour,
  className,
  children,
  onClick,
  type = 'button', 
  ...props
}: IButton) => {

  return (
    <button
      className={clsx(
        ' py-5 px-6 flex items-center justify-center gap-3',
        colorClasses[colorBehavior],
        className
      )}
      onClick={onClick as any}
      type={type}
      {...props}
    >
      <Typography type={fontBehaviour}>
        {children}
      </Typography>
    </button>
  );
};

export default Button;

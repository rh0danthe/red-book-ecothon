import React from "react";
import { typographyStyles } from "./styles";

export type ITypographyTypes = "h1" | "h2" | "h3" |"p1" | "p2" | "p3" | "p4" | "p5"
  | "cardName" | "cardDescription" | "encyclopediaTitle" | "encyclopediaSubtitle";

interface ITypography {
  className?: string;
  type: ITypographyTypes;
  color?: string; 
  children?: React.ReactNode;
}

export const Typography = ({
  className,
  type,
  color,
  children,
}: ITypography) => {
  const typeClass = typographyStyles[type]; 

  return (
    <div 
      className={`${typeClass} ${color ? color : ""} ${className || ""}`}
    >
      {children}
    </div>
  );
};

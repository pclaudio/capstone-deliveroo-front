import React, { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ComponentType;
  register?: UseFormRegister<FieldValues>;
  name: string;
  error?: string;
  isRight?: boolean;
  isGlass?: boolean;
  img?: string;
  ref?: any;
}

export interface ContainerProps {
  isErrored: boolean;
  isRight: boolean;
  isGlass: boolean;
}

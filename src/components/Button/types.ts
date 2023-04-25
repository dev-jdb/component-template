import { ReactNode } from 'react'

export type ButtonProps = {
  children?: ReactNode;
  color?: string;
  disabled?: boolean;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  text?: string;
};

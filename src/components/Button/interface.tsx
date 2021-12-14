import { ReactNode } from 'react';

export interface ButtonProps {
  color?: 'primary' | 'secondary';
  children: ReactNode;
  outline?: boolean;
  disabled?: boolean;
  onClick: () => void;
}
import { ChangeEventHandler, ReactElement } from 'react';

export interface InputProps {
  size?: 'small' | 'medium' | 'large';
  title: string,
  onChange: ChangeEventHandler;
  value?: string,
  icon?: ReactElement,
  iconPosition?: 'right' | 'left'
}
import { ReactNode } from "react";

export interface ModalProps {
  size: 'small' | 'medium' | 'large';
  children: ReactNode,
  title: string,
  opened?: boolean,
}
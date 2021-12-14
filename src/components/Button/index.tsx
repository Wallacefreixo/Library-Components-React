import React from 'react';
import { ButtonProps } from './interface';

import { ButtonStyled } from './styled';

const Button = ({ children, onClick, color, outline = false, disabled = false } : ButtonProps) => {
  return (
    <ButtonStyled
      outline={outline} 
      color={color} 
      onClick={onClick} 
      disabled={disabled} 
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
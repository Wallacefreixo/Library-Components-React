import React from 'react';
import { InputProps } from './interface';

import { InputContainerStyled } from './styled';

const Input = ({size, title, value, icon, iconPosition, onChange} : InputProps) => {
  return (
    <InputContainerStyled size={size} iconPosition={iconPosition}>
        <input
          value={value}
          onChange={onChange}
          id={title}
          type="text"
          required 
        />
        <label htmlFor={title}>{title}</label>
        { icon }
    </InputContainerStyled>
  );
};

export default Input;
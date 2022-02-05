import React from 'react';
import { InputProps } from './interface';

import { InputContainerStyled } from './styled';

const Input = ({size, title, value, icon, iconPosition, onChange, ...rest} : InputProps) => {
  return (
    <InputContainerStyled size={size} iconPosition={iconPosition}>
        <input
          {...rest}
          value={value}
          onChange={onChange}
          id={title}
          required
        />
        <label htmlFor={title}>{title}</label>
        { icon }
    </InputContainerStyled>
  );
};

export default Input;
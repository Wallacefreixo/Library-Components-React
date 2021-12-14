import React from 'react';
import { LoadingProps } from './interface';

import { LoadingStyled } from './styled';

const Loading = ({color} : LoadingProps) => {
  return (
    <LoadingStyled color={color}>
      <div/>
      <div/>
      <div/>
      <div/>
    </LoadingStyled>
  );
};

export default Loading;
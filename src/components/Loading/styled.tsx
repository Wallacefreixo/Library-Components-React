import styled, { css } from 'styled-components';
import colors from '../../assets/themes/colors';

export const LoadingStyled = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 60px;
    height: 60px;
    margin: 8px;
    border-radius: 50%;
    animation: ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
     
    &:nth-child(1) {
      animation-delay: -0.45s;
    }
  
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
  
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }

  @keyframes ring{
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ${props => props.color === 'primary' && css`
    div {
      border: 7px solid ${colors.blue};
      border-color: ${colors.blue} transparent transparent transparent;
    }
  `}

  ${props => props.color === 'secondary' && css`
    div {
      border: 7px solid ${colors.green};
      border-color: ${colors.green} transparent transparent transparent;
    }
  `}

`
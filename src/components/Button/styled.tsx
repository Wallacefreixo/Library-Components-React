import { ButtonProps } from './interface';

import styled, { css } from 'styled-components';
import colors from '../../assets/themes/colors';

export const ButtonStyled = styled.button<ButtonProps>`
  font-family: Arial, Helvetica, sans-serif;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 100px;
  cursor: pointer;

  &:disabled {
    border: none; 
    background-color: ${colors.gray};
    color: ${colors.black} !important;
    pointer-events: none;
  }

  ${props => !props.outline && props.color === 'primary' && css`
    border: none; 
    color: ${colors.white};
    background-color: ${colors.blue};

      &:hover {
        background-color: ${colors.ultramarine};
      }
    `
  };

  ${props => !props.outline && props.color === 'secondary' && css`
    border: none; 
    color: ${colors.white};
    background-color: ${colors.green};

      &:hover {
        background-color: ${colors.lightgreen};
      }
    `
  };

  ${props => props.outline && props.color === 'primary' && css`
    border: 1px solid ${colors.blue};
    color: ${colors.blue};
    background-color: transparent;

      &:hover {
        background-color: ${colors.blue};
        color: ${colors.white};
      }
    `
  };

  ${props => props.outline && props.color === 'secondary' && css`
    border: 1px solid ${colors.green};
    color:  ${colors.green};
    background-color: transparent;

      &:hover {
        background-color: ${colors.green};
        color: ${colors.white};
      }
    `
  };
  

`;
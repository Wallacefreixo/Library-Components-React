import styled, { css } from 'styled-components';
import colors from '../../assets/themes/colors';

export const InputContainerStyled = styled.div<any>`
  font-family: Arial, Helvetica, sans-serif;
  position: relative;

  input { 
    border: 0;
    border-bottom: 1px solid ${colors.darkGray};
    outline: none;
    transition: .2s ease-in-out;
    box-sizing: border-box;
    width: 100%;
    background: none;
  }

  
  label {
    top: 0;
    right: 0;
    color: ${colors.darkGray};
    display: flex;
    align-items: center;
    position: absolute;
    cursor: text;
    transition: .2s ease-in-out;
    box-sizing: border-box;
    width: 100%;
    height: 3rem;
  }

  svg {
    position: absolute;
    bottom: 10px;
    color: ${colors.darkGray};
  }
  
  input:valid, input:focus {
    border-bottom: 1px solid ${colors.ultramarine};

    + label {
      color: ${colors.ultramarine};
      font-size: .8rem;
      top: -30px;
      pointer-events: none;
    }
  }

  ${props => props.iconPosition === 'left' && css`
    input {
      padding-left: 25px;
    }

    label {
      left: 25px;
    }

    svg {
      right: unset;
      left:0;
    }
  `}

  ${props => props.iconPosition === 'right' && css`
    label {
      left: 0;
    }

    svg {
      right: 0;
      left: unset;
    }
  `}

  ${props => props.size === 'large' && css`
    input {
      height: 3.5rem;
      font-size: 1.25rem;
    }

    label {
        font-size: 1.25rem;
    }
  `}

  ${props => props.size === 'medium' && css`
    input {
      height: 3rem;
      font-size: 1rem;
    }

    label {
      font-size: 1rem;
    }
  `}

  ${props => props.size === 'small' && css`
    input {
      height: 2.5rem;
      font-size: 0.875rem;
    }

    label {
        font-size: 0.875rem;
    }
  `}

  }

`
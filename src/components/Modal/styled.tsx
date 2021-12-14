import styled, { css } from 'styled-components';
import colors from '../../assets/themes/colors';

export const ModalContainerStyled = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  width: 100%;
  height: 100%;
  z-index: 999999;
  box-sizing: border-box;
  animation: fade-in 1s 1 linear;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes fade-in {
    0% {
      animation-timing-function: cubic-bezier(0.2242, 0.7499, 0.3142, 0.8148);
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const ModalOverlayStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; 
`

export const ModalStyled = styled.div<any>`
  z-index: 2;
  position: relative;
  background-color: ${colors.white};
  border-radius: 5px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px;
  color: ${colors.black};
  max-height: 100%;

  .header {
    display: flex;
    justify-content: space-between;

    a {
      cursor: pointer;
      &:hover {
        opacity: 0.5;
      }
    }

    h3 {
      color: ${colors.blue};
      margin: 0;
    }
  }

  ${props => props.size === 'large' && css`
    width: 80%;

    .header h3 {
      font-size: 1.5rem;
    }  
  `}

  ${props => props.size === 'medium' && css`
    width: 60%;
    
    .header h3 {
      font-size: 1.25rem;
    }  
  `}

  ${props => props.size === 'small' && css`
    width: 40%;
    
    .header h3 {
      font-size: 1.125rem;
    }  
  `}

`

export const SeparatorStyled = styled.div`
  border-bottom: 1px solid ${colors.gray};
  margin: 10px 0px 25px 0px;
`
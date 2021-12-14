import React, { useState, useImperativeHandle, forwardRef, useCallback } from 'react';
import { ModalProps } from './interface';

import { ModalStyled, ModalContainerStyled, ModalOverlayStyled, SeparatorStyled } from './styled';

import { GrClose } from 'react-icons/gr';

const Modal = ({children, size, title, opened = false} : ModalProps, ref: any) => {

  const [isOpen, setIsOpen] = useState(opened);
  const close = useCallback(() => setIsOpen(false), [])

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close
  }), [close])

  return (
    isOpen ? (
      <ModalContainerStyled>
         <ModalOverlayStyled>
            <ModalStyled size={size}> 
              <div className='header'>
                <h3>{ title }</h3>
                <a onClick={close}> <GrClose/> </a>
              </div>
              <SeparatorStyled />
              { children } 
            </ModalStyled>
         </ModalOverlayStyled>
      </ModalContainerStyled>
    ) : null
  )
};

export default forwardRef(Modal);
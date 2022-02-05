import React, { useRef } from "react";
import { storiesOf } from '@storybook/react';

import Modal from '../components/Modal';
import Button from '../components/Button';

import { FaHeart, FaReact, FaAngular, FaVuejs } from 'react-icons/fa';

const containerStyle = {  
  display: 'flex',
  alignItems: 'center',
  margin: '10px 0px'
};

const labelStyle = {
  marginLeft: '10px',
};

const MyContent = () => {
  return (
    <>
      <div style={containerStyle}>
        <FaHeart/>
        <label style={labelStyle}> Front-end </label>
      </div>
      <div style={containerStyle}>
        <FaReact/>
        <label style={labelStyle}> React </label>
      </div>
      <div style={containerStyle}>
        <FaAngular/>
        <label style={labelStyle}> Angular </label>
      </div>
      <div style={containerStyle}>
        <FaVuejs/>
        <label style={labelStyle}> Vue </label>
      </div>
    </>
  )
}

const SmallModal = () => {
  const modalRef: any = useRef(null)

  return (
    <>
      <Button color="primary" onClick={()=> modalRef.current.open()}> Open Small Modal </Button>
      <Modal title="Modal" size="small" ref={modalRef}>
        <MyContent />
      </Modal>
    </>
  );
}

const MediumModal = () => {
  const modalRef: any = useRef(null)

  return (
    <>
      <Button color="primary" onClick={()=> modalRef.current.open()}> Open Medium Modal </Button>
      <Modal title="Modal" size="medium" ref={modalRef}>
        <MyContent />
      </Modal>
    </>
  );
}

const LargeModal = () => {
  const modalRef: any = useRef(null)
   
  return (
    <>
      <Button color="primary" onClick={()=> modalRef.current.open()}> Open Large Modal </Button>
      <Modal title="Modal" size="large" ref={modalRef}>
        <MyContent />
      </Modal>
    </>
  );
}

//utilizar storiesOf por causa da utilização do hooks
storiesOf('Components/Modal', module).add('Small', () => <SmallModal/>);
storiesOf('Components/Modal', module).add('Medium', () => <MediumModal/>);
storiesOf('Components/Modal', module).add('Large', () => <LargeModal/>);


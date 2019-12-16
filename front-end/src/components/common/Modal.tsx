import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const ModalWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
  overflow-y: hidden;
`;

const ModalContent = styled.div`
  background-color: #fff;
  width: 500px;
  height: 500px;
  z-index: 101;
`;

interface ModalProps {}
const Modal: React.FC<ModalProps> = () => {
  return (
    <ModalWrapper>
      <GlobalStyle />
      <ModalContent>here</ModalContent>
    </ModalWrapper>
  );
};

export default Modal;

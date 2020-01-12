import styled from 'styled-components';

export const Shadow = styled.div`
  width: 100%; 
  height: 100vh;
  background: rgba(0, 0, 0, 0.45);
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ModalContent = styled.div`
  min-width: 400px;
  background: #ffffff;
  padding:  35px;
  border-radius: 8px;
  position: relative;

  @media (max-width: 760px){
    min-width: 300px;
  }
`;
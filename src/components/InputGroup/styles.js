import styled from 'styled-components';

export const Input = styled.div`
  width: 100%;
  max-width: 400px !important;
  display: block;
  margin-bottom: 25px;

  label{
    display: block;
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 18px;
  }

  input{
    width: 100%;
    padding: 8px;
    border: 2px solid #FF8214;
    border-radius: 8px;
  }

  @media (max-width: 760px){
    margin-bottom: 15px;
  }
`
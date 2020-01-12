import styled from 'styled-components';

export const Wrapper = styled.div`
  *{
    width: 200px;
    font-weight: bold;
    font-size: 21px;
    color: #000000;
    background: #FF8214;
    padding: 10px 0;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    transition: all .3s ease-in;

    :hover{
      background: #cc5f00;
    }

    @media (max-width: 760px){
      width: 150px;
      font-size: 18px;
    }
  }
`;
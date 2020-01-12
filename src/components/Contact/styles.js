import styled from 'styled-components';

export const Item = styled.article`
  position: relative;
  width: 290px;
  margin: 15px 25px;
  padding: 20px 0 20px 15px;
  box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.45);
  border-radius: 8px;

  p{
    font-weight: 900;
    padding: 2.5px 0;    
  }

  p.colored{
    color: #FF8214;
  }
`;

export const DeleteContact = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
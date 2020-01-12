import styled from 'styled-components';

export const AddContact = styled.div`
  display: flex;
  justify-content: space-between;

  span{
    display: block;
    text-align: center;
  }

  h2{
    font-weight: 400;
    span{
      font-weight: 900;
      display: inline;
    }
  }
`;

export const PublicContactInput = styled.div`
  span{
    display: inline-block;
    margin-left: 5px;
    font-weight: 900;
  }
`;
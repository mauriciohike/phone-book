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

  @media (max-width: 760px){
    flex-direction: column;
    align-items: center;
    h2{
      margin-bottom: 15px;
    }
  }
`;

export const PublicContactInput = styled.div`
  span{
    display: inline-block;
    margin-left: 5px;
    font-weight: 900;
  }
  margin-bottom: 15px;
`;

export const CloseModal = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
`;

export const CallLogin = styled.div`
  h2{
    font-size: 32px;
    max-width: 60%;
    font-weight: 400;

    span{
      font-weight: 900;
      display: inline-block;
      margin-left: 5px;
      color: #FF8214;
      text-decoration: underline;
    }
  }
  @media (max-width: 992px){
      h2{
        max-width: 100%;
      }
    }
  margin-bottom: 25px;
`;
import styled from 'styled-components';

export const Container = styled.section`
  width: 90%;
  max-width: 1200px;
  margin: 64px auto 0 auto;

  display: flex;
  justify-content: space-around;
  align-items: center;

  .row{
    width: 48%;
    max-width: 100%;

    svg{
      max-width: 100%;
      width: 100%;
    }
  }

  @media (max-width: 992px){
    .row{
      width: 100%;
    }
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 760px){
    margin-top: 32px;

    .row{
      svg{
        display: none;
      }
    }
  }
`;
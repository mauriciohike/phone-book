import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 32px;

  @media (max-width: 760px){
    flex-direction: column;
    align-items: center;
  }
`;
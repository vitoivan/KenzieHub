import styled from 'styled-components';


export const StyledContainer = styled.div`

  position: relative;
  header{
    display: flex;
    justify-content: space-between;
    width: 88%;
    margin: 0 auto;
    padding-top: 2rem;
    margin-bottom: 1rem;
    max-width: 600px;
  }
  main{
    max-width: 800px;
    margin: 0 auto;
  }
  main .profile{
    margin-top: .8rem;
    width: 85%;
    margin: 0 auto;

  }
  button{
    background: none;
    width: fit-content;
    height: fit-content;
    border: none;
  }
`;
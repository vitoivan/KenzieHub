import styled from "styled-components";


export const BG = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  position: absolute;
  z-index:-1;
  top: 0;
  left: 0;
`;
export const StyledContainer = styled.div`
  
  padding-top: 2rem;
  a{
    margin-left: 1.6rem;
  }
  h1{
    font-weight: 300;
    font-size: 24px;
    margin-bottom: 2rem;
  }
  form{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  form label{
    max-width: 294px;
    width: 80%;
    height: 46px;
  }
  label + label{
    margin-top: 1.5rem;
  }
  div > label{
    padding: 0 25px;
    width: 100%;
  }
  form a{
    font-size: 16px;
    width: 105px;
    height: 46px;
  }
  .change-password{
    display: flex;
    align-items: center;
    margin: 1rem 0;
  }
  .change-password p{
    font-size: 14px;
    margin-left: 15px;
    cursor: pointer;
  }

  textarea{
    width: 70%;
  }
  .error{
    width: 100%;
    position: absolute;
    top: -20px;
    font-size: 12px;
  }
`;
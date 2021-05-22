import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    color: var(--font-color);
    h2{
      font-weight: 300;
    }
  .logo{
    display: block;
    margin: 0 auto;
    width: 70%;
    max-width: 270px;
    height: 65px;
    margin-top: 3rem;
  }
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 2rem auto;
  }
  form label{
    margin-top: 20px;
    height: 50px;
  }
  form label + label{
    margin-top: 28px;
  }
  form label p {
    position: absolute;
    left: 10px;
    top: -36px;
    color: var(--error);
    font-size: 14px;
  }
  .button{
    padding: 0;
    width: 158px;
    border: 1px solid #fff;
    height: 52.99px;
    text-decoration: none;
  }
  p{
    padding-top: 1rem;
    font-weight: 300;
    font-size: 14px;
  }
  a{
    color: var(--font-color);
    text-decoration: underline;
  }
`;
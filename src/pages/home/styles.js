import styled from "styled-components";

export const StyledContainer = styled.div`
  .buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65%;
    margin: 0 auto;
    margin-top: 10vh;
  }
  .buttons .button{
    text-align: center;
    padding:0;
    font-size: 14px;
    box-sizing: content-box;
    margin: 0;
    width: 103px;
    height: 42px;
  }
  .buttons .button + .button{
    margin-left: 2rem;
  }
  & > a{
    display: block;
    width: 158px;
    height: 46px;
    font-size: 14px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
  }
`;
export const Header = styled.header`

  max-width: 1024px;
  width: 90%;
  padding: 2rem 0;
  margin: 0 auto;

  & > img{
    width: 129px;
    height: 31px;
    margin: 1rem auto;
    display: block;
  }

  @media only screen and (min-width: 710px){
      justify-content: center;
      & > img{
        width: 25vw;
        height: 5.77vw;
        max-width: 270px;
        max-height: 75px;
      }
  }
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  h1{
    font-weight: 400;
    font-size: 24px;
    margin-bottom: 2rem;
  }
  a{
    color: #fff;
    text-decoration: underline;
    margin: 0 10px;
  }

`;
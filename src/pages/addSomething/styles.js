import styled from "styled-components";



export const StyledContainer = styled.div`

  padding-top: 2rem;
  > a{
    display: inline-block;
    margin: 0 0 0 2rem;
  }

  h1{
    font-weight: 300;
    font-size: 24px;
  }
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }

  .container >.select{
    width: 96.69px;
    height: 25px;
   }
   .container >.select input{
    font-size: 14px;
  }

  .container >.select > div{
    z-index: 5;
  }
  .tech-content{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tech-content label{
    max-width: 295px;
    height: 49px;
    margin-bottom: 1rem;
    width: 80%;
  }
   label p{
    position: absolute;
    font-size: 12px;
    left: 0;
    top: -22px;
  }
  .tech-content label input::placeholder{
    font-size: 16px;
  }

  .tech-content .select{
    width: 181px;
    height: 25px;
    margin-left: 15px;
  }
  .tech-content .select input{
    text-align: center;
    padding-left: 0;
  }
  .tech-content .select input::placeholder{
    font-size: 14px;
  }
  textarea{
    width: 80%;
  }
  button{
    margin: 50px auto;
    padding: 0;
    width: 105px;
    height: 46px;
  }
`;
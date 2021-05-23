import styled from "styled-components";


export const StyledContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 0;
  width: 90%;
  margin: 2rem auto;
  box-shadow: 0px 0px 7px 1px #000;
  align-items: flex-start;
  position : relative;
  min-height: 230px;
  

  & > div{
    width: 70%;
    margin: 0 auto;
  }
  label{
    height: 30px;
    margin: 0 auto;
  }
  textarea{
    margin: 0 auto;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  h3{
    font-size: 16px;
    font-weight: 500;
  }
  p{
    width: 50%;
    word-break: break-all;
  }

  button{
    /* border: 1px solid #fff; */
    border: none;
    background: none;
    color: #fff;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .delete{
    height: 20px;
    width: 20px;
    right: 5px;
    top: 5px;
    width: 25px;
    height: 25px;

  }
  .save{
    height: 25px;
    padding: 0 10px;
    width: fit-content;
    right: 5px;
    bottom: 5px;
    border: 1px solid #fff;
  }
  button img{
    width: 70%;
  }

`;
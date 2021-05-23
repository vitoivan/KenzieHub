import styled from "styled-components";



export const StyledContainer = styled.div`

  text-align: center;
  margin-top: 2rem;

  a{
    color: #fff;
    text-decoration: underline;
    font-size: 16px;
    font-weight: 400;
  }
  .tech-container {
    width: 80%;
    margin: 1rem auto;
    display: flex;
    flex-flow: wrap row;
    overflow-y: auto;
    min-height: 65vh;
    max-height: 65vh;
    padding: 2rem;
    border: 1px solid #ffffff30;
    border-radius: 2rem;
    box-shadow: 0px 0px 7px 1px #000;
    -webkit-overflow-scrolling : touch;
  }

  & > div::-webkit-scrollbar {
    width: 0;
  }
  & > div::-webkit-scrollbar-track {
    border: none;
  }
  & > div::-webkit-scrollbar-thumb {
    background: transparent;
  }
  & > div::-webkit-scrollbar-track,
  & > div::-webkit-scrollbar-thumb {
    border-radius: 50px;
  }

  .tech{
    width: 50%;
    height: fit-content;
  }
  .tech h3{
    width: fit-content;
    margin: 0 auto;
  }
  .tech{
    margin-top: 1rem;
  }

`;
import styled from "styled-components";



export const StyledContainer = styled.div`

  text-align: center;
  margin-top: 2rem;

  h2{
    font-size: 16px;
    font-weight: 400;
  }
  .tech-container {
    width: 80%;
    margin: 1rem auto;
    display: flex;
    flex-flow: wrap row;
    overflow-y: auto;
    min-height: 70vh;
    max-height: 80vh;
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
  }
  .tech + .tech{
    margin-top: .5rem;
  }

`;
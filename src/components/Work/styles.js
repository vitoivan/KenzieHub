import styled from "styled-components";


export const StyledContainer = styled.div`
  
  border: 1px solid #fff;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  min-height: 100px;
  margin: 1rem 0;
  padding: 1rem 0;
  max-height: 200px;
  overflow-y: auto;

  h3{
    font-weight: 500;
    font-size: 20px;
    word-break: break-word;
  }
  p{
    font-size: 14px;
    text-align: left;
    padding: 0 1.5rem;
    word-break: break-all;
  }

`;

// ::-webkit-scrollbar {
//   width: 8px;
// }
// ::-webkit-scrollbar-track {
//   border: 1px solid #fff;
//   background: none;
// }
// ::-webkit-scrollbar-thumb {
//   background: transparent;
//   border: 1px solid #fff;
// }
// ::-webkit-scrollbar-track,
// ::-webkit-scrollbar-thumb {
//   border-radius: 150px;
// }
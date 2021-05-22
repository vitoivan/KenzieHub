import styled from "styled-components";



export const StyledContainer = styled.div`
  border: 2px solid var(--font-color);
  display: flex;
  align-items: center;
  width: 80%;
  max-width: 300px;
  border-radius: 10px;
  justify-content: space-between;
  padding: .3rem .6rem .3rem 1rem;
  min-width: 230px;
  
  > div {
    display: flex;
    align-items: center;
  }
  span{
    align-self: flex-start;
  }
  h3{
    font-weight: 300;
    margin-left: 1rem;
    font-size: 18px;
  }
  img{
    width: 50px;
    height: 50px;
  }
`;
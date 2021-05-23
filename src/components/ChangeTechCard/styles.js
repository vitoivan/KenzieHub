import styled from "styled-components";


export const StyledContainer = styled.div`
  
  border-bottom: 1px solid #fff;
  margin: 1rem auto;
  width: 90%;
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 3rem 0;
  h3{
    font-weight: 600;
    font-size: 16px;
  }
  p{
    font-size: 12px;
    margin-top: .5rem;
  }
  strong{
    font-weight: 600;
  }
  .select{
    height: fit-content;
    max-width: 150px;
    width: 150px;
  }
  .option{
    z-index: 10;
  }

  button{
    background: none;
    border: 1px solid #fff;
    color: #fff;
    position: absolute;
    height: 20px;
    width: fit-content;
    padding: .8rem 1rem;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .remove{
    border-color: #f00;
    color: #f00;
    padding: 0;
    width: fit-content;
    padding: 0 .5rem;
    height: 25px;
    font-size: 12px;
    left: initial;
    transform: none;
    right: 0;
  }
`;
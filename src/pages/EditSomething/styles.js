import styled from "styled-components";


export const StyledContainer = styled.div`
  .select{
    text-align: center;
    padding: 0;
    width: 150px;
  }
  h1{
    text-align: center;
    margin: 1rem 0;
    font-weight: 300;
  }
  .select input{
    text-align: center;
    padding: 0;
  }
  header .select > div{
    z-index: 10;
  }
  header{
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    padding-top: 1.5rem;
  }
  .all-techs{
    width: 80%;
    margin: 0 auto;
    max-width: 1024px;
  }
`;
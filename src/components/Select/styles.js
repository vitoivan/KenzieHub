import styled from "styled-components";


export const StyledContainer = styled.div`

`;

export const StyledSelect = styled.div`

    display: inline-block;
    width: 150px;
    cursor: pointer;
    border: 1px solid #fff;
    position: relative;
    border-radius: 25px;

    img{
      position: absolute;
      right: 12px;
      top: 10px;
      margin: 0;
    }
    input{
      width: 100%;
      outline: none;
      cursor: pointer;
      border: none;
      background: none;
      color: #fff;
      padding: 0 .5rem 0 1.3rem;
      caret-color: transparent;
    }

    > div {
      position: absolute;
      text-align: center;
      width: 100%;
      background: #00000094;
    }
    > div:hover {
      background: #fff;
      color: #000;
    }

    > div:nth-child(3) {
      margin-top: 0rem;
    }
    > div:nth-child(4) {
      margin-top: 1.5rem;
    }
    > div:nth-child(5) {
      margin-top: 3rem;
    }
    > div:nth-child(6) {
      margin-top: 4.5rem;
    }

    @media only screen and (min-width:768px){

    }
`;
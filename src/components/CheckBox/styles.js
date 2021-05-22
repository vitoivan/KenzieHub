import styled from "styled-components";


export const StyledContainer = styled.div`

  width: 16px;
  height: 15px;
  position: relative;
  border: 1px solid #fff;
  user-select: none;
  cursor: pointer;
  
  input{
    display: none;
  }

  img{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
`;
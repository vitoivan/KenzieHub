import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledButton = styled(Link)`
  background: none;
  border: none;
  width: 53.7px;
  height: 52px;
  position: fixed;
  bottom: 25px;
  right: 25px;
  box-shadow: 2px 2px 5px 0px #000;
  border-radius: 50%;
  z-index: 5;
  
  :active{
    box-shadow:none;
  }
  img{
    user-select: none;
    pointer-events: none;
    width: 53.7px;
    height: 52px;
  }
`;
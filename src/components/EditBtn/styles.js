import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const StyledLink = styled(Link)`
  color: #fff;
  position: fixed;
  bottom: 25px;
  left: 25px;
  border: 2px solid #fff;
  font-size: 14px;
  font-weight: bold;
  border-radius: 50%;
  height: 55px;
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    box-shadow: 2px 0px 5px 2px #000;
  }
`;
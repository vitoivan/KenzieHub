import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  color: var(--font-color);
  background: none;
  border: 2px solid #fff;
  padding: 15px 60px;
  margin: 2rem;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
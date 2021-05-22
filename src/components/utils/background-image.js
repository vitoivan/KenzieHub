import styled from 'styled-components';
import img from '../../assets/image/phone-bg2.jpg';

const Background = styled.div`
  background: url(${img}) top left no-repeat;
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -99;
`;

export default Background;
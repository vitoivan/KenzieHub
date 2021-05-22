import styled from 'styled-components';

const Gradient = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  background: rgba(29, 97, 199, 0.75) linear-gradient(to bottom, rgba(66, 0, 255, 0.75), rgba(119, 78, 236, 1),rgba(244, 99, 99, 1));
  opacity: .8;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -98;
`;

export default Gradient;
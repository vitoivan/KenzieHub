import styled from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  h3{
    font-weight: 400;
    font-size: 12px;
    position: relative;
    top: -5px;
  }
  p{
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
    font-size: 14px;
  }
  

  .MuiCircularProgress-colorPrimary{
    color: ${ props => {
      if(props.percent <= 25){
        return 'red';
      }else if(props.percent <= 50){
        return '#ff9355';
      }else{
        return 'blue';
      }
    }};

  }
`;
import styled from 'styled-components';

export const InputContainer = styled.label`
    
    border: 1px solid #fff;
    border-color: ${ props => props.error === true ? '#f81919' : '#fff'};
    border-radius: 30px;
    width: fit-content;
    height: fit-content;
    display: block;
    width: 80%;
    max-width: 300px;
    height: 63px;
    display: flex;
    align-items: center;
    padding: 0 25px;
    cursor: text;
    position: relative;
    input{
      background: none;
      border: none;
      outline: none;
      color: var(--font-color);
      width: 100%;
    }
    input::placeholder{
      color: ${ props => props.error === true ? '#f81919' : '#fff'};
      font-size: 16px;
      font-weight: 300;
    }
`;
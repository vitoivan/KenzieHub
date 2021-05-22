import styled from "styled-components";

export const StyledContainer = styled.div`

header{
  height: 10vh;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}
header > a{
  width: 30%;
  margin: 10px 25px 0 0;
  padding: 0;
  height: fit-content;
}
header img{
  width: 100%;
}

form{
  margin: 0 auto;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
form label{
  height: 40px;
  margin: 0;
  width: 90%;
}
form label + label {
  margin-top: 1.1rem;
}
label p{
  font-size: 12px;
  position: absolute;
  top: -17px;
  left: 19px;
}
label input::placeholder{
  font-size: .77rem;
}
.haveAcc p{
  font-size: 14px;
  margin-top: 20px;
}
a{
  color: #fff;
  text-decoration: underline; 
}
.button{
  padding: 0;
  border: 1px solid #fff;
  width: 158px;
  height: 52.99px;
  text-decoration: none;
}
`;

export const StyledTextArea = styled.textarea`
  border: 1px solid #fff;
  outline: none;
  background: none;
  border-radius: 10px;
  color: #fff;
  padding: 15px;
  padding-left: 25px;
  width: 85%;
  max-width: 300px;
  overflow-y: hidden;
  margin-top: 1rem;
  box-sizing: border-box;

::placeholder{
  color: #fff;
  font-size: 1rem;
  font-size: .77rem;
  font-weight: 300;
}
`;
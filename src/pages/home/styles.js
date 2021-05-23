import styled from "styled-components";

export const StyledContainer = styled.div`
  .buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65%;
    margin: 0 auto;
    margin-top: 10vh;
  }
  .buttons .button{
    text-align: center;
    padding:0;
    font-size: 14px;
    box-sizing: content-box;
    margin: 0;
    width: 103px;
    height: 42px;
  }
  .buttons .button + .button{
    margin-left: 2rem;
  }
  & > a{
    display: block;
    width: 158px;
    height: 46px;
    font-size: 14px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
  }
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 2rem 0;
  max-width: 1024px;
  margin: 0 auto;

  & > img{
    width: 129px;
    height: 31px;
    justify-self: flex-start;
  }

  & > div{
    margin-left: 5%;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: .8rem;
  }

  .select{
    border: 2px solid #fff;
    width: fit-content;
    height: 25px;
    width: 96.69px;
    text-align: center;
  }
  .select input{
    padding: 0;
    text-align: center;
    font-size: 12px
  }
  .select img{
    top: 8px;
    right: 11px;
    height: 7.14px;
    width: 8.24px;
  }
  .select  div{
    border: none;
  }
  .select div:nth-child(3){
    margin-top: 0.3rem;
  }
  .select div:nth-child(4){
    margin-top: 1.408rem;
  }
  .select div:nth-child(5){
    margin-top: 2.56rem;
  }
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 45vh;
  max-height: 280px;
  width: fit-content;
  margin: 0 auto;
  h1{
    font-weight: 400;
    font-size: 24px;
    margin-bottom: 2rem;
  }
  .user-card {
    width: 270px;
    height: 48px;
  }

  .user-card + .user-card{
    margin-top: 1rem;
  }

  & > div {
    overflow-y: auto;
    padding: 0 30px;
  }

  & > div::-webkit-scrollbar {
    width: 10px;
  }
  & > div::-webkit-scrollbar-track {
    border: 1px solid #fff;
  }
  & > div::-webkit-scrollbar-thumb {
      background: #fff;
  }
  & > div::-webkit-scrollbar-track,
  & > div::-webkit-scrollbar-thumb {
    border-radius: 50px;
  }
  
`;
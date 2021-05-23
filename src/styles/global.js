import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    :root{
      --error: #f81919;
      --font-color: #fff;
    }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  .App{
    min-height: 100vh;
    position: absolute;
    width: 100vw;
    max-width: 100vw;
    top:0;
    left: 0;
    box-sizing: content-box;
    padding-bottom: 2rem;
    margin: 0 auto;
  }
  html{
    overflow-x: hidden;
    background: rgba(29, 97, 199, 0.75);
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      border: none;
      background: linear-gradient(to bottom, rgba(66,0,255,0.75), rgba(124,63,255,1), rgba(244,99,99,1), rgba(255, 92, 0, 0.75));
    }
    ::-webkit-scrollbar-thumb {
      background: transparent;
      border: 1px solid #fff;
    }
    ::-webkit-scrollbar-track,
    ::-webkit-scrollbar-thumb {
      border-radius: 150px;
    }
  }
  body{
    color: var(--font-color);
    font-family: 'Poppins', sans-serif;
    position: absolute;
    top:0;
    left: 0;
  }
  
  button{
    cursor: pointer;
  }

  input, h1,h2,h3,h4,h5,h6, p, button, label, ul, li, a{
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
`;

export default Global
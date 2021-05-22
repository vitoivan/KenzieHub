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
    max-width: 100vw;
    width: 100vw;
    top:0;
    left: 0;
    box-sizing: content-box;
    padding-bottom: 2rem;
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
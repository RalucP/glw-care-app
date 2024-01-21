import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

  :root{
    font-family: 'Josefin Sans', sans-serif;
    margin: 0;
    padding: 0 3em;
    box-sizing: border-box;

    @media screen and (max-width: 800px) {
      padding: 0 .5em;
    }

    --primary-color: #fff;
    --secondary-color: #000;
    --third-color: #7c7c7c;
  }

  a{
    text-decoration: none;
  }
`
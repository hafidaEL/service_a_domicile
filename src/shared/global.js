import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
    background-color: #F86C29;
    color: #fff;
    font-family: "Capriola",sans-serif;
}

section {
    text-align: center;
  }
  
  h1 {
    font-size: 3rem;
  }
  
  h2 {
    font-size: 2rem;
    color: #dedede;
  }
  
  img {
    
  }
  
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .tile {
    text-align: center;
    padding: 10px;
  }
  `;
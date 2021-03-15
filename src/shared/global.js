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

input {
    padding: 10px;
    border: 1px solid #f86c29;
    border-radius: 5px;
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
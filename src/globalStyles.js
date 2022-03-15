import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');
* {
    padding:0;
    margin:0;
    box-sizing: border-box;
    list-style-type: none;

}

body {
    font-family: 'Lato', sans-serif;
    position: relative;
}

a {
    text-decoration: none;
}



`;

export default GlobalStyle;

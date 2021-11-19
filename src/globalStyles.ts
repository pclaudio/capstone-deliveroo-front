import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Inter', sans-serif;
}

:root {
    --primary-color: linear-gradient(135deg, rgba(83,232,139,1) 35%, rgba(21,190,119,1) 100%);
    --hover-color: linear-gradient(135deg, rgba(21,190,119,1) 35%, rgba(83,232,139,1) 100%);
    --hover-color-50:rgba(21,190,119,1);
    --primary-color-50: #93D7AF;
    --secondary-color: #EB5757;
    --white: #F5F5F5;
    --grey-600: #333333;
    --grey-300: #828282;
    --grey-100: #E0E0E0;
    --orange: #da6317;
    --info: #155BCB;
    --success: #168821;
    --warning: #FFCD07;
    --error: #E60000;
    --background-color: #FEFEFF
}

body {
    background-attachment: fixed;
    background-color: #FEFEFF;
    color: var(--grey-600);
    background-color: var(--background-color);
    height: 100%;
}

h1 {
    font-size: 26px;
    font-weight: bold;
}

h2 {
    font-size: 22px;
    font-weight: bold;
}

h3 {
    font-size: 18px;
    font-weight: bold;
}

button, svg, path {
    cursor: pointer;
}

#logoContainer {
    display: flex;
    width: 100%;
    max-width: 479px;
}

@media screen and (min-width: 1024px) {
    body {
        margin-bottom: 0;
    }
}`;

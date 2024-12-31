import { createGlobalStyle } from "styled-components";
import GcbRegular from './font/GcbRegular.ttf';
import GcbBold from './font/GcbBold.ttf';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'GcbRegular';
    src: url(${GcbRegular}) format('truetype');
}

@font-face {
    font-family: 'GcbBold';
    src: url(${GcbBold}) format('truetype');
}

*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
h1,h2,h3,h4,h5,h6{
    display: inline-block;
}

body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'GcbRegular', 'Segoe UI', 'Roboto', 'Oxygen';
}
`

export default GlobalStyle;
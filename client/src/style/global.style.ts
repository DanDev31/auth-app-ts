import { createGlobalStyle } from "styled-components";

interface GlobalStyleInterface {
    bg:string;
}


const GlobalStyle = createGlobalStyle<GlobalStyleInterface>`

    *, *::before, *::after{
        box-sizing: border-box;
    }

    *{
        margin: 0;
    }

    html, body{
        height: 100%;
    }

    body{
        background-color: ${({ bg }) => bg};
        line-height: 1.5;
    }

    img, video, svg{
        display: block;
        width: 100%;
    }

    input, text-area, select, button{
        font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6{
        overflow-wrap: break-word;
    }

`;

export default GlobalStyle;
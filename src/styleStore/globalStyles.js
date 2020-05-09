import { createGlobalStyle } from "styled-components/macro";

export default createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box; 
    }

    button {
        border: none;
        outline:none;
        background:none;
    }

    input{
        border-radius: 5px;
        box-shadow: 0 2px 5px #a8dadc, 0 -2px 5px #f1faee;
        border: 1px solid #a8dadc;
    }
`;

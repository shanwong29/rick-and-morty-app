import { createGlobalStyle } from "styled-components/macro";
import { theme } from "./theme";

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
        box-shadow: 0 2px 5px ${theme.blue}, 0 -2px 5px ${theme.paleBlue};
        border: 1px solid ${theme.blue};
        margin: 5px;
    }
`;

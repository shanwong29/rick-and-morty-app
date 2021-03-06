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
        cursor:pointer;
    }

    input{
        border-radius: 5px;
        box-shadow: 0 2px 5px ${theme.primary.lighten1}, 0 -2px 5px ${theme.primary.lighten2};
        border: 1px solid ${theme.primary.lighten1};
        margin: 3px 5px;
        font-size: 14px;
        padding: 4px;
        outline: none;
        :hover, :focus{
            border: 1px solid  ${theme.primary.main};
        }
    }

    select{
        border-radius:5px;
        box-shadow: 0 2px 5px ${theme.primary.lighten1}, 0 -2px 5px ${theme.primary.lighten2};
        border: 1px solid ${theme.primary.lighten1};
        background: white;
        font-size: 14px;
        padding: 2px 4px;
        margin: 3px 5px;
        outline: none;
        :hover, :focus{
            border: 1px solid  ${theme.primary.main};
        }}

`;

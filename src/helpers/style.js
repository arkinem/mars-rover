import { createGlobalStyle } from "styled-components";

export const colors = {
  text: "#ffffff",
  border: "#515151",
  surface: "#373738",
  surfaceDarker: "#333333",
  // background: "#282c34",
  background: "#232741",
  error: "#ff6b6b",
  button: " #646566",
  tooltip: " #646566",
};

export const font = "'Ubuntu', sans-serif";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.background};
    color: ${colors.text};
    font-family: ${font};
  }

  textarea {
    background: ${colors.surface};
    color: ${colors.text};
    border: 1px solid ${colors.border};
  }

  select {
    padding: 6px;
    background: ${colors.surface};
    color: ${colors.text};
    border: 1px solid ${colors.border};
     font-family: ${font};
  }

  option {
  
     padding:10px 10px;
 
  }
`;

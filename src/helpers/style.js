import { createGlobalStyle } from "styled-components";

export const colors = {
  text: "#ffffff",
  surface: "#515151",
  surfaceDarker: "#373738",
  // background: "#282c34",
  background: "#232741",
  error: "#ff6b6b",
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.background};
    color: ${colors.text};
    font-family: 'Ubuntu', sans-serif;
  }

  textarea {
    background: ${colors.surfaceDarker};
    color: ${colors.text};
    border: 1px solid ${colors.surface};
  }
`;

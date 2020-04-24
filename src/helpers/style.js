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
  grid: {
    startPosition: "#2b580c",
    finishPosition: "#900c3f",
    path: "#639a67",
    otherRovers: "#ff5733",
    background: "#404040",
    border: "#333333",
  },
};

export const shadow = {
  s: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
  m: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
  l: "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
  xl: "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)",
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

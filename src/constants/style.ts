import { createGlobalStyle } from "styled-components";

export const colors = {
  text: "#ffffff",
  border: "#515151",
  surface: "#373738",
  surfaceDarker: "#333333",
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
    overflow: auto;
    outline: none;
    resize: none;
    padding: 12px;
    width: calc(100% - 26px);

    ::placeholder {
      font-family: ${font};
    }
  }

  select {
    padding: 6px;
    background: ${colors.surface};
    color: ${colors.text};
    border: 1px solid ${colors.border};
     font-family: ${font};
  }
`;

export const particlesBackgroundConfig = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

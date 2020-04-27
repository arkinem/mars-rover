import React from "react";
import styled from "styled-components";
import Particles, { IParticlesParams } from "react-particles-js";
import { particlesBackgroundConfig } from "../constants/style";

export default () => {
  return (
    <Background
      height={"100%"}
      width={"100%"}
      params={particlesBackgroundConfig as IParticlesParams}
    />
  );
};

const Background = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

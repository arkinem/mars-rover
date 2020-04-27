import React, { FunctionComponent } from "react";
import styled from "styled-components";

export const Header: FunctionComponent<{}> = () => (
  <Heading>Mars Rover</Heading>
);

const Heading = styled.h1`
  padding: 16px;
  font-size: 32px;
  letter-spacing: 1px;
`;

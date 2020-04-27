import React, { FunctionComponent } from "react";
import styled from "styled-components";
import strings from "../constants/strings";

export const Header: FunctionComponent<{}> = () => (
  <Heading>{strings.header.marsRover}</Heading>
);

const Heading = styled.h1`
  padding: 16px;
  font-size: 32px;
  letter-spacing: 1px;
`;

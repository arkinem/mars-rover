import React from "react";
import styled from "styled-components";
import { colors } from "../helpers/style";

export default ({ text }) => <Container show={!!text}>{text}</Container>;

const Container = styled.div`
  min-height: ${({ show }) => (show ? 16 : 0)}px;
  margin: ${({ show }) => (show ? 12 : 0)}px;
  transition: all 0.3s;
  color: ${colors.error};
`;

import React from "react";
import styled from "styled-components";
import { colors } from "../helpers/style";

export default ({ text }) => {
  console.log(text, !!null);
  return <Container show={!!text}>{text}</Container>;
};

const Container = styled.div`
  /* height: ${({ show }) => (show ? 80 : 0)}px; */
   min-height: ${({ show }) => (show ? 16 : 0)}px; 
  margin: ${({ show }) => (show ? 16 : 0)}px;
  transition: all 0.3s;
  color: ${colors.error}
`;

const Text = styled.p``;

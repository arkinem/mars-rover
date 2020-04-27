import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { colors } from "../constants/style";

type Props = {
  text: string | null;
};

export const MessageBox: FunctionComponent<Props> = ({ text }: Props) => (
  <Container show={!!text}>{text}</Container>
);

type ContainerProps = {
  show: boolean;
};

const Container = styled.div`
  min-height: ${(props: ContainerProps) => (props.show ? 16 : 0)}px;
  margin: ${(props: ContainerProps) => (props.show ? 12 : 0)}px;
  transition: all 0.3s;
  color: ${colors.error};
`;

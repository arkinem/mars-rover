import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { colors } from "../../constants/style";

type Props = {
  color: string;
  label: string;
};

export const LegendUnit: FunctionComponent<Props> = ({ color, label }) => (
  <Container>
    <ColorBox color={color} />
    {label}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-basis: 50%;
  margin-bottom: 8px;
  font-size: 14px;
`;

type ColorBoxProps = {
  color: string;
};

const ColorBox = styled.div`
  margin-right: 12px;
  height: 14px;
  width: 14px;
  border: 1px solid ${colors.border};
  background-color: ${({ color }: ColorBoxProps) => color};
`;

import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { LegendUnit } from "./LegendUnit";
import { colors } from "../../constants/style";

export const GridLegend: FunctionComponent<{}> = () => (
  <Container>
    <LegendUnit label="Start Position" color={colors.grid.startPosition} />
    <LegendUnit label="End Position" color={colors.grid.finishPosition} />
    <LegendUnit label="Selected Rover Path" color={colors.grid.path} />
    <LegendUnit label="Other Rovers" color={colors.grid.otherRovers} />
  </Container>
);

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
`;

import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { LegendUnit } from "./LegendUnit";
import { colors } from "../../constants/style";
import strings from "../../constants/strings";

export const GridLegend: FunctionComponent<{}> = () => (
  <Container>
    <LegendUnit
      label={strings.legend.startPosition}
      color={colors.grid.startPosition}
    />
    <LegendUnit
      label={strings.legend.endPosition}
      color={colors.grid.finishPosition}
    />
    <LegendUnit
      label={strings.legend.selectedRoverPath}
      color={colors.grid.path}
    />
    <LegendUnit
      label={strings.legend.otherRovers}
      color={colors.grid.otherRovers}
    />
  </Container>
);

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
`;

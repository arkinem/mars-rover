import React from "react";
import styled from "styled-components";
import { colors } from "../helpers/style";

export default () => {
  return (
    <Container>
      <LegendUnit>
        <ColorBox color={colors.grid.startPosition} />
        Start Position
      </LegendUnit>
      <LegendUnit>
        <ColorBox color={colors.grid.finishPosition} />
        End Position
      </LegendUnit>
      <LegendUnit>
        <ColorBox color={colors.grid.path} />
        Selected Rover Path
      </LegendUnit>
      <LegendUnit>
        <ColorBox color={colors.grid.otherRovers} />
        Other Rovers
      </LegendUnit>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
`;

const LegendUnit = styled.div`
  display: flex;
  flex-basis: 50%;
  margin-bottom: 8px;
  font-size: 14px;
`;

const ColorBox = styled.div`
  margin-right: 12px;
  height: 14px;
  width: 14px;
  border: 1px solid ${colors.border};
  background-color: ${({ color }) => color};
`;

import React, { ReactNodeArray, ReactNode, FunctionComponent } from "react";
import styled from "styled-components";
import { colors } from "../../constants/style";
import strings from "../../constants/strings";
import { RoverLocation, Rover, getFinalLocation } from "../../helpers/rover";

const size = 300;

const renderYGridBorders = (
  maxX: number,
  maxGridY: number,
  cellSize: number
): ReactNodeArray =>
  Array.from(Array(maxX + 2).keys()).map((index) => (
    <GridBorder
      key={index}
      x1={index * cellSize}
      y1={0}
      x2={index * cellSize}
      y2={maxGridY}
    />
  ));

const renderXGridBorders = (
  maxY: number,
  maxGridX: number,
  cellSize: number
): ReactNodeArray =>
  Array.from(Array(maxY + 2).keys()).map((index) => (
    <GridBorder
      key={index}
      x1={0}
      y1={index * cellSize}
      x2={maxGridX}
      y2={index * cellSize}
    />
  ));

const renderPath = (
  path: RoverLocation[],
  cellSize: number
): ReactNodeArray => {
  return path.map(({ x, y }, index: number) => (
    <Circle
      key={index}
      cx={cellSize * x + cellSize / 2}
      cy={size - cellSize * y - cellSize / 2}
      r={cellSize / 3}
      fill={colors.grid.path}
    />
  ));
};

const renderStartMarker = (
  position: RoverLocation,
  cellSize: number
): ReactNode => {
  if (position) {
    const { x, y } = position;

    return (
      <Circle
        cx={cellSize * x + cellSize / 2}
        cy={size - cellSize * y - cellSize / 2}
        r={cellSize / 3}
        fill={colors.grid.startPosition}
      />
    );
  }
};

const renderFinishMarker = (rover: Rover, cellSize: number): ReactNode => {
  if (
    (rover && rover.error !== strings.error.roverOutsideEdge) ||
    rover.error !== strings.error.roverStartLocationOccupied
  ) {
    const { x, y } = getFinalLocation(rover);

    return (
      <Circle
        cx={cellSize * x + cellSize / 2}
        cy={size - cellSize * y - cellSize / 2}
        r={cellSize / 3}
        fill={colors.grid.finishPosition}
      />
    );
  }
};

const renderPreviousRoversMarkers = (
  roverIndex: number,
  rovers: Rover[],
  cellSize: number
) => {
  if (roverIndex < rovers.length) {
    const result = [];

    for (let i = 0; i < roverIndex; i++) {
      const rover = rovers[i];

      if (
        rover.error !== strings.error.roverStartLocationOccupied &&
        rover.error !== strings.error.roverOutsideEdge
      ) {
        const { x, y } = getFinalLocation(rovers[i]);

        result.push(
          <circle
            key={i}
            cx={cellSize * x + cellSize / 2}
            cy={size - cellSize * y - cellSize / 2}
            r={cellSize / 3}
            fill={colors.grid.otherRovers}
          />
        );
      }
    }

    return result;
  }
};

type Props = {
  maxX: number;
  maxY: number;
  roverIndex: number;
  rovers: Rover[];
};

export const Grid: FunctionComponent<Props> = ({
  maxX,
  maxY,
  roverIndex,
  rovers,
}) => {
  let cellSize = size / ((maxX > maxY ? maxX : maxY) + 1);
  const maxGridX = cellSize * (maxX + 1);
  const maxGridY = cellSize * (maxY + 1);
  const rover = rovers[roverIndex];

  if (rover) {
    const { error, path, initialLocation } = rover;

    return (
      <Svg>
        {renderYGridBorders(maxX, maxGridY, cellSize)}
        {renderXGridBorders(maxY, maxGridX, cellSize)}

        {path &&
          error !== strings.error.roverStartLocationOccupied &&
          renderPath(
            path.filter((p, i) => i !== 0 || i !== path.length - 1),
            cellSize
          )}

        {error !== strings.error.roverStartLocationOccupied &&
          renderStartMarker(initialLocation, cellSize)}
        {error !== strings.error.roverStartLocationOccupied &&
          error !== strings.error.roverOutsideEdge &&
          renderFinishMarker(rover, cellSize)}

        {renderPreviousRoversMarkers(roverIndex, rovers, cellSize)}
      </Svg>
    );
  } else return null;
};

const Svg = styled.svg`
  width: ${size + 1}px;
  height: ${size + 1}px;
  background: ${colors.grid.background};
`;

const GridBorder = styled.line`
  stroke: ${colors.grid.border};
  stroke-width: 1px;
`;

const Circle = styled.circle`
  stroke: none;
`;

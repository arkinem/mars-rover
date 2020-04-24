import React from "react";
import styled from "styled-components";
import { colors } from "../../helpers/style";
import messages from "../../helpers/messages";

const size = 300;

const getYGridBorders = (maxX, maxGridY, cellSize) =>
  Array.from(Array(maxX + 2).keys()).map((index) => (
    <GridBorder
      key={index}
      x1={index * cellSize}
      y1={0}
      x2={index * cellSize}
      y2={maxGridY}
    />
  ));

const getXGridBorders = (maxY, maxGridX, cellSize) =>
  Array.from(Array(maxY + 2).keys()).map((index) => (
    <GridBorder
      key={index}
      x1={0}
      y1={index * cellSize}
      x2={maxGridX}
      y2={index * cellSize}
    />
  ));

const getRoverPath = (path, cellSize) => {
  return path.map(({ x, y }, index) => (
    <Circle
      key={index}
      cx={cellSize * x + cellSize / 2}
      cy={size - cellSize * y - cellSize / 2}
      r={cellSize / 3}
      fill={colors.grid.path}
    />
  ));
};

const getStartMarker = (position, cellSize) => {
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

const getFinishMarker = (rover, cellSize) => {
  if (
    (rover && rover.error !== messages.error.roverOutsideEdge) ||
    rover.error !== messages.error.roverStartPositionOccupied
  ) {
    const { x, y } = rover.finalPosition;

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

const getPreviousRoversMarkers = (roverIndex, rovers, cellSize) => {
  if (roverIndex < rovers.length) {
    const result = [];

    for (let i = 0; i < roverIndex; i++) {
      const rover = rovers[i];

      if (
        rover.error !== messages.error.roverStartPositionOccupied &&
        rover.error !== messages.error.roverOutsideEdge
      ) {
        const { x, y } = rovers[i].finalPosition;

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

export default ({ maxX, maxY, roverIndex, rovers }) => {
  if (maxX && maxY) {
    let cellSize = size / ((maxX > maxY ? maxX : maxY) + 1);
    const maxGridX = cellSize * (maxX + 1);
    const maxGridY = cellSize * (maxY + 1);
    const rover = rovers[roverIndex];

    return (
      <Svg>
        {getYGridBorders(maxX, maxGridY, cellSize)}
        {getXGridBorders(maxY, maxGridX, cellSize)}
        {rover.error !== messages.error.roverStartPositionOccupied &&
          getRoverPath(
            rover.path.filter((p, i) => i !== 0 || i !== rover.path.length),
            cellSize
          )}
        {rover.error !== messages.error.roverStartPositionOccupied &&
          getStartMarker(rover.initialPosition, cellSize)}
        {rover.error !== messages.error.roverStartPositionOccupied &&
          rover.error !== messages.error.roverOutsideEdge &&
          getFinishMarker(rover, cellSize)}
        {getPreviousRoversMarkers(roverIndex, rovers, cellSize)}
      </Svg>
    );
  }

  return null;
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

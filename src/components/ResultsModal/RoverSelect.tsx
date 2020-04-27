import React, { ChangeEvent, FunctionComponent } from "react";
import styled from "styled-components";
import { Rover } from "../../helpers/rover";

type Props = {
  rovers: Rover[];
  selectedIndex: number;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const getRoverLabel = (
  index: number,
  { initialLocation, error }: Rover
): string => {
  let result = `#${index} || x:${initialLocation.x} y:${initialLocation.y} heading:${initialLocation.heading}`;

  if (error) result += ` [${error}]`;
  return result;
};

export const RoverSelect: FunctionComponent<Props> = ({
  rovers,
  selectedIndex,
  onChange,
}) => (
  <Select value={selectedIndex} onChange={onChange}>
    {rovers.map((rover, index) => (
      <option key={index} value={index}>
        {getRoverLabel(index, rover)}
      </option>
    ))}
  </Select>
);

const Select = styled.select`
  width: 100%;
`;

import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { colors } from "../constants/style";
import { Tooltip } from "./Tooltip";

export const InputTooltip: FunctionComponent<{}> = () => (
  <Tooltip>
    <Paragraph>
      The <B>first line of input</B> is the upper-right coordinates of the
      plateau, the lower-left coordinates are assumed to be 0,0.
    </Paragraph>
    <Paragraph>
      The rest of the input is information pertaining to the rovers that have
      been deployed. Each rover has two lines of input. The first line gives the
      rover's position, and the second line is a series of instructions telling
      the rover how to explore the plateau.
    </Paragraph>
    <Paragraph>
      The position is made up of two integers and a letter separated by spaces,
      corresponding to the x and y co-ordinates and the rover's orientation.
    </Paragraph>
    <Paragraph>
      Example:{"\n"}5 5{"\n"}2 1 N{"\n"}LMLMLMLMM{"\n"}3 3 E{"\n"}
      MMRMMRMRRM
    </Paragraph>
    <Paragraph>
      Note: Path visualisation is not available for plateau that exceeds
      100x100.
    </Paragraph>
    <Paragraph>
      If you need more help, look here:{"\n"}
      <Link
        target="_blank"
        href="https://code.google.com/archive/p/marsrovertechchallenge/"
      >
        https://code.google.com/archive/p/marsrovertechchallenge/
      </Link>
    </Paragraph>
  </Tooltip>
);

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 300;
  margin-bottom: 12px;
  white-space: pre-wrap;
`;

const B = styled.span`
  font-size: 500;
`;

const Link = styled.a`
  overflow-wrap: break-word;
  color: ${colors.text};
  text-decoration: none;

  opacity: 0.9;
  :hover {
    opacity: 0.5;
  }
`;

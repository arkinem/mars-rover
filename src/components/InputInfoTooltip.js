import React from "react";
import styled from "styled-components";
import { FaInfoCircle } from "react-icons/fa";
import { colors, shadow } from "../helpers/style";

export default () => (
  <Container>
    <InfoIcon />
    <TooltipContainer>
      <Paragraph>
        The <B>first line of input</B> is the upper-right coordinates of the
        plateau, the lower-left coordinates are assumed to be 0,0.
      </Paragraph>
      <Paragraph>
        The rest of the input is information pertaining to the rovers that have
        been deployed. Each rover has two lines of input. The first line gives
        the rover's position, and the second line is a series of instructions
        telling the rover how to explore the plateau.
      </Paragraph>
      <Paragraph>
        The position is made up of two integers and a letter separated by
        spaces, corresponding to the x and y co-ordinates and the rover's
        orientation.
      </Paragraph>
      <Paragraph>
        Example:{"\n"}5 5{"\n"}2 N LMLMLMLMM{"\n"}3 3 E MMRMMRMRRM
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
    </TooltipContainer>
  </Container>
);

const Container = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  height: 30px;
  width: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
`;

const InfoIcon = styled(FaInfoCircle)`
  ${Container}:hover & {
    opacity: 0.8;
  }
`;

const TooltipContainer = styled.div`
  position: absolute;
  max-width: 270px;
  width: 270px;
  right: 30px;
  top: -40px;
  padding: 12px;
  z-index: 90;
  background: ${colors.surface};
  border-radius: 4px;
  box-shadow: ${shadow.l};

  display: none;
  ${Container}:hover & {
    display: flex;
    flex-direction: column;
  }
`;

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

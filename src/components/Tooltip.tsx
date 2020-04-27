import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { FaInfoCircle } from "react-icons/fa";
import { colors, shadow } from "../constants/style";

type Props = {
  children: React.ReactNode;
};

export const Tooltip: FunctionComponent<Props> = ({ children }: Props) => (
  <Container>
    <InfoIcon />
    <TooltipContainer>{children}</TooltipContainer>
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

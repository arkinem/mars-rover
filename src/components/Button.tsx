import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { colors, font, shadow } from "../constants/style";

type Props = { label: any } & React.HTMLProps<HTMLButtonElement>;

export const Button: FunctionComponent<Props> = ({
  label,
  onClick,
  className,
}) => (
  <StyledButton className={className} onClick={onClick}>
    {label}
  </StyledButton>
);

const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 3px;
  color: ${colors.text};
  font-size: 16px;
  font-family: ${font};
  background: ${colors.button};
  box-shadow: ${shadow.s};
  outline: none;

  :hover {
    box-shadow: ${shadow.m};
    opacity: 0.85;
  }

  :active {
    opacity: 0.7;
  }

  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

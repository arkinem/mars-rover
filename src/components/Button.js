import React from "react";
import styled from "styled-components";
import { colors, font, shadow } from "../helpers/style";

export default ({ label, className, onClick }) => {
  return (
    <Button className={className} onClick={onClick}>
      {label}
    </Button>
  );
};

const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 3px;
  color: ${colors.text};
  font-size: 16px;
  font-family: ${font};
  background: ${colors.button};
  box-shadow: ${shadow.s};

  :hover {
    box-shadow: ${shadow.m};
    opacity: 0.85;
  }

  :active {
    opacity: 0.7;
  }

  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

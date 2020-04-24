import React from "react";
import styled from "styled-components";
import { colors, font } from "../helpers/style";

export default ({ label, className }) => {
  return <Button className={className}>{label}</Button>;
};

const Button = styled.button`
  padding: 12px;
  background: ${colors.button};
  border: none;
  border-radius: 3px;
  color: ${colors.text};
  font-size: 16px;
  font-family: ${font};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  :hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    opacity: 0.85;
  }

  :active {
    opacity: 0.7;
  }

  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

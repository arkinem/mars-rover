import React from "react";
import styled from "styled-components";

export default ({ value, onChange }) => {
  return (
    <TextInput
      readOnly={true}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

const TextInput = styled.textarea`
  width: 100%;
  resize: none;
  height: 180px;
`;

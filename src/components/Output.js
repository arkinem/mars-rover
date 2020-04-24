import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { GiPathDistance } from "react-icons/gi";
export default ({ value, onChange }) => {
  return (
    <Container>
      <TextInput
        readOnly={true}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <ConfirmButton label={<GiPathDistance color="white" />} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const TextInput = styled.textarea`
  width: 100%;
  resize: none;
  height: 180px;
`;

const ConfirmButton = styled(Button)`
  position: absolute;
  bottom: 15px;
  right: 10px;
  padding: 0;
  padding-top: 10px;
  font-size: 26px;
  width: 45px;
  height: 45px;
  border-radius: 100%;
`;

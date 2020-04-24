import React from "react";
import styled from "styled-components";
import MessageBox from "./MessageBox";
import { tryParseInput } from "../helpers/input";
import Button from "./Button";
import InputInfoTooltip from "./InputInfoTooltip";

export default class Input extends React.Component {
  state = {
    text: tempText,
    error: null,
  };

  onConfirm = () => {
    const { plateau, error, rovers } = tryParseInput(this.state.text);

    if (!error) {
      this.setState({ error: null });
      this.props.onSubmit(plateau, rovers);
    } else {
      this.setState({ error });
    }
  };

  render() {
    return (
      <>
        <Label>Insert your input here:</Label>
        <TextInputContainer>
          <TextInput
            value={this.state.text}
            onChange={(event) => this.setState({ text: event.target.value })}
          />
          <InputInfoTooltip />
        </TextInputContainer>

        <MessageBox text={this.state.error} />
        <ConfirmButton label="calculate" onClick={this.onConfirm} />
      </>
    );
  }
}

const Label = styled.p`
  margin-bottom: 12px;
  font-weight: 300;
`;

const TextInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const TextInput = styled.textarea`
  width: 100%;
  resize: none;
  height: 100px;
`;

const ConfirmButton = styled(Button)`
  margin: 12px 0;
`;

const tempText = `15 15
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
14 14 S
MMMMRMMMMMMMMMLMMMMRMMMMMMRMMMMMMM
8 5 N
LMLMLMLMM
3 12 N
MMMMMMMMMMMRMMMMMM
7 7 N
LMLMLMLMM
9 9 N
LMLMLMLMM
`;

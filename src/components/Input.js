import React from "react";
import styled from "styled-components";
import MessageBox from "./MessageBox";
import { tryParseInput } from "../helpers/input";

//validation from here before button click?

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
        <TextInput
          value={this.state.text}
          onChange={(event) => this.setState({ text: event.target.value })}
        />
        <MessageBox text={this.state.error} />
        <ConfirmButton onClick={this.onConfirm}>calculate</ConfirmButton>
      </>
    );
  }
}

const TextInput = styled.textarea`
  width: 100%;
  resize: none;
  height: 80px;
`;

const ConfirmButton = styled.button`
  margin: 12px 0;
`;

const tempText = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
`;

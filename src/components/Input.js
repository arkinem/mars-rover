import React from "react";
import styled from "styled-components";

//validation from here before button click?

export default class Input extends React.Component {
  state = {
    text: tempText,
  };

  render() {
    return (
      <>
        <TextInput
          value={this.state.text}
          onChange={(event) => this.setState({ text: event.target.value })}
        />
        <ConfirmButton onClick={() => this.props.onConfirm(this.state.text)}>
          calculate
        </ConfirmButton>
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

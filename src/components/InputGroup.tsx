import React from "react";
import styled from "styled-components";
import { InputTooltip } from "./InputTooltip";
import { MessageBox } from "./MessageBox";
import { Button } from "./Button";
import strings from "../constants/strings";

type Props = {
  error: string | null;
  onConfirm: (text: string) => void;
};

type State = {
  input: string;
};

export default class InputGroup extends React.Component<Props, State> {
  state = {
    input: "",
  };

  onConfirm = () => {
    this.props.onConfirm(this.state.input);
  };

  render() {
    return (
      <>
        <TextInputContainer>
          <TextInput
            placeholder={strings.placeholder.insertYourInputHere}
            value={this.state.input}
            onChange={(e) =>
              this.setState({
                //@ts-ignore
                input: (e.target as HTMLTextAreaElement).value,
              })
            }
          />
          <InputTooltip />
        </TextInputContainer>
        <MessageBox text={this.props.error} />
        <ConfirmButton
          label={strings.button.calculate}
          onClick={this.onConfirm}
        />
      </>
    );
  }
}

const TextInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const TextInput = styled.textarea`
  resize: none;
  height: 150px;
`;

const ConfirmButton = styled(Button)`
  margin: 12px 0;
`;

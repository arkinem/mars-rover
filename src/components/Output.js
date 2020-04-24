import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { GiPathDistance } from "react-icons/gi";
import { parseOutput } from "../helpers/output";
import PathsModal from "./PathsModal";

class Output extends React.Component {
  state = { pathsModalOpen: false };

  render() {
    const { rovers, plateau } = this.props;
    console.log(plateau);
    return (
      <Container>
        <TextInput readOnly={true} value={parseOutput(rovers, false)} />
        {rovers && plateau && (
          <>
            <ConfirmButton
              label={<GiPathDistance color="white" />}
              onClick={() => this.setState({ pathsModalOpen: true })}
            />
            <PathsModal
              plateau={plateau}
              rovers={rovers}
              isOpen={this.state.pathsModalOpen}
              closeModal={() => this.setState({ pathsModalOpen: false })}
            />
          </>
        )}
      </Container>
    );
  }
}

export default Output;

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

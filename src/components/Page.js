import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { calculateRoversPaths } from "../helpers/paths";
import Background from "./Background";
import { colors, shadow } from "../helpers/style";
import { tryParseInput } from "../helpers/input";
import MessageBox from "./MessageBox";
import Button from "./Button";
import InputInfoTooltip from "./InputInfoTooltip";
import { parseOutput } from "../helpers/output";
import { GiPathDistance } from "react-icons/gi";
import PathsModal from "./PathsModal/PathsModal";

class Page extends React.Component {
  state = {
    error: null,
    inputText: tempText,
    rovers: null,
    plateau: null,
    pathsModalOpen: false,
  };

  onConfirm = () => {
    const { plateau, error, rovers } = tryParseInput(this.state.inputText);

    if (!error) {
      if (this.state.error) this.setState({ error: null });

      const roversCalculated = calculateRoversPaths(
        plateau.maxX,
        plateau.maxY,
        rovers
      );

      this.setState({ rovers: roversCalculated, plateau });
    } else {
      this.setState({ error });
    }
  };

  render() {
    return (
      <Container>
        <Background />
        <Content>
          <Header />
          <Label>Insert your input here:</Label>
          <TextInputContainer>
            <TextInput
              value={this.state.inputText}
              onChange={(e) => this.setState({ inputText: e.target.value })}
            />
            <InputInfoTooltip />
          </TextInputContainer>

          <MessageBox text={this.state.error} />
          <ConfirmButton label="Calculate" onClick={this.onConfirm} />
          <TextOutputContainer>
            <TextOutput
              readOnly={true}
              value={parseOutput(this.state.rovers, false)}
            />
            {this.state.rovers && this.state.plateau && (
              <>
                <DetailsModalButton
                  label={<GiPathDistance color="white" />}
                  onClick={() => this.setState({ pathsModalOpen: true })}
                />
                <PathsModal
                  plateau={this.state.plateau}
                  rovers={this.state.rovers}
                  isOpen={this.state.pathsModalOpen}
                  closeModal={() => this.setState({ pathsModalOpen: false })}
                />
              </>
            )}
          </TextOutputContainer>
        </Content>
      </Container>
    );
  }
}

export default Page;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: ${colors.surfaceDarker};
  padding: 16px;
  border-radius: 6px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${shadow.xl};
`;

const Label = styled.p`
  margin-bottom: 12px;
  font-weight: 300;
`;

const TextInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const TextOutputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const TextInput = styled.textarea`
  width: 100%;
  resize: none;
  height: 150px;
`;

const TextOutput = styled(TextInput)`
  height: 150px;
`;

const ConfirmButton = styled(Button)`
  margin: 12px 0;
`;

const DetailsModalButton = styled(Button)`
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

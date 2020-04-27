import React from "react";
import styled from "styled-components";
import { Header } from "./Header";
import Background from "./Background";
import { colors, shadow } from "../constants/style";
import { tryParseInput } from "../helpers/io";
import InputGroup from "./InputGroup";
import { Rover, calculateRoversPaths } from "../helpers/rover";
import { Plateau } from "../helpers/plateau";
import ResultsGroup from "./ResultsGroup";

type State = {
  inputText: string;
  error: string | null;
  rovers: Rover[];
  plateau: Plateau | null;
  pathsModalOpen: boolean;
};

export default class Page extends React.Component<{}, State> {
  state = {
    inputText: "",
    error: null,
    rovers: [],
    plateau: null,
    pathsModalOpen: false,
  };

  componentDidUpdate = (prevProps: any, prevState: State): void => {
    if (prevState.inputText !== this.state.inputText) {
      const { plateau, error, rovers } = tryParseInput(this.state.inputText);

      if (error && this.state.error !== error) {
        this.setState({ error });
      } else if (plateau) {
        this.setState({
          plateau,
          rovers: calculateRoversPaths(rovers, plateau),
        });
      }
    }
  };

  render() {
    const { rovers, plateau, error } = this.state;

    return (
      <Container>
        <Background />
        <Content>
          <Header />
          <InputGroup
            error={error}
            onConfirm={(inputText) => this.setState({ inputText })}
          />
          <ResultsGroup rovers={rovers} plateau={plateau} />
        </Content>
      </Container>
    );
  }
}

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

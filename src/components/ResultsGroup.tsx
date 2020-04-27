import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { parseOutput } from "../helpers/io";
import { GiPathDistance } from "react-icons/gi";
import ResultsModal from "./ResultsModal/ResultsModal";
import { Rover } from "../helpers/rover";
import { Plateau } from "../helpers/plateau";
import strings from "../constants/strings";
import { colors } from "../constants/style";

type Props = {
  rovers: Rover[];
  plateau: Plateau | null;
};

type State = {
  resultsModalOpen: boolean;
};

export default class ResultsGroup extends React.Component<Props, State> {
  state = {
    resultsModalOpen: false,
  };

  render() {
    const { rovers, plateau } = this.props;

    return (
      <Container>
        <TextOutput
          placeholder={strings.placeholder.outputWillAppearHere}
          readOnly={true}
          value={parseOutput(rovers)}
        />
        {plateau &&
          plateau.maxX <= 100 &&
          plateau.maxY <= 100 &&
          rovers &&
          rovers.length > 0 && (
            <>
              <DetailsModalButton
                label={<GiPathDistance color={colors.text} />}
                onClick={() => this.setState({ resultsModalOpen: true })}
              />
              <ResultsModal
                plateau={plateau}
                rovers={rovers}
                isOpen={this.state.resultsModalOpen}
                closeModal={() => this.setState({ resultsModalOpen: false })}
              />
            </>
          )}
      </Container>
    );
  }
}

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const TextOutput = styled.textarea`
  resize: none;
  height: 150px;
`;

const DetailsModalButton = styled(Button)`
  position: absolute;
  bottom: 15px;
  right: 20px;
  padding: 0;
  padding-top: 10px;
  font-size: 26px;
  width: 45px;
  height: 45px;
  border-radius: 100%;
`;

import React from "react";
import styled from "styled-components";
import { Modal } from "../Modal";
import { Button } from "../Button";
import { Grid } from "./Grid";
import { GridLegend } from "./GridLegend";
import { Plateau } from "../../helpers/plateau";
import { Rover } from "../../helpers/rover";
import { RoverSelect } from "./RoverSelect";
import strings from "../../constants/strings";

type Props = {
  plateau: Plateau;
  rovers: Rover[];
  isOpen: boolean;
  closeModal: () => void;
};

type State = {
  selectedIndex: number;
};

export default class ResultsModal extends React.Component<Props, State> {
  state = {
    selectedIndex: 0,
  };

  componentDidUpdate = (prevProps: Props) => {
    if (!prevProps.rovers && this.props.rovers && this.props.rovers.length > 0)
      this.setState({ selectedIndex: 0 });
  };

  render() {
    const { isOpen, closeModal, rovers, plateau } = this.props;
    const { selectedIndex } = this.state;
    const selectedRover = rovers[selectedIndex];
    const maxX = plateau ? plateau.maxX : 0;
    const maxY = plateau ? plateau.maxY : 0;

    return (
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <Container>
          {rovers && (
            <RoverSelect
              rovers={rovers}
              selectedIndex={selectedIndex}
              onChange={(e) =>
                this.setState({ selectedIndex: parseInt(e.target.value) })
              }
            />
          )}

          <GridLegend />

          {plateau && selectedRover && (
            <Grid
              maxX={maxX}
              maxY={maxY}
              roverIndex={selectedIndex}
              rovers={rovers}
            />
          )}

          <CloseButton label={strings.button.close} onClick={closeModal} />
        </Container>
      </Modal>
    );
  }
}

const Container = styled.div`
  position: relative;
  min-width: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const CloseButton = styled(Button)`
  margin-top: 12px;
`;

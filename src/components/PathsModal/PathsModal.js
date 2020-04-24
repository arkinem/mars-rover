import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { colors, shadow } from "../../helpers/style";
import Button from "../Button";
import Grid from "./Grid";
import GridLegend from "./GridLegend";

const getRoverLabel = (index, { initialPosition, error }) => {
  let result = `#${index} || x:${initialPosition.x} y:${initialPosition.y} heading:${initialPosition.heading}`;

  if (error) result += ` [${error}]`;
  return result;
};

class PathsModal extends React.Component {
  state = {
    selectedIndex: 0,
  };

  componentDidUpdate = (prevProps) => {
    if (!prevProps.rovers && this.props.rovers && this.props.rovers.length > 0)
      this.setState({ selectedRover: 0 });
  };

  onChange = (e) => {
    this.setState({ selectedIndex: e.target.value });
  };

  render() {
    const { isOpen, closeModal, rovers, plateau } = this.props;
    const { selectedIndex } = this.state;
    const selectedRover = rovers[selectedIndex];
    const maxX = plateau ? plateau.maxX : 0;
    const maxY = plateau ? plateau.maxY : 0;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customModalStyle}
      >
        <Container>
          {rovers && (
            <Select value={selectedIndex} onChange={this.onChange}>
              {rovers.map((rover, index) => (
                <option key={index} value={index}>
                  {getRoverLabel(index, rover)}
                </option>
              ))}
            </Select>
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
          <CloseButton label="Close" onClick={closeModal} />
        </Container>
      </Modal>
    );
  }
}

export default PathsModal;

const customModalStyle = {
  overlay: {
    backgroundColor: "transparent",
  },
  content: {
    border: "none",
    borderRadius: 6,
    backgroundColor: colors.surfaceDarker,
    color: "lightsteelblue",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    boxShadow: shadow.l,
  },
};

const Container = styled.div`
  position: relative;
  min-width: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Select = styled.select`
  width: 100%;
`;

const CloseButton = styled(Button)`
  margin-top: 12px;
`;

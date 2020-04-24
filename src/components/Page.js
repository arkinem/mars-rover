import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Input from "./Input";
import Output from "./Output";
import { parseOutput } from "../helpers/output";
import { calculateRoversPaths } from "../helpers/paths";

class Page extends React.Component {
  state = {
    rovers: null,
    plateau: null,
    showErrors: true,
  };

  onSubmit = (plateau, rovers) => {
    const roversCalculated = calculateRoversPaths(
      plateau.maxX,
      plateau.maxY,
      rovers
    );
    console.log(roversCalculated);

    this.setState({ rovers: roversCalculated, plateau });
  };

  render() {
    const { rovers, showErrors } = this.state;
    return (
      <Container>
        <Content>
          <Header />
          <Input onSubmit={this.onSubmit} />
          <Output value={parseOutput(rovers, showErrors)} />
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
  background-color: rgb(51, 51, 51);
  padding: 16px;
  border-radius: 6px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Input from "./Input";
import Output from "./Output";
import { tryParseInput } from "../helpers/text";
import { calculatePaths } from "../helpers/paths";

class Page extends React.Component {
  state = {
    inputText: "",
    outputText: "",
  };

  onConfirm = (text) => {
    this.setState({ inputText: text });
    const { plateau, error, rovers } = tryParseInput(text);

    if (error) {
      this.setState({ outputText: error });
    } else {
      if (this.state.outputText) this.setState({ outputText: "" });

      const roversCalculated = calculatePaths(
        plateau.maxX,
        plateau.maxY,
        rovers
      );
      let t = "";
      roversCalculated.forEach(
        ({ finalPosition }) =>
          (t += `${finalPosition.x} ${finalPosition.y} ${finalPosition.heading}`)
      );
      this.setState({ outputText: t });
    }
  };

  render() {
    return (
      <Container>
        <Content>
          <Header />
          <Input onConfirm={this.onConfirm} />
          <Output value={this.state.outputText} />
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
  background-color: #282c34;
  color: #ffffff;
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

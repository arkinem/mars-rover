import React from "react";
import renderer from "react-test-renderer";
import InputInfoTooltip from "../../components/InputInfoTooltip";

describe("InputInfoTooltip", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<InputInfoTooltip />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

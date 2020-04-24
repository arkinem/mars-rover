import React from "react";
import renderer from "react-test-renderer";
import GridLegend from "../../components/PathsModal/GridLegend";

describe("GridLegend", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<GridLegend />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

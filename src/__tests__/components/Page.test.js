import React from "react";
import { render } from "@testing-library/react";
import Page from "../../components/Page";

test("renders title", () => {
  const { getByText } = render(<Page />);
  const linkElement = getByText(/Mars Rover/i);
  expect(linkElement).toBeInTheDocument();
});

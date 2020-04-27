import {
  calculateRoversPaths,
  getFinalLocation,
  Heading,
} from "../../helpers/rover";
import { createPlateau, createRover, createLocation } from "./testHelpers";

describe("getFinalLocation", () => {
  it("returns last path element for valid rover with path", () => {
    const path = [createLocation(0, 1), createLocation(0, 2)];
    const rover = createRover(path);
    const result = getFinalLocation(rover);

    expect(result.x).toEqual(path[1].x);
    expect(result.y).toEqual(path[1].y);
    expect(result.heading).toEqual(path[1].heading);
  });

  it("returns initialLocation for empty path", () => {
    const rover = createRover([]);
    const result = getFinalLocation(rover);

    expect(result.x).toEqual(0);
    expect(result.y).toEqual(0);
    expect(result.heading).toEqual(Heading.North);
  });
});

describe("calculateRoversPaths", () => {
  //TODO
});

/**
 * Specific Test Data
 */

const roversMissingInitialPosition = [
  { instructions: "RRRM" },
  { instructions: "RLRM" },
];

const roversMissingInstructions = [
  { initialPosition: { x: 1, y: 2, heading: "N" } },
  { initialPosition: { x: 3, y: 3, heading: "E" } },
];

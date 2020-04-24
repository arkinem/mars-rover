import { calculateRoversPaths } from "../../helpers/paths";

describe("calculatePaths", () => {
  it("returns null for null rovers argument", () => {
    const result = calculateRoversPaths(5, 5, null);

    expect(result).toBe(null);
  });

  it("returns null for null rovers undefined", () => {
    const result = calculateRoversPaths(5, 5, undefined);

    expect(result).toBe(undefined);
  });

  it("returns input rovers array for missing initial position", () => {
    const result = calculateRoversPaths(5, 5, roversMissingInitialPosition);

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining(roversMissingInitialPosition[0]),
        expect.objectContaining(roversMissingInitialPosition[1]),
      ])
    );
  });

  it("returns input rovers array for missing instructions", () => {
    const result = calculateRoversPaths(5, 5, roversMissingInstructions);

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining(roversMissingInstructions[0]),
        expect.objectContaining(roversMissingInstructions[1]),
      ])
    );
  });
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

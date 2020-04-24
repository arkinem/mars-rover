import { parseOutput } from "../../helpers/output";

describe("parseOutput", () => {
  it("returns formatted string with final position for valid data", () => {
    const result = parseOutput(outputValidData);

    expect(result).toBe(outputValidResult);
  });

  it("returns empty string for null", () => {
    const result = parseOutput(null);

    expect(result).toBe("");
  });

  it("returns empty string for undefined", () => {
    const result = parseOutput(undefined);

    expect(result).toBe("");
  });

  it("returns empty string for empty array", () => {
    const result = parseOutput([]);

    expect(result).toBe("");
  });
});

/**
 * Specific Test Data
 */

const outputValidData = [
  {
    finalPosition: {
      heading: "N",
      x: 1,
      y: 3,
    },
  },
  {
    finalPosition: {
      heading: "E",
      x: 5,
      y: 1,
    },
  },
];

const outputValidResult = `1 3 N\n5 1 E`;

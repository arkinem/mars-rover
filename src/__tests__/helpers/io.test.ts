import { tryParseInput, parseOutput } from "../../helpers/io";
import messages from "../../constants/messages";
import { RoverLocation, Heading, Rover } from "../../helpers/rover";
import { createLocation, createRover } from "./testHelpers";

describe("tryParseInput", () => {
  it("returns plateau maximum size for valid data", () => {
    const { plateau } = tryParseInput(inputValidData);

    expect(plateau).not.toBe(null);
    expect(plateau!.maxX).toBe(5);
    expect(plateau!.maxY).toBe(5);
  });

  it("returns rovers array for valid data", () => {
    const { rovers } = tryParseInput(inputValidData);

    expect(rovers.length).toBe(2);
    expect(rovers[0].initialLocation.x).toBe(1);
    expect(rovers[0].initialLocation.y).toBe(2);
    expect(rovers[0].initialLocation.heading).toBe("N");
    expect(rovers[1].initialLocation.x).toBe(3);
    expect(rovers[1].initialLocation.y).toBe(4);
    expect(rovers[1].initialLocation.heading).toBe("E");
  });

  it("returns invalidPlateauSize error for invalid text format", () => {
    const result = tryParseInput(inputInvalidPlateuFormat);

    expect(result.error).toBe(messages.error.invalidPlateauSize);
  });

  it("returns invalidPlateauSize error for negative values", () => {
    const result = tryParseInput(inputNegativePlateuValue);

    expect(result.error).toBe(messages.error.invalidPlateauSize);
  });

  it("returns invalidRoverLocationLine error for invalid text formatting", () => {
    const result = tryParseInput(inputInvalidRoverLocationFormat);

    expect(result.error).toBe(messages.error.invalidRoverLocationLine);
  });

  it("returns invalidRoverLocationLine error for negative values", () => {
    const result = tryParseInput(inputNegativeRoverLocationValues);

    expect(result.error).toBe(messages.error.invalidRoverLocationLine);
  });

  it("returns initialLocationOutsidePlateau error for rover location outside plateau", () => {
    const result = tryParseInput(inputRoverLocationOutsidePlateau);

    expect(result.error).toBe(messages.error.initialLocationOutsidePlateau);
  });

  it("returns invalidInstructionsLine error for invalid text formatting", () => {
    const result = tryParseInput(inputInvalidInstructionsFormat);

    expect(result.error).toBe(messages.error.invalidInstructionsLine);
  });

  it("returns invalidInstructionsLine error for any characters other than LRM", () => {
    const result = tryParseInput(inputInvalidInstructionsCharacters);

    expect(result.error).toBe(messages.error.invalidInstructionsLine);
  });
});

describe("parseOutput", () => {
  it("returns formatted string with final position for valid data", () => {
    const result = parseOutput(outputValidData);

    expect(result).toBe(outputValidResult);
  });

  it("returns empty string for empty array", () => {
    const result = parseOutput([]);

    expect(result).toBe("");
  });
});

/**
 * Specific Test Data
 */
const inputValidData = `5 5
1 2 N
LMLMLMLMM
3 4 E
MMRMMRMRRM
`;

const inputInvalidPlateuFormat = `5 5 5
1 2 N
LMLMLMLMM
`;

const inputNegativePlateuValue = `-5 -5
1 2 N
LMLMLMLMM
`;

const inputInvalidRoverLocationFormat = `5 5
1 2 NN
LMLMLMLMM
`;

const inputNegativeRoverLocationValues = `5 5
1 -2 N
LMLMLMLMM
`;

const inputRoverLocationOutsidePlateau = `5 5
10 10 N
LMLMLMLMM
`;

const inputInvalidInstructionsFormat = `5 5
1 2 N
LMLMLMLMM MM
`;

const inputInvalidInstructionsCharacters = `5 5
1 2 N
LMLMLMLMMINVALID
`;

const outputValidData = [
  createRover(),
  createRover([createLocation(2, 2), createLocation(2, 3)]),
];

const outputValidResult = `0 1 N\n2 3 N`;

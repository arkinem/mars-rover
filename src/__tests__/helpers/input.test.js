import { tryParseInput } from "../../helpers/input";
import messages from "../../helpers/messages";

describe("tryParseInput", () => {
  it("returns plateau maximum size for valid data", () => {
    const result = tryParseInput(inputValidData);

    expect(result.plateau.maxX).toBe(5);
    expect(result.plateau.maxY).toBe(5);
  });

  it("returns rovers array for valid data", () => {
    const result = tryParseInput(inputValidData);

    expect(result.rovers.length).toBe(2);
    expect(result.rovers[0].initialPosition.x).toBe(1);
    expect(result.rovers[0].initialPosition.y).toBe(2);
    expect(result.rovers[0].initialPosition.heading).toBe("N");
    expect(result.rovers[1].initialPosition.x).toBe(3);
    expect(result.rovers[1].initialPosition.y).toBe(4);
    expect(result.rovers[1].initialPosition.heading).toBe("E");
  });

  it("returns invalidPlateauSize error for invalid text format", () => {
    const result = tryParseInput(inputInvalidPlateuFormat);

    expect(result.error).toBe(messages.error.invalidPlateauSize);
  });

  it("returns invalidPlateauSize error for negative values", () => {
    const result = tryParseInput(inputNegativePlateuValue);

    expect(result.error).toBe(messages.error.invalidPlateauSize);
  });

  it("returns invalidRoverPositionLine error for invalid text formatting", () => {
    const result = tryParseInput(inputInvalidRoverPositionFormat);

    expect(result.error).toBe(messages.error.invalidRoverPositionLine);
  });

  it("returns invalidRoverPositionLine error for negative values", () => {
    const result = tryParseInput(inputNegativeRoverPositionValues);

    expect(result.error).toBe(messages.error.invalidRoverPositionLine);
  });

  it("returns initialPositionOutsidePlateau error for rover position outside plateau", () => {
    const result = tryParseInput(inputRoverPositionOutsidePlateau);

    expect(result.error).toBe(messages.error.initialPositionOutsidePlateau);
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

const inputInvalidRoverPositionFormat = `5 5
1 2 NN
LMLMLMLMM
`;

const inputNegativeRoverPositionValues = `5 5
1 -2 N
LMLMLMLMM
`;

const inputRoverPositionOutsidePlateau = `5 5
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

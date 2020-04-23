import { tryParseInput } from "../../helpers/text";
import messages from "../../helpers/messages";

describe("tryParseInput", () => {
  it("returns plateau maximum size for valid data", () => {
    const data = `5 5
1 2 N
LMLMLMLMM
3 4 E
MMRMMRMRRM
`;
    const result = tryParseInput(data);

    expect(result.plateau.maxX).toBe(5);
    expect(result.plateau.maxY).toBe(5);
  });

  it("returns rovers array for valid data", () => {
    const data = `5 5
1 2 N
LMLMLMLMM
3 4 E
MMRMMRMRRM
`;
    const result = tryParseInput(data);

    expect(result.rovers.length).toBe(2);
    expect(result.rovers[0].initialPosition.x).toBe(1);
    expect(result.rovers[0].initialPosition.y).toBe(2);
    expect(result.rovers[0].initialPosition.heading).toBe("N");
    expect(result.rovers[1].initialPosition.x).toBe(3);
    expect(result.rovers[1].initialPosition.y).toBe(4);
    expect(result.rovers[1].initialPosition.heading).toBe("E");
  });

  it("returns invalidPlateauSize error for invalid text format", () => {
    const data = `5 5 5
1 2 N
LMLMLMLMM
`;

    const result = tryParseInput(data);

    expect(result.error).toBe(messages.error.invalidPlateauSize);
  });

  it("returns invalidPlateauSize error for negative values", () => {
    const data = `-5 -5
1 2 N
LMLMLMLMM
`;

    const result = tryParseInput(data);

    expect(result.error).toBe(messages.error.invalidPlateauSize);
  });

  it("returns invalidRoverPositionLine error for invalid text formatting", () => {
    const data = `5 5
1 2 NN
LMLMLMLMM
`;

    const result = tryParseInput(data);

    expect(result.error).toBe(messages.error.invalidRoverPositionLine);
  });

  it("returns invalidRoverPositionLine error for negative values", () => {
    const data = `5 5
1 -2 N
LMLMLMLMM
`;

    const result = tryParseInput(data);

    expect(result.error).toBe(messages.error.invalidRoverPositionLine);
  });

  it("returns initialPositionOutsidePlateau error for rover position outside plateau", () => {
    const data = `5 5
10 10 N
LMLMLMLMM
`;

    const result = tryParseInput(data);

    expect(result.error).toBe(messages.error.initialPositionOutsidePlateau);
  });

  it("returns invalidInstructionsLine error for invalid text formatting", () => {
    const data = `5 5
1 2 N
LMLMLMLMM MM
`;

    const result = tryParseInput(data);

    expect(result.error).toBe(messages.error.invalidInstructionsLine);
  });

  it("returns invalidInstructionsLine error for any characters other than LRM", () => {
    const data = `5 5
1 2 N
LMLMLMLMMINVALID
`;

    const result = tryParseInput(data);

    expect(result.error).toBe(messages.error.invalidInstructionsLine);
  });
});

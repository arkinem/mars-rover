import messages from "./messages";

const parsePosition = (line) => {
  const [x, y, heading] = line.split(" ");

  return { x: parseInt(x) || 0, y: parseInt(y) || 0, heading };
};

const gridSizeValidator = /^\d+[ X]\d+$/;
const roverPositionValidator = /^\d+[ X]\d+[ X][NSEW]$/;
const instructionsValidator = /^[LRM]+$/;

export const tryParseInput = (text) => {
  const lines = text.split("\n").filter((line) => line.length !== 0);
  const result = {
    plateau: { maxX: 0, maxY: 0 },
    error: null,
    rovers: [],
  };

  if (lines.length > 0) {
    for (let i = 0; i < lines.length - 1; i++) {
      if (i === 0) {
        //TODO check if grid is not 0x0
        if (!gridSizeValidator.test(lines[i])) {
          result.error = messages.error.invalidPlateauSize;
          break;
        }

        const { x, y } = parsePosition(lines[i]);
        result.plateau = { maxX: x, maxY: y };
      } else {
        const positionLine = lines[i];

        if (!roverPositionValidator.test(positionLine)) {
          result.error = messages.error.invalidRoverPositionLine;
          break;
        }

        const initialPosition = parsePosition(positionLine);

        if (
          initialPosition.x > result.plateau.maxX ||
          initialPosition.y > result.plateau.maxY
        ) {
          result.error = messages.error.initialPositionOutsidePlateau;
          break;
        }

        i++;

        const instructionsLine = lines[i];

        if (!instructionsValidator.test(instructionsLine)) {
          result.error = messages.error.invalidInstructionsLine;
          break;
        }

        result.rovers.push({ initialPosition, instructions: instructionsLine });
      }
    }
  }

  return result;
};

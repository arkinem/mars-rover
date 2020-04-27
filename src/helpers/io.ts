import { RoverLocation, Heading, Rover, getFinalLocation } from "./rover";
import { Plateau } from "./plateau";
import strings from "../constants/strings";

const parsePlateauString = (line: string): Plateau | null => {
  const plateauValidator = /^\d+[ X]\d+$/;
  const [x, y] = line.split(" ");

  if (!plateauValidator.test(line)) return null;

  return {
    maxX: parseInt(x),
    maxY: parseInt(y),
  };
};

const parseLocationString = (line: string): RoverLocation | null => {
  const locationValidator = /^\d+[ X]\d+[ X][NSEW]$/;
  const [x, y, heading] = line.split(" ");

  if (!locationValidator.test(line)) return null;

  return {
    x: parseInt(x),
    y: parseInt(y),
    heading: heading as Heading,
  };
};

const isInstructionsStringValid = (line: string): boolean => {
  const instructionsValidator = /^[LRM]+$/;

  if (!instructionsValidator.test(line)) return false;

  return true;
};

type ParseResult = {
  plateau: Plateau | null;
  error: string | null;
  rovers: Rover[];
};

export const tryParseInput = (text: string): ParseResult => {
  const lines = text.split("\n").filter((line) => line.length !== 0);
  const result: ParseResult = {
    plateau: null,
    error: null,
    rovers: [],
  };

  if (lines.length < 3) {
    result.error = strings.error.invalidInput;
  } else {
    for (let i = 0; i < lines.length - 1; i++) {
      if (i === 0) {
        const plateau = parsePlateauString(lines[i]);

        if (!plateau) {
          result.error = strings.error.invalidPlateauSize;
          break;
        }

        result.plateau = plateau;
      } else if (result.plateau) {
        const initialLocation = parseLocationString(lines[i]);
        const { maxX, maxY } = result.plateau;

        if (!initialLocation) {
          result.error = strings.error.invalidRoverLocationLine;
          break;
        } else if (initialLocation.x > maxX || initialLocation.y > maxY) {
          result.error = strings.error.initialLocationOutsidePlateau;
          break;
        }

        i++;

        const instructions = lines[i];

        if (!isInstructionsStringValid(instructions)) {
          result.error = strings.error.invalidInstructionsLine;
          break;
        }

        result.rovers.push({
          initialLocation,
          instructions,
          path: null,
          error: null,
        });
      }
    }
  }

  return result;
};

export const parseOutput = (rovers: Rover[]): string => {
  let result = "";

  if (rovers && rovers.length > 0) {
    for (const rover of rovers) {
      const finalLocation = getFinalLocation(rover);

      if (finalLocation) {
        result += `${finalLocation.x} ${finalLocation.y} ${finalLocation.heading}`;
        if (rover.error) result += ` [${rover.error}]`;
        result += "\n";
      }
    }
  }

  return result.trim();
};

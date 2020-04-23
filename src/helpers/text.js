const parsePosition = (line) => {
  const splitted = line.split(" ");

  return splitted.length >= 2
    ? { x: splitted[0], y: splitted[1] }
    : { x: 0, y: 0 };
};

/**
 *  TRY PARSE FOR ALL !!!!!!!!! validate and return ready object
 */

// const parsePositionWithHeading = (lineWithCoords) => {
//   return ""; //splitted line by x y
// }; ????????????????????????????????

//validate
const gridSizeValidator = /^\d+[ X]\d+$/;
const roverPositionValidator = /^\d+[ X]\d+[ X][NSEW]$/;
const instructionsValidator = /^[LRM]+$/;

export const validate = (text) => {
  const lines = text.split("\n").filter((line) => line.length !== 0);

  if (lines.length > 0) {
    let maxPosition = { x: 0, y: 0 };

    for (let i = 0; i < lines.length - 1; i++) {
      if (i === 0) {
        if (!gridSizeValidator.test(lines[i])) return false; //invalid grid size

        maxPosition = parsePosition(lines[i]);
      } else {
        const positionLine = lines[i];

        if (!roverPositionValidator.test(positionLine)) return false; // invalid position line

        const roverPosition = parsePosition(positionLine);
        if (roverPosition.x > maxPosition.x || roverPosition.y > maxPosition.y)
          return false; //invalid position values

        i++;

        const instructionsLine = lines[i];

        if (!instructionsValidator.test(instructionsLine)) return false; //invalid instructions line
      }
    }

    return true;
  }
};

//parse

import messages from "./messages";

const north = "N";
const west = "W";
const south = "S";
const east = "E";

const roverMoves = {
  rotareLeft: "L",
  rotareRight: "R",
  moveForward: "M",
};

const rotareLeft = (heading) => {
  switch (heading) {
    case north:
      return west;
    case west:
      return south;
    case south:
      return east;
    case east:
      return north;
    default:
      return heading;
  }
};

const rotareRight = (heading) => {
  switch (heading) {
    case north:
      return east;
    case east:
      return south;
    case south:
      return west;
    case west:
      return north;
    default:
      return heading;
  }
};

const getNextPosition = (position, instruction) => {
  const { x, y, heading } = position;
  let nextX = x;
  let nextY = y;
  let nextHeading = heading;

  switch (instruction) {
    case roverMoves.rotareLeft: {
      nextHeading = rotareLeft(heading);
      break;
    }
    case roverMoves.rotareRight: {
      nextHeading = rotareRight(heading);
      break;
    }
    case roverMoves.moveForward: {
      nextX = heading === east ? x + 1 : heading === west ? x - 1 : x;
      nextY = heading === north ? y + 1 : heading === south ? y - 1 : y;
      break;
    }
    default:
      break;
  }

  return {
    x: nextX,
    y: nextY,
    heading: nextHeading,
  };
};

const isOccupied = (position, occupied) => {
  return !!occupied.find((p) => p.x === position.x && p.y === position.y);
};

export const calculateRoversPaths = (maxPlateauX, maxPlateauY, rovers) => {
  const occupied = [];

  if (rovers) {
    return rovers.map((rover) => {
      const { initialPosition, instructions } = rover;
      if (initialPosition && instructions) {
        const path = [{ ...initialPosition }];
        let error = null;

        if (isOccupied(initialPosition, occupied)) {
          error = messages.error.roverStartPositionOccupied;
        } else {
          for (let i = 0; i < instructions.length; i++) {
            const currentPosition = path[i];
            const nextPosition = getNextPosition(
              currentPosition,
              instructions[i]
            );

            path.push(nextPosition);

            if (instructions[i] === roverMoves.moveForward) {
              if (nextPosition.x > maxPlateauX || nextPosition > maxPlateauY)
                error = messages.error.roverOutsideEdge;

              if (isOccupied(nextPosition, occupied)) {
                error = messages.error.roverCrash;
                path.pop();
              }
            }

            if (error) break;
          }
        }

        const finalPosition =
          path.length > 0 ? { ...path[path.length - 1] } : initialPosition;

        occupied.push(finalPosition);

        return {
          initialPosition,
          instructions,
          path,
          error,
          finalPosition,
        };
      } else {
        return rover;
      }
    });
  }

  return rovers;
};

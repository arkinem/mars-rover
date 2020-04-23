const instruction = {
  rotareLeft: "L",
  rotareRight: "R",
  moveForward: "M",
};

const north = "N";
const west = "W";
const south = "S";
const east = "E";

const rotareLeft = (prevHeading) => {
  switch (prevHeading) {
    case north:
      return west;
    case west:
      return south;
    case south:
      return east;
    case east:
      return north;
    default:
      return;
  }
};

const rotareRight = (prevHeading) => {
  switch (prevHeading) {
    case north:
      return east;
    case east:
      return south;
    case south:
      return west;
    case west:
      return north;
    default:
      return;
  }
};

const getNextPosition = (position) => {
  const { x, y, heading } = position;

  const nextX = heading === east ? x + 1 : heading === west ? x - 1 : x;
  const nextY = heading === north ? y + 1 : heading === south ? y - 1 : y;

  return {
    x: nextX,
    y: nextY,
    heading,
  };
};

export const calculatePaths = (maxPlateauX, maxPlateauY, rovers) => {
  return rovers.map(({ initialPosition, instructions }) => {
    const path = [{ ...initialPosition }];
    // const error = null;

    for (let i = 0; i < instructions.length; i++) {
      let problem = false;

      switch (instructions[i]) {
        case instruction.rotareLeft:
          path.push({ ...path[i], heading: rotareLeft(path[i].heading) });
          break;
        case instruction.rotareRight:
          path.push({ ...path[i], heading: rotareRight(path[i].heading) });
          break;
        case instruction.moveForward:
          const nextPosition = getNextPosition(path[i]);
          if (nextPosition.x > maxPlateauX || nextPosition > maxPlateauY) {
            console.log("error outside");
            problem = true;
          }
          path.push(nextPosition);
          break;
        default:
          break;
      }

      if (problem) break;
    }

    console.log(path);

    return {
      initialPosition,
      instructions,
      path,
      // error,
      finalPosition: { ...path[path.length - 1] },
    };
  });
};

import { Plateau, isLocationAvailable } from "./plateau";
import strings from "../constants/strings";

export enum Heading {
  North = "N",
  South = "S",
  East = "E",
  West = "W",
}

export type RoverLocation = {
  x: number;
  y: number;
  heading: Heading;
};

export type Rover = {
  initialLocation: RoverLocation;
  instructions: string;
  path: RoverLocation[] | null;
  error: string | null;
};

export enum Moves {
  RotareLeft = "L",
  RotareRight = "R",
  MoveForward = "M",
}

const rotareLeft = (location: RoverLocation): RoverLocation => {
  switch (location.heading) {
    case Heading.North:
      return { ...location, heading: Heading.West };
    case Heading.West:
      return { ...location, heading: Heading.South };
    case Heading.South:
      return { ...location, heading: Heading.East };
    case Heading.East:
      return { ...location, heading: Heading.North };
    default:
      return location;
  }
};

const rotareRight = (location: RoverLocation): RoverLocation => {
  switch (location.heading) {
    case Heading.North:
      return { ...location, heading: Heading.East };
    case Heading.East:
      return { ...location, heading: Heading.South };
    case Heading.South:
      return { ...location, heading: Heading.West };
    case Heading.West:
      return { ...location, heading: Heading.North };
    default:
      return location;
  }
};

const moveForward = (location: RoverLocation): RoverLocation => {
  switch (location.heading) {
    case Heading.North:
      return { ...location, y: location.y + 1 };
    case Heading.East:
      return { ...location, x: location.x + 1 };
    case Heading.South:
      return { ...location, y: location.y - 1 };
    case Heading.West:
      return { ...location, x: location.x - 1 };
    default:
      return location;
  }
};

const getNextLocation = (
  location: RoverLocation,
  instruction: string
): RoverLocation => {
  switch (instruction) {
    case Moves.RotareLeft:
      return rotareLeft(location);
    case Moves.RotareRight:
      return rotareRight(location);
    case Moves.MoveForward:
      return moveForward(location);
    default:
      return location;
  }
};

const calculatePath = (
  rover: Rover,
  plateau: Plateau,
  occupied: RoverLocation[]
): Rover => {
  const path = [];
  let error = null;

  const { initialLocation, instructions } = rover;

  if (initialLocation && instructions) {
    path.push({ ...initialLocation });

    if (!isLocationAvailable(initialLocation, occupied)) {
      error = strings.error.roverStartLocationOccupied;
    } else {
      for (let i = 0; i < instructions.length; i++) {
        const currentLocation = { ...path[i] };
        const nextLocation = getNextLocation(currentLocation, instructions[i]);

        path.push(nextLocation);

        if (instructions[i] === Moves.MoveForward) {
          if (nextLocation.x > plateau.maxX || nextLocation.y > plateau.maxY)
            error = strings.error.roverOutsideEdge;

          if (nextLocation.x < 0 || nextLocation.y < 0)
            error = strings.error.roverOutsideEdge;

          if (!isLocationAvailable(nextLocation, occupied)) {
            error = strings.error.roverCrash;
            path.pop();
          }
        }

        if (error) break;
      }
    }
  }

  return { initialLocation: { ...initialLocation }, instructions, path, error };
};

export const getFinalLocation = (rover: Rover): RoverLocation => {
  const { path, initialLocation } = rover;

  if (path && path.length > 0) return { ...path[path.length - 1] };

  return initialLocation;
};

export const calculateRoversPaths = (
  rovers: Rover[],
  plateau: Plateau
): Rover[] => {
  const occupied = [] as RoverLocation[];

  return rovers.map((rover) => {
    const calculated = calculatePath(rover, plateau, occupied);
    occupied.push(getFinalLocation(calculated));
    return calculated;
  });
};

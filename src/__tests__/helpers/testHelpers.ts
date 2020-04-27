import { RoverLocation, Heading, Rover } from "../../helpers/rover";

export const createPlateau = (minX?: number, minY?: number) => ({
  minX: minX || 5,
  minY: minY || 5,
});

export const createLocation = (
  x: number,
  y: number,
  heading?: Heading
): RoverLocation => ({
  x: x,
  y: y,
  heading: heading || Heading.North,
});

export const createRover = (path?: RoverLocation[]): Rover => ({
  initialLocation:
    path && path.length > 0 ? { ...path[0] } : createLocation(0, 0),
  instructions: "",
  path: path ? path : [createLocation(0, 0), createLocation(0, 1)],
  error: null,
});

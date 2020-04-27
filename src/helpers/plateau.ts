import { RoverLocation } from "./rover";

export type Plateau = {
  maxX: number;
  maxY: number;
};

export const isLocationAvailable = (
  location: RoverLocation,
  occupied: RoverLocation[]
) => !occupied.find((l) => l.x === location.x && l.y === location.y);

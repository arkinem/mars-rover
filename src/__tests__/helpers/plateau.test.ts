import { isLocationAvailable } from "../../helpers/plateau";
import { createLocation } from "./testHelpers";

describe("isLocationAvailable", () => {
  it("returns true for available location", () => {
    const occupied = [createLocation(1, 1), createLocation(0, 0)];
    const locationToFind = createLocation(2, 2);
    const result = isLocationAvailable(locationToFind, occupied);

    expect(result).toBe(true);
  });

  it("returns false for occupied location", () => {
    const occupied = [createLocation(1, 1), createLocation(0, 0)];
    const locationToFind = createLocation(1, 1);
    const result = isLocationAvailable(locationToFind, occupied);

    expect(result).toBe(false);
  });
});

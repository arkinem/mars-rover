import { validate } from "../../helpers/text";

describe("validator", () => {
  it("returns true for valid data", () => {
    const data = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
`;

    expect(validate(data)).toBe(true);
  });

  it("returns false for invalid grid size line", () => {
    const data = `5 5 5
1 2 N
LMLMLMLMM
`;

    expect(validate(data)).toBe(false);
  });

  it("returns false for negative grid size", () => {
    const data = `-5 -5
1 2 N
LMLMLMLMM
`;

    expect(validate(data)).toBe(false);
  });

  it("returns false for invalid rover position line", () => {
    const data = `5 5
1 2 NN
LMLMLMLMM
`;

    expect(validate(data)).toBe(false);
  });

  it("returns false for negative rover position value", () => {
    const data = `5 5
1 -2 N
LMLMLMLMM
`;

    expect(validate(data)).toBe(false);
  });

  it("returns false for rover position outside plateau", () => {
    const data = `5 5
10 10 N
LMLMLMLMM
`;

    expect(validate(data)).toBe(false);
  });

  it("returns false for invalid instructions line", () => {
    const data = `5 5
1 2 NN
LMLMLINVALIDMLMM
`;
    expect(validate(data)).toBe(false);
  });
});

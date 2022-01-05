const searchCandies = require("./search-candies");

describe("search for candies", () => {
  it("returns the candies Maltesers and Mars", () => {
    expect(searchCandies("ma", 10)).toEqual(["Maltesers", "Mars"]);
  });

  it("returns the candy Mars only", () => {
    expect(searchCandies("Ma", 2)).toEqual(["Mars"]);
  });

  it("returns the candies Skitties, Skittles and Starburst", () => {
    expect(searchCandies("S", 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  });

  it("returns only Skitties and Skittles", () => {
    expect(searchCandies("S", 4)).toEqual([ 'Skitties', 'Skittles' ]);
  });

});

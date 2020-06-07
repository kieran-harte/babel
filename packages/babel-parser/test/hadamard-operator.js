import { parse } from "../lib";

function getParser(code) {
  return () => parse(code, { sourceType: "module" });
}

describe("hadamard operator", function() {
  it("should parse", function() {
    expect(getParser(`[4] .* [4]`)()).toMatchSnapshot();
  });
});

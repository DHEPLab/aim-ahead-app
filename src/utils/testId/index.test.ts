import testId from ".";

describe("Test testId", () => {
  it("should return object with same id & testid property", () => {
    const value = "id";
    expect(testId(value)).toEqual({ id: value, "data-testid": value });
  });

  it("should return object with different id & testid property", () => {
    const id = "id";
    const testID = "testID";
    expect(testId(id, testID)).toEqual({ id: id, "data-testid": testID });
  });
});

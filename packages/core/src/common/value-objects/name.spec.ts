import { describe, expect, it } from "vitest";

import { Name } from "./name";

describe("Value Objects/Name", () => {
  it("should be able to create a name", () => {
    const name = Name.create("Marlliton");

    expect(name._value).toBeDefined();
    expect(name._value).toEqual("Marlliton");
  });

  it("should not be able to create a name", () => {
    expect(() => Name.create("Ma")).toThrow();
  });
});

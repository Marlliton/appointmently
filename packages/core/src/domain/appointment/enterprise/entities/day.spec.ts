import { describe, expect, it } from "vitest";

import { Day } from "./day";

describe("Day", () => {
  it("should be able to create a day", () => {
    const day = Day.create();
    console.log("🚀 ~ it ~ day:", JSON.stringify(day, null, 2));

    expect(day.hours).toHaveLength(24);
  });
});

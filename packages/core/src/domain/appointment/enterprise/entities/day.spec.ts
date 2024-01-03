import { describe, expect, it } from "vitest";

import { makeDay } from "@/factories/make-day";

import { Hour } from "./hour";

describe("Day", () => {
  it("should be able to create a day", () => {
    const day = makeDay();

    expect(day.hours).toHaveLength(10);
    expect(day.hours.every((h) => h.available)).toBeTruthy();
  });

  it("should be able to create a day without all hours available", () => {
    const day = makeDay({
      hours: Array.from({ length: 10 }).map((_, i) => {
        const hour = 7 + i;
        return Hour.create({ value: hour, available: hour % 2 === 0 });
      }),
    });

    expect(day.hours).toHaveLength(10);
    expect(day.hours.every((h) => h.available)).toBeFalsy();
  });

  it("should be able to get available hours", () => {
    const day = makeDay({
      hours: Array.from({ length: 10 }).map((_, i) => {
        const hour = 7 + i;
        return Hour.create({ value: hour, available: hour % 2 === 0 });
      }),
    });

    expect(day.availableHours).toHaveLength(5);
    expect(day.hours.every((h) => h.available)).toBeFalsy();
  });
});

import { describe, expect, it } from "vitest";

import { Service } from "./service";

describe("Entities: Service", () => {
  it("Should be able to create a service entity", () => {
    const service = Service.create({
      name: "Corte de cabelo",
      description: "Corte simples",
      duration: 30,
      price: 25,
      createdAt: new Date(),
    });

    expect(service.id).toBeDefined();
  });

  it("Should be able to clone a service entity", () => {
    const service = Service.create({
      name: "Corte de cabelo",
      description: "Corte simples",
      duration: 30,
      price: 25,
      createdAt: new Date(),
    });

    const clonedService = service.clone({ name: "Outro nome" });

    expect(clonedService).toBeInstanceOf(Service);
    expect(clonedService.equals(service)).toBe(true);
    expect(clonedService.name).toEqual("Outro nome");
  });
});

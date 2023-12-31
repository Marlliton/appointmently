import { ErrorValidation } from "../entities/error-validation";

export class Name {
  private constructor(readonly _value: string) {}

  static create(value: string) {
    ErrorValidation.initValidation({ name: value }, this.constructor.name)
      .attribute("name")
      .betweenLength(4, 100)
      .throwIfErrors();

    return new Name(value);
  }
}

import { UniqueEntityId } from "./unique-entity-id";

export abstract class Entity<Type, Props> {
  private _id: UniqueEntityId;
  protected constructor(
    protected props: Props,
    id?: string,
  ) {
    this._id = new UniqueEntityId(id);
  }

  get id() {
    return this._id;
  }

  equals(entity: Entity<unknown, unknown>) {
    return this._id.equals(entity._id);
  }

  clone(props: Partial<Props>): Type {
    const clonedEntity = Object.create(this.constructor.prototype);
    return Object.assign(clonedEntity, {
      props: {
        ...this.props,
        ...props,
      },
      _id: this._id,
    });
  }
}

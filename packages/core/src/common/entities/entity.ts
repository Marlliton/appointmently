import { UniqueEntityId } from "./unique-entity-id";

export abstract class Entity<Type, Props> {
  private _id: UniqueEntityId;
  protected constructor(
    protected props: Props,
    id?: UniqueEntityId,
  ) {
    this._id = id ?? new UniqueEntityId();
  }

  get id() {
    return this._id;
  }

  equals(entity: Entity<Type, Props>) {
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

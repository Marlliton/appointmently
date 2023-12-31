import { Entity } from "@/common/entities/entity";
import { UniqueEntityId } from "@/common/entities/unique-entity-id";
import { Name } from "@/common/value-objects/name";
import { Optional } from "@/types/Optional";

export interface ClientProps {
  name: Name;
  email: string;
  photoURL: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class Client extends Entity<Client, ClientProps> {
  get name() {
    return this.props.name._value;
  }

  get email() {
    return this.props.email;
  }

  get photoURL() {
    return this.props.photoURL;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  static create(props: Optional<ClientProps, "createdAt">, id?: UniqueEntityId) {
    return new Client(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    );
  }
}

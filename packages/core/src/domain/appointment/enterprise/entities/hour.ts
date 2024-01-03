import { Entity } from "@/common/entities/entity";
import { UniqueEntityId } from "@/common/entities/unique-entity-id";

export interface HourProps {
  value: number;
  available: boolean;
}

export class Hour extends Entity<Hour, HourProps> {
  get value() {
    return this.props.value;
  }

  get available() {
    return this.props.available;
  }

  static create(props: HourProps, id?: UniqueEntityId) {
    return new Hour(
      {
        ...props,
      },
      id,
    );
  }
}

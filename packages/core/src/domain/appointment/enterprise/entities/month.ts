import { Entity } from "@/common/entities/entity";
import { UniqueEntityId } from "@/common/entities/unique-entity-id";
import { Optional } from "@/types/Optional";

import { Day } from "./day";

interface MonthProps {
  days: Day[];
  createdAt: Date;
  updatedAt?: Date;
}

export class Month extends Entity<Month, MonthProps> {
  get days() {
    return this.props.days;
  }

  static create(props: Optional<MonthProps, "createdAt">, id?: UniqueEntityId) {
    return new Month(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    );
  }
}

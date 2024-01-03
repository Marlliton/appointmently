import { Entity } from "@/common/entities/entity";
import { UniqueEntityId } from "@/common/entities/unique-entity-id";

import { Hour } from "./hour";

export interface DayProps {
  hours: Hour[];
  available: boolean;
}

export class Day extends Entity<Day, DayProps> {
  get hours() {
    return this.props.hours;
  }

  get available() {
    return this.props.available;
  }

  get availableHours() {
    return this.hours.filter((h) => h.available);
  }

  static create(props: DayProps, id?: UniqueEntityId) {
    return new Day(props, id);
  }
}

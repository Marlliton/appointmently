import { UniqueEntityId } from "@/common/entities/unique-entity-id";
import { Day, DayProps, Hour } from "@/index";

export function makeDay(override?: Partial<DayProps>, id?: UniqueEntityId) {
  return Day.create(
    {
      available: true,
      hours: Array.from({ length: 10 }).map((_, i) => {
        const hour = 7 + i;
        return Hour.create({ value: hour, available: true });
      }),
      ...override,
    },
    id,
  );
}

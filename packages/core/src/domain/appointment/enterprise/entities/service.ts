import { Entity } from "@/common/entities/entity";

export interface ServiceProps {
  name: string;
  price: number;
  description: string;
  duration: number;
  createdAt: Date;
  updatedAt?: Date;
}

export class Service extends Entity<Service, ServiceProps> {
  get name() {
    return this.props.name;
  }

  get price() {
    return this.props.price;
  }

  get description() {
    return this.props.description;
  }

  get duration() {
    return this.props.duration;
  }

  static create(props: ServiceProps) {
    return new Service({
      ...props,
    });
  }
}

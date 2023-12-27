import { Service } from "@appointmently/core";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";
const service = new Service();
console.log(service.teste());
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3333);
}
bootstrap();

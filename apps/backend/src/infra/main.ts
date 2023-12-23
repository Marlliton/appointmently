import { Teste } from "@appointmently/core";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

async function bootstrap() {
  const t = new Teste({ idade: 33, nome: "Marlliton" });
  console.log(t.nomeEIdade);

  const app = await NestFactory.create(AppModule);
  await app.listen(3333);
}
bootstrap();

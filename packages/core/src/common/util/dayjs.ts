import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-br";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

export function dayjsUTC() {
  const timeZone = "America/Sao_Paulo";
  dayjs.extend(utc);
  dayjs.locale(ptBr);
  dayjs.extend(timezone);
  dayjs.tz.setDefault(timeZone);
  return dayjs().tz(timeZone, true);
}

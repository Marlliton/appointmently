import dayjs from "dayjs";
import pt from "dayjs/locale/pt-br";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

export function dayjsUTC() {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.locale(pt);
  dayjs.tz.setDefault("America/Aracaju");

  return dayjs(dayjs.utc().locale(pt).format()).utc();
}

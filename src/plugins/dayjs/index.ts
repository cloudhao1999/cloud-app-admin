import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

export function setupDayjs() {
  dayjs.extend(duration);
}

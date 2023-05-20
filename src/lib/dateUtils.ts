const monthNumberToNameMap = {
  0: "january",
  1: "february",
  2: "march",
  3: "april",
  4: "may",
  5: "june",
  6: "july",
  7: "augest",
  8: "september",
  9: "october",
  10: "november",
  11: "december",
} as const;

const dayNumberToWeekNameMap = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday",
} as const;

const MS_IN_WEEK = 604800000;

export function removeTimeFromDate(date: Date) {
  const newDate = new Date();

  newDate.setDate(date.getDate());
  newDate.setMonth(date.getMonth());

  return newDate;
}

export function today() {
  return removeTimeFromDate(new Date(Date.now()));
}

export function sortDates(dates: Date[]) {
  return dates.sort((a, b) => a - b);
}

export function areSameDate(date1: Date, date2: Date) {
  return representitiveValueOf(date1) == representitiveValueOf(date2);
}

export function representitiveValueOf(date: Date) {
  return `${date.getFullYear}-${date.getMonth()}-${date.getDate()}`;
}

function areTheSame(date1: Date, date2: Date) {
  return representitiveValueOf(date1) == representitiveValueOf(date2);
}

export function dateHasPassed(date: Date) {
  return removeTimeFromDate(date) < today();
}

export function isToday(date: Date) {
  return areTheSame(date, today());
}

export function isTomorrow(date: Date) {
  const tomorrow = today();
  tomorrow.setDate(today().getDate() + 1);

  return areTheSame(date, tomorrow);
}

export function isTheDayAfter(date: Date) {
  const theDayAfter = today();
  theDayAfter.setDate(today().getDate() + 2);

  return areTheSame(date, theDayAfter);
}

export function isInThisWeek(date: Date) {
  return date - today() <= MS_IN_WEEK;
}

export function dayNumberToWeekName(date: Date) {
  return dayNumberToWeekNameMap[date.getDay()];
}

function monthNumberToName(month: number) {
  return monthNumberToNameMap[month];
}

export function toVisualText(date: Date) {
  if (dateHasPassed(date)) return "overdue";
  if (isToday(date)) return "today";
  if (isTomorrow(date)) return "tomorrow";
  if (isTheDayAfter(date)) return "the day after";
  if (isInThisWeek(date)) return dayNumberToWeekName(date);

  const month = date.getMonth();
  const day = date.getDate();

  return `${day}, ${monthNumberToName(month)}`;
}

export function dateIsInList(date: Date, list: Date[]) {
  return list
    .map((date) => representitiveValueOf(date))
    .includes(representitiveValueOf(date));
}

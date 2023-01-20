const index = new Date().getDay();

export default function getDayName(i) {
  let dayList = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  return dayList[i];
}

export const today = getDayName(index);
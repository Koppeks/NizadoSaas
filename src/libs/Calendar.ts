export function dateCalculator(year: number, month: number, day: number) {
  const firstDayMonth = new Date(year, month, 1).getDay();
  const lastDateMonth = new Date(year, month + 1, 0).getDate();
  const lastDayMonth = new Date(year, month, lastDateMonth).getDay();
  const lastDateLastMonth = new Date(year, month, 0).getDate();

  let currentDaysOfMonth = Array.from(
    { length: lastDateMonth },
    (_, i) => i + 1
  );
  const lastDaysOfPrevMonth = Array.from({ length: firstDayMonth }, (_, i) => lastDateLastMonth - firstDayMonth + i + 1);
  let firstDaysOfNextMonth = Array.from(
    { length: 6 - lastDayMonth },
    (_, i) => i + 1
  );

  let number =
    currentDaysOfMonth.length +
    lastDaysOfPrevMonth.length +
    firstDaysOfNextMonth.length;

  if (number == 35) {
    firstDaysOfNextMonth.push(
      ...Array.from(
        { length: 7 },
        (_, i) => firstDaysOfNextMonth.length + i + 1
      )
    );
  }
  if (number === 28) {
    firstDaysOfNextMonth.push(...Array.from({ length: 7 }, (_, i) => firstDaysOfNextMonth.length + i + 1));
    lastDaysOfPrevMonth.unshift(...Array.from({ length: 7 }, (_, i) => lastDateLastMonth - firstDayMonth - i));
  }

  const dateObject = {
    year: year,
    month: month,
    date: day,
    currentDaysOfMonth: currentDaysOfMonth,
    lastDaysOfPrevMonth: lastDaysOfPrevMonth,
    firstDaysOfNextMonth: firstDaysOfNextMonth,
  };

  return dateObject;
}

export function getDisabledDays(year: number, month: number, daysOfWeek: string[]): number[] {
  
  if(daysOfWeek.length == 0) return []
  const dayOfWeekMap: { [key: string]: number } = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  // Convert the input daysOfWeek to their corresponding numbers
  const daysOfWeekIndices = daysOfWeek.map(day => dayOfWeekMap[day]);

  // Get the last date of the month
  const lastDate = new Date(year, month + 1, 0).getDate();

  const matchingDays: number[] = [];

  // Loop through each day of the month
  for (let day = 1; day <= lastDate; day++) {
    const currentDayOfWeek = new Date(year, month, day).getDay();

    // Check if the current day of the week matches any of the desired days
    if (daysOfWeekIndices.includes(currentDayOfWeek)) {
      matchingDays.push(day);
    }
  }

  return matchingDays;
}
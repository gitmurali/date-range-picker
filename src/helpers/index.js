export const leapYear = year =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

export const countDays = (days, startDate, endDate) => {
  let numberOfDays = 1 + Math.round((endDate - startDate) / (24 * 3600 * 1000));
  let sumOfDays = (sum, num) => {
    return sum + Math.floor((numberOfDays + ((startDate.getDay() + 6 - num) % 7)) / 7);
  };
  return days.reduce(sumOfDays, 0);
};

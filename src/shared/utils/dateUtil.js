export const getTodoDateFormat = (date) => {
  return `${getFirstThreeDayCharacters(date)} ${date.getDate()} ${getMonthName(date)}`;
};

export const getMonthName = (date) => {
  return date.toLocaleString('default', { month: 'long' });
}

export const getFirstThreeDayCharacters = (date) => {
  return date.toDateString().substring(0,3);
}

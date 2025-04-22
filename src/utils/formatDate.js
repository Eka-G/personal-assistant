const MIN_TWO_DIGIT_NUMBER = 10;

export default function formatDate(date = new Date()) {
  const day = date.getDate();
  const year = date.getFullYear().toString().slice(-2);

  const month = date.getMonth() + 1;
  const formattedMonth = month < MIN_TWO_DIGIT_NUMBER ? '0' + month : month;

  return `${day}.${formattedMonth}.${year}`;
}

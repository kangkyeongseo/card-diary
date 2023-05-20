export default function useDate(date: Date) {
  const year = date.getFullYear();
  const month =
    (date.getMonth() + 1).toString().length > 1
      ? date.getMonth() + 1
      : `0${date.getMonth() + 1}`;
  const day =
    date.getDate().toString().length > 1
      ? date.getDate()
      : `0${date.getDate()}`;

  return `${year}-${month}-${day}`;
}

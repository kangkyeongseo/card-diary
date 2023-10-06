export default function usePeriod(date: Date) {
  const today = new Date();
  const periodDate = Math.round((+date - +today) / 1000 / 3600 / 24);
  return periodDate;
}

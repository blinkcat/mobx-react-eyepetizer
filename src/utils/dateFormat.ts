export default (timestamp: number): string => {
  const d = new Date(timestamp);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`;
};

export default function second2minute(duration = 0): string {
  const minute = Math.floor(duration / 60);
  const second = duration % 60;
  return `${minute}' ${second}"`;
}

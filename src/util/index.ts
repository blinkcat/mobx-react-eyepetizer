import padstart from 'lodash.padstart';
import curryright from 'lodash.curryright';

const _padstart = curryright(padstart)(2, '0');

// export many useful methods
export function second2minute(duration = 0): string {
  const minute = Math.floor(duration / 60);
  const second = duration % 60;
  return `${minute}' ${_padstart(second)}"`;
}

export function dataFormat(timestamp: number): string {
  const d = new Date(timestamp);
  return `${d.getFullYear()}-${_padstart(d.getMonth() + 1)}-${_padstart(d.getDate())} ${_padstart(
    d.getHours()
  )}:${_padstart(d.getMinutes())}`;
}

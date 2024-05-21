// rome-ignore lint/suspicious/noExplicitAny: <explanation>
export function chunk(arr: any[], size: number): any[] {
  return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
}
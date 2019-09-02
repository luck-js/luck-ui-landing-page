function* range(start: number, end: number, step: number) {
  let state = start;
  while (state < end) {
    yield state;
    state += step;
  }
}

export const helper = (start: number, end: number, step: number = 1) => Array.from(range(start, end, step));

export const getRandomInt = (min:number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

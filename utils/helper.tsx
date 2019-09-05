function* range(start: number, end: number, step: number) {
  let state = start;
  while (state < end) {
    yield state;
    state += step;
  }
}

export const helper = (start: number, end: number, step: number = 1) => Array.from(range(start, end, step));

export const getRandomInt = (min:number, max: number, scale = 1): number => {
  min = Math.ceil(min * scale);
  max = Math.floor(max * scale);
  return (Math.floor(Math.random() * (max - min + 1)) + min) / scale;
}

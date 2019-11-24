function* range(start: number, end: number, step: number) {
  let state = start;
  while (state < end) {
    yield state;
    state += step;
  }
}

export const helper = (start: number, end: number, step: number = 1) =>
  Array.from(range(start, end, step));

export const getRandomInt = (min: number, max: number, scale = 1): number => {
  min = Math.ceil(min / scale);
  max = Math.floor(max / scale);
  return (Math.floor(Math.random() * (max - min + 1)) + min) * scale;
};

export const delay = async (ms:number) => new Promise(resolve => setTimeout(() => resolve(true), ms));

export const getRandom =(arr: any[], n: number) => {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

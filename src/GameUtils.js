export function range(to, from = 1) {
  if (!to) {
    return [];
  }
  return [...Array(to + 1).keys()].filter((e) => e >= from);
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

export function shuffle(a) {
  const result = [...a];
  result.sort((_) => randomInt(-1, 1));
  return result;
}

export function randomNumberRangeArray(max, min) {
  return shuffle(range(max, min));
}

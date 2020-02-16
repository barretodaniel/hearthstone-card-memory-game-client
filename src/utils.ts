export function shuffle(array: any[]) {
  for (let index = 0; index < array.length - 1; index++) {
    const newIndex = Math.floor(Math.random() * array.length);
    [array[newIndex], array[index]] = [array[index], array[newIndex]];
  }
  return array;
}

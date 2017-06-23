import { values } from 'lodash';

export const randomizePins = pins => {
  return shuffle(values(pins));
};

function shuffle(arr) {
  for (let i = arr.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
  }
  return arr;
}

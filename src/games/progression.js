import controller from '../controller.js';
import random from '../randomInInterval.js';

const getRules = () => 'What number is missing in the progression?';

const generateExpression = () => {
  const startNum = random(0, 20);
  const arr = [];
  arr.push(startNum);
  const d = random(1, 20);
  const progressionLength = random(5, 10);
  const hideNumIndex = random(1, progressionLength - 1);
  for (let i = 1; i < progressionLength; i += 1) {
    arr.push(`${+arr[i - 1] + d}`);
  }
  arr[hideNumIndex] = '..';
  return arr.join(' ');
};

const getCorrectAnswer = (progression) => {
  const arr = progression.split(' ');
  let diff;
  let hideNumIndex;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '..') {
      hideNumIndex = i;
      break;
    }
  }
  if (hideNumIndex < 2) {
    diff = +arr[4] - +arr[3];
  } else {
    diff = +arr[1] - +arr[0];
  }

  return +arr[0] + diff * hideNumIndex;
};

export default (stage, expression) =>
  controller(stage, expression, getRules, generateExpression, getCorrectAnswer);

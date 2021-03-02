import controller from '../controller.js';
import random from '../randomInInterval.js';

const getRules = () => 'Find the greatest common divisor of given numbers.';

const generateExpression = () => {
  const num1 = random(1, 100);
  const num2 = random(1, 100);
  return `${num1} ${num2}`;
};

const NOD = (x, y) => {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
};

const getCorrectAnswer = (expression) => {
  const [num1, num2] = expression.split(' ');
  return NOD(num1, num2);
};

export default (stage, expression) =>
  controller(stage, expression, getRules, generateExpression, getCorrectAnswer);

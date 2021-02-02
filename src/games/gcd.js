import executeGame from '../executeGame.js';

const getRules = () => 'Find the greatest common divisor of given numbers.';

const generateExpression = () => {
  const minInterval = Math.ceil(1);
  const maxInterval = Math.floor(100);
  const num1 = Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
  const num2 = Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
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
  // eslint-disable-next-line implicit-arrow-linebreak
  executeGame(stage, expression, getRules, generateExpression, getCorrectAnswer);

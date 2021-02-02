import executeGame from '../executeGame.js';

const getRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const generateExpression = () => {
  const minInterval = Math.ceil(1);
  const maxInterval = Math.floor(1000);
  return Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
};

const isNumEven = (num) => num % 2 === 0;

const getCorrectAnswer = (num) => (isNumEven(num) ? 'yes' : 'no');

export default (stage, expression) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  executeGame(stage, expression, getRules, generateExpression, getCorrectAnswer);

import executeGame from '../executeGame.js';

const getRules = () => 'What is the result of the expression?';

const generateExpression = () => {
  const minInterval = Math.ceil(-100);
  const maxInterval = Math.floor(100);
  const minIntOperator = Math.ceil(0);
  const maxIntOperator = Math.ceil(2);
  const num1 = Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
  const num2 = Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
  // eslint-disable-next-line operator-linebreak
  const operator =
    Math.floor(Math.random() * (maxIntOperator - minIntOperator + 1)) + minIntOperator;

  if (operator === 0) return `${num1} + ${num2}`;

  if (operator === 1) return `${num1} - ${num2}`;

  if (operator === 2) return `${num1} * ${num2}`;

  return null;
};

// const isAnswerCorrect = (expression) => eval(expression);
const getCorrectAnswer = (expression) => {
  const [num1, operator, num2] = expression.split(' ');
  if (operator === '+') return +num1 + +num2;
  if (operator === '-') return +num1 - +num2;
  if (operator === '*') return +num1 * +num2;
  return null;
};

export default (stage, expression) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  executeGame(stage, expression, getRules, generateExpression, getCorrectAnswer);

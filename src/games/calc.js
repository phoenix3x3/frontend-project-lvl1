import controller from '../controller.js';
import random from '../randomInInterval.js';

const getRules = () => 'What is the result of the expression?';

const generateExpression = () => {
  const num1 = random(-100, 100);
  const num2 = random(-100, 100);
  const operator = random(0, 2);
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
  controller(stage, expression, getRules, generateExpression, getCorrectAnswer);

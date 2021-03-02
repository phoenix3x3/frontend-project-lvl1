import controller from '../controller.js';
import random from '../randomInInterval.js';

const getRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const generateExpression = () => random(1, 1000);

const isNumEven = (num) => num % 2 === 0;

const getCorrectAnswer = (num) => (isNumEven(num) ? 'yes' : 'no');

export default (stage, expression) =>
  controller(stage, expression, getRules, generateExpression, getCorrectAnswer);

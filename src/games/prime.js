import controller from '../controller.js';
import random from '../randomInInterval.js';

const getRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateExpression = () => random(1, 500);

const isPrime = (num) => {
  const s = Math.sqrt(num);
  for (let i = 2; i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const getCorrectAnswer = (expression) => (isPrime(expression) ? 'yes' : 'no');

export default (stage, expression) =>
  controller(stage, expression, getRules, generateExpression, getCorrectAnswer);

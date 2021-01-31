import readlineSync from 'readline-sync';
import greeting from './cli.js';

const isNumEven = (num) => num % 2 === 0;

const isAnswerCorrect = (num, answer) => {
  const correctAnswer = isNumEven(num) ? 'yes' : 'no';
  if (correctAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
  return false;
};

const random = () => {
  const minInterval = Math.ceil(1);
  const maxInterval = Math.floor(1000);
  return Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
};

const even = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const numOfQuestions = 3;
  for (let i = 0; i < numOfQuestions; i += 1) {
    const num = random();
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (!isAnswerCorrect(num, answer)) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default even;

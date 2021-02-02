import readlineSync from 'readline-sync';
import greeting from './cli.js';

const gamesInterface = (func) => {
  let stage = 0;
  let counter = 0;
  let expression;
  const name = greeting();
  const rule = func(stage);
  // Write some rules for game
  if (stage === 0) {
    console.log(rule);
    stage += 1;
  }
  while (counter < 3) {
    // Generate data for question
    if (stage === 1) {
      expression = func(stage);
      console.log(`Question: ${expression}`);
      stage += 1;
    }
    // Correct answer check function
    if (stage === 2) {
      const answer = readlineSync.question('Your answer: ');
      const correctAnswer = func(stage, expression);
      if (answer.toString() !== correctAnswer.toString()) {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
      console.log('Correct!');
      counter += 1;
      stage = 1;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gamesInterface;

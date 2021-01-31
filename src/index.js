import readlineSync from 'readline-sync';
import greeting from './cli.js';

const gamesInterface = (func) => {
  let stage = 0;
  const name = greeting();
  const rule = func(stage);
  let expression;
  let count = 0;
  while (count < 3) {
    // Write some rules for game
    if (stage === 0) {
      console.log(rule);
      stage += 1;
    }
    // Input data
    if (stage === 1) {
      expression = func(stage);
      console.log(`Question: ${expression}`);
      stage += 1;
    }
    // Correct answer check function
    if (stage === 2) {
      const answer = readlineSync.question('Your answer: ');
      const correctAnswer = func(stage, expression);
      if (+answer !== +correctAnswer) {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
      console.log('Correct!');
      stage = 1;
      count += 1;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gamesInterface;
// funcRules - у каждой игры своя уникальная первая строка после приветствия
// for 3
// QuestionRules - генерится что-то, в зависимости от игры
// YourAnswer - для всех одинаково, но полученный ответ должен закинуться в нужную проверку
// isAnswerCorrect - проверка на правильность ответа, в зависимости от правил игры

const isNumEven = (num) => num % 2 === 0;

const isAnswerCorrect = (num) => (isNumEven(num) ? 'yes' : 'no');

const random = () => {
  const minInterval = Math.ceil(1);
  const maxInterval = Math.floor(1000);
  return Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
};

const even = (stage, num) => {
  const rulesStr = 'Answer "yes" if the number is even, otherwise answer "no".';
  switch (stage) {
    case 0:
      return rulesStr;
    case 1:
      return random();
    case 2:
      return isAnswerCorrect(num);
    default:
      break;
  }
  return null;
};

export default even;

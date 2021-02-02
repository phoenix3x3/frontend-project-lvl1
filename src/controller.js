export default (stage, expression, getRules, generateExpression, getCorrectAnswer) => {
  switch (stage) {
    case 1:
      // Write some rules for game
      return getRules();
    case 2:
      // Input data
      return generateExpression();
    case 3:
      // Get correct answer function
      return getCorrectAnswer(expression);
    default:
      break;
  }
  return null;
};

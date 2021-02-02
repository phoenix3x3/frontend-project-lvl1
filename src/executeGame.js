export default (stage, expression, getRules, generateExpression, getCorrectAnswer) => {
  switch (stage) {
    case 0:
      // Write some rules for game
      return getRules();
    case 1:
      // Input data
      return generateExpression();
    case 2:
      // Get correct answer function
      return getCorrectAnswer(expression);
    default:
      break;
  }
  return null;
};

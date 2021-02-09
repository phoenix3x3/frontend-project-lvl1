import { STAGE_RULES, STAGE_QUESTION, STAGE_ANSWER } from './constants/stages.js';

export default (stage, expression, getRules, generateExpression, getCorrectAnswer) => {
  switch (stage) {
    case STAGE_RULES:
      // Write some rules for game
      return getRules();
    case STAGE_QUESTION:
      // Input data
      return generateExpression();
    case STAGE_ANSWER:
      // Get correct answer function
      return getCorrectAnswer(expression);
    default:
      break;
  }
  return null;
};

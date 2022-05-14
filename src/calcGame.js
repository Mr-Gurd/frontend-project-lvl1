import * as uni from './uniRulls.js';

const min = 1;
const max = 10;
const operators = ['+', '-', '*'];
const rule = 'What is the result of the expression?';

const createQuest = () => {
  const num1 = Math.round(Math.random() * (max - min) + min);
  const num2 = Math.round(Math.random() * (max - min) + min);
  const randomOp = Math.floor(Math.random() * operators.length);
  const operator = operators[randomOp];
  const question = `${num1} ${operator} ${num2}`;
  let trueAnswer;
  if (randomOp === 0) {
    trueAnswer = Number(num1) + Number(num2);
  } else if (randomOp === 1) {
    trueAnswer = Number(num1) - Number(num2);
  } else {
    trueAnswer = Number(num1) * Number(num2);
  }
  return [question, String(trueAnswer)];
};

const calc = () => {
  uni.universal(rule, createQuest);
};

export default calc;

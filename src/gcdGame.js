import * as uni from './uniRulls.js';

const min = 1;
const max = 100;
const rule = 'Find the greatest common divisor of given numbers.';

const createQuest = () => {
  const num1 = Math.round(Math.random() * (max - min) + min);
  const num2 = Math.round(Math.random() * (max - min) + min);
  const question = `${num1} ${num2}`;
  let trueAnswer;
  for (let i = num1; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      trueAnswer = i;
      break;
    }
  }
  return [question, String(trueAnswer)];
};

const gcd = () => {
  uni.universal(rule, createQuest);
};

export default gcd;

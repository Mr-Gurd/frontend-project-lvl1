import * as uni from './uniRulls.js';

const min = 1;
const max = 10;
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const createQuest = () => {
  const num = Math.round(Math.random() * (max - min) + min);
  const question = num;
  let trueAnswer = 'yes';
  if (num === 1) {
    trueAnswer = 'no';
  }
  for (let i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) {
      trueAnswer = 'no';
    }
  }

  return [question, trueAnswer];
};

const prime = () => {
  uni.universal(rule, createQuest);
};

export default prime;

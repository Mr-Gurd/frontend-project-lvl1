import * as uni from './uniRulls.js';

const min = 1;
const max = 100;
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const createQuest = () => {
  const num = Math.round(Math.random() * (max - min) + min);
  const question = num;
  const trueAnswer = (num % 2) === 0 ? 'yes' : 'no';
  return [question, trueAnswer];
};

const even = () => {
  uni.universal(rule, createQuest);
};

export default even;

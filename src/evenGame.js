import * as uni from './uniRulls.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const createQuest = () => {
  const getRandomNum = (min, max) => Math.round(Math.random() * (max - min) + min);
  const num = getRandomNum(uni.min, uni.max);
  const question = num;
  const trueAnswer = (num % 2) === 0 ? 'yes' : 'no';
  return [question, trueAnswer];
};

const even = () => {
  uni.universal(rule, createQuest);
};

export default even;

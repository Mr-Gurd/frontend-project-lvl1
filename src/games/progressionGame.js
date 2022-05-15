import * as uni from '../uniRulls.js';

const min = 0;
const max = 100;
const progLengMin = 5;
const progLengMax = 10;
const rule = 'What number is missing in the progression?';

const createQuest = () => {
  const progLeng = Math.round(Math.random() * (progLengMax - progLengMin) + progLengMin);
  const progStart = Math.round(Math.random() * (max - min) + min);
  const progStep = Math.round(Math.random() * (progLengMax - min) + progLengMin);
  const progHidden = Math.round(Math.random() * ((progLeng - 1) - min) + min);
  const progArr = [];
  for (let i = 0; i < progLeng; i += 1) {
    progArr.push(progStart + i * progStep);
  }
  const trueAnswer = progArr[progHidden];
  progArr[progHidden] = '..';
  const question = progArr.join(' ');
  return [question, String(trueAnswer)];
};

const progression = () => {
  uni.universal(rule, createQuest);
};

export default progression;

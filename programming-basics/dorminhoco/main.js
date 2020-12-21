const dreamList = [
  'Ovelhas astronautas',
  'Tava jogando mesmo',
  'Sonhei com código',
  'Mozão',
];

const randomDream = (dreams) =>
  dreams[Math.floor(Math.random() * dreams.length)];

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

export const dorminhoco = async (milliseconds, dreamList) => {

  await sleep(milliseconds)

  const dream = randomDream(dreamList);
  return dream;
};

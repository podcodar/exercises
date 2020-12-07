const dreamList = [
  'Ovelhas astronautas',
  'Tava jogando mesmo',
  'Sonhei com código',
  'Mozão',
];

const randomDream = (dreams, callback) =>
callback(dreams[Math.floor(Math.random() * dreams.length)]);

const sleep = (ms, cb) => setTimeout(cb, ms);

const dorminhoco = async (milliseconds, dreamList) => {
  const promisedDream = new Promise((resolve) =>
    sleep(milliseconds, randomDream(dreamList, resolve))
  );
  const dream = await promisedDream;
  return dream;
};

module.exports = { dorminhoco };

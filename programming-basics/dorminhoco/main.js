const dreams = [
  'Ovelhas astronautas',
  'Tava jogando mesmo',
  'Sonhei com código',
  'Mozão'
]
const randomPosition = Math.floor(Math.random() * dreams.length)
const randomDream = (resolve) => () => resolve(dreams[randomPosition])

function sleep(ms) {
  return new Promise(
    (resolve) => setTimeout(randomDream(resolve), ms)
  );
}

const dorminhoco = async (valor) => {

  const sonho = await sleep(2000)

  return sonho
};


module.exports = { dorminhoco, sleep, randomDream };

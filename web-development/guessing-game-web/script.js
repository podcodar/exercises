
let guess = Math.round(Math.random() * 100)

const lower = document.getElementById('lower')
const success = document.getElementById('success')
const greater = document.getElementById('greater')

function handleClick() {
  const gameInput = document.querySelector('.game-input > input')
  const value = parseInt(gameInput.value)

  if (value === guess) {
    lower.style = "display: none;"
    greater.style = "display: none;"
    success.style = "display: block;"

    document.querySelector('.game-input button').disabled = true
  } else if (value > guess) {
    lower.style = "display: block;"
    greater.style = "display: none;"
    success.style = "display: none;"
  } else {
    lower.style = "display: none;"
    greater.style = "display: block;"
    success.style = "display: none;"
  }
}

const handleResetGame = () => {
  guess = Math.round(Math.random() * 100)

  lower.style = "display: none;"
  greater.style = "display: none;"
  success.style = "display: none;"
}
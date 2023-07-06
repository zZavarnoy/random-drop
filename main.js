const calc = document.getElementById('calc')
const result = document.getElementById('result')

function getRandomIntInclusive(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const myFn = () => {
  let arg1 = document.getElementById('arg1').value
  let arg2 = document.getElementById('arg2').value
  let f = getRandomIntInclusive(arg1, arg2)
  result.innerHTML = "Ваше число: " + f
  console.log(f)
  }

  
calc.addEventListener('click', myFn)
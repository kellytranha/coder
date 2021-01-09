const num = ['1', '2', '3', '4', '5', '6'];

let message = document.getElementById("layer2");

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

function play() {
  message.innerHTML = getRandomItem(num)
}


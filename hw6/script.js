const yes = ['Yes!', 'Sounds good', 'Sure', 'Definitely', 'Right, damdang!'];
const no = ['Obviously not!', 'Nope!', 'No way!'];
const maybe = ['Maybe yes, maybe no.', 'It depends.'];

let message = document.getElementById("result");
let page = document.getElementById("page");

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

function play() {
    message.innerHTML = "Running my crystall ball";
    page.classList.add("flashing");
    setTimeout(function () {
        const randomNumber = Math.floor(Math.random() * 3);
        page.classList.remove("flashing");
        if (randomNumber == 0) {
          message.innerHTML = getRandomItem(yes)
        }
        else if (randomNumber == 1) {
          message.innerHTML = getRandomItem(no)
        }
        else {
          message.innerHTML = getRandomItem(maybe)
        }
      }, 4000)

}

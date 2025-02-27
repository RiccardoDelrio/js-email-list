const playerEl = document.querySelector('.player_dice');
const computerEl = document.querySelector('.computer_dice');
const btnEl = document.querySelector('.btn');
const resultEl = document.querySelector('.winner_message');

fetch("https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=6&items=2")
    .then(response => response.json())
    .then(data => {
        const [player, computer] = data.response;
        console.log(player, computer);

        playerEl.innerHTML = `<img src="./assets/img/${player}.svg" alt="">`
        computerEl.innerHTML = `<img src="./assets/img/${computer}.svg" alt="">`
        if (player > computer) {
            resultEl.innerHTML = 'The winner is: Player!'
        } else if (player === computer) {
            resultEl.innerHTML = 'pareggio'

        } else {
            resultEl.innerHTML = 'The winner is: Computer!'
        }
    })
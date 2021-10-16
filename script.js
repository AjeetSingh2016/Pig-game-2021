








let howToPlay = document.querySelector('.htpbutton');
const rollDice = document.querySelector('.roll-dice');
let livescore = document.querySelector('.livescore');

howToPlay.addEventListener('click',function(){
    alert("When a player reaches a total of 100 or more points, the game ends and that player is the winner.");
})

let num;
rollDice.addEventListener('click',function(){
    num = Math.floor(Math.random() * 6)+1;
    livescore.textContent = num;   
})
// random();
// console.log(num);


let howToPlay = document.querySelector('.htpbutton');
const rollDice = document.querySelector('.roll-dice');
let mainscore = document.querySelector('.livescore');
const image = document.querySelector('.image');
let playerOneCurrent = document.querySelector('.card-score');
let scoreone = 0;
const hold = document.querySelector('.hold');

howToPlay.addEventListener('click',function(){
    alert("When a player reaches a total of 100 or more points, the game ends and that player is the winner.");
})

let num;
rollDice.addEventListener('click',function(){
    num = Math.floor(Math.random() * 6)+1;
    if(num==1){
        // image.classList.add('one')
        image.style.backgroundImage = "url(img/dice1.png)";
    }
    else if(num==2){
        image.style.backgroundImage = "url(img/dice2.png)";
    }
    else if(num==3){
        image.style.backgroundImage = "url(img/dice3.png)";
    }
    else if(num==4){
        image.style.backgroundImage = "url(img/dice4.png)";
    }
    else if(num==5){
        image.style.backgroundImage = "url(img/dice5.png)";
    }
    else if(num==6){
        image.style.backgroundImage = "url(img/dice6.png)";
    }
    if(num==1){
        playerOneCurrent.textContent = 0;
        scoreone = 0;
    }
    else{
        scoreone += num;
        playerOneCurrent.textContent = scoreone;

    }
})

hold.addEventListener('click',function(){
    mainscore.textContent = scoreone;
    playerOneCurrent.textContent = 0;

})



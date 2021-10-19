
let howToPlay = document.querySelector('.htpbutton');
const rollDice = document.querySelector('.roll-dice');
let mainscoreOne = document.querySelector('.livescore-one');
let mainscoreTwo = document.querySelector('.livescore-two');
const image = document.querySelector('.image');
let playerOneCurrent = document.querySelector('.card-score-one');
let playerTwoCurrent = document.querySelector('.card-score-two');
let scoreone = 0;
const hold = document.querySelector('.hold');

const left = document.querySelector('.left');
const right = document.querySelector('.right');

let change = 1;
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
    if(change%2==0){
        if(num==1){
            playerTwoCurrent.textContent = 0;
            scoreone = 0;
            change++;
        }
        else{
            scoreone += num;
            playerTwoCurrent.textContent = scoreone;

        }

    }
    else{
        if(num==1){
            playerOneCurrent.textContent = 0;
            scoreone = 0;
            change++;


        }
        else{
            scoreone += num;
            playerOneCurrent.textContent = scoreone;
        }

    }
})
hold.addEventListener('click',function(){
    

})




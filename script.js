let roller = document.getElementById('roll');
let hold = document.getElementById('hold');
let newGame = document.getElementById('new-game');
let diceel = document.querySelector('.dice');
let currentel0 = document.getElementById('c-score000');
let currentScore = 0;
let score = [0,0];
let activePlayer = 0;
newGame.addEventListener('click',()=>{
    currentScore = 0;
    score = [0,0];
    activePlayer = 0;
    diceel.classList.add('hidden');
    document.getElementById('c-score000').textContent = 0;
    document.getElementById('c-score001').textContent = 0;
    document.getElementById('f-score000').textContent = 0;
    document.getElementById('f-score001').textContent = 0;


    document.querySelector('.player000').classList.remove('winner');
    document.querySelector('.player001').classList.remove('winner');
    document.querySelector('.player000').classList.add('active');
    document.querySelector('.player001').classList.remove('active');


        hold.classList.remove('hidden')
        roller.classList.remove('hidden')

})
function switchPlayer(){
    currentScore = 0;
    document.getElementById(`c-score00${activePlayer}`).textContent = currentScore;
    document.querySelector(`.player00${activePlayer}`).classList.remove('active');
    activePlayer = (activePlayer === 0) ? 1 : 0;
    document.querySelector(`.player00${activePlayer}`).classList.add('active');
}
hold.addEventListener('click',function(){
    score[activePlayer]+=currentScore;
    document.getElementById(`f-score00${activePlayer}`).textContent = score[activePlayer];
    if(score[activePlayer]>=100){
        document.querySelector(`.player00${activePlayer}`).classList.remove('active');
        document.querySelector(`.player00${activePlayer}`).classList.add('winner');
        hold.classList.add('hidden')
        roller.classList.add('hidden')
    }else{
        switchPlayer();
    }
});

roller.addEventListener('click', function(){
    const dice = Math.trunc(Math.random() *6) +1;
    diceel.classList.remove('hidden');
    diceel.src = `./images/dice${dice}.png`;
    if(dice != 1){
        currentScore += dice;
        document.getElementById(`c-score00${activePlayer}`).textContent = currentScore;

        
    }else{
        switchPlayer();
    }
});
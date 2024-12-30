let score1 = document.getElementById("card-inner-01");
let score2 = document.getElementById("card-inner-02");
let scoreCounter1 = 0;
let scoreCounter2 = 0;

function addTeam1Score(){
  scoreCounter1 += 1;
  score1.textContent = scoreCounter1;
};

function subtractTeam1Score(){
  scoreCounter1 = Math.max(0, scoreCounter1 - 1); // Counter will be 0 if counter - 1 is negative
  score1.textContent = scoreCounter1;
};

function addTeam2Score(){
  scoreCounter2 += 1;
  score2.textContent = scoreCounter2;
};

function subtractTeam2Score(){
    scoreCounter2 = Math.max(0, scoreCounter2 - 1); // Counter will be 0 if counter - 1 is negative
    score2.textContent = scoreCounter2;
};

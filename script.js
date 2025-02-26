let score = 0;
function increaseScore(){
    score ++;
    document.getElementById("score").innerText=score;
}
function resetScore(){
    score = 0;
    document.getElementById("score").innerText=score;
}
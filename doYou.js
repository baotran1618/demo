function showHeart(){
    alert("<3");
}
let butMove = document.getElementById("no");
function init() {
    butMove.style.position = 'relative';
    butMove.style.left = '0px';
    butMove.style.top = "0px";
}
function noMove(){
    butMove.style.left = parseInt(butMove.style.left) + Math.random()*100 + 'px';
    butMove.style.top = parseInt(butMove.style.top) + Math.random()*100 + 'px';

}
window.onload = init;


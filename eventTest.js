let checkDemo = document.getElementById("demo");
checkDemo.addEventListener("mouseover", checkMouseOver);
function checkMouseOver(){
    checkDemo.innerHTML = "Mouse Over";
}
checkDemo.addEventListener("mouseout", checkMouserOut);
function checkMouserOut(){
    checkDemo.innerHTML = "Mouse Out";
    checkDemo.style.color = "black";
}
checkDemo.addEventListener("click", checkMouseClick);
function checkMouseClick(){
    checkDemo.style.color = "red";
}
checkDemo.addEventListener("scroll", checkMouseScroll);
function checkMouseScroll(){
    checkDeme.style.backgroundColor = "yellow";
}

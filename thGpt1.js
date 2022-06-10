
function result() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    if(a === 0){
        if(b === 0){
            document.getElementById('kq').innerHTML = 'PT vo so nghiem'
        }
        else {
            document.getElementById('kq').innerHTML = 'PT vo nghiem'
        }
    }
    else {
        document.getElementById('kq').innerHTML = 'x =  '  + (-b /a)
    }
}






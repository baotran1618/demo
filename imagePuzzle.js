let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let n1,n2,n3,n4,n5;
let img1 = document.getElementById('1');
let img2 = document.getElementById('2');
let img3 = document.getElementById('3');
let img4 = document.getElementById('4');
let img5 = document.getElementById('5');
function changeImage1()
{
    count1 ++
    if(count1 === 1){
        img1.src ="img/c1.jpg"
    }
    else if(count1 === 2){
        img1.src = 'img/h1.jpg'
    }else{
        count1= 0
        img1.src ='img/m1.jpg'
    }
    n1 = count1;
    if((n1===n2) && (n1 === n3) && (n1 === n4) && (n1 === n5)){
        alert("You Win");
    }
}
function changeImage2()
{
    count2 ++
    if(count2 === 1){
        img2.src ="img/c2.jpg"
    }
    else if(count2 === 2){
        img2.src = 'img/h2.jpg'
    }else{
        count2= 0
        img2.src ='img/m2.jpg'
    }
    n2 = count2;
    if((n1===n2) && (n1 === n3) && (n1 === n4) && (n1 === n5)){
        alert("You Win");
    }
}
function changeImage3()
{
    count3 ++
    if(count3 === 1){
        img3.src ="img/c3.jpg"
    }
    else if(count3 === 2){
        img3.src = 'img/h3.jpg'
    }else{
        count3= 0
        img3.src ='img/m3.jpg'
    }
    n3 = count3;
    if((n1===n2) && (n1 === n3) && (n1 === n4) && (n1 === n5)){
        alert("You Win");
    }
}
function changeImage4()
{
    count4 ++
    if(count4 === 1){
        img4.src ="img/c4.jpg"
    }
    else if(count4 === 2){
        img4.src = 'img/h4.jpg'
    }else{
        count4= 0
        img4.src ='img/m4.jpg'
    }
    n4 = count4;
    if((n1===n2) && (n1 === n3) && (n1 === n4) && (n1 === n5)){
        alert("You Win");
    }
}
function changeImage5()
{
    count5 ++
    if(count5 === 1){
        img5.src ="img/c5.jpg"
    }
    else if(count5 === 2){
        img5.src = 'img/h5.jpg'
    }else{
        count5= 0
        img5.src ='img/m5.jpg'
    }
    n5 = count5;
    if((n1===n2) && (n1 === n3) && (n1 === n4) && (n1 === n5)){
        alert("You Win");
    }

}




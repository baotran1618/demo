let year = parseInt(prompt("Nhap vao nam can kiem tra"));
if((year%4==0 && year%100 !=0) ||(year%100==0 && year%400==0)){
    alert("Nam "+ year +" la nam nhuan");
} else{
    alert("Nam "+ year +" khong phai nam nhuan");
}
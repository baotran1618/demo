function showMessage() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    // let gender = document.querySelector(".gender :checked").value;
    let gender = document.querySelector('.gender:checked').value
    console.log(gender)

    document.getElementById("message").innerHTML=
        "Hello " + name +'<br>'
        + "Tuoi cua ban la: " + age + '<br>'
        + "Thanh pho cua ban la: " + city + '<br>'
        + "Gioi tinh cua ban la: " + gender
    }
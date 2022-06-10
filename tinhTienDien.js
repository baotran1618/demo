function tinhTienDien() {
    if ((+document.getElementById("sodien").value) == 0) {
        alert("Nhap vao so dien tieu thu")
        } else {
            let a = +document.getElementById("sodien").value;
            if (a > 400) {
                document.getElementById("b1").innerHTML = "Bac 1 (0-50) : 80000 "
                document.getElementById("b2").innerHTML = "Bac 2 (51-100) : 85000 "
                document.getElementById("b3").innerHTML = "Bac 3 (101-200) : 200000 "
                document.getElementById("b4").innerHTML = "Bac 4 (201-300) : 250000 "
                document.getElementById("b5").innerHTML = "Bac 5 (301-400) : 280000 "
                document.getElementById("b6").innerHTML = "Bac 6 (>400) : " + (a - 400) * 2900
                document.getElementById("tong").innerHTML = "Tong tien " + (895000 + (a - 400) * 2900)
            } else {
                if (a >= 301 && a <= 400) {
                    document.getElementById("b1").innerHTML = "Bac 1 (0-50) : 80000 "
                    document.getElementById("b2").innerHTML = "Bac 2 (51-100) : 85000 "
                    document.getElementById("b3").innerHTML = "Bac 3 (101-200) : 200000 "
                    document.getElementById("b4").innerHTML = "Bac 4 (201-300) : 250000 "
                    document.getElementById("b5").innerHTML = "Bac 5 (301-400) : " + (a - 300) * 2800
                    document.getElementById("tong").innerHTML = "Tong tien " + (615000 + (a - 300) * 2800)
                } else {
                    if (a >= 201 && a <= 300) {
                        document.getElementById("b1").innerHTML = "Bac 1 (0-50) : 80000 "
                        document.getElementById("b2").innerHTML = "Bac 2 (51-100) : 85000 "
                        document.getElementById("b3").innerHTML = "Bac 3 (101-200) : 200000 "
                        document.getElementById("b4").innerHTML = "Bac 4 (201-300) : " + (a - 200) * 2500
                        document.getElementById("tong").innerHTML = "Tong tien " + (365000 + (a - 200) * 2500)
                    } else {
                        if (a >= 101 && a <= 200) {
                            document.getElementById("b1").innerHTML = "Bac 1 (0-50) : 80000 "
                            document.getElementById("b2").innerHTML = "Bac 2 (51-100) : 85000 "
                            document.getElementById("b3").innerHTML = "Bac 3 (101-200) : " + (a - 100) * 2000
                            document.getElementById("tong").innerHTML = "Tong tien " + (165000 + (a - 100) * 2000)
                        } else {
                            if (a >= 51 && a <= 100) {
                                document.getElementById("b1").innerHTML = "Bac 1 (0-50) : 80000 "
                                document.getElementById("b2").innerHTML = "Bac 2 (51-100) : " + (a - 50) * 1700
                                document.getElementById("tong").innerHTML = "Tong tien " + (80000 + (a - 50) * 1700)
                            } else {
                                if (a >= 0 && a <= 50) {
                                    document.getElementById("b1").innerHTML = "Bac 1 (0-50) : " + a * 1600
                                    document.getElementById("tong").innerHTML = "Tong tien " + a * 1600
                                } else
                                    alert("So ko hop le")

                            }
                        }
                    }
                }
            }
        }

    }
let b = +document.getElementById("sodien").value;
if(b!=a){
    pageRefresh();
    }
//let change = document.getElementById("sodien").value;
//change.addEventListener("change",pageRefresh);
function pageRefresh(){
   location.reload()
}


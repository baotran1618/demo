function giaiNghiem() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let c = +document.getElementById('c').value;
    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                document.getElementById('result').innerHTML = 'PT co vo so nghiem';}
            else {
                document.getElementById('result').innerHTML = 'PT vo nghiem';}}
        else {
            x=-c/b;

            document.getElementById('result').innerHTML = 'PT co nghiem duy nhat x =' + x;}}
    else {
        let d = b*b-4*a*c;
        if (d < 0) {
            document.getElementById('result').innerHTML = 'PT vo nghiem';}
        else if (d == 0) {
            let x = -b/(2*a);

            document.getElementById('result').innerHTML = 'PT co nghiem kep x1=x2=' + x;
        }
            else {
                let x1 = (-b + Math.sqrt(d))/(2*a);

                let x2= (-b - Math.sqrt(d))/(2*a);

                document.getElementById('result').innerHTML = 'PT co 2 nghiem phan biet ' + 'x1= ' + x1 + '; x2= ' + x2;
        }
    }
}


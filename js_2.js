
let num1 = 5;
let num2 = 10;
let sum = num1 + num2;
console.log("  sum  of", num1, "and", num2, "is =", sum);





function multiply(num1, num2) {
    return num1 * num2;
}
console.log('multiplying ', '12', 'and ', '2 =', multiply(12, 2));








// this  is a single line comment

/**
 * this i multiple line comment
 * explain the multiples 
 */


let valuee = 51; //assign 51 to variable valuee










let name = "Agha Essa Khan";
let age = 21;
let isStudent = true;
console.log("Name :", name);
console.log("Age :", age);
console.log("I am a Student =", isStudent);











const pi = 3.14;
let radius = 5;
let area = pi * radius * radius;
console.log(" the area of the  circle with radius", radius, "is : ", area);
















function my(sc) {
    if (sc == "yes") {
        document.getElementById('a1').innerHTML = 'here we see functions workings';
        document.getElementById('a1').style.backgroundColor = 'yellow';
        document.getElementById('a1').style.fontSize = '29px';
        document.getElementById('a1').style.color = 'pink';
    }
    else {
        document.write('Error detection')

    }

}
function begin() {

    let start = "yes";
    my(start);

}










function another() {
    let ww = document.getElementsByClassName('test');
    for (let i = 0; i < ww.length; i++) {
        ww[i].style.backgroundColor = 'skyblue';


    }


}










function confirma() {
    window.confirm('confirm ka check...');
}
function cridentials() {
    let wa = window.prompt('enter university name : ')
    if (wa == 'umt' || wa == 'UMT') {
        window.alert('cahloo ji thukar se university lakin sahi ha ab kya kare....');
    }
    else {
        window.alert('oeee galti ho gaeaee....' + 222222);
    }
}















function list_print() {
    // if array like come
    let celll = new Array(5);
    celll[0] = 'aaa';
    celll[1] = 'bbb';
    celll[2] = 'ccc';
    celll[3] = 'ddd';
    celll[4] = 'eee';
    for (let xi = 0; xi < celll.length; xi++) {
        document.write(celll[xi] + '<br>');
    }


    // if  dictionary like come
    let cel1111 = { 1: 'agha', 2: 'ali', 3: 'llla', 4: 'sjks' };
    document.write(cel1111[1]);
}














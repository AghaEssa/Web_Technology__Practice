document.write('<h1> hellow by java_script </h1> ');

document.getElementById('n1').innerText = 'hellow world';


// variables in js 
var kk = 'haa';
const g = 'gf';
let v = 'bf';


// coments
// hsASljs

/*
speechSynthesisHS
skSJSLjs
shKSjs
*/















function fetch() {
    let val1 = parseInt(document.getElementById('ob1').value);
    let val2 = parseInt(document.getElementById('ob2').value);
    var sum = val1 + val2;

    show(sum)
}
function show(s) {
    document.getElementById('res').innerHTML = s;
}

















function fetch1()  //change
{
    let val1 = parseInt(document.getElementById('ob3').value); //change
    let val2 = parseInt(document.getElementById('ob4').value); //change
    var sum = val1 + val2;
    return sum;
}
function show1()//change
{
    document.getElementById('res11').innerHTML = fetch1();//change
}
















// alerts message in js


window.alert('heeee their you');
let data = window.prompt('enter your age :');
window.confirm('yes your age is :' + data);



function close_kar() {
    window.close()
}












let dat = new Array(3);
dat[0] = 'ashir';
dat[1] = 'ali';

document.write(dat[0], '<br><h1>aaa</h1><br>');
document.write(dat[1]);


let dat1 = { 'ali': 12, 'sara': 13 };






console.log("🔹 Assignment Operators");
let a = 10;
a += 5;
console.log("a += 5 →", a); // Output: 15

console.log("\n🔹 Arithmetic Operators");
let x = 4;
let y = 2;
console.log("x + y =", x + y);     // 6
console.log("x * y =", x * y);     // 8
console.log("x ** y =", x ** y);   // 16
console.log("x++ =", x++);         // 4 (then x = 5)
console.log(x);
console.log("--y =", --y);         // 1

console.log("\n🔹 Comparison Operators");
let c = 5;
let b = '5';
console.log("c == b →", c == b);   // true
console.log("c === b →", c === b); // false
console.log("c != b →", c != b);   // false
console.log("c !== b →", c !== b); // true
console.log("c > 3 →", c > 3);     // true
console.log("c <= 5 →", c <= 5);   // true

console.log("\n🔹 Logical Operators");
let age = 20;
console.log("age > 18 && age < 30 →", age > 18 && age < 30); // true
console.log("age < 18 || age > 25 →", age < 18 || age > 25); // false
console.log("!(age < 18) →", !(age < 18));                   // true








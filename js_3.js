
// through names in form we check it in js help

function validate() {
    if (document.myForm.Name.value == "") {
        alert("Please provide your name!");
        document.myForm.Name.focus();
        return false;
    }

    if (document.myForm.EMail.value == "") {
        alert("Please provide your Email!");
        document.myForm.EMail.focus();
        return false;
    }

    // NaN    ----->   is ka matlab (not a number) yani koi string hone chae
    if (document.myForm.Zip.value == "" || isNaN(document.myForm.Zip.value) || document.myForm.Zip.value.length != 5) {
        alert("Please provide a zip in the format #####.");
        document.myForm.Zip.focus();
        return false;
    }

    if (document.myForm.Country.value == "-1") {
        alert("Please provide your country!");
        return false;
    }

    return true;
}
















let output = "";

let name = "Ali";
output += "1. length: " + name.length + "\n";

let str = "Hello World";
output += "2. slice(0, 5): " + str.slice(0, 5) + "\n";  // ye  negative value bhi leta ha  jase -1 

let js = "JavaScript";
output += "3. substring(0, 4): " + js.substring(0, 4) + "\n";       //  ye  negative value nahi leta ha   
output += "4. substr(4, 6): " + js.substr(4, 6) + "\n";              // is me (4) index se start ho ga or agee(6) characters tak jae ga  

output += "5. replace: " + str.replace("World", "Ali") + "\n";

let fruit = "apple apple";
output += "6. replaceAll: " + fruit.replaceAll("apple", "banana") + "\n";

let small = "ali";
output += "7. toUpperCase: " + small.toUpperCase() + "\n";

let big = "ALI";
output += "8. toLowerCase: " + big.toLowerCase() + "\n";

let greet = "Hello";
let world = "World";
output += "9. concat: " + greet.concat(" ", world) + "\n";

let spaced = "  Hello  ";
output += "10. trim: [" + spaced.trim() + "]\n";
output += "11. trimStart: [" + spaced.trimStart() + "]\n";
output += "12. trimEnd: [" + spaced.trimEnd() + "]\n";

let num = "5";
output += "13. padStart: " + num.padStart(3, "0") + "\n";       //output: 005
output += "14. padEnd: " + num.padEnd(3, "0") + "\n";           //output: 500

let charStr = "Ali";
output += "15. charAt(0): " + charStr.charAt(0) + "\n";           //output: A

let codeChar = "A";
output += "16. charCodeAt(0): " + codeChar.charCodeAt(0) + "\n";    //output: 65

let items = "a,b,c";
output += "17. split(','): " + items.split(",").join(" | ") + "\n";

document.getElementById("output").textContent = output;
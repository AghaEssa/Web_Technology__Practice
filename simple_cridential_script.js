
function checks() {
    // ID check
    var value1 = document.getElementById('ID').value.trim();
    var result = document.getElementById('res1');

    if (value1.length == 4) {
        result.innerHTML = 'Correct Entry';
        result.style.color = 'black';
        result.style.background = 'green';
    }
    else {
        result.innerHTML = 'Wrong Entry';
        result.style.color = 'black';
        result.style.background = 'red';
    }




    // password check 
    var password = document.getElementById('pass').value.trim();
    var passResult = document.getElementById('res2');

    var alphanumericPattern = /^[a-zA-Z0-9]{6}$/;

    if (alphanumericPattern.test(password)) {
        passResult.innerHTML = 'Correct Password Entry';
        passResult.style.color = 'black';
        passResult.style.backgroundColor = 'green';
    } else {
        passResult.innerHTML = 'Wrong Password Entry. Must be 6 alphanumeric characters.';
        passResult.style.color = 'black';
        passResult.style.backgroundColor = 'red';
    }







    // age check 


    var age = parseInt(document.getElementById('age').value.trim());

    var ageResult = document.getElementById('res3');




    if (age >= 18 && age <= 100) {
        ageResult.innerHTML = 'Correct Age Entry';
        ageResult.style.color = 'black';
        ageResult.style.backgroundColor = 'green';
    } else {
        ageResult.innerHTML = 'Wrong Age Entry. Age must be between 18 and 100.';
        ageResult.style.color = 'black';
        ageResult.style.backgroundColor = 'red';
    }



}




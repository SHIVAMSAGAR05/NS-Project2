
//Script file for Carnage Password Generator

const empty = "";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //Generate random Uppercase Letters
const lCase = "abcdefghijklmnopqrstuvwxyz"; //Generate randowm Lowercase Letters
const number = "0123456789"; //Generate Random Numbers
const symbol = "!@#$%^&*=-_"; //Generate Random symbols

//Storing DOM elements to Variable
const pLength = document.getElementById("p-length");
const upperCase = document.getElementById("p-uppercase");
const lowerCase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");



//Adding settings to the toggle buttons for the choosing of Password type ( Password Contains - Uppercase, Lowercase, Numbers, Symbols)
submit.addEventListener("click", () => {
    let initialPassword = empty;
    (upperCase.checked) ? initialPassword += uCase : "";
    (lowerCase.checked) ? initialPassword += lCase : "";
    (pNumber.checked) ? initialPassword += number : "";
    (pSymbol.checked) ? initialPassword += symbol : "";

    password.value = generatePassword(pLength.value, initialPassword)
});

//Funtion which generate random Passwords------>>>>

function generatePassword(l, initialPassword) {
    let pass = "";
    for (let i = 0; i < l; i++) {
        pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
    }
    return pass;
}

// Copy password to clipboard

const copy = document.getElementById("copy");

copy.addEventListener("click", () => {
    if (password.value == "") {
        alert("Please generate a password")
    }else {
        password.select();
        document.execCommand("copy");
        alert("Password has been copied to clipboard");
    }
});

clipboard.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if(!password){return;}

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert("Password Copied to Clipboard");
})

let yname = prompt("Type Your Name please...");
alert("Welcome "+yname);
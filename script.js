// User Login Assignment

// Variables for HTML Elements
let loginBtnEl = document.getElementById("login-btn");
let UserInEl = document.getElementById("userIn");
let PassInEl = document.getElementById("passIn");

// Event Listener
UserInEl.addEventListener("change", Login);
PassInEl.addEventListener("change", Login);

// Event Function
function Login() {
    // Input
    let userInput = UserInEl.value;
    let passInput = +PassInEl.value;

    // Validification
    if (userInput.length >= 6 || passInput.length !== 4) {
        alert("No User named " + UserInEl.value + " found!");
        UserInEl.value = null;
    } else if (passInput.length >= 5) {
        PassInEl.value = null;
    }

    // Process
    if (userInput === "admin" && passInput === 1234) {
        alert("Login Successful!");
    } else if (userInput === "admin" && passInput !== 1234) {
        alert("Invalid Password");
    } else if (passInput === 1234 && userInput !== "admin") {
        alert("Invalid Username");
    } else {
        alert("Login Failure, Inavlid Username & Password!");
    }
}
// Elements
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginButton = document.getElementById('loginButton');
const createAccountLink = document.getElementById('createAccountLink');
const backToLoginLink = document.getElementById('backToLoginLink');
const registerContainer = document.getElementById('registerContainer');
const loginContainer = document.querySelector('.login-container');

// Error messages for login
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

// Error messages for registration
const newUsernameError = document.getElementById('newUsernameError');
const newPasswordError = document.getElementById('newPasswordError');

// Simulating a database by storing accounts in an object
let accounts = {};

// Check if there's a logged-in user stored in localStorage
const currentUser = localStorage.getItem('currentUser');

// If a user is logged in, redirect to the game menu
if (currentUser) {
    window.location.href = 'gameMenu.html';
}

// Display the registration form
createAccountLink.addEventListener('click', function (e) {
    e.preventDefault();
    loginContainer.style.display = 'none';
    registerContainer.style.display = 'block';
});

// Back to login
backToLoginLink.addEventListener('click', function (e) {
    e.preventDefault();
    loginContainer.style.display = 'block';
    registerContainer.style.display = 'none';
});

// Function to create an account
registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    let isValid = true;

    // Check for empty fields
    if (!newUsername || !newPassword) {
        if (!newUsername) newUsernameError.textContent = "Username is required!";
        if (!newPassword) newPasswordError.textContent = "Password is required!";
        newUsernameError.style.display = 'inline';
        newPasswordError.style.display = 'inline';
        isValid = false;
    } else {
        newUsernameError.style.display = 'none';
        newPasswordError.style.display = 'none';
    }

    if (isValid) {
        // Create the account (simulation)
        accounts[newUsername] = newPassword;

        alert(`Account ${newUsername} has been created!`);
        loginContainer.style.display = 'block';
        registerContainer.style.display = 'none';
    }
});

// Function to login
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    // Clear previous error messages before checking
    usernameError.textContent = '';
    passwordError.textContent = '';
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';

    // Check for empty fields
    if (!username || !password) {
        if (!username) usernameError.textContent = "Username is required!";
        if (!password) passwordError.textContent = "Password is required!";
        usernameError.style.display = 'inline';
        passwordError.style.display = 'inline';
        isValid = false;
    }

    // Check if the account exists and password is correct
    if (isValid) {
        if (accounts[username] === undefined) {
            usernameError.textContent = "Account does not exist!";
            usernameError.style.display = 'inline';
        } else if (accounts[username] !== password) {
            passwordError.textContent = "Incorrect password!";
            passwordError.style.display = 'inline';
        } else {
            // Store the current logged-in user in localStorage
            localStorage.setItem('currentUser', username);

            // Redirect to the game menu after successful login
            window.location.href = 'gameMenu.html';
        }
    }
});

// Funkcia na vymazanie cookies a presmerovanie
function logOut() {
    // Vymazanie všetkých cookies
    document.cookie.split(";").forEach(function (cookie) {
        const cookieName = cookie.split("=")[0].trim();
        document.cookie = cookieName + "=;expires=" + new Date(0).toUTCString() + ";path=/";
    });

    // Vymazanie údajov o prihlásení z localStorage
    localStorage.removeItem('currentUser');  // Týmto odstránime prihláseného používate¾a

    // Prípadné vymazanie údajov zo servera (JSON súbor)
    fetch('deleteUserData.php', {
        method: 'POST',
        body: JSON.stringify({ username: 'user1' }),  // Uveï tu aktuálneho používate¾a
        headers: { 'Content-Type': 'application/json' }
    }).then(response => {
        if (response.ok) {
            console.log('User data deleted');
        }
    }).catch(error => {
        console.error('Error deleting user data:', error);
    });

    // Presmerovanie na index.html
    window.location.href = 'index.html'; // Presmerovanie na stránku prihlásenia
}




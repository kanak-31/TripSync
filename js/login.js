/* ============ LOGIN PAGE =============== */

const loginBtn = document.getElementById("btn-login-toggle");
const signupBtn = document.getElementById("btn-signup-toggle");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

signupBtn.addEventListener('click', () => {
    loginForm.style.display = "none";
    signupForm.style.display = "flex";
    loginBtn.classList.remove("active");
    signupBtn.classList.add("active");
})

loginBtn.addEventListener('click', () => {
    signupForm.style.display = "none";
    loginForm.style.display = "flex";
    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");
})


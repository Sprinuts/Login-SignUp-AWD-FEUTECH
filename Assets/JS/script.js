const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener("DOMContentLoaded",function () {
    document.getElementById("sign-up-form").addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.querySelector(".sign-up-form input[name='signup-username']").value;
        const email = document.querySelector(".sign-up-form input[name='signup-email']").value;
        const password = document.querySelector(".sign-up-form input[name='signup-password']").value;

        sessionStorage.setItem("signup-username", username);
        sessionStorage.setItem("signup-email", email);
        sessionStorage.setItem("signup-password", password);

        window.location.href = "./Assets/registered.html";
    });
});
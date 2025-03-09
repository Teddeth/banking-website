document.addEventListener("DOMContentLoaded", () => {
    const authForm = document.getElementById("authForm");
    const togglePassword = document.getElementById("togglePassword");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    togglePassword.addEventListener("click", () => {
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
        togglePassword.textContent = passwordInput.type === "password" ? "Show Password" : "Hide Password";
    });

    authForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        let users = JSON.parse(localStorage.getItem("users")) || {};

        if (users[email]) {
            if (users[email] === password) {
                alert("Login successful!");
                sessionStorage.setItem("loggedInUser", email);
                window.location.href = "dashboard.html";
            } else {
                alert("Incorrect password!");
            }
        } else {
            users[email] = password;
            localStorage.setItem("users", JSON.stringify(users));
            alert("Account created! You are now logged in.");
            sessionStorage.setItem("loggedInUser", email);
            window.location.href = "dashboard.html";
        }
    });
});



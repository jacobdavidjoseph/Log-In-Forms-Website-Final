
const loginForm = document.getElementById("loginForm");
const loginBox = document.getElementById("loginBox");
const membersPage = document.getElementById("membersPage");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username.trim() !== "" && password.trim() !== "") {
        loginBox.style.display = "none";
        membersPage.style.display = "block";
    }
});

function logout() {
    membersPage.style.display = "none";
    loginBox.style.display = "block";
    loginForm.reset();
}

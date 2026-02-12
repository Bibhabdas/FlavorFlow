document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let emailInput = document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;
    let message = document.getElementById("msg");

    // Fetching stored user data
    let storedUser = JSON.parse(localStorage.getItem("userData"));

    if (storedUser) {
        if (emailInput === storedUser.email && passwordInput === storedUser.password) {
            alert("Login Successful! Welcome back, " + storedUser.name);
            
            // Set session status
            localStorage.setItem("isLoggedIn", "true");
            
            // Redirect to Home (Up one level from registration folder)
            window.location.href = "../Home/Home.html";
        } else {
            message.textContent = "Invalid email or password. Please try again.";
        }
    } else {
        message.textContent = "No account found with this email. Please register first.";
    }
});
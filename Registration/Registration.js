document.getElementById("formContainer").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("full-name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let mobile = document.getElementById("mobile").value;

    let errorMail = document.getElementById("errorMail");
    let errorPassword = document.getElementById("errorPWD");

    // Patterns for validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

    // Email Validation
    if (!emailPattern.test(email)) {
        errorMail.textContent = "Please enter a valid email address.";
        return;
    } else {
        errorMail.textContent = "";
    }

    // Password Validation
    if (!passPattern.test(password)) {
        errorPassword.textContent = "Password does not meet the security requirements.";
        return;
    } else {
        errorPassword.textContent = "";
    }

    // Creating User Object
    let userData = {
        name: name,
        email: email,
        password: password,
        mobile: mobile
    };

    // Storing in LocalStorage
    localStorage.setItem("userData", JSON.stringify(userData));
    
    alert("Account created successfully! Redirecting to login...");
    window.location.href = "./Login.html";
});

// Interactive Password Strength Feedback
document.getElementById("password").addEventListener("input", function(e) {
    let val = e.target.value;
    
    document.getElementById("len").style.color = val.length >= 8 ? "#2ed573" : "#ff4757";
    document.getElementById("upper").style.color = /[A-Z]/.test(val) ? "#2ed573" : "#ff4757";
    document.getElementById("specialChar").style.color = /[!@#$%^&*]/.test(val) ? "#2ed573" : "#ff4757";
});
document.getElementById("signin-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "admin@anime.com" && password === "123456") {
        alert("Sign In Successful! 🎉");
        window.location.href = "index.html";  // Redirect to homepage
    } else {
        alert("Invalid email or password. Try again!");
    }
});

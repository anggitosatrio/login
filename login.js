function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (username === "admin" && password === "admin123") {
        alert("Login successful!");
        // Redirect to a new page or perform other actions
    } else {
        alert("Invalid username or password.");
    }
}
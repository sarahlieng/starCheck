//handles sign ups
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the user already exists
    const existingUser = localStorage.getItem('username');
    if (existingUser) {
        alert('Username already exists! Please choose a different one.');
        return;
    }

    // Save user data to localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);  // In real applications, NEVER store passwords in plain text!

    alert('Account created successfully!');
    window.location.href = 'login.html';  // Redirect to login page after sign up
});

//handles login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check if the entered credentials match what's stored in localStorage
    if (username === storedUsername && password === storedPassword) {
        // Store an authentication token or set a session (for real apps, you should use tokens like JWT)
        const authToken = 'fake-jwt-token';  // Example token
        localStorage.setItem('authToken', authToken);

        alert('Login successful!');
        window.location.href = 'dashboard.html';  // Redirect to the dashboard after successful login
    } else {
        alert('Invalid username or password');
    }
});

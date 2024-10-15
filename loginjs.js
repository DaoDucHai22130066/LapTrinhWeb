document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector('.wrapper');
    const closeButton = document.querySelector('.icon-close');
    const loginForm = document.querySelector('.form-box.login');
    const registerForm = document.querySelector('.form-box.register');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');

    // Function to handle successful login and redirect to the next page
    const redirectToNextPage = () => {
        // Check the login credentials
        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;

        // Check if the entered email has the '@' symbol (basic validation)
        if (email.includes('@')) {
            // Redirect to the next page
            window.location.href = 'https://dazh1102.github.io/Web_Nhom9/web-news.html';
        } else {
            // Display an error message for invalid email format
            alert('Invalid email format. Please enter a valid email.');
        }
    };

    closeButton.addEventListener('click', function () {
        wrapper.classList.remove('active-popup');
    });

    // Set the initial form positions
    loginForm.style.transform = 'translateX(0)';
    registerForm.style.transform = 'translateX(400px)';

    const showLoginForm = () => {
        loginForm.style.transform = 'translateX(0)';
        registerForm.style.transform = 'translateX(400px)';
    };

    const showRegisterForm = () => {
        loginForm.style.transform = 'translateX(-400px)';
        registerForm.style.transform = 'translateX(0)';
    };

    loginLink.addEventListener('click', showLoginForm);
    registerLink.addEventListener('click', showRegisterForm);

    // Add an event listener for the login button to simulate a successful login
    const loginButton = document.querySelector('.btn');
    loginButton.addEventListener('click', redirectToNextPage);
});

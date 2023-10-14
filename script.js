document.addEventListener("DOMContentLoaded", function () {
    const forgotPasswordForm = document.querySelector("#forgot-password-form");

    forgotPasswordForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // You can add your logic here to handle the "Forgot Password" submission and send the verification code.
        alert('Verification code sent. Check your email.');
        window.location.href = 'login.html'; // Redirect to the login page
    });
});

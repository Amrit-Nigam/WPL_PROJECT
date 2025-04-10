document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login-form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginButton = document.getElementById("login-button");

  if (loginButton) {
    loginButton.addEventListener("click", (e) => {
      e.preventDefault();

      // Reset any previous error states
      emailInput.style.borderColor = "";
      passwordInput.style.borderColor = "";

      const username = emailInput.value;
      const password = passwordInput.value;

      // Check credentials
      if (username === "Admin" && password === "1234") {
        // Admin login
        sessionStorage.setItem('userType', 'admin');
        simulateLogin('admin');
      } else if (username === "Member" && password === "1234") {
        // Member login
        sessionStorage.setItem('userType', 'member');
        simulateLogin('member');
      } else {
        // Invalid credentials
        emailInput.style.borderColor = "red";
        passwordInput.style.borderColor = "red";
        alert("Invalid credentials. Please try again.");
      }
    });
  }

  function simulateLogin(userType) {
    loginButton.disabled = true;
    loginButton.textContent = "Logging in...";

    setTimeout(() => {
      if (userType === 'admin') {
        window.location.href = 'admin.html';
      } else {
        window.location.href = 'member-dashboard.html';
      }
    }, 1000);
  }
});


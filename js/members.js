document.addEventListener("DOMContentLoaded", () => {
  // Simple client-side form validation
  const loginForm = document.querySelector(".login-form")
  const emailInput = document.getElementById("email")
  const passwordInput = document.getElementById("password")
  const loginButton = document.getElementById("login-button")

  if (loginButton) {
    loginButton.addEventListener("click", (e) => {
      e.preventDefault()

      // Reset any previous error states
      emailInput.style.borderColor = ""
      passwordInput.style.borderColor = ""

      let isValid = true

      // Validate email
      if (!emailInput.value || !isValidEmail(emailInput.value)) {
        emailInput.style.borderColor = "red"
        isValid = false
      }

      // Validate password
      if (!passwordInput.value || passwordInput.value.length < 6) {
        passwordInput.style.borderColor = "red"
        isValid = false
      }

      if (isValid) {
        // In a real application, this would submit to a server
        // For now, we'll just simulate a successful login
        simulateLogin()
      }
    })
  }

  // Email validation helper
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Simulate login (for demo purposes)
  function simulateLogin() {
    loginButton.disabled = true
    loginButton.textContent = "Logging in..."

    // Simulate API call delay
    setTimeout(() => {
      // Redirect to a dashboard page (would be created in a real implementation)
      alert("Login successful! In a real implementation, you would be redirected to a dashboard.")
      loginButton.disabled = false
      loginButton.textContent = "LOGIN"
    }, 1500)
  }
})


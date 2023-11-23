document.getElementById("submit").addEventListener("click", function() {
  // Get user input
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Replace these values with your actual admin credentials
  var adminEmail = "admin@example.com";
  var adminPassword = "admin123";

  // Check if the user input matches the admin credentials
  if (email === adminEmail && password === adminPassword) {
      // Redirect to the admin page
      window.location.href = "Admin.html";
  }
});
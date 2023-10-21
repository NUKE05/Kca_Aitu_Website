document.getElementById("sendButton").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var formData = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
    alert(formData);

    document.getElementById("contactForm").reset();
});

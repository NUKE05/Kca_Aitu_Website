// import { UserData } from './registration.js';

// function isUserRegistered(name, password) {
//   return UserData.some(user => user.name === name && user.password === password);
// }

// document.getElementById('sendButton').addEventListener('click', function(event) {
//   event.preventDefault(); 
//   const name = document.getElementById('name').value;
//   const password = document.getElementById('password').value;

//   if (isUserRegistered(name, password)) {
//     alert("Yes");
//   } else {
//     alert("No");
//   }
// });


document.getElementById("sendButton").addEventListener("click", function() {
  var email = document.getElementById("name").value;
  var password = document.getElementById("password").value;

  var data = {
    email: email,
    password: password,
  };
  var existingData = JSON.parse(localStorage.getItem("myData")) || [];
  existingData.push(data);

  localStorage.setItem("myData", JSON.stringify(existingData));
  
  document.getElementById("name").value = "";
  document.getElementById("password").value = "";
});


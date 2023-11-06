import { UserData } from './registration.js';

function isUserRegistered(name, password) {
  return UserData.some(user => user.name === name && user.password === password);
}

document.getElementById('sendButton').addEventListener('click', function(event) {
  event.preventDefault(); 
  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;

  if (isUserRegistered(name, password)) {
    alert("Yes");
  } else {
    alert("No");
  }
});

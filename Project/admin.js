// var data = JSON.parse(localStorage.getItem("myData"));

// if (data && data.length > 0) {
//   var table = document.getElementById("editable");
//   data.forEach(function(entry) {
//     var row = table.insertRow(-1);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     cell1.innerHTML = entry.email;
//     cell2.innerHTML = entry.password;
//   });
// }

function populateTable() {
  var data = JSON.parse(localStorage.getItem("myData"));
  var table = document.getElementById("editable");
  table.innerHTML = "<tr><th>Email</th><th>Password</th><th>Name</th><th>Action</th></tr>";

  if (data && data.length > 0) {
    data.forEach(function (entry, index) {
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);

      cell1.innerHTML = entry.email;
      cell2.innerHTML = entry.password;
      cell3.innerHTML = entry.name;

      // Add Edit and Delete buttons for each row
      var editButton = document.createElement("button");
      editButton.innerText = "Edit";
      editButton.addEventListener("click", function () {
        editEntry(index);
      });

      var deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", function () {
        deleteEntry(index);
      });

      cell4.appendChild(editButton);
      cell4.appendChild(deleteButton);
    });
  }
}

// Function to add a new entry
document.getElementById("add-button").addEventListener("click", function () {
  var email = document.getElementById("admin-email").value;
  var password = document.getElementById("admin-password").value;
  var name = document.getElementById("admin-name").value;

  var data = JSON.parse(localStorage.getItem("myData")) || [];
  data.push({ email, password, name });
  localStorage.setItem("myData", JSON.stringify(data));

  populateTable();

  // Clear input fields
  document.getElementById("admin-email").value = "";
  document.getElementById("admin-password").value = "";
  document.getElementById("admin-name").value = "";
});

// Function to edit an existing entry
// function editEntry(index) {
//   var data = JSON.parse(localStorage.getItem("myData"));
//   var email = document.getElementById("admin-email").value;
//   var password = document.getElementById("admin-password").value;
//   var name = document.getElementById("admin-name").value;

//   if (index >= 0 && index < data.length) {
//     data[index].email = email;
//     data[index].password = password;
//     data[index].name = name;

//     localStorage.setItem("myData", JSON.stringify(data));
//     populateTable();

//     // Clear input fields
//     document.getElementById("admin-email").value = "";
//     document.getElementById("admin-password").value = "";
//     document.getElementById("admin-name").value = "";
//   }
// }

function editEntry(index) {
  var data = JSON.parse(localStorage.getItem("myData"));
  var email = document.getElementById("admin-email").value;
  var password = document.getElementById("admin-password").value;
  var name = document.getElementById("admin-name").value;

  if (index >= 0 && index < data.length) {
    // Prepopulate the form fields with the data of the selected row
    document.getElementById("admin-email").value = data[index].email;
    document.getElementById("admin-password").value = data[index].password;
    document.getElementById("admin-name").value = data[index].name;

    // Set a hidden field to store the index of the entry being edited
    document.getElementById("edit-index").value = index;
  }
}

// Add an event listener to the Edit button
document.getElementById("edit-button").addEventListener("click", function () {
  var index = document.getElementById("edit-index").value;
  editEntry(index);
});

// Update the "Edit" button text based on whether data is being edited or not
function updateEditButtonState(editing) {
  var editButton = document.getElementById("edit-button");
  if (editing) {
    editButton.innerText = "Update";
  } else {
    editButton.innerText = "Edit";
  }
}

// Function to delete an entry
function deleteEntry(index) {
  var data = JSON.parse(localStorage.getItem("myData"));
  if (index >= 0 && index < data.length) {
    data.splice(index, 1);
    localStorage.setItem("myData", JSON.stringify(data));
    populateTable();
  }
}

// Populate the table when the page loads
populateTable();







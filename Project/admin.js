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

// Function to search the table
function searchTable() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value;
  table = document.getElementById("editable");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
      var matchFound = false;

      // Loop through each column (email, password, name)
      for (var j = 0; j < 3; j++) {
          td = tr[i].getElementsByTagName("td")[j];
          
          if (td) {
              txtValue = td.textContent || td.innerText;

              // Check if the column value contains the filter text (case-sensitive)
              if (txtValue.includes(filter)) {
                  matchFound = true;
                  break;
              }
          }
      }

      // Show/hide the row based on matchFound
      tr[i].style.display = matchFound ? "" : "none";
  }
}

  // Display a message when no matching data is found

/*
function searchTable() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("editable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0]; // Change the index based on the column you want to search

      if (td) {
          txtValue = td.textContent || td.innerText;

          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }
  }
}
*/
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
  
  if (index >= 0 && index < data.length) {
    // Prepopulate the form fields with the data of the selected row
    document.getElementById("admin-email").value = data[index].email;
    document.getElementById("admin-password").value = data[index].password;
    document.getElementById("admin-name").value = data[index].name;

    // Set a hidden field to store the index of the entry being edited
    document.getElementById("edit-index").value = index;
    updateState(index);
  }
}


function updateState(index) {
  var data = JSON.parse(localStorage.getItem("myData")) || [];

  data[index].email = document.getElementById("admin-email").value;
  data[index].password = document.getElementById("admin-password").value;
  data[index].name = document.getElementById("admin-name").value;

  populateTable();
}

document.getElementById("edit-button").addEventListener("click", function () {
  var index = document.getElementById("edit-index").value;
  editEntry(index);
});


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

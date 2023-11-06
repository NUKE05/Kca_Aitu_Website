document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("DOMContentLoaded", () => {
        for (let cell of document.querySelectorAll(".editable td")) {
            cell.ondblclick = () => editable.edit(cell);
        }
    });
    var editable = {
        selected : null, 
        value : "", 
       
        edit : cell => {
          cell.ondblclick = "";

          cell.contentEditable = true;
          cell.focus();
       
          cell.classList.add("edit");
          editable.selected = cell;
          editable.value = cell.innerHTML;
       
          window.addEventListener("click", editable.close);
          cell.onkeydown = evt => {
            if (evt.key=="Enter" || evt.key=="Escape") {
              editable.close(evt.key=="Enter" ? true : false);
              return false;
            }
          };
        },
    };
close : evt => { if (evt.target != editable.selected) {
    if (evt === false) {
      editable.selected.innerHTML = editable.value;
    }
   
    window.getSelection().removeAllRanges();
    editable.selected.contentEditable = false;
  
    window.removeEventListener("click", editable.close);
    let cell = editable.selected;
    cell.onkeydown = "";
    cell.ondblclick = () => editable.edit(cell);
   
    editable.selected.classList.remove("edit");
    editable.selected = null;
    editable.value = "";
   
    if (evt !== false) {
      console.log(cell.innerHTML);
      // check value?
      // send value to server?
      // update calculations in table?
    }
  }}

//   function createTableFromObjects(data) {
//     const table = document.createElement('table');
//     const headerRow = document.createElement('tr');
    
//     // Create table header row
//     const keys = Object.keys(data[0]);
//     for (const key of keys) {
//       const headerCell = document.createElement('th');
//       headerCell.textContent = key;
//       headerRow.appendChild(headerCell);
//     }
//     table.appendChild(headerRow);
  
//     // Create table data rows
//     for (const obj of data) {
//       const dataRow = document.createElement('tr');
//       for (const key of keys) {
//         const dataCell = document.createElement('td');
//         dataCell.textContent = obj[key];
//         dataRow.appendChild(dataCell);
//       }
//       table.appendChild(dataRow);
//     }
  
//     return table;
//   }

//   const UserDataArray = [
//     { Name: 1, Email: 'John', Password: 30 },
//     { Name: 2, Email: 'Jane', Password: 28 },
//     { Name: 3, Email: 'Doe', Password: 45 },
//   ];
  
//   const table = createTableFromObjects(UserDataArray);

//   const tableContainer = document.getElementById('table-container');
//   tableContainer.appendChild(table);
});

import { userData } from './script_contacts.js';

document.addEventListener("DOMContentLoaded", () => {
    // const userData = [
    //     { userName: "hop", email: "ademashauenova@gmail.com", password: "" },
    //     { userName: "fdhj", email: "221908@astanait.edu.kz", password: "" },
    // ];

    // import { UserData } from './script_contacts.js'; 

    console.log(userData); 

    if (UserData.length === 0) {
        console.log("UserData array is empty");
    } else {
        console.log("UserData array is not empty");
    }
    

    const tableBody = document.getElementById("user-table-body");

    userData.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
        `;
        tableBody.appendChild(row);
    });
});

const btn = document.getElementById("btn");
const tbdy = document.querySelector("tbody");
const alertDiv = document.getElementById("al");
let tableData = [];
let count = 0;
btn.addEventListener("click", (e) => {
  if (checkV == "done" || count == 0) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td>id will be automatically assigned</td>
    <td><input placeholder="Enter" type="text"></td>
    <td><input placeholder="Enter" type="text"></td>
    <td><input placeholder="Enter" type="text"></td>
    <td><input placeholder="Enter" type="text"></td>
    <td><input placeholder="Enter" type="text"></td>
    <td><button onclick="Save()">Save</button></td>`;
    tbdy.appendChild(newRow);
    count++;
    checkV = "again";
  } else {
    alertDiv.style.visibility = "visible";
  }
});

// aDD EventListner to save button

let checkV = "firstTime";
let c = "run";
function Save() {
  const validate = document.querySelectorAll("input");

  if (
    validate[0].value == "" ||
    validate[1].value == "" ||
    validate[2].value == "" ||
    validate[3].value == "" ||
    validate[4].value == ""
  ) {
    alertDiv.style.visibility = "visible";
  } else {
    const newData = {
      id: tableData.length + 1,
      student_name: tbdy.lastChild.children[1].firstChild.value,
      student_roll: tbdy.lastChild.children[2].firstChild.value,
      subject: tbdy.lastChild.children[3].firstChild.value,
      marks: tbdy.lastChild.children[4].firstChild.value,
      markedBy: tbdy.lastChild.children[5].firstChild.value,
    };

    tableData.push(newData);
    console.log(tableData);

    tbdy.lastChild.children[0].innerHTML = `<td>${
      tableData[count - 1].id
    }</td>`;
    tbdy.lastChild.children[1].innerHTML = `<td>${
      tableData[count - 1].student_name
    }</td>`;
    tbdy.lastChild.children[2].innerHTML = `<td>${
      tableData[count - 1].student_roll
    }</td>`;
    tbdy.lastChild.children[3].innerHTML = `<td>${
      tableData[count - 1].subject
    }</td>`;
    tbdy.lastChild.children[4].innerHTML = `<td>${
      tableData[count - 1].marks
    }</td>`;
    tbdy.lastChild.children[5].innerHTML = `<td>${
      tableData[count - 1].markedBy
    }</td>`;
    tbdy.lastChild.children[6].innerHTML = `<td><p>Saved</p></td>`;
    checkV = "done";
    alertDiv.style.visibility = "hidden";
  }
}

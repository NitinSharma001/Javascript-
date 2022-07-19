var contacts = [];
function submitForm() {
  validation();

  let fname = document.getElementById("fname").value;
  let email = document.getElementById("email").value;
  let phNumber = document.getElementById("phNumber").value;
  const idgenerator = Math.floor((Math.random() * 2000) + 1);

  var obj = {};
  obj["fname"] = fname;
  obj["email"] = email;
  obj["phNumber"] = phNumber;
  obj['id'] = idgenerator;

  contacts.push(obj);

  // console.log(contacts);

  let table = document.getElementById("table");
  table.innerHTML = '';

  for (let i = 0; i < contacts.length; i++) {


    let row = table.insertRow();
    let td1 = row.insertCell(0);
    let td2 = row.insertCell(1);
    let td3 = row.insertCell(2);
    let td4 = row.insertCell(3);
    let td5 = row.insertCell(4);

    td1.innerHTML = contacts[i].fname;
    td2.innerHTML = contacts[i].email;
    td3.innerHTML = contacts[i].phNumber;
    td4.innerHTML = `<button onclick ="editfunction (${idgenerator})">edit</button>`
    td5.innerHTML = `<button onclick ="deletefunction()">Delete</button>`
  }



  document.getElementById("fname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phNumber").value = "";



  return false;
}


function validation() {
  let fname = document.getElementById("fname").value;
  let email = document.getElementById("email").value;
  let phNumber = document.getElementById("phNumber").value;


  if (fname == "") {

    document.getElementById("alert").style.display = 'block';
    return false;
  }
  else {
    document.getElementById("alert").style.display = 'none';
  }
  if (email == "") {
    document.getElementById("alert2").style.display = 'block';
    return false;
  }
  else {
    document.getElementById("alert2").style.display = 'none';
  }
  if (phNumber == "") {
    document.getElementById("alert3").style.display = 'block';
    return false;
  }
  else {
    document.getElementById("alert3").style.display = 'none';
  }

}
function editfunction(editid) {


  document.getElementById("fname").value = a;
  document.getElementById('email').value = b;
  document.getElementById('phNumber').value = c;
  // console.log(editid)
}
function deletefunction() {
  document.getElementById("table").deleteRow(0);
}

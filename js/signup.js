var NameInput = document.getElementById("name");
var MailInput = document.getElementById("mail");
var PassInput = document.getElementById("pass");

var UsersList = [];

if (localStorage.getItem("UserContainer") !== null) {
  UsersList = JSON.parse(localStorage.getItem("UserContainer"));
}

function signUp() {
  if (
    validationInputs(NameInput) &&
    validationInputs(PassInput) &&
    validationInputs(MailInput)
  ) {
    var User = {
      name: NameInput.value,
      mail: MailInput.value,
      pass: PassInput.value,
    };
    UsersList.push(User);
    localStorage.setItem("UserContainer", JSON.stringify(UsersList));
    clearForm();
   
  }
}

function clearForm() {
  NameInput.value = null;
  MailInput.value = null;
  PassInput.value = null;

  NameInput.classList.remove("is-valid");
  MailInput.classList.remove("is-valid");
  PassInput.classList.remove("is-valid");
}

function validationInputs(element) {
  var text = element.value;
  var regex = {
    name: /^(.*[a-z]){3}$/i,
    mail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    pass: /^(.*[a-z]){3}$/i,
  };
  if (regex[element.id].test(text) == true) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    return true;
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    return false;
  }
}


document.getElementById('log').addEventListener("click", function () {
  window.location = './index.html';
});

document.getElementById('btn-log').addEventListener("click", function () {
  window.location = './index.html';
});
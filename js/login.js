var LogMailInput = document.getElementById('log-mail');
var LogPassInput = document.getElementById('log-pass');


UsersList=JSON.parse(localStorage.getItem("UserContainer"));

function login() {
  for (let i = 0; i < UsersList.length; i++) {
    if (
      LogMailInput.value == UsersList[i].mail &&
      LogPassInput.value == UsersList[i].pass
    ) {
     
     
      sessionStorage.setItem("UserName", JSON.stringify(UsersList[i].name));
        window.location = './home.html';
      
    } else {
      var a = document.getElementById('a');
      a.classList.remove("d-none");
    }
  }
}

document.getElementById("sign").addEventListener("click", function () {
  window.location = "./signup.html";
});



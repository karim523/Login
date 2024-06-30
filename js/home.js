var UserName = JSON.parse(sessionStorage.getItem("UserName"));
document.getElementById("home-name").innerHTML = `
<h1 class="text-info"> Welcome ${UserName}<h1>`;


document.getElementById('logout').addEventListener("click", function () {
    window.location = './index.html';
  });
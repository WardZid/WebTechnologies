const txtUser = document.getElementById("txtUsername");
const txtPass = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");

const API_URL = "http://localhost:3000";

btnLogin.addEventListener("click", function (e) {
  const username = txtUser.value;
  const password = txtPass.value;

  if (username === "" || password === "") {
    alert("Please enter both username and password.");
    return;
  }

  fetch(API_URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      if (response.ok) {
        window.location = "home.html";
        // alert("Login successful! Welcome, " + username + "!");

      } else if(response.status == 401) {
        alert("Wrong User or Pass!");
      } else {
        alert("Login failed!");
      }
    })
    .catch((error) => {
      if(error.message == "Failed to fetch"){
        alert("Activate Express server");
      }
      console.error("Error:", error);
    });
});

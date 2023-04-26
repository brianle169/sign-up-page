const form = document.getElementById("main-form"),
   firstName = document.getElementById("fname"),
   lastName = document.getElementById("lname"),
   email = document.getElementById("email"),
   phoneNumber = document.getElementById("tel"),
   password = document.getElementById("pwd"),
   confirmPassword = document.getElementById("cpwd"),
   message = document.querySelector("#pwd + span");

form.addEventListener("submit", (event) => {
   const pass = password.value;
   const confirm = confirmPassword.value;
   if (pass !== confirm) {
      message.textContent = "* Passwords do not match";
      password.style.border = "2px solid red";
      password.value = "";
      confirmPassword.style.border = "2px solid red";
      confirmPassword.value = "";
      event.preventDefault();
   } else {
      alert("Sign up successful! Welcome!");
   }
});

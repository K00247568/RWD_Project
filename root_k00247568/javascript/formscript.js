function validateForm() {
  var x = document.forms["SignInForm"]["username"].value;
  if (x == "") {
    alert("Please enter a username");
    return false;
  }

  var x = document.forms["SignInForm"]["psw"].value;
  if (x == "") {
    alert("Please enter your password");
    return false;
  }
}

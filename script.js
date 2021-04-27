function passVisSwitch() {
  var passCheckBox = document.getElementById("passVisCheck");
  var passwordBox = document.getElementById("password");
  var passVisBool = passCheckBox.checked;

  if (passVisBool == true) {
    passwordBox = passwordBox.setAttribute("type", "text");
  } else {
    passwordBox = passwordBox.setAttribute("type", "password");
  }
}

function setBg() {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  var pageColor = document.getElementById("body");
  var styleString = "background-color: #" + randomColor + ";";
  pageColor = pageColor.setAttribute("style", styleString);
}

function randomGradient() {
  var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
  var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
  var randomColor3 = Math.floor(Math.random()*16777215).toString(16);
  var loginGradient = document.getElementById("body");
  var styleString = "background-image: linear-gradient(" + randomColor1 + ", " + randomColor2 + ");";
  loginGradient = loginGradient.setAttribute("style", styleString);
}

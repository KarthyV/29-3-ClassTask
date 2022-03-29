function createEl(el) {
  var el = document.createElement(el);
  return el;
}

function label(tag, text) {
  var label = document.createElement(tag);
  label.setAttribute("for", text);
  label.innerHTML = text;
  return label;
}
function input(tag, type, text) {
  var input = document.createElement(tag);
  input.setAttribute("type", type);
  input.setAttribute("id", text);
  return input;
}
var form = createEl("form");
form.setAttribute("action", "#");

var fNameLabel = label("label", "First Name");
var fNameInput = input("input", "text", "First Name");

var lNameLabel = label("label", "Last Name");
var lNameInput = input("input", "text", "Last Name");

var emailLabel = label("label", "Email");
var emailInput = input("input", "email", "Email");

var passLabel = label("label", "Password");
var passInput = input("input", "password", "Password");

var button = createEl("button");
button.className = "btn btn-primary";
button.innerHTML = "Submit";
button.addEventListener("click", (e) => {
  e.preventDefault;
  console.log(
    fNameInput.value,
    lNameInput.value,
    emailInput.value,
    passInput.value
  );
});

var br1 = createEl("br");
var br2 = createEl("br");
var br3 = createEl("br");
var br4 = createEl("br");
var br5 = createEl("br");
form.append(
  fNameLabel,
  fNameInput,
  br1,
  lNameLabel,
  lNameInput,
  br2,
  emailLabel,
  emailInput,
  br4,
  passLabel,
  passInput,
  br5,
  button
);
document.body.append(form);

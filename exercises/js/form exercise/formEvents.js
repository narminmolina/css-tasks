const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkLength(username, 3);
  checkEmail(email);
  checkLength(password, 6);
  checkPasswordsMatch(password, password2);
  checkRequired(username);
  checkRequired(email);
  checkRequired(password);
  checkRequired(password2);
});
// Show input error message
function showError(input, message) {
  input.parentElement.classList.add('error');
  input.nextElementSibling.innerHTML = message;
}

// Show success outline
function showSuccess(input) {
  input.parentElement.classList.remove('error');
  input.parentElement.classList.add('success');
}

// Check email is valid
function checkEmail(input) {
  const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!input.value.toLowerCase().match(regEx)) {
    showError(input, 'Email is not valid');
    return;
  }
  showSuccess(input);
  return;
}

// Check required fields
function checkRequired(input) {
  if (input.value === '') {
    showError(input, `${input.id} is required`);
    return;
  }
}

// Check input length
function checkLength(input, maxLength) {
  if (input.value.length < maxLength) {
    showError(input, `${input.id} must be at least ${maxLength}`);
    return;
  }
  showSuccess(input);
  return;
}

// Check passwords match
function checkPasswordsMatch(password, confirmPassword) {
  if (confirmPassword.value !== password.value) {
    return showError(password2, `Passwords don't match`);
  }
  return showSuccess(password2);
}
// not prefered

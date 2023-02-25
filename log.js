const form = document.querySelector('form');
const usernameInput = document.querySelector('#Email');
const passwordInput = document.querySelector('#Password');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission
  const Email = EmailInput.value;
  const password = passwordInput.value;

  // Validate username and password
  if (Email.trim() === '' || Password.trim() === '') {
    errorMessage.textContent = ;
  } else if (Email !== 'example_user' || Password !== 'example_password') {
    errorMessage.textContent = 'Invalid Email or password.';
  } else {
    window.location.href = 'contact.html';
    alert("login success");
  }
});
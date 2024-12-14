const emailInput = document.getElementById('email');
const btn = document.getElementById('btn');
const iconError = document.querySelector('.icon-error');
const errorMsg = document.querySelector('.error-msg');

const originalBorderColor = getComputedStyle(emailInput).borderColor;

let timeout;

btn.addEventListener('click', function () {
  const emailValue = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailPattern.test(emailValue)) {
    iconError.style.display = 'inline';
    errorMsg.style.display = 'inline';
    emailInput.style.borderColor = 'hsl(0, 93%, 68%)';

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      iconError.style.display = 'none';
      errorMsg.style.display = 'none';
      emailInput.style.borderColor = originalBorderColor;
    }, 5000);
  } else {
    iconError.style.display = 'none';
    errorMsg.style.display = 'none';
    emailInput.style.borderColor = originalBorderColor;

    clearTimeout(timeout);
  }
});

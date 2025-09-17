/******************************
 * Feature 1: Light/Dark Mode
 ******************************/
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

/******************************
 * Feature 2: Counter
 ******************************/
let counter = 0;
const counterValue = document.getElementById('counterValue');
document.getElementById('incrementBtn').addEventListener('click', () => {
  counter++;
  counterValue.textContent = counter;
});

/******************************
 * Feature 3: Collapsible FAQ
 ******************************/
const faqQuestions = document.querySelectorAll('.faqQuestion');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

/******************************
 * Part 3: Custom Form Validation
 ******************************/
const form = document.getElementById('userForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent submission
  let valid = true;

  // Name validation
  const name = document.getElementById('name');
  if (name.value.trim() === '') {
    name.nextElementSibling.textContent = 'Name is required';
    valid = false;
  } else {
    name.nextElementSibling.textContent = '';
  }

  // Email validation
  const email = document.getElementById('email');
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value)) {
    email.nextElementSibling.textContent = 'Enter a valid email';
    valid = false;
  } else {
    email.nextElementSibling.textContent = '';
  }

  // Password validation
  const password = document.getElementById('password');
  if (password.value.length < 6) {
    password.nextElementSibling.textContent = 'Password must be at least 6 characters';
    valid = false;
  } else {
    password.nextElementSibling.textContent = '';
  }

  if (valid) {
    formMessage.textContent = 'Form submitted successfully!';
    formMessage.style.color = 'green';
    form.reset();
  } else {
    formMessage.textContent = 'Please fix the errors above.';
    formMessage.style.color = 'red';
  }
});

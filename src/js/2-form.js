let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const localStorageKey = 'feedback-form-state';

const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
  formData = JSON.parse(savedData);
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(localStorageKey);
  formData = { email: '', message: '' };
  form.reset();
});

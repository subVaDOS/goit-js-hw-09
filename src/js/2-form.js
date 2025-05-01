const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// 1. Об'єкт formData поза функціями
let formData = {
  email: '',
  message: '',
};

// 2. Завантаження з локального сховища при старті
loadFormData();

// 3. Відстеження події input
form.addEventListener('input', onFormInput);

// 4. Відстеження події submit
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  const { name, value } = event.target;

  formData[name] = value.trim(); // прибираємо пробіли
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  const { email, message } = formData;

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Form submitted with data:', formData);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
}

// function loadFormData() {
//   const savedData = localStorage.getItem(STORAGE_KEY);
//   if (!savedData) return;

//   try {
//     formData = JSON.parse(savedData);

//     // Заповнюємо форму, якщо є збережені значення
//     form.elements.email.value = formData.email || '';
//     form.elements.message.value = formData.message || '';
//   } catch (error) {
//     console.error('Error parsing saved form data:', error);
//   }
// }
// 5. Заповнення полів форми з локального сховища
// function loadFormData() {

// const savedData = localStorage.getItem(STORAGE_KEY);
// if (!savedData) return;

// try {
//   formData = JSON.parse(savedData);
//   form.elements.email.value = formData.email || '';
//   form.elements.message.value = formData.message || '';
// } catch (error) {
//   console.error('Error parsing saved form data:', error);
// }

// Отримати кнопки з DOM
const buttonA = document.querySelector('.top-sellers-btn');
const buttonB = document.querySelector('.hero-button-one');
const buttonC = document.querySelector('.reviews-open-btn');

// Отримати модальні вікна з DOM
const modalA = document.querySelector('.backdrop');
const modalB = document.querySelector('.backdrop-reviews');

// Додати обробник події для кнопки A
buttonA.addEventListener('click', () => {
  openModal(modalA);
});

// Додати обробник події для кнопки B
buttonB.addEventListener('click', () => {
  openModal(modalA);
});

// Додати обробник події для кнопки C
buttonC.addEventListener('click', () => {
  openModal(modalB);
});

// Функція для відкриття модального вікна
function openModal(modal) {
  modal.classList.remove('is-hidden');
}

// Функція для закриття модального вікна
function closeModal(modal) {
  modal.classList.add('is-hidden');
}

// Отримати кнопку закриття модального вікна A з DOM
const closeButtonA = document.querySelector('.modal-close-btn');
// Додати обробник події для кнопки закриття модального вікна A
closeButtonA.addEventListener('click', () => {
  closeModal(modalA);
});

// Отримати кнопку закриття модального вікна B з DOM
const closeButtonB = document.querySelector('.modal-reviews-close-btn');
// Додати обробник події для кнопки закриття модального вікна B
closeButtonB.addEventListener('click', () => {
  closeModal(modalB);
});

// Отримати кнопку "Send" з DOM
const sendButton = document.querySelector('.modal-reviews-button-submit');
// Додати обробник події для кнопки "Send"
sendButton.addEventListener('click', () => {
  closeModal(modalB);
});
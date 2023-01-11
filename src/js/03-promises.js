import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onFormElSubmit);

function onFormElSubmit(event) {
  event.preventDefault();

  let delay = Number(formEl.delay.value);
  const step = Number(formEl.step.value);
  const amountOfPromises = Number(formEl.amount.value);

  countPromises(delay, step, amountOfPromises);
}

function countPromises(delay, step, amountOfPromises) {
  for (let position = 1; position <= amountOfPromises; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });

    delay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

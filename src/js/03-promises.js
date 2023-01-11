
// createPromise(promise[i], delay);

// setTimeout(() => {
//   setInterval(() => {}, step);
// }, delay);

// const submitBtn = document.querySelector(button[(type = 'submit')]);

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', createPromise);

console.log(formEl.amount);

// let formData = new FormData(formEl);

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(position, delay);
//       } else {
//         reject(position, delay);
//       }
//     }, delay);
//   });
// }

// function numberOfPromises(amount, step) {
//   for (let i = 1; i <= amount; i += 1) {
//     setTimeout(() => {
//       createPromise();
//     }, step);
//   }
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     fulfill();
//   } else {
//     reject();
//   }
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

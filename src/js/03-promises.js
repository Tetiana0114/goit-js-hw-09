import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formEl: document.querySelector('.form'),
};
refs.formEl.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const newObj = { position, delay };
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(newObj);
    } else {
      reject(newObj);
    }
    // console.log(newObj);
  });
}

function onFormSubmit(event) {
  event.preventDefault();
  
  let delay = +event.currentTarget.delay.value;
  let step = +event.currentTarget.step.value;
  let amount = +event.currentTarget.amount.value;
  // console.log(amount);
  // console.log(step);
  // console.log(delay);
    
  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
          // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
            }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
          // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
            }, delay);
          });
        delay += step;
  }
}

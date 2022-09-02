const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
};

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
 
refs.startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
  document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    onBtnClick(refs.startBtn, refs.stopBtn, 'disabled', true);
});

refs.stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    onBtnClick(refs.stopBtn, refs.startBtn, 'disabled', true);
});

function onBtnClick(firstBtn, secondBtn, attr, value) {
    firstBtn.setAttribute(attr, value);
    secondBtn.removeAttribute(attr);
    }
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
    onStartBtnClick('disabled', true);
});

refs.stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    onStopBtnClick('disabled', true);
});

function onStartBtnClick(attr, value) {
    refs.startBtn.setAttribute(attr, value);
    refs.stopBtn.removeAttribute(attr);
}
function onStopBtnClick(attr, value) {
    refs.stopBtn.setAttribute(attr, value);
    refs.startBtn.removeAttribute(attr);
}



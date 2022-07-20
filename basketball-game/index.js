document.querySelector('.court').ondragstart = function () {
  return false;
};

let field = document.querySelector('.field');
let ball = document.querySelector('.ball');

ball.ondragstart = function () {
  return false;
};
const two = 2;
const halfSize = ball.offsetWidth / two;
let counterA = 0;
let counterB = 0;

ball.style.left = field.clientWidth / two - ball.offsetWidth / two + 'px';
ball.style.top = field.clientHeight / two - ball.offsetHeight / two + 'px';

field.onclick = moveBall;

const time = 3000;
let scoreAlert = document.querySelector('.scoreAlert');
let timeToClear = setTimeout(clearAlert, time);
function clearAlert() {
  scoreAlert.innerHTML = '';
}

function moveBall(event) {
  if (event.target === ball) {
    return;
  }

  let coordFieldX_left = 0,
    coordFieldY_left = 0,
    coordFieldX_right = field.clientWidth - ball.offsetWidth,
    coordFieldY_right = field.clientHeight - ball.offsetWidth;

  let x = event.offsetX - halfSize;
  let y = event.offsetY - halfSize;

  if (x < coordFieldX_left) {
    x = coordFieldX_left;
  }
  if (y < coordFieldY_left) {
    y = coordFieldY_left;
  }
  if (x > coordFieldX_right) {
    x = coordFieldX_right;
  }
  if (y > coordFieldY_right) {
    y = coordFieldY_right;
  }

  ball.style.left = x + 'px';
  ball.style.top = y + 'px';

  let teamA = document.querySelector('#teamA');
  let teamB = document.querySelector('#teamB');

  if (x >= 15 && x <= 30 && y >= 145 && y <= 160) {
    scoreAlert.innerHTML = 'Team B score!';
    scoreAlert.style.color = 'red';
    counterB++;
    teamB.innerHTML = `${counterB}`;

    clearTimeout(timeToClear);
    timeToClear = setTimeout(clearAlert, time);
  }

  if (x >= 530 && x <= 545 && y >= 145 && y <= 160) {
    scoreAlert.innerHTML = 'Team A score!';
    scoreAlert.style.color = 'blue';
    counterA++;
    teamA.innerHTML = `${counterA}`;

    clearTimeout(timeToClear);
    timeToClear = setTimeout(clearAlert, time);
  }
}

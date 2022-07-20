let btn = document.querySelector('button');
let input = document.querySelector('input');
let form = document.querySelector('form');

const regexp = /^\+380\d{9}$/;

btn.addEventListener('click', sendForm);
input.addEventListener('keyup', checkInput);

function sendForm(e) {
  e.preventDefault();

  //if element div does not exist then creates it
  if (!document.querySelector('.alert')) {
    form.insertAdjacentHTML(
      'afterbegin',
      `<div class = 'alert'>
      </div > `
    );
  }

  if (regexp.test(input.value)) {
    document.querySelector(
      '.alert'
    ).outerHTML = `<div class = 'alert alert-success'>
         <div>Data was successfuly sent</div></div > `;
    return;
  }

  document.querySelector('.alert').outerHTML = `<div class = 'alert'>
      <div>Type number does not follow format</div>
      +380*********
      </div >`;

  input.value = '';
  input.style.border = '2px solid red';
  input.placeholder = 'Type phone number ib format +380*********';
  btn.disabled = true;
}

function checkInput() {
  if (regexp.test(input.value)) {
    btn.disabled = false;
    input.style.border = '';
  }
}

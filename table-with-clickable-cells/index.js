let table = document.getElementById('table');
table.addEventListener('click', function (e) {
  let target = e.target;
  if (target.tagName !== 'TD') {
    return;
  }

  if (target === document.getElementById('specialSell')) {
    table.classList.toggle('green');
  }

  if (target === target.closest('tr').firstElementChild) {
    target.closest('tr').classList.toggle('blue');
    // target.closest('tr').style.cssText = ' background-color: blue;'
  }

  if (
    target !== target.closest('tr').firstElementChild &&
    target !== document.getElementById('specialSell')
  ) {
    target.classList.toggle('yellow');
  }
});

function toggleToYellow(td) {
  td.classList.toggle('yellow');
}

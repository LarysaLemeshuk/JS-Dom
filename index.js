const button = document.querySelector('button');

button.addEventListener('click', clickHandler);

function clickHandler({target}) {
  button.disabled = true;
}

const btn = document.querySelector('.btn');
const colorCode = document.querySelector('.colorCode');

function setRandomBGColor() {
  let hexCode = Math.random().toString(16).slice(2, 8);

  document.body.style.backgroundColor = `#${hexCode}`;
  colorCode.innerHTML = `#${hexCode}`;
}

btn.addEventListener('click', setRandomBGColor);

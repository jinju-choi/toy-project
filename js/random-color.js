const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector('.btn');
const colorTxt = document.querySelector('.color-txt');

btn.addEventListener('click', function(){
  let hexColor = "#";
  for(let i = 0; i<6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  colorTxt.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  colorTxt.style.color = hexColor;
  console.log(hex);
});

function getRandomNumber(){
  return Math.floor(Math.random() * hex.length);
}


const copyBtn = document.querySelector('.copy-btn');

function copyToClipboard(val) {
  const t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  document.execCommand('copy');
  document.body.removeChild(t);
}

copyBtn.addEventListener('click', function(){
  copyToClipboard(colorTxt.textContent);
  alert('Copied!');
});
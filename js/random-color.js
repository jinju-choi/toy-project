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

copyBtn.addEventListener('click', function(){
  copyText();
});

// 텍스트 복사 기능 구현
function copyText() {
  // clipboard API 사용
  if (navigator.clipboard !== undefined) {
    navigator.clipboard
      .writeText(colorTxt.textContent)
      .then(() => {
        alert('복사되었습니다!');
      });
  } else {
    // execCommand 사용
    const textArea = document.createElement('textarea');
    textArea.value = colorTxt.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    textArea.setSelectionRange(0, 99999);
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('복사 실패하였습니다.', err);
    }
    textArea.setSelectionRange(0, 0);
    document.body.removeChild(textArea);
    alert('복사되었습니다!');
  }
};

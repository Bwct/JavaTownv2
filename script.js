
//main screen
function playHoverSound() {

  var audio = new Audio('audios/signsfx.mp3');
  audio.play();
}

//modules tab
/*var signGlow1 = document.getElementById('sign1');

function changeImg() {
signGlow1.src = ("moduleImg/basicSignGlow.png");
}

console.log(changeImg());

*/
var basicSign = document.getElementById('sign1');
var intermSign = document.getElementById('sign2');
var advSign = document.getElementById('sign3');
//BASIC
function hover(basicSign) {
  basicSign.setAttribute('src', 'moduleImg/basicSignGlow.png');
}

function unhover(basicSign) {
  basicSign.setAttribute('src', 'moduleImg/basicSign.png');
}

//INTERMEDIATE
function hover2(intermSign) {
  intermSign.setAttribute('src', 'moduleImg/intermSignGlow.png');
}

function unhover2(intermSign) {
  intermSign.setAttribute('src', 'moduleImg/intermSign.png');
}

//ADVANCED
function hover3(advSign) {
  advSign.setAttribute('src', 'moduleImg/advSignGlow.png');
}

function unhover3(advSign) {
  advSign.setAttribute('src', 'moduleImg/advSign.png');
}

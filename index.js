
//Dice img changes
var randomnumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src" , "images/dice" + randomnumber1 + ".png");

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src" , "images/dice" + randomnumber2 + ".png");



// h1 changes
if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "⛳Player One Wins!"
  document.querySelector("h1").style.fontSize = "7rem"
}

if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML = "Player Two Wins!⛳"
  document.querySelector("h1").style.fontSize = "7rem"
}

if (randomnumber1 === randomnumber2){
  document.querySelector("h1").innerHTML = "Draw!"
}

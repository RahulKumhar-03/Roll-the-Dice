var randomNum1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNum1 + ".png"; //dice1.png-dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNum2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNum2 +".png";

var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 WINS";
}
else if(randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML = "Player 2 WINS";
}
else{
    document.querySelector("h1").innerHTML = "DRAW !!!";
}
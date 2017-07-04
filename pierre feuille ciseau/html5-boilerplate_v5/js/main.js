// Pierre Feuille Ciseau

function pfs(){


var ordi;
var resultat;
var compteurU = 0;
var compteurO = 0;


while ((compteurU != 3) && (compteurO != 3)){

//RANDOM CHOICE OF THE COMPUTER

var myArray = ["pierre", "feuille", "ciseaux"];

var ordi = myArray[Math.floor(Math.random() * myArray.length)];


//CHOICE USER
var user = prompt("Choisir entre pierre, feuille ou ciseaux");


if (user == ordi){
  resultat = "égalite";
}

else if (user == "pierre" && ordi == "ciseaux" || user == "ciseaux" && ordi == "feuille" || user == "feuille" && ordi == "pierre"){
        resultat = "gagné";
        compteurU++;
}

else {
        resultat = "perdu";
        compteurO++;
}

        alert ("L'ordinateur a choisi "+ordi+" : "+resultat);
        alert ("ORDINATEUR : "+compteurO+" VOUS : "+compteurU);
}
if (compteurO == 3){
  alert("LOOSER!!!!!!!!!!!!!!!!!!!!!!!");
}
  else{
    alert("YOU WIN");
}
}

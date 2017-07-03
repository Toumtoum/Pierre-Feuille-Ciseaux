// Pierre Feuille Ciseau

function pfs(){


var ordi;
var resultat;
var compteurU = 0;
var compteurO = 0;


while ((compteurU < 3) && (compteurO < 3)){

//RANDOM CHOICE OF THE COMPUTER
var nb = (Math.floor(1 + (3)*Math.random()));

  if (nb == 1){
    ordi = "pierre";
  }


  else if (nb == 2){
    ordi = "feuille";
  }


  else if (nb == 3){
    ordi = "ciseaux";
  }

//CHOICE OF THE USER
var user = prompt("Choisir entre pierre, feuille ou ciseaux");


if (user == ordi){
  resultat = "égalite";
}

else if (user == "pierre" && ordi == "ciseaux" || user == "ciseaux" && ordi == "feuille" || user == "feuille" && ordi == "pierre"){
        resultat = "gagné";
        compteurU += 1;
}

else {
        resultat = "perdu";
        compteurO += 1;
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

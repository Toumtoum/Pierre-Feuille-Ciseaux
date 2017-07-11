//---------------VARIABLES--------------------------------------------

var user;
var ordi;
var myArray;
var resultat;
var compteurU = 0;
var compteurO = 0;
var pseudo;


//--------------FONCTIONS----------------------------------------------

//USER CHOICE

/*function userChoice(img){

  user = img.alt;
  console.log(user);

}*/

//RANDOM CHOICE & DISPLAY ORDI CHOICE

function ordiChoice(){

myArray = ["pierre", "feuille", "ciseaux"];
ordi = myArray[Math.floor(Math.random() * myArray.length)];

  if (ordi == "pierre"){
    document.getElementById("choix_ordi").src= "img/pierre.png";
    //setTimeout(function(){ document.getElementById("choix_ordi").src = "";},3000);
    }

  else if (ordi == "feuille"){
    document.getElementById("choix_ordi").src= "img/feuille.png";
    //setTimeout(function(){ document.getElementById("choix_ordi").src = "";},3000);
    }

  else {
    document.getElementById("choix_ordi").src= "img/ciseaux.png";
    //setTimeout(function(){ document.getElementById("choix_ordi").src = "";},3000);
  }
  }

//COMPARE CHOICES

function compareChoices(user){

  if (user == ordi){
    //resultat = "égalite";
  }

  else if (user == "pierre" && ordi == "ciseaux" || user == "ciseaux" && ordi == "feuille" || user == "feuille" && ordi == "pierre"){
    //resultat = "gagné";
    compteurU++;

  }

  else {
    //resultat = "perdu";
    compteurO++;

  }
}

//DISPLAY RESULT

/*
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
}*/

//------------------------SCRIPT-------------------------------------------


function play(user){

//  userChoice(img);
  ordiChoice();
  compareChoices(user);
  console.log(ordi);
  console.log("u :"+compteurU);
  console.log("o :"+compteurO);

  if (compteurO == 3){
    alert("LOOSER!!!!!!!!!!!!!!!!!!!!!!!");
    compteurU = 0;
    compteurO = 0;
    }
  if (compteurU == 3){
    alert("YOU WIN");
    compteurU = 0;
    compteurO = 0;
    }

    document.getElementById("afficherCompteurU").innerHTML = "vous "+compteurU;
    document.getElementById("afficherCompteurO").innerHTML = "ordinateur "+compteurO;
}

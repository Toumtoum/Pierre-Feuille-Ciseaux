// Pierre Feuille Ciseau

function pfs(){

var user = prompt("Choisir entre pierre, feuille ou ciseaux");
var nb = 1 + 3*Math.random();
      nb = Math.floor(nb);
var ordi;
var resultat;

//CHOIX ALÉATOIRE DE L'ORDI
    if (nb == 1){
      ordi = "pierre";
    }


    else if (nb == 2){
      ordi = "feuille";
    }


    else if (nb == 3){
      ordi = "ciseaux";
    }



//CHOIX DE L'UTISLISATEUR
if (user == ordi){
  resultat = "égalite";
}

else if (user == "pierre" && ordi == "ciseaux" || user == "ciseaux" && ordi == "feuille" || user == "feuille" && ordi == "pierre")
        resultat = "gagné";

else if (ordi == "pierre" && user == "ciseaux" || ordi == "ciseaux" && user == "feuille" || ordi == "feuille" && user == "pierre")
        resultat = "perdu";

        alert (resultat);
        //console.log(ordi);
}

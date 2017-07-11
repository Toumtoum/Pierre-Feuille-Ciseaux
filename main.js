
//Introduction - Débutants

//----------------Exercice 1-------------------------------------

function hello()
{
var msg = "\"Hello World\"";
console.log(msg);
}

//----------------Exercice 2-------------------------------------

function calcul() {

  console.log(3*3);
  console.log(4+9+79);
  console.log(12-7);
  console.log(5e4);

}

//----------------Exercice 3-------------------------------------

function bienvenue(){

  var nom = prompt('Quel est votre nom?');
  alert('Bienvenue '+nom);
}

//----------------Exercice 4-------------------------------------

function nomprenom(){

  var nom = prompt('Quel est votre nom?');
  var prenom = prompt('Quel est votre prénom?');
  var nomcomplet = nom+' '+prenom;

  alert('Bonjour '+nomcomplet);
}

//----------------Exercice 5-------------------------------------

function convchaine(){


var mynumber = "123";
console.log(parseInt(mynumber));
}

//----------------Exercice 6-------------------------------------

function majmin(){

  var msg = "Modifier CE Texte AVEC les FonCTIONs ToUppertoLOWERcase";
  console.log(msg.toUpperCase());
  console.log(msg.toLowerCase());

}

//Introduction - Avancés

//----------------Exercice 1-------------------------------------

function testcontenustring(){
  var test1 = 'aaa';
  var test2 = '';
{
if(!test1)
  console.log(false);
  else
    console.log(true);
if(!test2)
  console.log(false);
  else
    console.log(true);
}

/*console.log(!test1);
console.log(!test2);*/

}

//----------------Exercice 2-------------------------------------

function age(){

  var anné = prompt("En quelle année sommes-nous?");
  var naissance = prompt("Quelle est votre année de naissance?");
  var age = anné - naissance;

  alert('Vous avez '+age+' ans');

  var ageduvoisin = prompt("Quelle âge a votre voisin?");
  var cumul = age + parseInt(ageduvoisin);

  alert('A vous deux vous avez '+cumul+' ans')

}

//----------------Exercice 3-------------------------------------

function prix(){

  var prix1 = 70;
  var prix2 = 59;
  var prix3 = 10;

  var total = (prix1+prix2+prix3)*0.8;

  alert("Le montant de vos achats avec la réduction est de "+total+" euros");
}

//----------------Exercice 4-------------------------------------

function addition(){

  var somme = parseInt(prompt('entrer un nombre'));

do
{
  var i = parseInt(prompt('entrer les chiffres a additionner'));
  somme += i;
  alert(somme);
}

while(i != 0)

} //A FAIRE AVEC UNE BOUCLE FOR

//----------------Exercice 5-------------------------------------

function combo() {

  var nom = prompt('Quel est votre nom?');
  var prenom = prompt('Quel est votre prénom?');

  var initN = nom.substr(0, 3);
  var initP = prenom.substr(0, 3);

  alert(initN.toUpperCase()+initP.toUpperCase());

  var age = prompt('Quel est votre age?');
  var div = age / 33;

  alert(Math.round(div));
}

//Intermédiare

//----------------Exercice 1---------------------------------------

function nbleplusgrand(){

  var nb1 = 10;
  var nb2 = 2;
  var nb3 = 140;
  var nb4 = 56;

  var max = Math.max(nb1, nb2, nb3, nb4);

  alert(max);

}

//----------------Exercice 2---------------------------------------

function conditiondage(){

  var age = parseInt(prompt('Quel est votre age?'));

for(;;)
{
  if ((age <= 0) || (isNaN(age)))
  age = prompt('Donner un age réel');
  if (age > 0) break;
  }
if (age >= 21)
{
  alert('Accès autorisé');
  }

if (age % 2 == 0) // % donne le reste d'une division
{
  alert('Votre age est un nombre pair');
  }

  if (Number.isInteger(Math.sqrt(age))) // Number.isInteger verifie si c'est un entier
  {
      var carre = Math.sqrt(age);
      alert('Votre âge et le carré de : '+carre);
    }

}
//----------------Exercie 3-------------------------------------

function nbcaché(){

var nb = 10;
var msg = 'Le nombre à deviner est compris entre 1 et 100.';

do
{
    var saisie = prompt(msg);

     if(saisie > nb)
          msg = "C'est moins";
     else
          msg = "C'est plus";
}
while(saisie != nb);
 alert('BRAVO!!!!!!!!!!!!!');
}

//----------------Exercice 4---------------------------------------

function nbalachaine(){

for (var i = 1;i<=100; i++) {
   document.write('<br />',i); // écrire la liste à l'écran(cd document.write) avec retour a la ligne (cf br)
   }
}

//----------------Exercice 5---------------------------------------

function nbalachainepair(){

for (var i = 0;i<=100; i++) {
  if ((i % 2 == 0) && (i>0))
   console.log(i);
   }
}

//----------------Exercice 6---------------------------------------

function piscine(){

  var L = prompt('Quelle est la longueur de votre piscine en mètre?');
  var l = prompt('Quelle est la largeur de votre piscine en mètre?');
  var p = prompt('Quelle est la profondeur de votre piscine en mètre?');
  var d = prompt('Indiquer le débit de remplissage en mètre cube par minute (m3/min)');

  var q = L*l*p
  var r = q/d

  alert('Le temps de remplissage de votre piscine sera de '+r+' minutes');
}

//----------------Exercice 7---------------------------------------

function cercle() {

  var r = prompt('Quel est le rayon du cercle en cm');

  var p = Math.round(2*Math.PI*r);
  var a = Math.round(Math.PI*r*r);

  alert('Le cercle de rayon '+r+' a un perimètre de '+p+' cm et de '+a+' cm2');

}

//----------------Exercice 8---------------------------------------

function pyramid (){

var result="";

for (var i=0;i<5;i++){
    for(var j = 0; j<=i;j++){
        result += "*";
  }
 result += "\n";
}
console.log(result);
}

//----------------Exercice 9---------------------------------------

function fizzbuzz(){

  for (var i = 1;i<=100; i++){

    if ((i % 3 == 0)&&(i % 5 == 0)){
    console.log("FizzBuzz");
    }
    else if (i % 3 == 0){
    console.log("Fizz");
}
    else if (i % 5 == 0){
      console.log("Buzz");
}


    else {
      console.log(i);
}
}
}

//Intermédiaire-Partie 2

//----------------Exercice 1---------------------------------------

function echiquier(){

var result = "";

  for (var i = 0; i < 8; i++) {
          for (var j = 0; j < 16; j++){
            if( (i+j) % 2 == 0 ){
            result += "#";
            }
            else {
            result += " ";
          }
          }
    result += "\n";
  }
      console.log(result);
}

//-----------------Exercice 2-------------------------------------------

/*function matrix(){

for (var i =0 ; i < 4; i++){
  for (var j = 0; j < 4 ; j++){

        if (i === j){
          console.log("1");
      }
      else {
        console.log("0");
      }
}
console.log("--------------");
}

}*/

function matrix(){

for (var i =0 ; i < 4; i++){
  for (var j = 0; j < 4 ; j++){

        if (i === j){
          document.write("1"+"</br>");
      }
      else {
        document.write("0"+"</br>");
      }
}
document.write("--------------"+"</br>");
}

}

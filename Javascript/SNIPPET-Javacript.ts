// OPERATEURS

|| < && < (>, < , ==)

// FONCTION NOMBRE ARGUMENTS

function argumentCounter() {
  console.log("You gave me", arguments.length, "arguments.");
}
argumentCounter("Straw man", "Tautology", "Ad hominem");
// → You gave me 3 arguments.


// CLOSURES FUNCTIONS

function creerFonctionAjouter(quantite) {
  function ajouter(nombre) {
    return nombre + quantite;
  }
  return ajouter;
}

var ajouterDeux = creerFonctionAjouter(2);
var ajouterCinq = creerFonctionAjouter(5);// ajouterDeux(1) --> renvoit 3 et ajouterDeux(1) --> renvoit 6
show(ajouterDeux(1) + ajouterCinq(1));  // return 9


// FUNCTIONS RECURSIVES (fonction qui s'appelle elle même)

function factorial(num)
{
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num == 0) {
        return 1;
    }
    else{
        return (num * factorial(num - 1));
    }
}

var result = factorial(8); // return 8x7x6x5x4x3x2 = 40320
console.log(result);

//**************************** OBJECT **************************

// CREER OBJET SIMPLE

var chat = {couleur: "gris", nom: "Spot", taille: 46};
chat.taille = 47;
show(chat.taille);  // return 47
delete chat.taille;
show(chat.taille); // return undefined
show(chat);  // return {couleur: "gris", nom: "Spot"}

// CREER OBJET COMPLEXE

function Lapin(adjectif) {  //Les fonctions utilisées pour créer de nouveaux objets de cette manière sont appelées des constructeurs
  this.adjectif = adjectif;
  this.parler = function(tirade) {
    print("Le lapin ", this.adjectif, " dit '", tirade, "'");
  };
}

var lapinTueur = new Lapin("tueur");
lapinTueur.parler("GRAAAAAAAAAH !");


// ADD A PROPERTY IN AN OBJECT
var vide = {};
vide.plusVraiment = 1000;


var truc = {"gabba gabba": "hey", "5": 10};
show(truc["5"]); //return 10
truc["5"] = 20;
show(truc[2 + 3]); // return 20
delete truc["gabba gabba"];

// DELETE A PROPERTY IN AN OBJECT
var anObject = {left: 1, right: 2};
delete anObject.left;
console.log(anObject.left);
// → undefined

// TEST IF OBJECT HAS PROPERTY

var poupeeRusse = {};
poupeeRusse.contenu = poupeeRusse;
show("contenu" in poupeeRusse); // return true

// PARCOURIR OBJECT

var chatsVivants = {"Roro": true, "Kris": true, "Mika": true};


for (var chat in chatsVivants)
  print(chat); // Roro  Kris  Mika

// DECLARER UN OBJET ET APPELER UNE METHODE

var aujourdHui = new Date();
aujourdHui.getMonth();

// ACCEDER PROPRIETE DUN OBJET

value.propName or value["propName"]

// ACTIONS ON AN ARRAY

var flipper = [];
flipper.push("Flipper"); // push met la valeur en dernier
flipper.push("le");
flipper.push("dauphin");
show(flipper.join(" ")); // "Flipper le dauphin"
show(flipper.pop()); // supprimer le dernier élément --> renvoit"dauphin"
show(flipper.shift()); // supprimer le premier élément
show(flipper); //["Flipper", "le"]

flipper.unshift("Film :"); // unshift met la valeur en premier


var mots = "Les villes de l’arrière-pays";
show(mots.split(" ")); // ["Les", "villes", "de", "l’arrière-pays"]

var paragraphe = "Est né le 15/11/2003 (mère, Spot) : Croc Blanc";
show(paragraphe.slice(0, 9) == "Est né le"); //true

 show("foo: bar".indexOf(":")); // 3
 show("foo: bar".indexOf("bar")); // 5



// GERER lES EXCEPTIONS

function dernierElement(tableau) {
  if (tableau.length > 0)
    return tableau[tableau.length - 1];
  else
    throw "Impossible de prendre le dernier élément d’un tableau vide.";
}

try {
  print(dernierElemen([]));
}
catch (erreur) { // erreur récupère ici le throw de la fonction
  print("Une erreur est survenue : " + erreur); /** renvoit "
Une erreur est survenue : Impossible de prendre le dernier élément d’un tableau vide. 
Le code peut ensuite continuer grace à try catch **/
}


// FINALLY DANS LES EXCEPTIONS

function faireDesTrucs(unTruc) {
  if (trucEnCours != null)
    throw "Oh non ! Nous sommes déjà en train d’exécuter quelque chose !";

  trucEnCours = unTruc;
  try {
    /* faire des choses compliqués… */
  }
  finally {  //quoi qu’il arrive, exécutez ce code après avoir essayé d’exécuter ce code dans un bloc try 
    trucEnCours = null;
  }
}


// DECRIRE LE PROBLEME D'UNE EXCEPTION
try {
  print(Yeti);
}
catch (erreur) {
  print("Intercepté : " + erreur.message); // Intercepté : Yeti is not defined
}

///////////////////////////////////// JSON

// string transform en format JSON
// parse créé un tableau à partir du JSON pour le manipuler

var string = JSON.stringify({name: "X", born: 1980});
console.log(string);
// → {"name":"X","born":1980}
console.log(JSON.parse(string).born);
// → 1980



// FILTRER DONNEES

// methode .filter()
// renvoit un tableau d'objet des personnes qui ont certaines conditions

var firstFilter = function (person) {return person.born > 1900 && person.born < 1925};
console.log(
    ancestry.filter(firstFilter) 
);


// methode .map()

console.log(firstFilter.map(function(person) {
  return person.name;
})); // renvoit le meme tableau mais avec seulement le nom des personnes


// methode .reduce()
// cette méthode fait des comparaisons successives

console.log(ancestry.reduce(function(min, cur) {
  if (cur.born < min.born) return cur;
  else return min; // renvoit la personne qui a l'age le plus petit
}));


// renvoyer un objet filtré selon une condition

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

console.log(byName["Philibert Haverbeke"]);
// → {name: "Philibert Haverbeke", …}




































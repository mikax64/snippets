// COMPILE TYPESCRIPT IN PROJECT
npm install -g typescript
tsc -w --pretty test.ts

//VIDEO à MATTER
https://www.youtube.com/watch?v=n6RoVyZEsv4

//////////////// DECLARE VARIABLES

let toto : number = 202;
let riri : string = "duck";
let maybe : boolean = false;
let table : [] ;
let dontKnow : any ;
let tableString : Array<string>     or    let tableString : string[];
function hello (t : number) : void // if the function doesn't have return or nothing quantifiable like an alert
let myVarFunction : () => void
    
      
//////////////// FUNCTIONS

function buildName(firstName: string, lastName?: string) { // ? indicates you are not obliged to inject this argument
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");                  // works correctly now
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right

/////////////// DEFAULT ARGUMENT ON FUNCTION

constructor(name:string, stock:number=11){
    this.name=name;
    this.stock=stock;
}

/////////////// FUNCTION ARROW =>

// ES5
var total = values.reduce(function (a, b) {
  return a + b;
}, 0);

// ES6
var total = values.reduce((a, b) => a + b, 0);

// pour créer des objets littéraux
var jouets = chiots.map(chiot => {});   // BUG !
var jouets = chiots.map(chiot => ({})); // ok


// anonymous function --> this syntax allow to use this
this._timer = setInterval(() => {
  this._minutes = Math.floor(++this._totalSecondes / 60);
  this._secondes = this._totalSecondes - this._minutes * 60;
}, 1000);


//////////////// TWO WAYS TO DECLARE FUNCTIONS

function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number { return x+y; };


function isPair (valueNb : number): boolean {
	return valueNb % 2 === 0;
}
// the argument is a number, and we decided the function return a boolean it is why we uses the triple egalité which mean a stric egalité


function isPair (nombre : number | string) : boolean{ // function can have as argument, a number or a string, and it's return a boolean

if (typeof nombre !=='number'){ // if it is not a number, transform it to a number base 10
	nombre = parseInt(<string>nombre, 10)
}
	return <number>nombre % 2 === 0
}
isPair(2);

//////////////// CREATE AN OJECT

class User {
    public name: string;
    public age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;        
    }
    salut() {
        alert('Coucou ' + this.name );
    }
}

//  now to use it 
let user = new User('Marcel', 35);
user.salut();


///////////////// HERITAGE

class User {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;    
  }
  salut() {
    alert('Coucou ' + this.name + ' !');
  }
}
class Redactor extends User {
  public category: string;
  constructor(name: string, age: number, category: string) {
    super(name, age); 			// we use super to re-use the parent class User
    this.category = category;
  }
  salut() {
    alert('Coucou ' + this.name + ' de la catégorie ' + this.category + ' !');
  }
}
let redactor = new Redactor('Marcel', 35, 'Jeunesse');
redactor.salut();


//////////////// ACCESSORS
//It is used for private or protected variables

class User {
    protected _name: string;
    get name(): string {
        return this._name;
    }
    set name(newName: string) {
        if (newName.length < 11) {
            this._name = newName;
            alert('Le nom ' + newName + ' a bien été enregistré !')
        }
        else {
            console.log("Erreur: Le nom ne doit pas comporter plus de 10 caractères !");
        }
    }
}
let user = new User();
user.name = 'Un nom bien trop long'

//////////////// INTERFACES
// instead to do this

function afficheNom(objetNomme: { name: string }) { // we take only the name property
    alert(objetNomme.name);
}
class User {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
let user = new User('Alfred',  32);
afficheNom(user);


// do that, it is more clean

interface ValeurNom {
    name: string;
}
function afficheNom(objetNomme: ValeurNom) {
    alert(objetNomme.name);
}

// THe difference between class and interface ---> class can includes methods, interface only describes properties



//////////////// NAMESPACES
// namespaces allow us to tidy your code by areas --> that's all !

namespace A {
  export function calcule(x: number, y:number) {
    return x + y;
  }
  export class User{
	  ...
  }
}

alert(A.calcule(2, 3));

//////////////// A MODULE

import Demo from './demo'

//////////////// ENUMS
// namespaces allow us to tidy variables --> that's all !

enum DIRECTIONS{
	UP,
	DOWN,
	LEFT
}

goto: DIRECTIONS.UP


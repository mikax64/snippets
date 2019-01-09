///*********** CREATE A COMPONENT

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent { name = 'World'; } 

//*** in HTML
<my-app></my-app>

//*** in app.module.ts
import { AppComponent }   from './app.component';
@NgModule({
    declarations: [ AppComponent]
)}

///*********** DO MANY LINES IN TEMPLATE
template:`
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
   `
  //you have to wrap with two back-tick with ALTGR + 7


///*********** CREATE A CLASS (a class define commun properties to many objects)

export class Hero {
  id: number;
  name: string;
}
// you have to define a constructor if you want to use many instances of this class --> new Hero(15,'Mika')
export class Hero {
    name:string;
    constructor(name:string){
        this.name=name;
    }
}

///*********** IMPORT A CLASS 
import {Hero} from './hero'

///*********** CREATE AN OBJECT FROM A CLASS  (in export class AppComponent)

 hero : Hero ={ id:1, name:'Mika'}
 
//hero is a type of the class Hero
 // You have to create the file hero.ts if this class is used in many components.
//and at the top of each component which use this class , write --> import { Hero } from './hero';
//But if you need to use this class from an other component, you have to use the syntax @Input() hero : Hero;
 

///*********** CREATE AN ARRAY FROM A CLASS

let HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' }
];

// !important, you have to define it outside a class. Because in class, variables are property and need a constructor (exemple   -->   name:string ....)

///*********** PROPERTY BINDING ON HTML TAG

<input [value]="variable"/>
// if the value is not a string, use [ngValue]

<img [src]="product.url" />
<img src={{product.url}} /> // same result but we prefer first one

<img [style.margin.px]="imageMargin" />

///**************************************************** TWO WAY DATA BINDING

<input [(ngModel)]="hero.name" />
//If you don't want two-way db --> <input value="{{hero.name}}/>
// a name attribute could be obligatory
/* in app.module you have to type 
import { FormsModule } from '@angular/forms';
imports: [
  ...,
  FormsModule
]
*/
      
/**Dynamic variables ngModel **/
    
<div class="group" *ngFor="let group of apiwc ; let i = index;" >
    <input [(ngModel)]="group[i]" id="group{{i}}" />
   /* {{group[i]}}
</div>

/** OTHER solution **/

 <div *ngFor="let item of items;  let i = index">
      <input type="text" [(ngModel)]="item.score1" >  
      <input type="text" [(ngModel)]="item.score2" (ngModelChange)="getSum(i)"> 

</div>

/* in component */
items=[{"a":15},{"b":15},{"v":17}]  ;

 ngOnInit() {
      // init score to a value, here 0
    for (var i = 0; i < this.items.length; i++) {
        this.items[i].score1 =this.items[i].score2 =  0;
    }  
}

getSum(index) {
    let total = 0;
    total = parseInt(this.items[index].score1)+ parseInt(this.items[index].score2);
    alert(total);
}

///********************************************** GET THE INDEX
 <div *ngFor="let item of items;  let i = index">
      <input type="text" (click)="getIndex(i)" />
      <input type="text" (click)="getIndex(i)" />
</div>

/*in component*/
getIndex(index) {
    alert(index);
}

///********************************************** GET THE KEY OF AN OBJECT

<div class="group" *ngFor="let group of apiwc[0].groups | keys  ; let i = index;">
    
<h1>GROUP {{getGroupName(i) | uppercase}}</h1>
</div>

getGroupName(index){
      //alert(Object.keys(this.apiwc[0]);
   return Object.keys(this.apiwc[0].groups)[index]);
  } 

//********************************************** PUSH A NEW OBJECT IN AN ARRAY
<input #newMarque (keyup.enter)="addMarque(newMarque.value); newMarque.value=''">
// newMarque.value='' is to clean the input

//in component
addMarque(newMarque: string) {
  if (newMarque) {
    this.marques.push(new Marque(newMarque));
  }
}
///*********** BIND VALUES REPEAT
<li *ngFor="let hero of heroes">
 <span>{{hero.id}}</span> {{hero.name}}
</li>

///*********** CREATE INDENTATION NUMBER
<li *ngFor="let i=index">{{i}}</li>

///*********** ADD A CLICK HANDLER
<li (click)="onSelect(hero)">
    
/* Then you have to add the method in the relevant component.
Example:
selectedHero: Hero;

onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
*/

///*********** ADD A DYNAMIC CSS CLASS
[class.selected]="hero === selectedHero"

///*********** TOGGLE CLASS
@Component(
    selector:'foo',
    template:`<a (click)="onClick()"
                         [class.selected]="wasClicked">Link</a>
    `)
export class MyComponent {
    wasClicked = false;

    onClick() {
        this.wasClicked= !this.wasClicked;
    }
}


///*********** TOGGLE CLASS IN NgFor
/*in Html*/
<li *ngFor="let n of list" (click)="select(n)" [ngClass]="{active: isActive(n)}">

/*in component */
    
    export class App {
  list:any;
  selected :any;
  constructor() {}
        
  select(item) {
      this.selected = item; 
  };
  isActive(item) {
      return this.selected === item;
  };

}

///*********** TOGGLE FUNCTION
toggleImage(): void{
    this.showImage = !this.showImage;
}
//in html 
{{showImage ? 'Hide' : 'Show'}} image


//////******** PARCOURIR JSON COMPLEXE

//json
this.myobj =
    
{'machine':['parts':[
                    {'gears': [{'name': 'AName1'}, {'name': 'AName2'}]},
                    {'screws': [{'name': 'BName2'}, {'name': 'BName3'}]},
                    {'rotors': [{'name': 'CName5'}]},
                    {'shells': [{'name': 'CName2'}]}
]]}
             
             
// In Component
myPart: any;

setPart(name: string){
    this.myPart = this.myobj.machine[0].parts[name];
}

// Template
<div *ngFor="let part of mypart;let i = index;" style="color:#FFF">
    <div>{{part.name}}</div>             
</div>




///*********** PIPES TO TRANSFORM DATA
{{product.name | lowercase}}

///*********** CREATE A CUSTOM PIPE

// the ts file to transform 
export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}

// the ...namePipe.pipe.ts 

import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform{
    
    transform(value: IProduct[], filterBy: string): IProduct[]{
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((product: IProduct) =>
                product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }

}

// in the template
<input type='text' [(ngModel)]='listFilter'  />
<tr *ngFor = 'let product of products | productFilter : listFilter'>

// in module
...
declarations: [ AppComponent, ProductFilterPipe]


///*********** CREATE A SERVICE 
//(it is useful when many components need to do the same thing -->example.service.ts)

import {Injectable} from '@angular/core';
import { IProduct } from './product';

@Injectable()
export class ProductService {

getProducts(): IProduct[] {
        return [
                {
                    "productId": 1,
                    "productName": "Leaf Rake",
                    "productCode": "GDN-0011",
                    "releaseDate": "March 19, 2016",
                    "description": "Leaf rake with 48-inch wooden handle.",
                    "price": 19.95,
                    "starRating": 3.2,
                    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                },
                {
                    "productId": 2,
                    "productName": "Garden Cart",
                    "productCode": "GDN-0023",
                    "releaseDate": "March 18, 2016",
                    "description": "15 gallon capacity rolling garden cart",
                    "price": 32.99,
                    "starRating": 4.2,
                    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
                }

            ]
    }
}

///*********** INJECT A SERVICE 


// in the root component
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'product.service';

@Component({
  selector: 'app-component',
  providers: [ProductService]
})

// in the componenet where we want to call the service
import {ProductService} from 'product.service';

export class MyComponent {
    products: IProduct[];
    constructor( private _productService: ProductService) {} 
//called first time before the ngOnInit()

  ngOnInit() { 
      this.products = this._productService.getProducts();
  }
//called after the constructor and called  after the first ngOnChanges() 

}


// IF YOU NEED THE SERVICE EVERYWHERE, in app.module.ts :
// so you don't have to define providers in the component which are using this service
import { HeroService } from './hero.service';

@NgModule({
    ...
    providers : [ HeroService ]
})





///*********** DO A PROMISE (to be sure that data will be loaded - Async)

// in the service
getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
}

//in the component
getHeroes(): void {
  this.heroService.getHeroes().then(heroes => this.heroes = heroes); // you have to use then with a promise
}

///*********** USE A COMPONENT (called also a directive) IN THE MAIN COMPONENT
// in the main component
import {NewComponent} from './new.component';

template :`<h1>title</h1> <new></new>`,




///*********** @Input() ---> INJECT OBJECT FROM AN OTHER COMPONENT 


// to simplify, It is used when the tag component need a parameter <my-component [parameter]="value"></my-component>

 //in ProductList Component Template
<tr *ngFor="let product of products">
    <td>product.price</td>
    <td><star-component [rating]='product.starRating'></star-component></td>
</tr>

// in StarComponent
import { ...OnChanges, Input }  from '@angular/router';

 export class StarComponent {
     @Input() rating: number;
     
     ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }
}

//OnChanges --> Angular modifie une des propriétés du Component / directive suite à un Property Binding @Input. La méthode reçoit un object SimpleChanges contenant les valeurs courantes et précédentes.
//Il est lancé avant ngOnInit et à chaque fois qu'une ou plusieurs propriétés précédées de @Input change.


///*********** @Output() 

 //in ProductList Component TEmplate
<tr *ngFor="let product of products">
    <td>product.price</td>
    <td><star-component (ratingClicked)='onRatingClicked($event)'></star-component></td>
</tr>

//in ProductList Component
export class ProductListComponent{
    onRatingClicked(message: string): void{
        alert(message);
    }
}

//in Star Component

import { ... Output, EventEmitter}

export class StarComponent{
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    
onClick(){
    this.ratingClicked.emit(`The rating ${this.rating} was clicked !`); // Here you have to use back-ticks to use the dollar syntax
    
    //${someVar} is string interpolation from TS and is applied before the template is processed by angular. {{someVar}} is Angular template binding expression.
}
    
//in Star Component Template
<div (click)='onClick()'></div>
    
    

///*********** CONFIGURE ROUTES (in app.module)
 
 //create app-routing-module.ts with ng generate module app-routing --flat --module=app

import { NgModule }             from '@angular/core';
import { Routes } from '@angular/router';




const appRoutes: Routes = [
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


//in the the template of app.component (you can now access by localhost/heroes)
<a routerLink="/heroes">Heroes</a>
<router-outlet></router-outlet> // the place where the component is called


///*********** MAKE A REDIRECTION BY DEFAULT

{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},

///*********** ADD A TEMPLATE URL

@Component({
    moduleId: module.id, // you may define a moduleId if you inject a template
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',

})


///*********** CREATE A ROUTE FROM A PARAM

/*in app.module */
{
  path: 'detail/:id',
  component: HeroDetailComponent
},
/*in app.hero-detail.component */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';

export class HeroDetailComponent implements OnInit {
    
    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
    ) {}
    
    
    
    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.heroService.getHero(+params['id']))
        .subscribe(hero => this.hero = hero);
    }

}
/*in app.hero.service */
getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}

///*********** BACK BUTTON NAVIGATION

// in the component
goBack(): void {
  this.location.back();
}
//in the html
<button (click)="goBack()">Back</button>


///*********** GOTO A PATH FROM A PARAM

// in html
<a *ngFor="let hero of heroes"  [routerLink]="['/detail', hero.id]">

//in app.module
{
  path: 'detail/:id',
  component: HeroDetailComponent
},
///*********** GOTO A PATH FROM A PARAM WITH A FUNCTION
//in html
<button (click)="gotoDetail()">View Detail</button>

// in component
import { Router } from '@angular/router';

gotoDetail() : void{
    this.router.navigate(['/detail', this.selectedHero.id]);
}

///*********** SEPARATE ROUTING IN A COMPONENT
// a best practice is to make an other component to declare routes

//in app.module
@NgModule({
  imports: [
    ...
    AppRoutingModule
  ],
    
// in the componenet app routing module
    const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

///*********** ADD CLASS ROUTER LINK ACTIVE
<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>


///*********** SENDING HTTP REQUEST

//in app.module
import { HttpModule }    from '@angular/http';
 imports: [
    ...
    HttpModule,
  ],
 
// in the service file
 
 @Injectable()
export class ProductService {
   
    private _productUrl = 'www.myWebService.com/api/products';  // URL to web api

    constructor(private _http: Http) { }
    
    getProducts(){
    return this._http.het(this._productUrl);
    }


}
 
///*********** SIMULATE WEB API
 
 // in app.module
 
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports: [
    ....
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
    
//create in-memory-data.service.ts

import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
    ];
    return {heroes};
  }
}

// in the hero.service

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {
    
   private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }


}

///*********** SAVE MODIFICATIONS ON A VALUE OF ARRAY
// when data come from a http, two way binding is not applied so -->

//in componenet
save(): void {
    this.heroService.update(this.hero).then(() => this.goBack());
} 
//in html
 <button (click)="save()">Save</button>

//in service
import { Headers } from '@angular/http';


private headers = new Headers({'Content-Type': 'application/json'});

update(hero: Hero): Promise<Hero> {
  const url = `${this.heroesUrl}/${hero.id}`;
  return this.http
    .put(url, JSON.stringify(hero), {headers: this.headers})
    .toPromise()
    .then(() => hero)
    .catch(this.handleError);
}

///*********** ADD OBJECT IN ARRAY

//in html
<label>Hero name: {{heroName.value}}</label> <input #heroName />
  <button (click)="add(heroName.value); heroName.value=''">
    Add
  </button>

//in component
add(name: string): void {
  name = name.trim();  // remove white spaces
  if (!name) { return; }
  this.heroService.create(name)
    .then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
}

// in service
create(name: string): Promise<Hero> {
  return this.http
    .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data)
    .catch(this.handleError);
}



///********************************* INTERACT WITH A DOM ELEMENT

@Component({
  selector: 'my-comp',
  template: `
    <input #myInput type="text" />
    <div> Some other content </div>
  `
})
export class MyComp implements AfterViewInit {
  @ViewChild('myInput') input: ElementRef;

  constructor(private renderer: Renderer) {}

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.input.nativeElement,    
    'focus');
  }
}


///********************************* GET CLICKED ELEMENT ID

@Component({
  selector: 'my-app',
  template: `
    <button (click)="onClick($event)" id="test">Click</button>
  `
})
export class AppComponent {
  onClick(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
  }
}



///********************************* APPEND ELEMENT TO AN OTHER ( METHOD VIEWCHILD)

@Component({
  selector: 'my-app',
  template: `
    <div>
      <button type="button" (click)="appendToChild()">Append Item to Child</button>
      
      <div #div1>Item</div>
      
      <div class="appendTo" #div2></div>
    </div>
  `,
  styles: ['.appendTo:empty {background-color: yellow} .appendTo {width: 200px;height: 200px;border: 1px solid #000}']
})
export class App {

  @ViewChild('div1') item: ElementRef;
  @ViewChild('div2') appendToChildEl: ElementRef;


  appendToChild() {
    this.appendToChildEl.nativeElement.appendChild(this.item.nativeElement);
  }
}

///********************************* LIFECYCLE HOOK
import { OnInit }

export class ProductList implements OnInit{
    
ngOnInit(): void{
    console.log('Init');
    }
}

// you can use also OnChanges


///********************************* ANGULAR PHILOSOPHY

Service is a class, function, object which provides data
Directives add behaviour to an existing DOM element
Components creates its own view (hierarchy of DOM elements) with attached behaviour


///********************************* EVENT PROPERTIES
altKey: false
bubbles: true
button: 0
buttons: 0
cancelBubble: false
cancelable: true
clientX: 1198
clientY: 29
ctrlKey: false
currentTarget: button#hdrbtn_notificaton.mdl-button.mdl-js-button.mdl-js-ripple-effect.mdl-button--icon
defaultPrevented: false
detail: 1
eventPhase: 3
fromElement: null
isTrusted: true
isTrusted: true
layerX: -566
layerY: 5
metaKey: false
movementX: 0
movementY: 0
offsetX: 22
offsetY: 13
pageX: 1198
pageY: 29
path: Array[13]
relatedTarget: null
returnValue: true
screenX: 1797
screenY: 148
shiftKey: false
sourceCapabilities: InputDeviceCapabilities
srcElement: span.mdl-button__ripple-container
target: span.mdl-button__ripple-container
timeStamp: 1458032708743
toElement: span.mdl-button__ripple-container
type: "click"
view: Window
webkitMovementX: 0
webkitMovementY: 0
which: 1
x: 1198
y: 29
















































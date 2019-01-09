///*********** CREATE A NEW DOCUMENT


export interface Item { id: string; name: string; }

export class AppComponent {
private itemsCollection: AngularFirestoreCollection<Item>;
 items: Observable<Item[]>;
 
 constructor(private readonly afs: AngularFirestore, public afAuth: AngularFireAuth) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();
  }
  
 createDocument(name:string){
    const id = this.afs.createId();
    const item: Item = { id, name };
    this.itemsCollection.doc(id).set(item);

  }
 
 }
 ///*********** CREATE A NEW COLLECTION
 
 this.usersCollection.doc(id).collection("beers").doc("gf").set({
            name: 'name',
            email: 'email'
          });
 
 ///*********** NUMBER OF DOCUMMENTS IN COLLECTION
  this.afs.collection('users').valueChanges().subscribe( values => console.log(values.length));


 ///*********** DISPLAY DOCUMENTS OF A COLLECTION

  export interface Item { name: string; }

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let item of items | async">
        {{ item.name }}
      </li>
    </ul>
  `
})
export class AppComponent {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();
  }
  addItem(item: Item) {
    this.itemsCollection.add(item);
  }
}

 ///*********** DISPLAY NESTED DOCUMENTS OF A COLLECTION

private drinksCollection: AngularFirestoreCollection<Drink>;
  drinks: Observable<Drink[]>;
  constructor(private afs: AngularFirestore, public authService : AuthService) {

    this.drinksCollection = afs.collection('users/'+this.authService.userId+'/drinks/');
    this.drinks = this.drinksCollection.valueChanges();
  }
  
 ///*********** GET VALUE OF AN OBSERVABLE

  this.uploadFileService.downloadURL.subscribe((url) => {
    if(url){
      let drinkPhotoUrl = url;
    }
  }
  
  // DISPKAY ONE PROPERTY OF A DOCUMENT

  private drinkDoc: AngularFirestoreDocument<Drink>;
  drink: Observable<Drink>;

  constructor(private route: ActivatedRoute, private drinkService: DrinkService,
    private router: Router, private authService: AuthService, private readonly afs: AngularFirestore) {

      this.drinkDoc = afs.doc<Drink>('users/'+this.authService.userId+'/drinks/nnn');
      this.drink = this.drinkDoc.valueChanges();

      //**html */
      {{ (drink | async)?.drinkPhotoUrl }}
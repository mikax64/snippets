///*********** INSTALLATION
npm install --global create-react-app

create-react-app nameofmychoice


///*********************************************************************************************** COMPOSANTS

//ils peuvent etre crés sous forme de classe ou de fonction (dans 90% des cas pour la fonction)


  

  //--> pour l'afficher dans le DOM via index.js
  ReactDOM.render(
    <CoolComponent />,
    document.getElementById('root')
  )

///////// Functionnal Component (they can't have states)

  const Card = (feedback) => (
    <div className={`card ${feedback}`}>

    </div>
  )

 export default Card



 // ou encore
 function CoolComponent() {
  return <p>Youpi So Cool !</p>
}

//////////////// Class Component

import Card from './Card'
import GuessCount from './GuessCount'

class App extends Component {

  static defaultProps = {
    admin : true,
    required:false,
  }
  render() {
    const{admin, name, required} = this.props
    return (
      <div className="memory">
        <GuessCount guesses={0} />
        <Card card="😀" feedback="hidden" />
        <Card card="🎉" feedback="justMatched" />
      </div>
    )
  }
}
///*********** SYNTAXE JSX
// Avec JSX
<p>Oh le joli paragraphe</p>
<User first="John" last="Smith" />

// sans JSX
React.createElement(p, {}, 'Oh le joli paragraphe')
React.createElement(User, { first: 'John', last: 'Smith' })


//********** Conditions if 

const won = true
return (
    {won && <p>Gagné !</p>}  // if won == true alors on affiche la partie à droite de &&
)

// if .... else
<p>{user.loggedIn ? <WelcomeLabel /> : <LoginLink />}</p>

<p>{user.admin ? (
  <a href="/admin">Faire des trucs de VIP</a>
) : (
  <a href="/request-admin">Demander à devenir VIP</a>
)}</p>

/************************************* DIFFRENTES SYNTAXES DES FONCTIONS AVEC THIS  */

setPassword(event){
 console.log("okk")
}

<button onClick={this.setPassword.bind(this)}></button>

// ou alors

setPassword = event =>{
  console.log("okk")
 }
 
 <button onClick={this.setPassword}></button>


//**************************************************** PASSER UNE VARIABLE DANS UN COMPOSANT (PROP)

// ds App.js
import React, { Component } from 'react';
import Welcome from './Welcome';

class App extends Component {

  render() {
    return (
      <Welcome name="Mika" />
    );
  }
}
// ds Welcome.js
render() {
  return (
    <div>
      <h1>Welcome {this.props.name}</h1>
    </div>
    
  );
}

////////// accéder aux props dans un composant simple fonctionnel (c'est à dire sans utiliser le class)

const Welcome = (props) => {
  return (
    <h1>Welcome {props.name}</h1>
  )
}


//********* DEFINIR DE FACON PROPRE ET SOLIDE NOS PROPS (afin de lister nos props pour renvoyer des erreurs si certaines sont mal utilisées)

// installer le module prop-types
npm install --save prop-types


//ds GuessCount.js
import PropTypes from 'prop-types'

const GuessCount = ({ guesses }) => <div className="guesses">{guesses}</div>

GuessCount.propTypes = {
  guesses : PropTypes.number.isRequired,
}
// ds Card.js (autres exemples de props avec différents types)
Card.propTypes ={
  card : PropTypes.string.isRequired?
  onClick : PropTypes.func.isRequired,
  feedback : PropTypes.oneOf([
    'visible',
    'hidden',
    'justMatched',
    'justMisMatched',
  ]).isRequired,
  entries : PropTypes.arrayOf(
    PropTypes.shape({  // shape décrit un objet dont les clés sont connues, en précisant les types de leurs valeurs.
      id : PropTypes.number.isRequired,
      date : PropTypes.string.isRequired,
      guesses : PropTypes.number.isRequired,
      player : PropTypes.string.isRequired,
    })

  ).isRequired,
}


//ds App.js

return (
  <div className="memory">
    <GuessCount guesses={0} />
  </div>
)

//******************************************************** DEFINIR UNE PROP A DIFFERENTS ENDROITS

//*******----- technique 1 (si on veut que guesses soit forcément attribuée)

//ds App.js

return (
  <div className="memory">
    <GuessCount guesses={0} />
  </div>
)

//ds GuessCount.js
const GuessCount = ({ guesses }) => <div className="guesses">{guesses}</div>


//*******----- technique 2

//ds App.js

return (
  <div className="memory">
    <GuessCount />
  </div>
)

//ds GuessCount.js
const GuessCount = ({ guesses }) => <div className="guesses">{guesses}</div>

GuessCount.defaultProps = {
  guesses : 0,
}


//******************* PROPS VS STATE */


State is referred to the local state of the component which cannot be accessed and modified 
outside of the component and only can be used & modified inside the component. 
Props, on the other hand,make components reusable by giving components the ability 
to receive data from the parent component in the form of props.


//******************* GERER UN ETAT SUR UN COMPOSANT POUR INIT DES DONNES ET S'EN SERVIR */

const DEFAULT_STATE = { name: '', target: 5, units: '' }

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { ...DEFAULT_STATE }
  }

  // …

  resetForm() {
    this.setState(DEFAULT_STATE) // Mieux !
  }
}

/// pour changer un state en temps réel 

toggleAuth = () => {
  this.setState(prevState => ({
    isLogin : !prevState.isLogin
  }))
}

// fonctionnement de setState

doSomethingWrong() {
  // this.state.open est `false`
  this.setState({ open: true })
  console.log(this.state.open === true) // `false` : pas encore…
}

doSomethingSuperWrong() {
  // this.state.count == 0
  this.setState({ count: this.state.count + 1 })
  this.setState({ count: this.state.count + 1 })
  this.setState({ count: this.state.count + 1 })
  console.log(this.state.count) // 0
  // Et même une fois pris en compte, ce sera 1, pas 3, vu que
  // tout le long de cette méthode, `this.state.count` valait 0.
}

doSomethingRight() {
  // this.state.count vaut 0
  handleClick() {
    this.setState(
      (prevState, props) => ({ count: prevState.count + props.inc })
    )
    this.setState(
      (prevState, props) => ({ count: prevState.count + props.inc })
    )
    this.setState(
      (prevState, props) => ({ count: prevState.count + props.inc })
    )
  }
}

//******************************************** REAGIR A UN CLICK */

// dans app.js

class App extends Component {
  handleCardClick(card) {
    console.log(card, 'clicked')
  }

  // pour garantir que le this marchera bien dans le composant, on utilise plutot cette syntaxe
  handleCardClick = card => {
    console.log(card, 'clicked', this)
  }
}
render() {
  return (
    <Card card="😀" feedback="hidden" onClick={this.handleCardClick} />
  )
}

/******************* Autre syntaxe d'appel de fonction sans argument  */
toggleAuth = () => {
  console.log("ok");
}



// dans Card.js

const Card = ({ card, feedback, onClick }) => (
  <div className={`card ${feedback}`} onClick={() => onClick(card)}>
    <span className="symbol">
      {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
    </span>
  </div>
)

///********************************************************** SHARE FUNCTIONS IN ONE FILE
//helpers.js

const helpers = {
    helper1: function(){

    },
    helper2: function(param1){

    },
    helper3: function(param1, param2){

    }
}

export default helpers;

//Then, import like this:

import helpers from './helpers';
//and use like this:

helpers.helper1();
helpers.helper2('value1');
helpers.helper3('value1', 'value2');

//******************************************** CHANGER CLASSE CSS DYNAMIQUEMENT */

<div className={"loginPage " +  (this.state.isLogin ? 'is-login' : '')}></div>


//************************************************* Eviter du code dupliqué  */

render() {
  const logoutButton = (
    <button onClick={this.logOut}>
      <LogoutIcon />
      Déconnexion
    </button>
  )

  return (
    <Card>
      <CardTitle>
        Oh le joli titre
        {logoutButton}
      </CardTitle>
      …
      <Footer>
        © 2017 Des Gens Bien™ •
        {logoutButton}
      </Footer>
    </Card>
  )
}
//************************************************* Afficher une liste de donnéees*/

render () {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Claire' },
    { id: 4, name: 'David' },
  ]
  return (
    <div className="userList">
      {this.props.users.map(({ id, name }) => (
        <a href={`/users/${id}`} key={id}>{name}</a>    // key est là pour donner une référence unique au DOM virtuel si la liste est mise à jour
      ))}
    </div>
  )
}


//**** Afficher une liste via un composant */


// dans App.js
import HallOfFame, { FAKE_HOF } from './HallOfFame'

render() {
  return (
      <HallOfFame entries={FAKE_HOF} />
  )
}

// dans HallOfFame.js
const HallOfFame = ({ entries }) => (
  <table className="hallOfFame">
    <tbody>
    {
      entries.map(({ date, guesses, id, player }) => (
        <tr key={id}>
          <td className="date">{date}</td>
          <td className="guesses">{guesses}</td>
          <td className="player">{player}</td>
        </tr>
      ))
    }
    </tbody>
  </table>
)

export default HallOfFame


export const FAKE_HOF = [
  { id: 3, guesses: 18, date: '10/10/2017', player: 'Jane' },
  { id: 2, guesses: 23, date: '11/10/2017', player: 'Kevin' },
  { id: 1, guesses: 31, date: '06/10/2017', player: 'Louisa' },
  { id: 0, guesses: 48, date: '14/10/2017', player: 'Marc' },
]




/******************************************************************* CREATE ROUTES */

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />
        <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

/***************** ROUTE SOUS PARTIE */

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}


//**************************************************** UTILISER REDUX

//npm install redux react-redux
// see the project WORK/REACT/counter






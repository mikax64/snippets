
/*

If you’ve heard REST and RESTful APIs, 
that is simply referring to a set of standards that conform to a specific architectural style. 
Most web apps do, or aim to conform to REST standards

Action	HTTP Method	Definition

Create	POST	    Creates a new resource
Read	GET	        Retrieves a resource
Update	PUT/PATCH	Updates an existing resource
Delete	DELETE	    Deletes a resource

*/

/****************** MAKE A GET REQUEST  */

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {

  var data = JSON.parse(this.response);

  data.forEach(movie => {
    console.log(movie.title);
  });
}

// Send request
request.send();


/****************** MAKE A POST REQUEST  */

var url = "http://localhost:8080/api/v1/users";

var data = {};
data.firstname = "John";
data.lastname  = "Snow";
var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.onload = function () {
	//
}
xhr.send(json);

/****************** MAKE A PUT REQUEST  */

var url = "http://localhost:8080/api/v1/users";

var data = {};
data.firstname = "John2";
data.lastname  = "Snow2";
var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.open("PUT", url+'/12', true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.onload = function () {
 //
}
xhr.send(json);


/****************** MAKE A DELETE REQUEST  */

var url = "http://localhost:8080/api/v1/users";
var xhr = new XMLHttpRequest();
xhr.open("DELETE", url+'/12', true);
xhr.onload = function () {
	//
}
xhr.send(null);


// JavaScript
/*
Microsoft at 1996 used Jscript and NetScript to create something similar to
JavaScript.
*/

function ShowDate(){
	document.getElementById('demo').innerHTML = Date()
}

function PromptUser{
	var txt;
	var name = window.prompt("Enter your name:");
	if(name != null || name == ""){
		txt = "Hello " + name;
	}
	
	document.getElementById("name").innerHTML = txt;
}


/*
We can use texteditor or IDEs like Visual studio, Eclipse, Atom and etc.
We can use Libraries and Framework.

JavaScript Library: --> libraries are huge and may cause
  -jQuery
  -Dojo Toolkit
  -Prototype.js
  -Bootstrap
  -Velocity.jsD3.js
  

JavaScript Framework:
  Angular
  Node.js
  Backbone.js
  Ember.js
  Knockout
  Vue.jsReact
  TypeScript
*/




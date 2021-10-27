// a module defined using object literal notation
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

var myGame = {
	// In object literal notation, an object is described as a set of comma-separated name/value pairs enclosed in curly braces.
	// Names inside the object may be either strings or identifiers that are followed by a colon.
	 // object literals can contain properties and methods:
	
	variableKey : variableValue,
	
	// a method 
	functionkey: function () {
		'use strict';
	},

	///// module end /////
};


function play() {
	myGame.functionkey();
}

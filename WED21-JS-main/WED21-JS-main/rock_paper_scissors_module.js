var myGame = (function () {

	// private variables
	var myVar = "some value or expression";

	// functions
	var myPrivateFunction;
	

	// private functions
	myPrivateFunction = function() {
	
	};
	
	return {
		// public functions
		myPublicFunction: function() {
			
		}
	};

	// gameModule end //
})();

myGame.myPublicFunction();
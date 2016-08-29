(function(){

	var gem = { 
		name: 'Azurite', 
		price: 2.95,
		description:'Esta Di-Vi-Na'
	};
	var app = angular.module('gemStore', []);

	app.controller('StoreController',function(){
		this.product = gem;
	});
})();
(function(){

	var gem = { 
		name: 'Azurite', 
		price: 2.95,
		description:'Esta Di-Vi-Na',
		canPurchase:false,
		soldOut:true
	};

	var gems =[ 
		{name: 'Azurite', 
		price: 2.95,
		images: [
		{id: 0, url:'img/gem-01.gif'},
		{id: 1, url:'img/gem-02.gif'},
		{id: 2, url:'img/gem-03.gif'}
	]
	},
	{name: 'Bloodstone', 
		price: 5.95,
		images: [
		{id: 0, url:'img/gem-01.gif'},
		{id: 1, url:'img/gem-02.gif'},
		{id: 2, url:'img/gem-03.gif'}
	]
	},
	{name: 'Zircon', 
		price: 3.95,
		images: [
		{id: 0, url:'img/gem-01.gif'},
		{id: 1, url:'img/gem-02.gif'},
		{id: 2, url:'img/gem-03.gif'}
	]
	},
	];

	var app = angular.module('gemStore', []);

	app.controller('StoreController',function(){
		this.products = gems;
	});
})();
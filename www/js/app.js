(function(){

	var gem = { 
		name: 'Azurite', 
		price: 2.95,
		description:'Esta Di-Vi-Na',
		canPurchase:false,
		soldOut:true
	};

	var gems =[ 
		
	];

	var app = angular.module('gemStore', ['store-products']);

	app.controller('StoreController', ['$http', '$log', function($http,$log){
		this.store = this;

		store.products=[];

		$http.get('../products.json').success(function(data){
			store.products=data;
		});
	}]);

	app.controller('PanelController',function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		}

		this.isSelected = function(checkTab){
			return this.tab == checkTab;
		}
	});

	app.controller('ReviewsController', function(){
		this.review ={};

		this.addReview = function(Product){
			Product.reviews.push(this.review);
			this.review = {};
		};
	});
})();
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
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quaerat labore officia eaque aliquam, mollitia odit in omnis. Harum cupiditate incidunt, provident architecto aperiam illum voluptatibus nulla perspiciatis aliquid. Quos.',
		reviews: [
			{stars:4, body:'I Love this Product', author: 'gsusecheve@hotmail.com'},
			{stars:2, body:'This Product sucks', author: 'gsusecheve@hotmail.com'}
		],
		images: [
		{id: 0, url:'img/gem-01.gif'},
		{id: 1, url:'img/gem-02.gif'},
		{id: 2, url:'img/gem-03.gif'}
	],
	},
	{name: 'Bloodstone', 
		price: 5.95,
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex consequuntur magnam, nostrum repudiandae tenetur consectetur ab ipsum harum libero, cupiditate impedit accusamus? Voluptas est, ex quibusdam sunt ipsa, ea tenetur!',
		reviews: [
			{stars:4, body:'I Love this Product', author: 'gsusecheve@hotmail.com'},
			{stars:2, body:'This Product sucks', author: 'gsusecheve@hotmail.com'}
		],
		images: [
		{id: 0, url:'img/gem-04.gif'},
		{id: 1, url:'img/gem-05.gif'},
		{id: 2, url:'img/gem-06.gif'}
	],
	},
	{name: 'Zircon', 
		price: 3.95,
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam consequuntur iusto, molestiae repellendus, modi harum animi illum vel labore hic ab dolorum, necessitatibus cumque, sit incidunt. Dignissimos consequuntur nisi voluptate.',
		reviews: [
			{stars:4, body:'I Love this Product', author: 'gsusecheve@hotmail.com'},
			{stars:2, body:'This Product sucks', author: 'gsusecheve@hotmail.com'}
		],
		images: [
		{id: 0, url:'img/gem-07.gif'},
		{id: 1, url:'img/gem-08.gif'},
		{id: 2, url:'img/gem-09.gif'}
	],
	},
	];

	var app = angular.module('gemStore', []);

	app.controller('StoreController',function(){
		this.products = gems;
	});

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

	app.directive('productTitle', function(){
		return{
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});

	app.directive('productPanels', function(){
		return{
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function(){
				this.tab = 1;

				this.selectTab = function(setTab){
					this.tab = setTab;
				}

				this.isSelected = function(checkTab){
					return this.tab == checkTab;
				} 
			},
			controllerAs: 'panel'
		};
	});
})();
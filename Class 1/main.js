var foodieApp = angular.module('foodieApp',['ngRoute']);

foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/home.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})

foodieApp.controller('loginController',function($scope,$location) {
$scope.goToHome= function(){
	// console.log('Do Something')
	$location.url('home')
}
})
foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	//Empty
	//console.log($routeParams.id);
	$scope.ingredients = [];


	$scope.getIngredients = function(url) {
	// Do something
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	    $http({
	        'method': 'POST',
	        'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
	        'headers': {
	            'Authorization': 'Key f3c1abe985594b70b378874adc2b8c42',
	            'Content-Type': 'application/json'
	        },
	        'data': data,
	       /* success: function (response) {
	           // console.log(response.outputs[0]);
				var ingredients = response.outputs[0].data.concepts;
	            var list = '';
	            for (var i =0;i < ingredients.length;i++) {
	                list += '<div class="ingredient">' + ingredients[i].name + '</div>'
	            }
	           // $('.ingredients').html(list);
	        },
	        error: function (xhr) {
	           // console.log(xhr);
	        } */
	    }).then(function (response) {
								var ingredients = response.data.outputs[0].data.concepts;
						for (var i =0;i < ingredients.length;i++) {
						$scope.ingredients.push(ingredients[i].name);
						}
    		// $('.ingredients').html(list);
    		console.log(list);
        }, function (xhr) {
        	console.log(xhr);
        })
	}

	$scope.restaurantId = $routeParams.id;
	var restaurants = [{
		name: 'Farzi Cafe',
		address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		location: 'Connaught Place',
		category: 'Casual Dining, Bar',
		vote: '4.2',
		cuisines: 'Modern Indian',
		cost: '2200',
		hours: '12 Noon to 1 AM (Mon-Sun)',
	 id:1,
		image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	},
{
	name: 'Pizza Hut',
	address: '10/25, Level 1, Block C ,near vishal mega mart , Baddi',
	location: 'Baddi',
	category: 'Pizza',
	vote: '4.5',
	cuisines: 'Italian',
	cost: '300',
	hours: '12 Noon to 12 AM (Mon-Sun)',
 id :2,

 bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
           },
					 image: 'http://paypizzapal.com/wp-content/uploads/2014/01/pizza-hut2.jpg'
				 },
{
	name: 'Sagar Ratna',
	address: 'sec-24 panchkula, Opposite gupta hospital, Panchkula',
	location: 'panchkula',
	category: 'Family Restaurant',
	vote: '3.5',
	cuisines: 'Indian',
	cost: '1100',
	hours: '9 AM to 12 AM (Mon-Sun)',
 id:3,
	image: 'https://aff.bstatic.com/images/hotel/840x460/534/53457861.jpg'
},
{
	name: 'Krishna Cafe',
	address: 'near new bus stand, kalka',
	location: 'Kalka',
	category: 'Casual Dining',
	vote: '4.0',
	cuisines: 'Indian',
	cost: '500',
	hours: '10 AM to 12 AM (Mon-Sun)',
 id :4,
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo08tbrhORhwSjwUKPP3_E0xF_Z9y_2R6ytYmQ9eALEGAaMuNZsQ'
},
{
	name: 'new generation restaurant',
	address: ' Shop No. 25 A,sector-35 B, City Center Complex, Chandigarh',
	location: 'Chandigarh',
	category: 'chinese',
	vote: '4.4',
	cuisines: 'chinese',
	cost: '2000',
	hours: '11 AM to 11 PM (Mon-Sun)',
 id :5,

 bestDish: {
	name: 'noodles',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjIjFHnFUTZxYRg1VYSsjQSEYSzBs-Bdxwdscr7-yUGNYIz_ZfQ'
          },
					image: 'https://s-media-cache-ak0.pinimg.com/736x/db/1f/7c/db1f7c3b73ca96be67f961dc34919b64--brunch-cafe-tea-cafe.jpg'
}]
	$scope.restaurant = restaurants[$routeParams.id - 1];

})
//controller bnaya h....
foodieApp.controller('mainController',function($scope) {
	//what it will do.....
	$scope.restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
 id:1,
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
	name: 'Pizza Hut',
	address: '10/25, Level 1, Block C ,near vishal mega mart , Baddi',
	location: 'Baddi',
	category: 'Pizza',
	vote: '4.5',
	cuisines: 'Italian',
	cost: '300',
	hours: '12 Noon to 12 AM (Mon-Sun)',
 id :2,
	image: 'http://paypizzapal.com/wp-content/uploads/2014/01/pizza-hut2.jpg'
},
{
	name: 'Sagar Ratna',
	address: 'sec-24 panchkula, Opposite gupta hospital, Panchkula',
	location: 'panchkula',
	category: 'Family Restaurant',
	vote: '3.5',
	cuisines: 'Indian',
	cost: '1100',
	hours: '9 AM to 12 AM (Mon-Sun)',
 id:3,
	image: 'https://aff.bstatic.com/images/hotel/840x460/534/53457861.jpg'
},
{
	name: 'Krishna Cafe',
	address: 'near new bus stand, kalka',
	location: 'Kalka',
	category: 'Casual Dining',
	vote: '4.0',
	cuisines: 'Indian',
	cost: '500',
	hours: '10 AM to 12 AM (Mon-Sun)',
 id :4,
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo08tbrhORhwSjwUKPP3_E0xF_Z9y_2R6ytYmQ9eALEGAaMuNZsQ'
},
{
	name: 'new generation restaurant',
	address: ' Shop No. 25 A,sector-35 B, City Center Complex, Chandigarh',
	location: 'Chandigarh',
	category: 'chinese',
	vote: '4.4',
	cuisines: 'chinese',
	cost: '2000',
	hours: '11 AM to 11 PM (Mon-Sun)',
 id :5,
	image: 'https://s-media-cache-ak0.pinimg.com/736x/db/1f/7c/db1f7c3b73ca96be67f961dc34919b64--brunch-cafe-tea-cafe.jpg'
},
]

})

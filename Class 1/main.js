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
	.when('/fav', {
	templateUrl: 'pages/fav.html',
	controller: 'favController'
})
})

foodieApp.controller('loginController',function($scope,$location) {
$scope.goToHome= function(){
	// console.log('Do Something')
	$location.url('home')
}
})

//  --------------------------------------------------  fav controller start ---------------------------------------
foodieApp.controller('favController',function($scope,$location,$http) {


	$scope.ingredients = [];

//console.log($routeParams.id);

  $scope.restaurants = [{
							id: 1,
							bestDish: {
										name: 'Bean Salad',
										image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
									},
							image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
						},{

						id: 2,
						bestDish: {
									name: 'Corn Pizza',
									image: 'https://images.food52.com/zyrGNL1_8ZxmJ43jtBLQoyLfNvA=/753x502/c947f605-2d61-4a10-9f69-abc7dda9fffb--DSC07406.JPG'
								},

            image: 'https://images.food52.com/zyrGNL1_8ZxmJ43jtBLQoyLfNvA=/753x502/c947f605-2d61-4a10-9f69-abc7dda9fffb--DSC07406.JPG'
          },
          {
								id: 3,
								bestDish: {
											name: 'Italian Pasta',
											image: 'https://www.sensibus.com/deli/sites/sensibus.com/files/recipes/pasta-dish-2_0.jpg'
										},

                image: 'https://www.sensibus.com/deli/sites/sensibus.com/files/recipes/pasta-dish-2_0.jpg'
              },
              {

										id: 4,
										bestDish: {
													name: 'Grilled fish',
													image: 'https://thumbs.dreamstime.com/z/grilled-fish-served-potatoes-sauce-lemon-close-up-29801081.jpg'
												},

                    image: 'https://thumbs.dreamstime.com/z/grilled-fish-served-potatoes-sauce-lemon-close-up-29801081.jpg'
                    }]



						$scope.lists1 = [
						{'vl' : 'vegetable'},
						{'vl' : 'almond'},
						{'vl' : 'corn'},
						{'vl' : 'milk'},
						{'vl' : 'apple'},
					];
					$scope.lst1 = [];
					$scope.change1 = function(check,value){
								if(check){
										$scope.lst1.push(value);
								}else{
										 $scope.lst1.splice($scope.lst1.indexOf(value), 1);
								}
					};

					//
					$scope.lists2 = [
					{'vl' : 'meat'},
					{'vl' : 'egg'},
					{'vl' : 'onion'},
					{'vl' : 'lettuce'},
					{'vl' : 'banana'},
					];
					$scope.lst2 = [];
					$scope.change2 = function(check,value){
							if(check){
									$scope.lst2.push(value);
							}else{
									 $scope.lst2.splice($scope.lst2.indexOf(value), 1);
							}
					};


								$scope.getFav = function(url) {
						var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
										$http({
											'method': 'POST',
											'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
											'headers': {
												'Authorization': 'Key a83cf33d81ca4f71ae7f18345e7b8ab0',
												'Content-Type': 'application/json'
											},
											'data': data,

										}).then(function (response) {
													var ingredients = response.data.outputs[0].data.concepts;
										  			var list = '';
														//  var cboxArray = [];
														for (var i =0;i < ingredients.length;i++) {
															$scope.ingredients.push(ingredients[i].name);
														}

														for(var i=0;i< $scope.lst1.length;i++){
													if ($scope.ingredients.indexOf($scope.lst1[i]) > -1) {

																if($scope.ingredients.indexOf($scope.lst2[i]) > -1){
																	// var info1 = "<h2 class='highlight-info'>You will not like this Food</h2>";
																  console.log("Not Your FAV");
																	$(".highlight-info").text('You will not like this Food');
																		 $(".rest-extra").css("background-color" ,"#ea0b0b");

																					break;
																}
																// var info2 = "<h2 class='highlight-info'>This is the food You May LIKE</h2>";
																console.log("Your FAV");
																$(".highlight-info").text('This is the food You May LIKE');
																	$(".rest-extra").css("background-color" ,"#308917");
																break;
															 }

															 else {
																//  var info1 = "<h2 class='highlight-info'>You will not like this Food</h2>";
																 console.log("Not Your FAV");
																	$(".highlight-info").text('You will not like this Food');
																	$(".rest-extra").css("background-color" ,"#ea0b0b");

															 }

									}


											//console.log(list);
										}, function (xhr) {
																	   console.log(xhr);
																	  });
																}




})












// -----------------------------------------------------------------------------------------------------------------





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
	name: 'chinese n',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
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

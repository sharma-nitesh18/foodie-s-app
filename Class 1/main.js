/* Runs when HTML file is loaded
    $(document).ready(function() {
    $('#user-email').on('keypress',function() {
       console.log($('#user-email').val())
   });
});*/

/*FOR welcome message
$('#user-email').on('input',function() {
$('#user-email').on('keypress',function() {
        var email = $('#user-email').val()
        var message = 'Welcome Back, ' + email;
        $('.welcome-message').text(message);
    });*/
	var foodieApp = angular.module('foodieApp',[]);
	
	//made a conroller...
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
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},

{
	name: 'Pizza Hut',
	address: '25/30, Level 1, Block C,Near shivalik school, baddi',
	location: 'Baddi',
	category: 'Casual Dining, Bar',
	vote: '2.5',
	cuisines: 'Modern Indian',
	cost: '1500',
	hours: '12 Noon to 12 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
}]

})
//$('#project1').fadeIn(2000);

$('#project1').hover(function() {
	$(this).text("A simple trivia game using Javascript/JQuery, HTML and CSS")
	}
,
function(){
	$(this).text('Project 1')
	}
);


$('#project2').hover(function() {
	$(this).text("A low carb cook book application built with Ruby on Rails and deployed online with Heroku")
	}
,
function(){
	$(this).text('Project 2')
	}
);

$('#projectUX').hover(function() {
	$(this).text("A group project of 4 Web Dev students and 2 UX Design students - an app written with Ruby on Rails that lets students submit comfort/completeness about a lesson after its been taught")
	}
,
function(){
	$(this).text('UX collaboration')
	}
);

$('#project3').hover(function() {
	$(this).text("4 person group project written with an Express/Node backend.  The app utilizes Spotify's Echo Nest API as well as the Bands in Town API")
	}
,
function(){
	$(this).text('Project4')
	}
);

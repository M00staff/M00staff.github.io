//$('#project1').fadeIn(2000);

$('#project1').hover(function() {
	$(this).text("A simple trivia game using Javascript/JQuery, HTML and CSS")
	}
,
function(){
	$(this).text('Project 1 - Trivia')
	}
);


$('#project2').hover(function() {
	$(this).text("A low carb cook book application built with Ruby on Rails and deployed online with Heroku")
	}
,
function(){
	$(this).text('Project 2 - Keto Cook Book')
	}
);

$('#projectUX').hover(function() {
	$(this).text("Group project of 4 Dev students and 2 UX Design students - an app written with Ruby on Rails that lets students submit comfort/completeness about a lesson after its been taught")
	}
,
function(){
	$(this).text('UX collaboration - The GA Anonymizer')
	}
);

$('#project3').hover(function() {
	$(this).text("Group project written with an Express/Node backend.  The app utilizes Spotify's Echo Nest API as well as BandsinTown's API")
	}
,
function(){
	$(this).text('Project 4 - Playlisr')
	}
);

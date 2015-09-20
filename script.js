//$('#project1').fadeIn(2000);

$('#project1').hover(function() {
	$(this).text("A very simple trivia game using Javascript/JQuery, HTML and CSS")
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
	$(this).text("A group project with UX Design students - an app written with Ruby on Rails that lets students submit comfort/completeness about a lesson after its been taught")
	}
,
function(){
	$(this).text('UX Collaboration - The GA Anonymizer')
	}
);

$('#project3').hover(function() {
	$(this).text("Group project written with an Express/Node backend.  The app utilizes multiple API's including Spotify's Echo Nest API as well as the BandsinTown API")
	}
,
function(){
	$(this).text('Project 3 - Playlistr')
	}
);

$('#project4').hover(function() {
	$(this).text("Music app that displays and plays all live concert recordings uploaded to archive.org by the band Brothers Past.  App was written primarily in Angular and utilizes the archive's API")
	}
,
function(){
	$(this).text('Project 4 - BP Streams')
	}
);

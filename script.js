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

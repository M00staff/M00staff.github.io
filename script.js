var points = 0;
var activeQ = 0;
var questions = [
	{
	 question: 'Name of Tony Sopranos boat in TV show The Sopranos' ,
	 answer: 'the stugots'
	}
	,
	{
	 question: 'Fill in the blank The _____ Biscuits are the greatest band in history' ,
	 answer: 'disco'
	}
	,
	{
	 question: 'Name of the Toronto Mayor that was caught smoking crack-cocaine' ,
	 answer: 'rob ford'
	}
	,
	{
	 question: 'Name of the Washington DC Mayor that was caught smoking crack-cocaine' ,
	 answer: 'marion barry'
	}
	,
	{
	 question: 'This Javascript Library makes DOM manipulation and selecting elements on page quite easy' ,
	 answer: 'jquery'
	}
	,
	{
	 question: 'This is a group of software development methods in which requirements and solutions evolve through collaboration between self-organizing, cross-functional teams.  Oppose to waterfall.' ,
	 answer: 'agile'
	}
	,
	{
	 question: 'What is whisky made in Scotland called' ,
	 answer: 'scotch'
	}
	,
	{
	 question: 'How much wood could a wood chuck, chuck if a woodchuck could chuck wood' ,
	 answer: '42'
	}
	,
	{
	 question: 'What color is the sky, generally' ,
	 answer: 'blue'
	}
	,
	{
	 question: 'what year did columbus sail the ocean blue' ,
	 answer: '1492'
	}
];

//=========================================Fisher-Yates Algorithm 
function shuffle(array) {
    var counter = array.length, temp, index;

// While there are elements in the array
    while (counter > 0) {
// Pick a random index
        index = Math.floor(Math.random() * counter);

// Decrease counter by 1
        counter--;

// And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
shuffle(questions);



//=================hover buttons 
$('#begin').hover(function(){
	$(this).text('Ready?')
}
,
function(){
	$(this).text('Begin')
}
);

$('#resetDizzle').hover(function(){
	$(this).val('Are you sure?')
}
,
function(){
	$(this).val('Reset')
}
);

$('#promptButton').hover(function(){
	$(this).text('This button will use prompts for questions')
}
,
function(){
	$(this).text('Prompts?')
}
);





//============================================reset button
$('#resetDizzle').on('click' , function(){
	points = 0;
	activeQ = 0;
	alert('score reset you are now at '+points)
	$('.question').html(points);
	$('.actualQuestion').html('')
	$('#textBox').val('');
});


//=====================innerHTML

$('#begin').on('click' , function(){

		$('.actualQuestion').html(questions[activeQ].question);
		console.log(questions[activeQ].question);
		
});

$('#submitButton').on('click' , function(){
			var answerZizzle = $('input').val();
			var answerDizzle = answerZizzle.toLowerCase()
			if (answerDizzle === questions[activeQ].answer) {
				points++;
				alert('Got it - currently you have a score of '+points);
				$('.question').html(points);							
			}
			else {
				points -= 1;
				alert('WRONG!! Watch your spelling and caps.  Corerct answer was '+questions[activeQ].answer);
				$('.question').html(points);
			}

			if (activeQ < questions.length-1) {
				activeQ++;
				$('.actualQuestion').html(questions[activeQ].question);
			}

			else {
				$('.actualQuestion').html('thanks for playing, click reset to reset your score');
			}
});




//==========================================prompting questions
$('#promptButton').on('click' , function() {


for (var i = 0 ; i < questions.length ; i++) {

 		
		var answerZizzle = prompt(questions[i].question+'?')
		var answerDizzle = answerZizzle.toLowerCase()
			if (answerDizzle === questions[i].answer) {
				points++;
				alert('Good job, currently you have a score of '+points);
				$('.question').html(points);							
			}
			
			else if (answerDizzle === null){
				break
			}

			else {
				points -= 1;
				alert('WRONG, make sure to watch your spelling and caps.  Correct answer was '+questions[i].answer);
				$('.question').html(points);
			}
			
		}
			$('.actualQuestion').html('Game Over, your final score was '+points )
});



//====================== Enter submits
   $('#textBox').keypress(function(e) {
        if(e.which == 13) {
            jQuery(this).blur();
            jQuery('#submitButton').focus().click();
        }
    });


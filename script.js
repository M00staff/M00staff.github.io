var points = 0;
var questions = [
	{
	 question: 'question1' ,
	 answer: 'answer1'
	}
	,
	{
	 question: 'question2' ,
	 answer: 'answer2'
	}
	,
	{
	 question: 'question3' ,
	 answer: 'answer3'
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
$('button').hover(function(){
	$(this).text('you ready?')
}
,
function(){
	$(this).text('Begin')
}
);

$('input').hover(function(){
	$(this).val('you sure?')
}
,
function(){
	$(this).val('Reset')
}
);






//============================================reset button
$('input').on('click' , function(){
	points = 0;
	alert('score reset you are now at '+points)
	$('.question').html('Your Score');
	$('.actualQuestion').html('');
});




$('button').on('click' , function(){
		for (var i = 0 ; i < questions.length ; i++) {		
		//=======================================================prompting questions			
		var answerDizzle = prompt(questions[i].question+'?')
			if (answerDizzle === questions[i].answer) {
				points++;
				alert('wow you are so smart, currently you have a score of '+points);
				//questions.splice(i, 1);
				$('.question').html(points);							
			}
			else {
				points -= 1;
				alert('WRONG!! you now have a score of '+points);
				$('.question').html(points);
			}
			
		}
			
			if (points <= 0 ){
			$('.actualQuestion').html('wow, not so hot, might want to try again - hit reset')
			}

			else {
				$('.actualQuestion').html('Game Over - not bad your final score is above, hit reset to get back to zero')
			}
});


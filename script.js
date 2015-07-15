var points = 0;
var activeQ = 0;
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
$('#begin').hover(function(){
	$(this).text('you ready?')
}
,
function(){
	$(this).text('Begin')
}
);

$('#resetDizzle').hover(function(){
	$(this).val('you sure?')
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
	alert('score reset you are now at '+points)
	$('.question').html(points);
	$('.actualQuestion').html('')
	$('#textBox').val('');
	var activeQ = 0;
});


//=====================innerHTML

$('#begin').on('click' , function(){

		$('.actualQuestion').html(questions[activeQ].question);
		console.log(questions[activeQ].question);
		
});

$('#submitButton').on('click' , function(){
			var answerDizzle = $('input').val();
			if (answerDizzle === questions[activeQ].answer) {
				points++;
				alert('wow you are so smart, currently you have a score of '+points);
		//		$('.actualQuestion').text('');
				$('.question').html(points);							
			}
			else {
				points -= 1;
				alert('WRONG!! you now have a score of '+points);
				$('.question').html(points);
			}

			if (activeQ < questions.length-1) {
				activeQ++;
				$('.actualQuestion').html(questions[activeQ].question);
			}

			else {
				console.log('this worked')
				$('.actualQuestion').html('thanks for playing, click reset to reset your score');
			}
});




//=======================================================prompting questions
$('#promptButton').on('click' , function() {


for (var i = 0 ; i < questions.length ; i++) {

 		
					
		var answerDizzle = prompt(questions[i].question+'?')
			if (answerDizzle === questions[i].answer) {
				points++;
				alert('wow you are so smart, currently you have a score of '+points);
				//questions.splice(i, 1);
				$('.question').html(points);							
			}
			
			else if (answerDizzle === null){
				break
			}

			else {
				points -= 1;
				alert('WRONG!! you now have a score of '+points);
				$('.question').html(points);
			}
			
		}
			$('.actualQuestion').html('Game Over, your final score was '+points )
});


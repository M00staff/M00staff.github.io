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

$('#resetButton').on('click' , function(){
	points = 0;
	alert('score reset you are now at '+points)
	$('.question').html(points);
});

$('#begin').on('click' , function(){
	for (var i = 0 ; i < questions.length ; i++) {
 		// -------------------------------------trying to use innerHTML on the p tag 
 		// $('p').text(questions[i].question);
 		// $('submitButton').on('click' , function(){
 		// 	if ($('input').val() === questions[i].answer){
 		// 		alert('this works');
 		// 	} 
 		// })
		var answerDizzle = prompt(questions[i].question+'?')
			if (answerDizzle === questions[i].answer) {
				points++;
				alert('wow you are so smart, currently you have a score of '+points);
				$('.question').html(points);							
			}
			else {
				points -= 1;
				alert('WRONG!! you now have a score of '+points);
				$('.question').html(points);
			}
	}

});


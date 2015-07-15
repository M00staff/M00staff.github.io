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

$('#resetButton').hover(function(){
	$(this).val('you sure?')
}
,
function(){
	$(this).val('Reset')
}
);

//=================hover button



// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// console.log(getRandomInt(1, 3));



//============================================reset 
$('#resetButton').on('click' , function(){
	points = 0;
	alert('score reset you are now at '+points)
	$('.question').html(points);
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
				//questions.splice(i, 1);
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
				$('.actualQuestion').html('thanks for playing, click reset');
			}
});





	//var choice = getRandomInt(1, 3);
		// for (var i = 0 ; i < questions.length ; i++) {

 				// -------------------------------------trying to use innerHTML on the p tag 
 				// $('.actualQuestion').text(questions[i].question);

 				// 	$('#submitButton').on('click' , function(){
 				// 			if ($('input').val() === questions[i].answer) {
 				// 				alert('this def worked');
 				// 			};
 							
 				// 	});

 				
 				// if ($('textBox').val() === questions[i].answer){
 				// 		alert('this works');
 				// 		points++;
 				// 	}
 				// else {
 				// console.log(questions[i].question);
 				// $('submitButton').on('click' , function(){
 					
 				// 	 console.log('thisworks2')
 				// })
 				// }		
		//=======================================================prompting questions			
		// var answerDizzle = prompt(questions[i].question+'?')
		// 	if (answerDizzle === questions[i].answer) {
		// 		points++;
		// 		alert('wow you are so smart, currently you have a score of '+points);
		// 		//questions.splice(i, 1);
		// 		$('.question').html(points);							
		// 	}
		// 	else {
		// 		points -= 1;
		// 		alert('WRONG!! you now have a score of '+points);
		// 		$('.question').html(points);
		// 	}
			
		//}
			//$('.actualQuestion').html('Game Over, your final score was '+points )
//});


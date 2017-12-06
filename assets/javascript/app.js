
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var timer = 20;
    

// =================== questions ==========
var questions = [
    {
    question: "What band sang Cherry Pie?",
    choices: ["Motley Crew", "Poison", "Warrant", "White Lion"],
    answer: "Warrant",
}, {
    question: "Who sang Whit It?",
    choices: ["Queen", "Devo", "Aerosmith", "Vanilla Ice"],
    answer: "Devo",
}, {
    question: "What was Metallicas biggest song in the 80's?",
    choices: ["Master Of Puppets", "Enter Sandman", "Ride The Lightning", "Breadfan"],
    answer: "Master Of Puppets",
}, {
    question: "What did Ozzy eat on stage?",
    choices: ["Chocolate bar", "A bats head", "Turd", "Doves head"],
    answer: "A bats head"
}, {
    question: "What shirts do Bevis and Butthead wear?",
    choices: ["Aerosmith & Ozzy", "Queen & Pink Floyd", "Slayer & Iron Maiden", "AC/DC & Metallica"],
    answer: "AC/DC & Metallica",
}, {
    question: "Who performed the song, The Stroke?",
    choices: ["Billy Squire", "Hall and Oats", "John Cougar", "Tommy Tutone"],
    answer: "Billy Squire"
}, {
    question: "Who sang Rock And Roll All Night?",
    choices: ["Alice Cooper", "Ace Frehley", "Kiss", "Faster Pussycat"],
    answer: "Kiss"
}, {
    question: "Who was the original lead singer for Queen?",
    choices: ["Freddie Mercury", "Adam Lambery", "Freddy Krueger", "Robert Plant"],
    answer: "Freddie Mercury"
}, {
    question: "Who sang Living After Midnight?",
    choices: ["Kiss", "Ozzy", "Judas Priest", "Bon Jovi"],
    answer: "Judas Priest"
}, {
    question: "What band member recently died in AC/DC?",
    choices: ["Malcolm Young", "Angus Young", "Bon Scott", "Brian Johnson"],
    answer: "Malcolm Young"
}
];
// display question and choices
var questionCounter = 0;
function nextQuestion() {
    $('#question').html(questions[questionCounter].question);
    for (var i = 0; i < questions[questionCounter].choices.length; i++) {
        console.log(questions[questionCounter].choices[i]);
        var choiceButton = $('<input class="button" type="button" value="' + questions[questionCounter].choices[i] + '"/>');
    $('#choices').append(choiceButton);
        console.log(choiceButton);
        
    }
   
}
// once an answer is click on it is checked against the correct answer. 
// onclick function for each button
// .options is the class name given to each button
$('.button').on('click', function() {
    // first thing we need to do is grab the value of the button
    // $(this) ---> provides everything associaed with the html button element that was clicked
    var userGuess = $(this)
    console.log(userGuess)

    if(question === questions.answer) {
        alert('You win')
    } else {
        alert('The correct answer is ' + questions.answer)

   }
    nextQuestion();
})



function startGame() {
    nextQuestion()
}
var selectedQuestion = [];
$('button').click(function(){
    startGame();
$('button').css('display', 'none');    




    
    // .text(questions[questionCounter].choices[i]

// display questions on buttons


// timer set to 20 seconds. starts counting down when page loads



// if answer is correct then correct answer counter goes up one

// if answer is incorrect then incorrect answer goes up one

// next question is loaded

// if timer expires then incorrect answer counter adds one. next question loads

// if incorrect answer reaches 6 then game over alert





})

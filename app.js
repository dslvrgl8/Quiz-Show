// ----------VISUAL HTML ELEMENTS------------
    // Buttons //
const answer1 = document.querySelector('#a');
const answer2 = document.querySelector('#b');
const answer3 = document.querySelector('#c');
const answer4 = document.querySelector('#d');
const next = document.querySelector('#next');
const begin = document.querySelector('#Begin')
const message = document.querySelector('message')

const questionCount = document.querySelector('#questionCount');
const questions = document.querySelector('.questions');
const score = document.querySelector('#score');
const questionDisplay = document.querySelector('.question');
const resultBar = document.querySelector('.result');
const choices = document.querySelectorAll('.choice');
const rightAnswer = document.querySelectorAll('.correctAnswer')
const overlay = document.querySelector('.overlay')

console.log(choices)

const myQuestions = [
{
    question: "Tupperware", 
    answers: {
        a: 'Tup-Uh-Wair',
        b: 'Tup-er-wair', 
        c: 'Tub-er-wair', 
        d: 'Two-puh-wair'
    },
    correctAnswer: 'a'
},
{
    question: "Colonel",
    answers: {
        a: 'Core-low-nel',
        b: 'Call-Oh-nel',
        c: 'kur-nl',
        d: 'Coal-oh-nel'
    },
    correctAnswer: 'c'
},
{
    question: "Dachshund",
    answers: {
        a: 'dacks-ind',
        b: 'Dah-Chs-Hund',
        c: 'Docks-how-nd',
        d: 'dahks-hund'
    },
    correctAnswer: 'd'
},
{
    question: "Renaissance",
    answers: {
        a: 'Ri-Nay-Suhns',
        b: 'Ri-Nay-Sahns',
        c: 'Ren-ih-sahnz',
        d: 'Rena-is-ahnz'
    },
    correctAnswer: 'a'
},
{
    question: "Crayon",
    answers: {
        a: 'krA-en',
        b: 'krA-on',
        c: 'Cran',
        d: 'cRoy-in'
    },
    correctAnswer: 'b'   
},
{
    question: "Caramel",
    answers: {
        a: 'kahr-mel', 
        b: 'kahr-muhl',
        c: 'Care-mel',
        d: 'Cara-mel'
    },
    correctAnswer: 'b'
},
{
    question: "La Croix",
    answers: {
        a: 'la-croy',
        b: 'Le-Kwah',
        c: 'La-crocks',
        d: 'Ley-croy-ch'
    },
    correctAnswer: 'a'
},
{
    question: "Worchester",
    answers: {
        a: 'whor-ses-ter-shire',
        b: 'War-chess-tah-sure',
        c: 'woo-stuh-sher',
        d: 'Worst-ter-shire'
    },
    correctAnswer: 'c'
},
{
    question: "Bubly, sugary, beverage?",
    answers: {
        a: '   Soda   ',
        b: '   Pop   ',
        c: '   Cola   ',
        d: '   Sodie pop   '
    },
    correctAnswer: 'a'
},
{
    question: "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch",
    answers: {
        a: 'llan-vire-pooll-gwin-gill-gore-ger-ih-queern-drorb-ooll-llandy-silio-go-go-goch', 
        b: 'llan-vire-pooll-gwin-gill-gore-ger-ih-queern-drorb-ooll-llandy-silio-goo-goo-goh',
        c: 'llan-vire-pooll-gwin-gill-gore-ger-ih-queern-drorb-ooll-llandy-silio-gore-gore-goch',
        d: 'Llan-fair-pwllg-wyngy-ll-goge-rych-wyrn-drob-w-llll-anty-silio-go-go-goch'
    },
    correctAnswer: 'c',
},
]   
const lastQuestion = myQuestions.length - 1;

let i = 0

let currentQuestion = myQuestions[i];


let userScore = 0

let questionNumber = 1

next.disabled = true

restart.disabled = true


//add next button, create variable, use javavscript to grab from HTML, attach event listener to button

//call next button, call function, update

function startGame () {
    // make button, oncle clicked it will add hidden to overlay class, then call make question
    begin.addEventListener('click', function () {
        overlay.style.visibility = 'hidden'
        makeQuestion()
    })
    
}

startGame();

function makeQuestion() {
    console.log(questionDisplay)
    questionDisplay.innerText = currentQuestion.question
    answer1.innerHTML = currentQuestion.answers.a
    answer2.innerHTML = currentQuestion.answers.b
    answer3.innerHTML = currentQuestion.answers.c
    answer4.innerHTML = currentQuestion.answers.d
    rightAnswer.innerHTML = currentQuestion.correctAnswer
    resultBar.style.display = 'none'
    if(i === 9) {
        questionDisplay.style.fontSize = '34px'
    }
}

makeQuestion();

const choicesArray = [...choices]; //sets up array to loop through

choicesArray.map(choice => {
    choice.addEventListener('click', function() {
    // Disable all answer buttons, and undisable the next button
    console.log(this)
    console.log(`You Chose: ${this.innerText}`)
    console.log(`Correct answer is: ${currentQuestion.correctAnswer}`)

    if(this.id === currentQuestion.correctAnswer) {
        console.log('You are correct!');
        choice.style.color = 'green';
        userScore += 1;
        score.innerText = userScore;
        answer1.disabled = true;
        answer2.disabled = true;
        answer3.disabled = true;
        answer4.disabled = true;
        next.disabled = false;

    } else {
        console.log('You are wrong');
        choice.style.color = 'red';
        answer1.disabled = true;
        answer2.disabled = true;
        answer3.disabled = true;
        answer4.disabled = true;
        next.disabled = false;
    }
    })
console.log({choice})
})

// ----------- Adds function to next
next.addEventListener('click', function() {
   i++
   if ( i <= lastQuestion) {
    currentQuestion = myQuestions[i];
    makeQuestion();
    questionNumber ++;
    questionCount.innerText = questionNumber;
    choicesArray.map(choice => {
    next.disabled = true
    choice.disabled = false
    choice.style.color = 'black'
    })
    } else {
        resultBar.style.display = 'block';
        resultBar.innerHTML = `You got ${userScore} out of ${myQuestions.length} correct!`;
        questionCount.style.display = 'none'; // hide question number display
        next.style.display = 'none'; // hide next button
        restart.disabled = false
        }
})

restart.addEventListener('click', function() {
    window.location.reload()
})


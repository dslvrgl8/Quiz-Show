const answer1 = document.querySelector('#a');
const answer2 = document.querySelector('#b');
const answer3 = document.querySelector('#c');
const answer4 = document.querySelector('#d');
const questionCount = document.querySelector('.questionCount');
const questions = document.querySelector('.questions');
const score = document.querySelector('.score');
const questionDisplay = document.querySelector('.question')
const resultBar = document.querySelector('.result')
const choices = document.querySelectorAll('.choice')
const rightAnswer = document.querySelectorAll('.correctAnswer')

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
    correctAnswer: 'Tup-Uh-Wair'
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
    question: "Picture of a soda bottle",
    answers: {
        a: 'Soda',
        b: 'Pop',
        c: 'Cola',
        d: 'Sodie pop'
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
    correctAnswer: 'c'
},
]   
const lastQuestion = myQuestions.length - 1;

let currentQuestion = myQuestions[0];

//add next button, create variable, use javavscript to grab from HTML, attach event listener to button

//call next button, call function, update

function makeQuestion() {
    console.log(questionDisplay)
    questionDisplay.innerText = currentQuestion.question
    answer1.innerHTML = currentQuestion.answers.a
    answer2.innerHTML = currentQuestion.answers.b
    answer3.innerHTML = currentQuestion.answers.c
    answer4.innerHTML = currentQuestion.answers.d
    rightAnswer.innerHTML = currentQuestion.correctAnswer
}

makeQuestion();

const choicesArray = [...choices]; //sets up array to loop through

choicesArray.map(choice => {
    choice.addEventListener('click', function() {
    console.log(this)
    console.log(`You Chose: ${this.innerText}`)
    console.log(`Correct answer is: ${currentQuestion.correctAnswer}`)
    if(this.innerText === currentQuestion.correctAnswer) {
        console.log('You are correct!')
        alert('Correct!!')
    } else {
        console.log('You are wrong')
        alert('WRONG!!!')
    }
    })
console.log({choice})
})

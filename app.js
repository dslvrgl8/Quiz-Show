const answer1 = document.getElementById('a');
const answer2 = document.getElementById('b');
const answer3 = document.getElementById('c');
const answer4 = document.getElementById('d');
const questionCount = document.querySelector('#questionCount');
const questions = document.querySelector('#questions');
const score = document.querySelector('#score');

const lastQuestion = myQuestions.length - 1;

var myQuestions = [
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

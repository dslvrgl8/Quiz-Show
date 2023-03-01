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

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

// generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

// function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

//   function showQuestions(questions, quizContainer){
    function showQuestions(questions) {
        let questionIndex = 0;
      
        function showNextQuestion() {
          const questionContainer = document.getElementById("question-container");
          questionContainer.innerHTML = "";
      
          if (questionIndex >= questions.length) {
            questionContainer.innerText = "No more questions!";
            return;
          }
      
          const currentQuestion = questions[questionIndex];
          const questionText = document.createElement("h2");
          questionText.innerText = currentQuestion.question;
          questionContainer.appendChild(questionText);
      
          currentQuestion.options.forEach((option) => {
            const optionLabel = document.createElement("label");
            const optionInput = document.createElement("input");
            optionInput.setAttribute("type", "radio");
            optionInput.setAttribute("name", "answer");
            optionInput.setAttribute("value", option);
            optionLabel.appendChild(optionInput);
            optionLabel.append(` ${option}`);
            questionContainer.appendChild(optionLabel);
          });
      
          const submitButton = document.createElement("button");
          submitButton.innerText = "Submit";
          submitButton.addEventListener("click", () => {
            const selectedOption = document.querySelector('input[name="answer"]:checked');
            if (!selectedOption) {
              alert("Please select an answer");
              return;
            }
      
            const answer = selectedOption.value;
            if (answer === currentQuestion.answer) {
              alert("Correct!");
            } else {
              alert(`Incorrect. The correct answer is ${currentQuestion.answer}`);
            }
      
            questionIndex++;
            showNextQuestion();
          });
      
          questionContainer.appendChild(submitButton);
        }
      
        showNextQuestion();
      }
//     }
// }

      showQuestions(questions);